<template>
  <div
    class="flex w-full md:h-full  flex-col md:border-r md:dark:border-gray-700"
  >
    <Header :title="$t('header.myClass')" :BtnMethod1="isTeacher">
      <template v-slot:btn1> <plus-icon /></template
    ></Header>
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
        <h1 class="text-base md:text-2xl lg:text-2xl font-bold">
          {{ course.name }}
        </h1>
        <div class="flex mt-4">
          <div class="flex border-r pr-4 dark:border-gray-600">
            <img
              v-for="teacher in course.teachers"
              :key="teacher._id"
              class="object-cover rounded-full w-6 h-6 -mr-1"
              referrerpolicy="no-referrer"
              :src="`${teacher.photoUrl}` | checkHttps"
            />
          </div>
          <div class="flex ml-4 ">
            <div
              class="-mr-1"
              v-for="student in course.students"
              :key="student.userId"
            >
              <img
                class="object-cover rounded-full w-6 h-6"
                referrerpolicy="no-referrer"
                :src="`${student.photoUrl}` | checkHttps"
              />
            </div>
          </div>
        </div>
      </router-link>
    </div>
    <p v-else-if="loading">loading...</p>
    <p v-else-if="courses.length == 0">You don't have any courses</p>
    <p v-else>
      An error occured. Go inspect the console.
    </p>
  </div>
</template>

<script>
import Header from "./../components/Header";
import GClassroomCoursesDialog from "./../components/GClassroomCoursesDialog";
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
  metaInfo() {
    return {
      title: this.$t('header.myClass'),
    };
  },
  data() {
    return {
      showGCoursesDialog: false,
      gClassroomCourses: [],
      courses: [],
      loading: false,
    };
  },
  filters: {
    checkHttps: function(value) {
      if (/^(f|ht)tp?s/i.test(value)) {
        return `${value}`;
      } else return `https:${value}`;
    },
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
      this.loading = true;
      let res = await axios.get(`${process.env.VUE_APP_API_URL}/courses`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
        },
      });
      this.courses = res.data;
      this.loading = false;
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
.overflow-x-scroll {
  overflow-x: hiddenv;
}
</style>
