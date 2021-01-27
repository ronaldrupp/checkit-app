<template>
  <div class="flex w-full md:h-full  flex-col md:dark:border-gray-700">
    <Header :title="$t('header.myClass')" :BtnMethod="isTeacher"
      ><plus-icon
    /></Header>
    <GClassroomCoursesDialog
      v-if="showGCoursesDialog"
      :gClassroomCourses="gClassroomCourses"
      @closeDialog="closeDialog"
    />
    <div class="flex flex-col" v-if="!(courses.length == 0)">
      <router-link
        :to="`/class/${course._id}`"
        class="w-full px-3 border-b dark:border-gray-600 py-6 hover:bg-gray-100 dark:hover:bg-gray-800"
        v-for="course in courses"
        :key="course._id"
      >
        <h1 class="text-base md:text-2xl lg:text-3xl font-bold">
          {{ course.name }}
        </h1>
        <div class="flex mt-4 overflow-x-scroll">
          <div class="flex">
            <div class="border-r pr-4 dark:border-gray-600">
              <img
                class="object-cover rounded-full w-6 h-6"
                :src="`https:${course.teacherPhotoUrl}`"
              />
            </div>
          </div>
          <div class="flex ml-4 ">
            <div
              class="-mr-1"
              v-for="student in course.students"
              :key="student.userId"
            >
              <img
                class="object-cover rounded-full w-6 h-6"
                :src="`https:${student.profile.photoUrl}`"
              />
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <p v-else-if="courses.length == 0">You don't have any courses</p>
    <p v-else>
      An error occured. Go inspect the console.
    </p>
  </div>
</template>

<script>
import Header from "./Header";
import GClassroomCoursesDialog from "./GClassroomCoursesDialog";
import axios from "axios";
import { sharedElementMixin } from "v-shared-element";
import { PlusIcon } from "vue-feather-icons";
export default {
  mixins: [sharedElementMixin],
  components: {
    Header,
    PlusIcon,
    GClassroomCoursesDialog,
  },
  data() {
    return {
      showGCoursesDialog: false,
      gClassroomCourses: [],
      courses: [],
    };
  },
  methods: {
    async addNewClass() {
      this.showGCoursesDialog = true;
      let res = await axios.get(`${process.env.VUE_APP_API_URL}/allCourses`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
        },
      });
      console.log(res.data);
      this.gClassroomCourses = res.data;
    },
    closeDialog() {
      this.showGCoursesDialog = false;
      this.getCourses();
    },
    async getCourses() {
      let res = await axios.get(`${process.env.VUE_APP_API_URL}/courses`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
        },
      });
      this.courses = res.data;
    },
  },
  created() {
    this.getCourses();
  },
  computed: {
    isTeacher() {
      if (this.$store.state.user.isTeacher) return this.addNewClass;
      else return undefined;
    },
  },
};
</script>

<style lang="scss" scoped>
.overflow-x-scroll{
  overflow-x: hiddenv;
}


</style>
