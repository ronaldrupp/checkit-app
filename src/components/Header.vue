<template>
  <div
    class="w-full bg-white dark:bg-gray-900 flex z-50 top-0 items-center sticky top-0 justify-between p-2 border-b dark:border-gray-800"
  >
    <div class="flex items-center min-w-0">
      <button
        title="Go Back"
        v-if="back"
        class="text-blue-500 mr-2 border-none hover:bg-opacity-75 py-2 px-2 rounded-full  dark:hover:bg-gray-800 hover:bg-gray-200"
        @click="$router.go(-1)"
      >
        <span class=""
          ><chevron-left-icon size="1.5x" class=""></chevron-left-icon
        ></span>
      </button>
      <h3 class="font-bold text-xl truncate">{{ title }}</h3>
    </div>
    <div>
      <button
        v-if="BtnMethod1"
        class="text-blue-500 rounded-md border-none hover:bg-opacity-75 py-2 px-2 dark:hover:bg-gray-800 hover:bg-gray-200"
        @click="BtnMethod1"
      >
        <span class=""><slot name="btn1"></slot></span>
      </button>
      <button
        v-if="BtnMethod2"
        class="text-blue-500 ml-2 rounded-md border-none hover:bg-opacity-75 py-2 px-2 dark:hover:bg-gray-800 hover:bg-gray-200"
        @click="BtnMethod2"
      >
        <span class=""><slot name="btn2"></slot></span>
      </button>
      <button
        v-if="BtnMethod3"
        class="text-blue-500 ml-2 rounded-md border-none hover:bg-opacity-75 py-2 px-2 dark:hover:bg-gray-800 hover:bg-gray-200"
        @click="BtnMethod3"
      >
        <span class=""><slot name="btn3"></slot></span>
      </button>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon } from "vue-feather-icons";
export default {
  components: { ChevronLeftIcon },
  props: {
    back: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    BtnMethod1: {
      type: Function,
    },
    BtnMethod2: {
      type: Function,
    },
    BtnMethod3: {
      type: Function,
    },
    BtnTitle: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>