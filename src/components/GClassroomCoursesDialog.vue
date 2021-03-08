<template>
  <div>
    <div
      class="hidden overlay-background absolute top-0 left-0 w-full h-full z-50"
      @click="$emit('closeDialog')"
    ></div>

    <div
      class="hidden overlay flex-col absolute m-auto z-50  left-0 right-0 bottom-0 top-0 bg-white dark:bg-gray-800 md:rounded-md text-black dark:text-white md:w-3/4 md:h-3/4 overflow-hidden"
    >
      <div
        class="sticky bg-white  dark:bg-gray-800 dark:bg-dark w-full p-2 py-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-600"
      >
        <h1 class="text-lg md:text-2xl font-semibold text-left ">
          Select one of your Google Classroom courses
        </h1>
        <button
          @click="$emit('closeDialog')"
          class="text-blue-500 border-none hover:bg-opacity-75 p-2 rounded-full  dark:hover:bg-gray-800 hover:bg-gray-200"
        >
          <x-icon size="1x"></x-icon>
        </button>
      </div>
      <div class="overflow-y-scroll">
        <button
          @click="addGClassroomCourseToCheckit(gCourse)"
          class="w-full flex flex-col justify-start items-start hover:bg-gray-200 dark:hover:bg-gray-800 p-4 text-left cursor-pointer"
          v-for="gCourse in gClassroomCourses"
          :key="gCourse.id"
        >
          <div>
            <h6 class="font-semibold">{{ gCourse.name }}</h6>
            <p class="font-light text-gray-700 dark:text-gray-200 text-sm">
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
import { gsap } from "gsap";

export default {
  props: {
    gClassroomCourses: {
      type: Array,
    },
    show: Boolean,
  },
  components: {
    XIcon,
  },
  methods: {
    async addGClassroomCourseToCheckit(gCourse) {
      let res = await axios.post(
        `${process.env.VUE_APP_API_URL}/course`,
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
  watch: {
    show() {
      if (this.show) {
        let tl = gsap.timeline();
        tl.to(".overlay", { y: "100vh" }, "group");
        tl.to(
          ".overlay-background",
          {
            opacity: 0,
          },
          "group"
        );
        tl.to(".overlay-background", { css: { display: "block" } }, "group0");
        tl.to(".overlay", { css: { display: "block" } }, "group0");

        tl.to(
          ".overlay-background",
          {
            opacity: 1,
            ease: "expo.easeOut",
            duration: 0.8,
          },
          "group1"
        );
        tl.to(
          ".overlay",
          { y: 0, opacity: 1, ease: "expo.easeOut", duration: 0.8 },
          "group1"
        );
      } else {
        let tl = gsap.timeline();
        //transform background and overlay down
        tl.to(
          ".overlay-background",
          {
            opacity: 0,
            ease: "expo.easeIn",
            duration: 1,
          },
          "group1"
        );
        tl.to(
          ".overlay",
          { y: "100vh", ease: "expo.easeIn", duration: 0.8 },
          "group1"
        );

        //hide background and overlay
        tl.to(".overlay-background", { css: { display: "none" } }, "group2");
        tl.to(".overlay", { css: { display: "none" } }, "group2");
      }
    },
  },
};
</script>

<style scoped>
.overlay-background {
  background-color: rgba(20, 20, 20, 0.6);
}
</style>
