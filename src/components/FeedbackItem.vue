<template>
  <div class="container">
    <div class="question">
      <h1 style="max-width: 70%;">{{ question.question }}</h1>
    </div>
    <div class="choice-section">
      <button
        v-for="choice of question.answers"
        :key="choice.id"
        @click="clickChoice(choice)"
        class="choice"
      >
        {{ choice }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
    },
  },
  methods: {
    clickChoice(choice) {
      this.$emit("next-quest", choice);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  margin-top: 9rem;
}

.question {
  width: 70%;
}

.choice-section {
  display: flex;
  flex-direction: column;
  width: 30%;
  padding: 1rem 0rem;
  background-color: white;
}
.choice {
  width: 100%;
  height: 2rem;
  border: 2px solid #30a1f2;
  margin-bottom: 0.5rem;
  background-color: transparent;
  border-radius: 20px;
  color: #30a1f2;
}

.choice:last-child {
  margin-bottom: 0px;
}

@media (max-width: 768px) {
  .choice-section {
    position: fixed;
    bottom: 0px;
    width: 100%;
  }
  .question {
    width: 100%;
  }
}
</style>
