<template>
  <div>
    <div
      class="feedback"
      v-if="dataFromAPI.questions.length - 1 >= questionIndex"
    >
      <FeedbackHeader
        :dataFromAPI="dataFromAPI"
        :questionIndex="questionIndex"
      />
      <FeedbackItem
        v-if="questionIndex <= dataFromAPI.questions.length"
        :question="dataFromAPI.questions[questionIndex]"
        @next-quest="handleIncoming"
        style=""
      />
    </div>
    <FeedbackCompleted v-else :creator="dataFromAPI.creator" />
  </div>
</template>

<script>
import axios from "axios";

import FeedbackHeader from "@/components/FeedbackHeader.vue";
import FeedbackItem from "@/components/FeedbackItem.vue";
import FeedbackCompleted from "@/components/FeedbackCompleted.vue";

export default {
  data() {
    return {
      questionIndex: 0,
      answers: [],
      dataFromAPI: {
        id: 10,
        creator_id: 1,
        date_created: "2020-10-14T09:48:33.273509",
        date_survey: "2020-10-14T09:48:45.328941",
        questions: [
          {
            id: 14,
            survey_id: 10,
            question: "Wie fandest du heute den Unterricht? ",
            answers: ["gut", "schlecht"],
          },
          {
            id: 15,
            survey_id: 10,
            question: "Was willst du das nächste Mal machen?",
            answers: ["nichts.", "auch nichts"],
          },
          {
            id: 13,
            survey_id: 10,
            question: "Magst du Corona?",
            answers: ["ja", "naja", "lästig"],
          },
          {
            id: 2,
            survey_id: 10,
            question: "Hast du gewusst, dass der Kurz sein Studium abgebrochen hat?",
            answers: ["ja", "naja", "schaut aus wie Sarazar"],
          },
        ],
        creator: {
          name: "Anna Jakobsen",
        },
      },
    };
  },
  components: {
    FeedbackItem,
    FeedbackCompleted,
    FeedbackHeader,
  },
  created() {
    this.getFeedback();
  },
  methods: {
    async getFeedback() {
      let res = await axios.get(
        `${process.env.VUE_APP_API_URL}/survey/${this.$route.params.id}`
      );
      console.log(res);
    },
    handleIncoming(value) {
      this.answers.push(value);
      this.questionIndex++;
    },
  },
};
</script>

<style scoped>
.feedback {
  margin: 1rem;
}
</style>
