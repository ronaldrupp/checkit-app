<template>
  <div class="overflow-y-scroll">
    <Header
      :title="`${$route.params.class}`"
      BtnTitle="Options"
      :BtnMethod="
        () => {
          console.log('sd');
        }
      "
    />
    <div class="mt-12">
      <h1 class="text-5xl font-bold ml-6 truncate">{{ $route.params.class }}</h1>
      <div class="flex ml-6 mt-4 overflow-x-scroll">
        <div class="-mr-3  ">
          <img
            class="object-cover rounded-full w-12 h-12"
            src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
          />
        </div>
        <div class="-mr-3">
          <img
            class="object-cover rounded-full w-12 h-12"
            src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
          />
        </div>
        <div class="-mr-3">
          <img
            class="object-cover rounded-full w-12 h-12"
            src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
          />
        </div>
        <div class="-mr-3">
          <img
            class="object-cover rounded-full w-12 h-12"
            src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
          />
        </div>
        <div class="-mr-3">
          <img
            class="object-cover rounded-full w-12 h-12"
            src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
          />
        </div>
        <div class="-mr-3">
          <img
            class="object-cover rounded-full w-12 h-12"
            src="https://metro.co.uk/wp-content/uploads/2019/03/SEI_54895638.jpg?quality=90&strip=all"
          />
        </div>
      </div>
      <div class="mt-12">
        <my-feedbacks-card
          v-for="feedback of myfeedbacks"
          :key="feedback.id"
          :feedback="feedback"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import MyFeedbacksCard from "./MyFeedbacksCard";
export default {
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
    name() {},
  },
};
</script>

<style lang="scss" scoped></style>
