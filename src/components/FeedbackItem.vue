<template>
  <div class="flex mt-10">
    <div class="w-full px-2">
      <h1 class="w-75 text-2xl">{{ question.question }}</h1>
    </div>
    <div class="flex flex-col fixed bottom-0 w-full items-center">
      <button
        v-for="choice of question.answers"
        :key="choice.id"
        @click="clickChoice(choice)"
        class="w-11/12 rounded-full my-1 h-9"
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

<style scoped></style>
