<template>
  <div class="overflow-y-scroll pb-20">
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
      <CreateFeedbackInputSwipe
        v-for="arr of questions"
        :key="arr.survey_id"
        :questions="arr"
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
import CreateFeedbackInputSwipe from "@/components/CreateFeedbackInputSwipe.vue";
import { SendIcon, SaveIcon, PlusIcon, TrashIcon } from "vue-feather-icons";
import axios from "axios";

export default {
  components: {
    Header,
    CreateFeedbackInputSwipe,
    PlusIcon,
    selectCourseDialog,
    SaveIcon,
    TrashIcon,
    SendIcon,
  },
  data() {
    return {
      QuestionCount: 1,
      showCoursesDialog: false,
      courses: [],
      selectedCourse: {},
      id:"",
      name: "",
      questions: [
        {
          survey_id: 0,
          question: "",
          answers: [
            { id: 0, choice: "Ja" },
            { id: 1, choice: "Nein" },
            { id: 2, choice: "Vielleicht" },
          ],
        },
      ],
      description: "s",
    };
  },
  metaInfo() {
    return {
      title: "Create Feedback",
    };
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
     async postFeedback() {
      this.showCoursesDialog = true;
    },
    addNewQuestion() {
      this.questions.push({
        survey_id: this.questions.length,
        question: "",
        answers: [
           { id: 0, choice: "Ja" },
           { id: 1, choice: "Nein" },
           { id: 2, choice: "Vielleicht" },
        ],
      });
      setTimeout(
        () =>
          this.$refs.addNewQuestionRef.scrollIntoView({ behavior: "smooth" }),
        10
      );
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
    setSelectedCourse(value) {
      this.selectedCourse = value;
    },
    async getCourses() {
      let res = await axios.get(`${process.env.VUE_APP_API_URL}/courses`, {
        headers: {
          Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
        },
      });
      this.courses = res.data;
    },
    async saveFeedback() {
      let res = await axios.post(
        `${process.env.VUE_APP_API_URL}/survey`,
        {
          name: this.name,
          description: this.description,
          createdAt: new Date(),
          isMultipleChoice: true,
          questions: this.questions,
          teacherId: this.$store.state.user._id,
          courseId: this.selectedCourse._id,
          swipe: true
        },
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      this.$router.push({path: `/class/${this.selectedCourse._id}`})
      console.log(res.data);
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
