<template>
  <div class="overflow-y-scroll" style="scroll-snap-type: y mandatory;	">
    <!-- <div
      class=""
      v-if="dataFromAPI.questions.length - 1 >= questionIndex"
    >
      <FeedbackHeader
        :dataFromAPI="dataFromAPI"
        :questionIndex="questionIndex"
      />
      <FeedbackItemTinder
        v-if="questionIndex <= dataFromAPI.questions.length"
        :questions="dataFromAPI.questions"
        @next-quest="handleIncoming"
      />
    </div>
    <FeedbackCompleted v-else :dataFromAPI="dataFromAPI" /> -->
    <div
      class="min-h-screen flex flex-col justify-center items-center"
      style="scroll-snap-align: start;"
    >
      <p>{{ dataFromAPI.name }}</p>
    </div>
    <div
      v-for="question in dataFromAPI.questions"
      :key="question.id"
      style="scroll-snap-align: start;"
      class="h-screen relative"
    >
      <p class="text-2xl">{{ question.question }}</p>
      <div
        class="flex flex-col justify-center items-center absolute bottom-0 mb-6 rounded-md w-full"
      >
        <button
          v-for="answer in question.answers"
          :key="answer"
          class="w-full mt-4 p-2 dark:bg-gray-900"
        >
          {{ answer }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

// import FeedbackHeader from "@/components/FeedbackHeader.vue";
// import FeedbackItem from "@/components/FeedbackItem.vue";
// import FeedbackCompleted from "@/components/FeedbackCompleted.vue";
// import FeedbackItemTinder from "@/components/FeedbackItem_Tinder.vue";

export default {
  data() {
    return {
      questionIndex: 0,
      answers: [],
      dataFromAPI: {
        name: "WEBT",
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
            Tinder: 1
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
            question:
              "Hast du gewusst, dass der Kurz sein Studium abgebrochen hat?",
            answers: ["ja", "naja", "schaut aus wie Sarazar"],
          },
        ],
        creator: {
          name: "Anna Jakobsen",
          photo_url:
            "https://www.myspass.de/myspass/media/images/videos/10/7910_640x360.jpg",
        },
        completedMessage: "Danke fürs Mitmachen, liebe Klasse.",
      },
    };
  },
  components: {
    // FeedbackItem,
    // FeedbackCompleted,
    // FeedbackHeader,
    // FeedbackItemTinder
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

<style scoped></style>
