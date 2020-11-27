<template>
  <div class="overflow-y-scroll">
    <Header
      title="My Feedback"
      BtnTitle="Create Feedback"
      :BtnMethod="navigateToCreateFeedback"
    />
    <MyFeedbacksCard
      v-for="feedback of myfeedbacks"
      :key="feedback.id"
      :feedback="feedback"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import MyFeedbacksCard from "@/components/MyFeedbacksCard.vue";
export default {
  name: "Home",
  components: {
    Header,
    MyFeedbacksCard,
  },
  data() {
    return {
      myfeedbacks: [
        {
          id: 1,
          grade: "4BHITM",
          title: "4BHITM - WEBT: Feedback zur letzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
        {
          id: 2,
          title: "4BHITM - WEBT: Feedback zur vorletzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
        {
          id: 3,
          title: "4BHITM - SEW: Feedback zur letzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
        {
          id: 4,
          title: "4BHITM - SEW: Feedback zur vorletzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
        {
          id: 5,
          title: "4CHITM - WEBT: Feedback zur letzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
        {
          id: 123,
          title: "4CHITM - WEBT: Feedback zur letzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
        {
          id: 235,
          title: "4CHITM - WEBT: Feedback zur letzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
        {
          id: 325,
          title: "4CHITM - WEBT: Feedback zur letzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
        {
          id: 12,
          title: "4CHITM - WEBT: Feedback zur letzten Stunde",
          date: "10 Oct 2020 - 03:32",
          attendees: 42,
        },
      ],
    };
  },
  methods: {
    //nicht schön, aber direkt gehts nicht
    navigateToCreateFeedback() {
      this.$router.push({ path: '/create' });
    }
  },
};
</script>

<style></style>
