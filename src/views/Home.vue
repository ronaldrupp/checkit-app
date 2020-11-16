<template>
  <div>
    <MyFeedbacksHeader />
    <MyFeedbacksCard v-for="feedback of myfeedbacks" :key="feedback.id" :myfeedbacks="feedback"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MyFeedbacksHeader from "@/components/MyFeedbacksHeader.vue"
import MyFeedbacksCard from "@/components/MyFeedbacksCard.vue"
export default {
  name: "Home",
  components: {
    MyFeedbacksHeader,
    MyFeedbacksCard
  },
  data() {
    return {
      myfeedbacks: [
        {
          id: 1,
          title: '4BHITM - WEBT: Feedback zur letzten Stunde',
          date: '10 Oct 2020 - 03:32',
          attendees: 42
        },
        {
          id: 2,
          title: '4BHITM - WEBT: Feedback zur vorletzten Stunde',
          date: '10 Oct 2020 - 03:32',
          attendees: 42
        },
        {
          id: 3,
          title: '4BHITM - SEW: Feedback zur letzten Stunde',
          date: '10 Oct 2020 - 03:32',
          attendees: 42
        },
        {
          id: 4,
          title: '4BHITM - SEW: Feedback zur vorletzten Stunde',
          date: '10 Oct 2020 - 03:32',
          attendees: 42
        },
        {
          id: 5,
          title: '4CHITM - WEBT: Feedback zur letzten Stunde',
          date: '10 Oct 2020 - 03:32',
          attendees: 42
        },
      ]
    }
  },
};
</script>

<style>

</style>
