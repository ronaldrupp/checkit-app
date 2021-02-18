<template>
  <div class="md:border-r md:dark:border-gray-700">
    <Header :back="true" :title="$route.params.feedback"></Header>
    FeedbackDetail
  </div>
</template>

<script>
import Header from "./../components/Header";
import axios from "axios";

export default {
  components: {
    Header,
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const apiRes = await axios.get(
        `${process.env.VUE_APP_API_URL}/surveydetail/${this.$route.params.feedback}`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      console.log(apiRes.data);
    },
  },
};
</script>

<style lang="scss" scoped></style>
