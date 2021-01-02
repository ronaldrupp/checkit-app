<template>
  <div
    class="overflow-y-scroll"
    style="scroll-snap-type: y mandatory;max-height: 100vh;"
  >
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
    <div class="viewSection relative flex flex-col justify-center items-center">
      <div class="flex flex-col items-center">
        <img
          class="w-28 h-28 rounded-full object-cover mb-6"
          src="https://secure.static.tumblr.com/2025952054881ee732125c9a591923b1/x0nppqd/wOhn8tpv4/tumblr_static_tumblr_static__640.jpg"
        />
        <p class="mx-2 text-base ">mrs puff</p>
      </div>
      <h3 class="font-bold text-lg mt-28">WEBT: Unterricht vom 15.10.2020</h3>
      <chevrons-down-icon
        @click="$refs.questionRef[0].scrollIntoView({ behavior: 'smooth' })"
        class="chevrons-down absolute bottom-0 mb-12 cursor-pointer"
        size="2x"
      ></chevrons-down-icon>
    </div>
    <div
      v-for="(questionObj, index) in dataFromAPI"
      :key="questionObj.id"
      class="relative viewSection"
      :ref="`questionRef`"
    >
      <p class="p-5 pt-12 text-3xl font-bold max-width">
        {{ questionObj.question }}
      </p>
      <div
        class="flex p-5 pb-0 flex-col justify-center items-center absolute bottom-0 rounded-md w-full"
      >
        <!-- <button
          v-for="answer in question.answers"
          :key="answer"
          @click="scrollToNextQuestion(index)"
          class="outline-none w-full mt-4 p-4 rounded-md dark:bg-gray-900 bg-gray-200"
        >
          {{ answer }}
        </button> -->
        <label
          class="radio bg-gray-200 dark:bg-gray-900 mt-4 w-full flex"
          v-for="answerObj in questionObj.answers"
          :key="answerObj.id"
          @click="scrollToNextQuestion(index)"
        >
          <input
            type="radio"
            :name="answerObj.answer"
            :value="{
              id: questionObj.survey_id,
              user_id: 19,
              question_id: questionObj.id,
              answer_id: answerObj.id,
            }"
            v-model="answeredSurvey[index]"
          />
          <span class="dark:text-white">{{ answerObj.answer }}</span>
        </label>
        <div class="flex w-full justify-start py-3 dark:text-gray-400">
          <alert-circle-icon size="1.25x"></alert-circle-icon>
          <p class=" ml-2 text-sm">Deine Antwort ist anonym</p>
        </div>
      </div>
    </div>
    <div
      class="viewSection relative flex flex-col justify-center items-center"
      ref="completedContainer"
    >
      <div class="flex w-full flex-col justify-center items-center">
        <h1 class="text-6xl my-12">🥳</h1>
        <h3 class="text-xl font-bold text-center">
          fertig
        </h3>
        <div class="flex items-center mt-6">
          <img
            class="rounded-full w-12 h-12 object-cover"
            src="https://secure.static.tumblr.com/2025952054881ee732125c9a591923b1/x0nppqd/wOhn8tpv4/tumblr_static_tumblr_static__640.jpg"
          />
          <p class="ml-2">mrs puff</p>
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
import { ChevronsDownIcon, AlertCircleIcon } from "vue-feather-icons";

// import FeedbackHeader from "@/components/FeedbackHeader.vue";
// import FeedbackItem from "@/components/FeedbackItem.vue";
// import FeedbackCompleted from "@/components/FeedbackCompleted.vue";
// import FeedbackItemTinder from "@/components/FeedbackItem_Tinder.vue";

export default {
  data() {
    return {
      questionIndex: 0,
      answers: [],
      dataFromAPI: [
        {
          id: 0,
          survey_id: 43,
          question: "Wie hat dir heute mein Unterricht gefallen?",
          answers: [
            {
              id: 0,
              answer: "gut",
            },
            {
              id: 1,
              answer: "hätte besser sein können",
            },
            {
              id: 2,
              answer: "hat mir überhaupt nicht gefallen",
            },
          ],
        },
        {
          id: 2,
          survey_id: 43,
          question: "Hast du das heutige Thema verstanden?",
          answers: [
            {
              id: 0,
              answer: "ja",
            },
            {
              id: 1,
              answer: "geht so",
            },
            {
              id: 2,
              answer: "überhaupt nicht",
            },
          ],
        },
        {
          id: 3,
          survey_id: 43,
          question:
            "Soll wir das heutige Thema in der nächsten Stunde wiederholen?",
          answers: [
            {
              id: 0,
              answer: "ja",
            },
            {
              id: 1,
              answer: "nein",
            },
          ],
        },
      ],
      answeredSurvey: [],
    };
  },
  components: {
    // FeedbackItem,
    // FeedbackCompleted,
    // FeedbackHeader,
    // FeedbackItemTinder
    ChevronsDownIcon,
    AlertCircleIcon,
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
    scrollToNextQuestion(index) {
      if (this.dataFromAPI.length != index + 1) {
        this.$refs.questionRef[index + 1].scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      } else {
        this.$refs.completedContainer.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        this.letItRain();
      }
    },
    letItRain() {
      this.$confetti.start({
        defaultSize: 5,
        windSpeedMax: 0,
        particles: [
          {
            type: "rect",
          },
        ],
      });
      setTimeout(() => this.$confetti.stop(), 2500);
    },
    async postAnsweredSurvey() {
      let res = axios.post(
        `${process.env.VUE_APP_API_URL}/Survey/${this.answeredSurvey.id}/answer`,
        { headers: { Authorization: `Bearer ${this.state.token.aT}` } },
        this.answeredSurvey
      );
      console.log(res);
    },
  },
};
</script>

<style scoped>
.viewSection {
  max-width: 450px;
  margin: 30px auto;
  scroll-snap-align: center;
  height: 100%;
}

.max-width {
  max-width: 70%;
}

label.radio {
  cursor: pointer;
}
label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
}
label.radio span {
  width: 100%;
  border: 2px solid transparent;
  border-radius: 3px;
  padding: 1rem;
}
label.radio input:checked + span {
  border-color: #2d65ff;
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
