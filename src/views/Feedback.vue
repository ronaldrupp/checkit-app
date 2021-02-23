<template>
  <div
    class="overflow-y-scroll"
    style="scroll-snap-type: y mandatory;max-height: 90vh;"
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
          referrerpolicy="no-referrer"
          :src="`https:${dataFromAPI.teacherPhotoUrl}`"
        />
        <p class="mx-2 text-base ">{{ dataFromAPI.teacherName }}</p>
      </div>
      <h3 class="font-bold text-lg mt-28">{{ dataFromAPI.name }}</h3>
      <p v-if="dataFromAPI.error" class="absolute bottom-0 mb-12">
        You have already answered this survey.
      </p>
      <chevrons-down-icon
        v-else
        @click="$refs.questionRef[0].scrollIntoView({ behavior: 'smooth' })"
        class="chevrons-down absolute bottom-0 mb-12 cursor-pointer"
        size="2x"
      ></chevrons-down-icon>
    </div>
    <div
      v-for="(questionObj, index) in dataFromAPI.questions"
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
          class="radio bg-gray-200 dark:bg-gray-800 mt-4 w-full flex"
          v-for="answerObj in questionObj.answers"
          :key="answerObj.id"
          @click="scrollToNextQuestion(index)"
        >
          <input
            type="radio"
            :name="answerObj.choice"
            :value="{
              question: questionObj.question,
              answer: answerObj.choice,
            }"
            v-model="answeredSurvey[index]"
          />
          <span class="dark:text-white">{{ answerObj.choice }}</span>
        </label>
        <div class="flex w-full justify-start py-3 dark:text-gray-400">
          <shield-icon size="1.25x"></shield-icon>
          <p class=" ml-2 text-sm">
            {{ dataFromAPI.teacherName }} kann deine Antwort nicht sehen
          </p>
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
            referrerpolicy="no-referrer"
            :src="`https:${dataFromAPI.teacherPhotoUrl}`"
          />
          <p class="ml-2">{{ dataFromAPI.teacherName }}</p>
        </div>
        <button
          v-if="!disableBtn"
          @click="postAnsweredSurvey"
          :disabled="disableBtn"
          class="mt-20 px-20 py-4 rounded-md bg-blue-500 text-white font-semibold dark:bg-gray-800"
        >
          Abschicken
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ChevronsDownIcon, ShieldIcon } from "vue-feather-icons";

// import FeedbackHeader from "@/components/FeedbackHeader.vue";
// import FeedbackItem from "@/components/FeedbackItem.vue";
// import FeedbackCompleted from "@/components/FeedbackCompleted.vue";
// import FeedbackItemTinder from "@/components/FeedbackItem_Tinder.vue";

export default {
  data() {
    return {
      questionIndex: 0,
      dataFromAPI: {},
      answeredSurvey: [],
      disableBtn: false,
    };
  },
  components: {
    // FeedbackItem,
    // FeedbackCompleted,
    // FeedbackHeader,
    // FeedbackItemTinder
    ChevronsDownIcon,
    ShieldIcon,
  },
  created() {
    this.getFeedback();
  },
  methods: {
    async getFeedback() {
      let res = await axios.get(
        `${process.env.VUE_APP_API_URL}/survey/${this.$route.params.courseId}/${this.$route.params.surveyId}`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      this.dataFromAPI = res.data;
    },
    handleIncoming(value) {
      this.answers.push(value);
      this.questionIndex++;
    },
    scrollToNextQuestion(index) {
      if (this.dataFromAPI.questions.length != index + 1) {
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
      setTimeout(() => {
        this.$confetti.stop();
      }, 2500);
    },
    async postAnsweredSurvey() {
      let res = await axios.post(
        `${process.env.VUE_APP_API_URL}/answerSurvey`,
        { surveyId: this.$route.params.surveyId, answers: this.answeredSurvey },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      console.log(res);
      this.letItRain();
      this.disableBtn = true;
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
