<template>
  <div class="overflow-y-scroll">
    <div class="flex flex-col">
      <Header
        :title="this.$t('header.createFeedback')"
        :BtnMethod="addNewQuestion"
      >
        <PlusIcon
      /></Header>
      <CreateFeedbackHeader />
      <CreateFeedbackInput
        v-for="arr of QA"
        :key="arr.id"
        :QA="arr"
        @delQuestion="delQuestion"
      />
      <div class="flex w-full justify-center">
        <button
          class="customButton w-40 my-1 hover:bg-opacity-75 text-white py-2 px-4 rounded-full mt-14 mb-20"
          @click="saveFeedback"
        >
          {{$t('create.createBtn')}}
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
      QA: [{ id: 1, question: "", answer1: "", answer2: "" }],
      QuestionCount: 1,
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
        question: "",
        answer1: "",
        answer2: "",
      };
      this.QA.push(newObj);
      console.log(this.QuestionCount);
      console.log(this.QA);
    },
    saveFeedback() {
      alert("In Progress...");
    },
    delQuestion(question) {
      this.QuestionCount -= 1;
      this.QA = this.QA.filter((elm) => elm.id != question.id);
    },
  },
};
</script>

<style scoped>
.customButton {
  background-color: #0c8fed;
}
</style>
