<template>
  <div>
    <Header :back="true" :title="$route.params.feedback"></Header>
    FeedbackDetail
  </div>
</template>

<script>
import Header from "./../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped></style>
