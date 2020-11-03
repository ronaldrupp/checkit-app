<template>
  <div class="home">
    <MyFeedbacksHeader />
  </div>
</template>

<script>
// @ is an alias to /src
import MyFeedbacksHeader from "@/components/MyFeedbacksHeader.vue"
export default {
  name: "Home",
  components: {
    MyFeedbacksHeader
  },
};
</script>

<style>
.home{
}
</style>
