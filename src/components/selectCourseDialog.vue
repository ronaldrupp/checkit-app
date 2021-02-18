<template>
  <div
    class="overlay absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center "
  >
    <div
      class="bg-white dark:bg-gray-900  rounded-md text-black dark:text-white w-3/4 h-3/4 overflow-hidden"
    >
      <div
        class="sticky bg-white  dark:bg-gray-900 w-full p-4 py-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-600"
      >
        <h1 class="text-2xl font-semibold text-left ">
          Select one of your courses
        </h1>
        <button
          @click="$emit('closeDialog')"
          class="text-blue-500 border-none hover:bg-opacity-75 p-2 rounded-full  dark:hover:bg-gray-600 hover:bg-gray-200"
        >
          <x-icon size="1x"></x-icon>
        </button>
      </div>
      <div class="overflow-y-scroll">
        <button
          @click="
            $emit('selected-course', gCourse);
            $emit('closeDialog');
          "
          class="w-full flex flex-col justify-start items-start hover:bg-gray-200 dark:hover:bg-gray-600 p-4 text-left cursor-pointer"
          v-for="gCourse in gClassroomCourses"
          :key="gCourse.id"
        >
          <h6 class="font-semibold text-lg">{{ gCourse.name }}</h6>
          <p class="font-light text-gray-700 dark:text-gray-200">
            {{ gCourse.descriptionHeading }}
          </p>
        </button>
        <router-link to="/class" class="w-full flex justify-center py-4">
          <span class="text-gray-600"
            >Don't see your course? Import it here.</span
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "vue-feather-icons";
import axios from "axios";
export default {
  data() {
    return {
      gClassroomCourses: []
    }
  },
  components: {
    XIcon,
  },
  created () {
    this.getCourses();
  },
  methods: {
    async getCourses() {
      let res = await axios.get(`${process.env.VUE_APP_API_URL}/courses`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
        },
      });
      this.gClassroomCourses = res.data;
    },
  },
};
</script>

<style scoped>
.overlay {
  background-color: rgba(20, 20, 20, 0.6);
}
</style>
