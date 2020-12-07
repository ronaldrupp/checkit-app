<template>
  <div class="flex flex-col">
    <Header :title="this.$t('header.createFeedback')" />
    <div class="flex flex-grow justify-center items-center">
      <div class="flex w-2/5 h-2/5 bg-gray-400 dark:bg-white m-6">
        <router-link class="flex-grow" to="/create/swipe">TINDER SWIPE</router-link>
      </div>
      <div class="flex w-2/5 h-2/5 bg-gray-400 dark:bg-white m-6">
        <router-link class="flex-grow" to="/create/classic">CLASSIC Q-A</router-link>
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
      title: 'Create Feedback',
    };
  },
};
</script>

<style lang="scss" scoped></style>
