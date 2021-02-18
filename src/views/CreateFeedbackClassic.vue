<template>
  <div class="overflow-y-scroll pb-20 md:border-r md:dark:border-gray-700">
    <div class="flex flex-col ">
      <Header
        :title="this.$t('header.createFeedback')"
        back
        :BtnMethod1="deleteFeedback"
        :BtnMethod2="saveFeedback"
        :BtnMethod3="postFeedback"
      >
        <template v-slot:btn1 v-if="id">
          <trash-icon size="1.5x" class="custom-class"></trash-icon>
        </template>
        <template v-slot:btn2>
          <save-icon size="1.5x" class="custom-class"></save-icon>
        </template>
        <template v-slot:btn3>
          <send-icon size="1.5x" />
        </template>
      </Header>
      <div class="flex items-center px-4 py-8">
        <div class="flex flex-col w-full">
          <input
            class="bg-transparent w-full outline-none dark:text-white dark:placeholder-white text-3xl font-bold rounded-md p-1 placeholder-gray-800 placeholder-opacity-75"
            type="text"
            :placeholder="$t('create.titleFeedback')"
            v-model="name"
          />
          <input
            class="bg-transparent w-full outline-none dark:text-white dark:placeholder-white text-base font-medium rounded-md p-1 placeholder-gray-800 placeholder-opacity-75"
            type="text"
            :placeholder="$t('create.descriptionFeedback')"
            v-model="description"
          />
        </div>
      </div>
      <selectCourseDialog
        v-if="showCoursesDialog"
        :gClassroomCourses="courses"
        @closeDialog="showCoursesDialog = false"
        @selected-course="setSelectedCourse"
      />
      <CreateFeedbackInput
        v-for="arr of questions"
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
import selectCourseDialog from "@/components/selectCourseDialog.vue";
import CreateFeedbackInput from "@/components/CreateFeedbackInput.vue";
import { SendIcon, SaveIcon, PlusIcon, TrashIcon } from "vue-feather-icons";
import axios from "axios";

export default {
  components: {
    Header,
    CreateFeedbackInput,
    SendIcon,
    selectCourseDialog,
    SaveIcon,
    PlusIcon,
    TrashIcon,
  },
  data() {
    return {
      QuestionCount: 1,
      showCoursesDialog: false,
      selectedCourse: {},
      id: "",
      name: "",
      questions: [
        {
          survey_id: 0,
          question: "",
          answers: [
            { id: 0, choice: "", votes: 0 },
            { id: 1, choice: "", votes: 0 },
          ],
        },
      ],
      description: "",
    };
  },
  metaInfo() {
    return {
      title: "Create Feedback",
    };
  },
  created() {
    this.$route.query.feedbackdraft && this.getFeedbackDraft();
  },
  methods: {
    async deleteFeedback() {
      let res = await axios.delete(
        `${process.env.VUE_APP_API_URL}/feedbackdraft/${this.$route.query.feedbackdraft}`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      console.log(res)
      this.$router.replace({ path: `/savedfeedbacks` });
    },
    async getFeedbackDraft() {
      let res = await axios.get(
        `${process.env.VUE_APP_API_URL}/feedbackdraft/${this.$route.query.feedbackdraft}`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      this.id = res.data._id;
      this.name = res.data.name;
      this.questions = res.data.questions;
      this.description = res.data.description;
    },
    addNewQuestion() {
      this.questions.push({
        survey_id: this.questions.length,
        question: "",
        answers: [
          { id: 0, choice: "", votes: 0 },
          { id: 1, choice: "", votes: 0 },
        ],
      });
      setTimeout(
        () =>
          this.$refs.addNewQuestionRef.scrollIntoView({ behavior: "smooth" }),
        10
      );
    },
    async setSelectedCourse(value) {
      this.selectedCourse = value;
      let res = await axios.post(
        `${process.env.VUE_APP_API_URL}/survey`,
        {
          _id: this.id,
          name: this.name,
          description: this.description,
          createdAt: new Date(),
          isMultipleChoice: true,
          questions: this.questions,
          teacherId: this.$store.state.user._id,
          courseId: this.selectedCourse._id,
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      console.log(res.data);
      this.$router.push({ path: `/class/${res.data.courseId}` });
    },

    async postFeedback() {
      this.showCoursesDialog = true;
    },
    async saveFeedback() {
      if (this.id) {
        let res = await axios.put(
          `${process.env.VUE_APP_API_URL}/feedbackdraft`,
          {
            _id: this.id,
            name: this.name,
            description: this.description,
            createdAt: new Date(),
            isMultipleChoice: true,
            questions: this.questions,
            teacherId: this.$store.state.user._id,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
            },
          }
        );
        console.log(res.data);
      } else {
        let res = await axios.post(
          `${process.env.VUE_APP_API_URL}/feedbackdraft`,
          {
            name: this.name,
            description: this.description,
            createdAt: new Date(),
            isMultipleChoice: true,
            questions: this.questions,
            teacherId: this.$store.state.user._id,
          },
          {
            headers: {
              Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
            },
          }
        );
        console.log(res.data);
      }
      this.$router.push({ path: `/savedfeedbacks` });
    },
    addChoice(value) {
      if (this.questions[value.survey_id].answers.length < 4) {
        this.questions[value.survey_id].answers.push({
          id: this.questions[value.survey_id].answers.length,
          choice: "",
          votes: 0
        });
      }
    },
    delQuestion(question) {
      this.questions = this.questions.filter(
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
