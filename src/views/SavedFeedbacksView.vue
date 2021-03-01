<template>
  <div class="overflow-y-scroll md:border-r md:dark:border-gray-700">
    <Header
      :title="$t('header.mySavedFeedback')"
      BtnTitle="Create Feedback"
      :BtnMethod1="navigateToCreateFeedback"
    >
      <template v-slot:btn1> <plus-icon /></template
    ></Header>

    <MyFeedbacksCard
      v-for="feedbackDraft of allFeedbackDrafts"
      :key="feedbackDraft._id"
      :feedback="feedbackDraft"
      :navigateTo="`/create/classic?feedbackdraft=${feedbackDraft._id}`"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import { PlusIcon } from "vue-feather-icons";
import Header from "@/components/Header.vue";
import MyFeedbacksCard from "@/components/MyFeedbacksCard.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Header,
    MyFeedbacksCard,
    PlusIcon,
  },
  data() {
    return { allFeedbackDrafts: [] };
  },
  created() {
    this.getFeedbackDrafts();
  },
  methods: {
    async getFeedbackDrafts() {
      let res = await axios.get(
        `${process.env.VUE_APP_API_URL}/feedbackdrafts`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      this.allFeedbackDrafts = res.data.reverse();
    },
    //nicht schön, aber direkt gehts nicht
    navigateToCreateFeedback() {
      this.$router.push({ path: "/create" });
    },
  },
};
</script>

<style></style>
