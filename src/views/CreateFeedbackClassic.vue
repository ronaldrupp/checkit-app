<template>
  <div class="overflow-y-scroll pb-20">
    <div class="flex flex-col ">
      <Header
        :title="this.$t('header.createFeedback')"
        back
        :BtnMethod="saveFeedback"
      >
        <!-- <PlusIcon
      /> -->
        <p>Posten</p></Header
      >
      <CreateFeedbackHeader :data="newSurvey" />
      <CreateFeedbackInput
        v-for="arr of newSurvey.questions"
        :key="arr.survey_id"
        :questions="arr"
        @addChoice="addChoice"
        @delQuestion="delQuestion"
      />
    </div>
    <div class="flex w-full justify-center">
      <button
        class="outline-none border my-2 p-3 rounded-md"
        @click="addNewQuestion"
      >
        <plus-icon></plus-icon>
      </button>
    </div>
    <div ref="addNewQuestionRef"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CreateFeedbackInput from "@/components/CreateFeedbackInput.vue";
import CreateFeedbackHeader from "@/components/CreateFeedbackHeader.vue";
import { PlusIcon } from "vue-feather-icons";
import axios from "axios";

export default {
  components: {
    Header,
    CreateFeedbackInput,
    PlusIcon,
    CreateFeedbackHeader,
  },
  data() {
    return {
      QuestionCount: 1,
      newSurvey: {
        creator_id: 0,
        data_created: new Date(),
        date_survey: "2020-10-14T09:48:33.273509",
        questions: [
          {
            survey_id: 0,
            question: "",
            answers: [
              { id: 0, choice: "" },
              { id: 1, choice: "" },
            ],
          },
        ],
        name: "",
        isMultipleChoice: true,
      },
    };
  },
  metaInfo() {
    return {
      title: "Create Feedback",
    };
  },
  methods: {
    addNewQuestion() {
      this.newSurvey.questions.push({
        survey_id: this.newSurvey.questions.length,
        question: "",
        answers: [
          { id: 0, choice: "" },
          { id: 1, choice: "" },
        ],
      });
      setTimeout(
        () =>
          this.$refs.addNewQuestionRef.scrollIntoView({ behavior: "smooth" }),
        10
      );
    },
    async saveFeedback() {
      let res = await axios.post(
        `${process.env.VUE_APP_API_URL}/Survey`,
        this.newSurvey,
        { headers: { Authorization: `Bearer ${this.$store.state.token.aT}` } }
      );
      console.log(this.newSurvey)
      console.log(res);
    },
    addChoice(value) {
      console.log(value.survey_id);
      this.newSurvey.questions[value.survey_id].answers.push({
        id: this.newSurvey.questions[value.survey_id].answers.length,
        choice: "",
      });
    },
    delQuestion(question) {
      this.newSurvey.questions = this.newSurvey.questions.filter(
        (elm) => elm.survey_id != question.survey_id
      );
    },
  },
};
</script>

<style scoped>
.customButton {
  background-color: #0c8fed;
}
</style>
