<template>
  <div class="overflow-y-scroll pb-20">
    <div class="flex flex-col md:border-r md:dark:border-gray-700">
      <Header :back="true" :title="dataFromAPI.name"></Header>
      <div class="m-5">
      <h1 class="text-3xl font-bold">{{ dataFromAPI.name }}</h1>
      <p class="mt-2">{{ dataFromAPI.createdAt | formatDate }}</p>
      <h2 class="mt-5">{{ dataFromAPI.description }}</h2>
      </div>
      <FeedbackDetailComp :feedback="dataFromAPI.questions" />
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import axios from "axios";
import FeedbackDetailComp from "@/components/FeedbackDetailComp.vue";
import dayjs from "dayjs";
export default {
  components: {
    Header,
    FeedbackDetailComp,
  },
  filters: {
    formatDate: function(value) {
      return dayjs(value)
        .locale(navigator.language)
        .format("dd DD. MMMM YYYY HH:mm");
    },
  },
  data() {
    return {
      dataFromAPI: {},
    };
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
      this.dataFromAPI = apiRes.data;
    },
  },
};
</script>

<style lang="scss" scoped></style>
