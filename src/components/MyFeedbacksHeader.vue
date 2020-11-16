<template>
  <div class="w-full flex items-center justify-between p-2 border-b">
    <h3 class="font-bold text-xl">My Feedbacks</h3>
    <router-link
      class="border-none bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full"
      to="/foo"
      tag="button"
    >
      <PlusIcon class="md:hidden block" stroke-width="3"></PlusIcon>
      <span class="hidden md:block"> Create new feedback </span>
    </router-link>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
export default {
  components: {
    PlusIcon,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
