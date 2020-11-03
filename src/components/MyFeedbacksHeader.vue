<template>
  <div class="header">
    <h3 class="title">My Feedbacks</h3>
    <button class="feedbackbtn">
      <PlusIcon class="icon" v-if="bIcon" stroke-width="3"></PlusIcon>
      <span v-else class="btntext"> Create new feedback </span>
    </button>
  </div>
</template>

<script>
import { PlusIcon } from "vue-feather-icons";
export default {
  components: {
    PlusIcon,
  },
  data() {
    return {
      bIcon: false,
    };
  },
  methods: {
    showIcon() {
      if (window.innerWidth <= 768) {
        console.log("Test");
        this.bIcon = true;
      } else this.bIcon = false;
    },
  },
  mounted() {
    this.showIcon();
  },
};
</script>

<style scoped>
.header {
  display: flex;
  width: 85%;
}
.title {
  margin-left: 5vw;
}
.feedbackbtn {
  display: flex;
  border: none;
  background-color: var(--primary-color);
  height: 4vh;
  border-radius: 20px;
  color: white;
  font-size: 14px;
  font-weight: 800;
  align-self: center;
  width: 12vw;
  margin-left: auto;
}
.btntext {
  align-self: center;
  margin: auto;
}
.icon {
  align-self: center;
  margin: auto;
}
</style>