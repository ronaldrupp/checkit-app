<template>
  <div class="overflow-y-scroll" style="scroll-snap-type: y mandatory;">
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
      class="viewSection min-h-screen relative flex flex-col justify-center items-center"
      style="scroll-snap-align: start;"
    >
      <div class="flex flex-col items-center">
        <img
          class="w-28 h-28 rounded-full object-cover mb-6"
          :src="dataFromAPI.creator.photo_url"
        />
        <p class="mx-2 text-base">{{ dataFromAPI.creator.name }}</p>
      </div>
      <h3 class="font-bold text-lg mt-28">WEBT: Unterricht vom 15.10.2020</h3>
      <chevrons-down-icon
        class="chevrons-down absolute bottom-0 mb-12" size="2x"
      ></chevrons-down-icon>
    </div>
    <div
      v-for="question in dataFromAPI.questions"
      :key="question.id"
      style="scroll-snap-align: start;"
      class="h-screen relative viewSection"
    >
      <p class="p-5 pt-12 text-3xl font-bold">{{ question.question }}</p>
      <div
        class="flex p-5 flex-col justify-center items-center absolute bottom-0 mb-6 rounded-md w-full"
      >
        <button
          v-for="answer in question.answers"
          :key="answer"
          class="outline-none w-full mt-4 p-4 rounded-md dark:bg-gray-900 bg-gray-200"
        >
          {{ answer }}
        </button>
      </div>
    </div>
    <div
      class="min-h-screen relative flex flex-col justify-center items-center"
      style="scroll-snap-align: start;"
    >
      <div class="flex w-full h-full flex-col justify-center items-center">
        <h1 class="text-6xl my-12">🥳</h1>
        <h3 class="text-xl font-bold text-center">
          {{ dataFromAPI.completedMessage }}
        </h3>
        <div class="flex items-center mt-6">
          <img
            class="rounded-full w-12 h-12 object-cover"
            :src="dataFromAPI.creator.photo_url"
          />
          <p class="ml-2">{{ dataFromAPI.creator.name }}</p>
        </div>
        <div class="flex items-center flex-col mt-20">
          <p>Feedback powered by</p>
          <a href="https://noname.jetzt">
            <svg class="w-8 mt-6" src="@/assets/logo_black.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ChevronsDownIcon } from "vue-feather-icons";

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
            Tinder: 1,
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
    ChevronsDownIcon,
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
.viewSection{
  max-width: 450px;
  margin: 0px auto;
}

.chevrons-down {
  animation: updown 2s infinite;
}

@keyframes updown {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
