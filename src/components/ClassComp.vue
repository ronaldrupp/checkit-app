<template>
  <div class="overflow-y-scroll">
    <Header
      :back="true"
      :title="course.name"
      :BtnMethod="
        () => {
          alert('you clicked');
        }
      "
      ><MoreHorizontalIcon
    /></Header>
    <div class="mt-12">
      <h1
        class="text-base md:text-2xl lg:text-3xl ml-6 font-bold"
      >
        {{ course.name }}
      </h1>
      <h2 class="text-sm md:text-lg lg:text-xl ml-6 my-2">
        {{ course.descriptionHeading }}
      </h2>
      <div class="flex ml-6 overflow-x-scroll my-12">
        <div class="flex   ">
          <div class="border-r pr-4">
            <img
              class="object-cover rounded-full w-8 h-8 md:w-12 md:h-12"
              :src="`https:${course.teacherPhotoUrl}`"
            />
          </div>
        </div>
        <div class="flex ml-4 ">
          <div
            class="-mr-3"
            v-for="student in course.students"
            :key="student.userId"
          >
            <img
              class="object-cover rounded-full w-8 h-8 md:w-12 md:h-12"
              :src="`https:${student.profile.photoUrl}`"
            />
          </div>
        </div>
      </div>
      <div class="">
        <my-feedbacks-card
          v-for="survey of myfeedbacks"
          :key="survey._id"
          :feedback="survey"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import MyFeedbacksCard from "./MyFeedbacksCard";
import { MoreHorizontalIcon } from "vue-feather-icons";
import axios from "axios";
import { sharedElementMixin } from "v-shared-element";

export default {
  mixins: [sharedElementMixin],
  components: {
    Header,
    MyFeedbacksCard,
    MoreHorizontalIcon,
  },
  metaInfo() {
    return {
      title: this.course.name,
    };
  },
  data() {
    return {
      myfeedbacks: [],
      course: {},
    };
  },
  created() {
    this.getCourse();
  },
  methods: {
    async getSurveys() {
      let res = await axios.get(
        `${process.env.VUE_APP_API_URL}/surveys/${this.course._id}`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      this.myfeedbacks = res.data.reverse();
    },
    async getCourse() {
      let res = await axios.get(
        `${process.env.VUE_APP_API_URL}/course/${this.$route.params.courseId}`,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.tokens.accessToken}`,
          },
        }
      );
      this.course = res.data[0];
      this.getSurveys();
    },
  },
};
</script>

<style scoped>

.overflow-x-scroll{
  overflow-x: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
