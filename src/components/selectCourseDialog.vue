<template>
  <div
    class="overlay absolute top-0 left-0 w-full h-full z-50 flex justify-center items-center"
  >
    <div
      class="bg-white dark:bg-gray-700 overflow-y-scroll rounded-md text-black dark:text-white w-3/4 h-3/4 "
    >
      <div class="sticky bg-white dark:bg-gray-700 dark:bg-dark w-full p-4">
        <h1 class="text-lg font-semibold text-center ">
          All your Google Classroom Courses
        </h1>
      </div>
      <div class="p-2">
        <button
          @click="
            $emit('selected-course', gCourse);
            $emit('closeDialog');
          "
          class="w-full my-4 flex flex-col justify-start items-center hover:bg-gray-200 dark:hover:bg-gray-600 p-2 text-left cursor-pointer rounded-lg"
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
export default {
  props: {
    gClassroomCourses: {
      type: Array,
    },
  },
};
</script>
