<template>
  <div class="flex flex-col">
    <Header title="Create Feedback" />
    <div class="flex flex-grow justify-center items-center">
      <div class="flex w-2/5 h-2/5 bg-white m-6">
        <router-link class="flex-grow" to="/create/swipe"></router-link>
      </div>
      <div class="flex w-2/5 h-2/5 bg-white m-6">
        <router-link class="flex-grow" to="/create/classic"></router-link>
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
};
</script>

<style lang="scss" scoped></style>
