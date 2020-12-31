<template>
  <div class="overflow-y-scroll">
    <div class="flex flex-col">
      <Header
        :title="this.$t('header.createFeedback')"
        :BtnMethod="addNewQuestion"
      >
        <PlusIcon
      /></Header>
      <CreateFeedbackHeader :data="data" />
      <CreateFeedbackInput
        v-for="arr of data.questions"
        :key="arr.id"
        :questions="arr"
        @delQuestion="delQuestion"
      />
      <div class="flex w-full justify-center">
        <button
          class="customButton w-40 my-1 hover:bg-opacity-75 text-white py-2 px-4 rounded-full mt-14 mb-20"
          @click="saveFeedback"
        >
          {{ $t("create.createBtn") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import CreateFeedbackInput from "@/components/CreateFeedbackInput.vue";
import CreateFeedbackHeader from "@/components/CreateFeedbackHeader.vue";
import { PlusIcon } from "vue-feather-icons";
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
      data: {
        id: 0,
        creator_id: 0,
        data_created: "2020-10-14T09:48:33.273509",
        date_survey: "2020-10-14T09:48:33.273509",
        questions: [
          {
            id: 1,
            survey_id: 0,
            question: "",
            answers: ["", ""],
          },
        ],
        name: "",
        isMultipleChoice: false,
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
      this.QuestionCount += 1;
      let newObj = {
        id: this.QuestionCount,
        survey_id: 0,
        question: "",
        answers: ["", ""],
      };
      this.data.questions.push(newObj);
      console.log(this.QuestionCount);
      console.log(this.data.questions);
    },
    saveFeedback() {
      alert("In Progress...");
    },
    delQuestion(question) {
      this.data.questions = this.data.questions.filter(
        (elm) => elm.id != question.id
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
