<template>
  <div
    class="z-100 w-full flex z-50 top-0 items-center sticky bg-white bg-opacity-50 dark:bg-black justify-between p-2 border-b dark:border-gray-800"
    style="backdrop-filter: saturate(180%) blur(8px); -webkit-backdrop-filter: saturate(180%) blur(8px)"
  >
    <div class="flex items-center min-w-0">
      <button
        v-if="back"
        class="text-blue-500 mr-2 border-none hover:bg-opacity-75 py-2 px-2 rounded-full  dark:hover:bg-gray-800 hover:bg-gray-200"
        @click="$router.go(-1)"
      >
        <span class=""
          ><chevron-left-icon
            size="1.5x"
            class=""
          ></chevron-left-icon
        ></span>
      </button>
      <h3 class="font-bold text-xl truncate">{{ title }}</h3>
    </div>
    <button
      v-if="BtnMethod"
      class="text-blue-500 border-none hover:bg-opacity-75 py-2 px-2 rounded-full  dark:hover:bg-gray-800 hover:bg-gray-200"
      @click="BtnMethod"
    >
      <span class=""><slot></slot></span>
    </button>
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
    BtnMethod: {
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

<style scoped></style>
