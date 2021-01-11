<template>
  <div
    class="flex flex-col border rounded-md m-5 p-5 justify-between md:items-start border-b transition duration-100 dark:border-gray-800 "
  >
    <div class="flex w-full justify-end">
      <XCircleIcon
        size="1.25x"
        class="text-gray-600 cursor-pointer"
        @click="delQuestion(questions)"
      />
    </div>
    <input
      class="dark:text-white text-lg outline-none bg-transparent rounded-md w-full p-1 my-4 dark:placeholder-white placeholder-gray-700 placeholder-opacity-75 dark:border-gray-800"
      type="text"
      :placeholder="`${$t('create.question')}`"
      v-model="questions.question"
    />
    <div class="flex flex-col w-full">
      <input
        class="border my-2 w-full outline-none dark:text-white bg-transparent rounded-md p-3 placeholder-gray-800 placeholder-opacity-75 dark:placeholder-white dark:border-gray-800"
        type="text"
        v-for="answer in questions.answers"
        :key="answer.id"
        :placeholder="`${$t('create.choice')}`"
        v-model="answer.choice"
      />
      <button
      v-if="questions.answers.length < 4"
        class="outline-none border my-2 p-3 rounded-md flex dark:border-gray-800"
        @click="$emit('addChoice', questions)"
      >
        <plus-icon></plus-icon><p class="ml-2">{{$t('create.addChoice')}}</p>
      </button>
    </div>
  </div>
</template>

<script>
import { XCircleIcon, PlusIcon } from "vue-feather-icons";
export default {
  components: {
    XCircleIcon,
    PlusIcon,
  },
  props: {
    questions: {
      type: Object,
    },
  },
  methods: {
    delQuestion(question) {
      this.$emit("delQuestion", question);
    },
  },
};
</script>

<style lang="scss" scoped></style>
