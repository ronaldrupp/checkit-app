<template>
  <div>
    <div
      v-for="(result, idx) in dataFromAPI"
      :key="idx"
      class="flex flex-col border rounded-md m-5 p-5 border-b transition duration-100 dark:border-gray-800 "
    >
      <p class="text-lg font-semibold mb-4">{{ result.question }}</p>
      <div class="flex flex-wrap items-center justify-around">
        <Charts :result="result" class="md:w-min w-full self-center" />
        <div>
          <p
            class="mb-4 text-lg"
            v-for="(answers, idx) in result.answer"
            :key="idx"
          >
            {{ (answers.percent * 100).toFixed(0) }} % der Befragten antworteten
            mit: {{ answers.option }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Charts from "@/components/Charts.vue";
export default {
  components: {
    Charts,
  },
  data() {
    return {
      dataFromAPI: [],
    };
  },
  props: {
    feedback: {
      type: Object,
    },
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
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.custom {
  width: 16em;
}
</style>
