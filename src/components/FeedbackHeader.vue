<template>
  <div class="container">
    <div class="header">
      <div class="progress-container">
        <div
          class="progress-bar"
          :class="{
            'completed': questionIndex >= index,
            'not-completed': questionIndex < index,
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
  </div>
</template>

<script>
export default {
  props: {
    dataFromAPI: {
      type: Object,
    },
    questionIndex: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.container {
  
}
.header {
  background-color: var(--background-color);
}
.progress-container {
  width: 100%;
  height: 0.5rem;
  display: flex;
  margin: 1rem 0;
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
  background-color: var(--primary-color);
}
.not-completed {
  background-color: var(--primary-color);
  opacity: 0.5;
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
