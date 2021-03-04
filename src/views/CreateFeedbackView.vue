<template>
  <div class="flex flex-col md:border-r md:dark:border-gray-700">
    <Header :title="this.$t('header.createFeedback')" />
    <div class="flex flex-col md:flex-row md:justify-center md:items-center flex-grow p-4">
      <div
        class=" flex w-full h-64 md:w-2/5 bg-gray-200 dark:bg-gray-800 rounded-md mt-10 md:mr-10"
      >
        <router-link
          class="w-full h-full flex justify-center items-center"
          to="/create/swipe"
          ><p>SWIPE Q-A</p></router-link
        >
      </div>
      <div
        class=" flex w-full h-64 md:w-2/5 bg-gray-200 dark:bg-gray-800 rounded-md mt-10"
      >
        <router-link
          class="w-full h-full flex justify-center items-center"
          to="/create/classic"
          ><p>CLASSIC Q-A</p></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
export default {
  components: {
    Header,
  },
  metaInfo() {
    return {
      title: "Create Feedback",
    };
  },
};
</script>

<style lang="scss" scoped></style>
