<template>
  <div
    class="overlay absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center"
  >
    <div
      class="bg-white dark:bg-gray-800 overflow-y-scroll rounded-md text-black dark:text-white w-3/4 h-3/4 "
    >
      <div
        class="sticky bg-white dark:bg-gray-800 dark:bg-dark w-full p-4 py-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-600"
      >
        <h1 class="text-2xl font-semibold text-left ">
          Select one of your Google Classroom courses
        </h1>
        <button
          @click="$emit('closeDialog')"
          class="text-blue-500 mr-2 border-none hover:bg-opacity-75 py-2 px-2 rounded-full  dark:hover:bg-gray-600 hover:bg-gray-200"
        >
          <x-icon size="1.5x"></x-icon>
        </button>
      </div>
      <div class="p-2">
        <button
          @click="addGClassroomCourseToCheckit(gCourse)"
          class="w-full my-4 flex flex-col justify-start items-start hover:bg-gray-200 dark:hover:bg-gray-600 p-2 text-left cursor-pointer rounded-lg"
          v-for="gCourse in gClassroomCourses"
          :key="gCourse.id"
        >
          <div>
            <h6 class="font-semibold text-lg">{{ gCourse.name }}</h6>
            <p class="font-light text-gray-700 dark:text-gray-200">
              {{ gCourse.descriptionHeading }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { XIcon } from "vue-feather-icons";

export default {
  props: {
    gClassroomCourses: {
      type: Array,
    },
  },
  components: {
    XIcon,
  },
  methods: {
    async addGClassroomCourseToCheckit(gCourse) {
      let res = await axios.post(
        "http://localhost:3000/course",
        {
          name: gCourse.name,
          descriptionHeading: gCourse.descriptionHeading,
          id: gCourse.id,
          alternateLink: gCourse.alternateLink,
          courseState: gCourse.courseState,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      console.log(res);
      this.$emit("closeDialog");
    },
  },
};
</script>

<style scoped>
.overlay {
  background-color: rgba(20, 20, 20, 0.6);
}
</style>
