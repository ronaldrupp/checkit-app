<template>
  <div class="overflow-y-scroll md:border-r md:dark:border-gray-700">
    <Header
      :back="true"
      :title="course.name"
      :BtnMethod="
        () => {
          console.log('you clicked');
        }
      "
      ><plus-icon size="1.5x" class="custom-class"></plus-icon>
    </Header>
    <div class="mt-12">
      <h1 class="text-base md:text-2xl lg:text-3xl ml-6 font-bold">
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
              referrerpolicy="no-referrer"
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
              referrerpolicy="no-referrer"
              :src="`https:${student.profile.photoUrl}`"
            />
          </div>
        </div>
      </div>
      <div class="border-t dark:border-gray-800">
        <my-feedbacks-card
          :navigateTo="`/class/${course._id}/${feedback._id}`"
          v-for="feedback of feedbacks"
          :key="feedback._id"
          :feedback="feedback"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import MyFeedbacksCard from "./../components/MyFeedbacksCard";
import { PlusIcon } from "vue-feather-icons";
import axios from "axios";
import { sharedElementMixin } from "v-shared-element";

export default {
  mixins: [sharedElementMixin],
  components: {
    Header,
    MyFeedbacksCard,
    PlusIcon,
  },
  metaInfo() {
    return {
      title: this.course.name,
    };
  },
  data() {
    return {
      feedbacks: [],
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
      this.feedbacks = res.data.reverse();
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
      this.course = res.data;
      this.getSurveys();
    },
  },
};
</script>

<style scoped>
.overflow-x-scroll {
  overflow-x: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
