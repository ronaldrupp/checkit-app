<template>
  <div class="overflow-y-scroll pb-20">
    <div class="flex flex-col">
      <Header :back="true" :title="$route.params.feedback"></Header>
      <FeedbackDetailComp />
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import FeedbackDetailComp from '@/components/FeedbackDetailComp.vue';
export default {
  components: {
    Header,
    FeedbackDetailComp
  },
  data() {
    return {
      
    };
  },
};
</script>

<style lang="scss" scoped></style>
