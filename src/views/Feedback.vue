com<template>
  <div class="container">
    <div class="header">
      <div class="progress-container">
        <div
          class="progress-bar"
          :class="{
            completed: questionIndex >= index,
            'not-completed': questionIndex <= index,
          }"
          v-for="(quest, index) in dataFromAPI.questions"
          :key="quest.id"
        ></div>
      </div>
      <h3 style="margin: 0px">WEBT: Unterricht vom 15.10.2020</h3>
      <div class="creator">
        <img
          class="profile-img"
          src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
        />
        <p style="margin-left: 0.5rem">Elon Musk</p>
      </div>
    </div>
    <FeedbackItem
      :question="dataFromAPI.questions[questionIndex]"
      @next-quest="questionIndex++"
    />
  </div>
</template>

<script>
import axios from "axios";
import FeedbackItem from "@/components/FeedbackItem.vue";
export default {
  data() {
    return {
      questionIndex: 0,
      dataFromAPI: {
        id: 10,
        creator_id: 1,
        date_created: "2020-10-14T09:48:33.273509",
        date_survey: "2020-10-14T09:48:45.328941",
        questions: [
          {
            id: 14,
            survey_id: 10,
            question:
              "Wie fandest du heute den Unterricht? Wie fandest du heute den Unterricht? Wie fandest du heute den Unterricht? Wie fandest du heute den Unterricht? Wie fandest du heute den Unterricht?",
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
            question: "Was willst du das nächste Mal machen?",
            answers: ["nichts.", "auch nichts"],
          },
        ],
        name: "Anna Jakobsen",
      },
    };
  },
  components: {
    FeedbackItem,
  },
  created () {
      this.getFeedback();
  },
  methods: {
    async getFeedback() {
      let res = await axios.get(`${process.env.VUE_APP_API_URL}/survey/${this.$route.params.id}`);
      console.log(res);
    },
  },
};
</script>

<style scoped>
.container {
  padding: 1rem;
}
.header {
  position: fixed;
  width: 100%;
  top: 0px;
  background-color: white;
}
.progress-container {
  width: 100%;
  height: 0.5rem;
  display: flex;
}
.progress-bar {
  flex-grow: 1;
  border-radius: 1rem;
  margin-right: 0.2rem;
}
.progress-bar:last-child {
  margin: 0px;
}
.completed {
  background-color: #30a1f2;
}
.not-completed {
  border: 2px solid #30a1f2;
}
.profile-img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
}
.creator {
  display: flex;
  align-items: center;
}
</style>
