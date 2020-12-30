<template>
  <div class="flex flex-col">
    <div
      class="flex md:flex-row flex-col justify-between md:items-center border-b active:scale-50 transition duration-100 transform hover:bg-gray-100 min-w-0 flex dark:hover:bg-gray-800 dark:border-gray-800 px-4 py-8 border-solid"
    >
      <div class="md:mr-3 md:mb-0 mb-2">
        <XCircleIcon
          size="1.5x"
          class="custom-class cursor-pointer"
          @click="delQuestion(QA)"
        />
      </div>
      <div class="flex flex-col mb-3 md:mb-0 w-full">
        <input
          class="bg-gray-200 dark:text-black rounded-md w-full md:w-2/3 p-1 placeholder-gray-500 placeholder-opacity-75"
          type="text"
          :placeholder="`${QA.id}.${$t('create.question')}`"
          v-model="QA.question"
        />
      </div>
      <div class="flex flex-col w-full md:w-max">
        <input
          class="bg-gray-200 dark:text-black rounded-md p-1 placeholder-gray-500 placeholder-opacity-75"
          type="text"
          :placeholder="$t('create.answer1')"
          v-model="QA.answer1"
        />
        <p class="mx-6 my-1 self-center">{{$t('create.or')}}</p>
        <input
          class="bg-gray-200 dark:text-black rounded-md p-1 placeholder-gray-500 placeholder-opacity-75"
          type="text"
          :placeholder="$t('create.answer2')"
          v-model="QA.answer2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { XCircleIcon } from "vue-feather-icons";
export default {
  components: {
    XCircleIcon,
  },
  props: {
    QA: {
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
