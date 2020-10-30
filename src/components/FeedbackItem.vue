<template>
  <div>
    <h1 style="max-width: 70%;margin: 5rem 0rem">{{ question.question }}</h1>
    <div class="choice-section">
      <button
        v-for="choice of question.answers"
        :key="choice.id"
        @click="$emit('next-quest')"
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
};
</script>

<style scoped>

.choice-section {
  display: flex;
  flex-direction: column;
  width: 100%;
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
  }
}
</style>
