<template>
  <div
    class="w-full flex top-0 items-center sticky bg-white bg-opacity-50 dark:bg-gray-900 justify-between p-2 border-b md:dark:border-gray-800"
    style="backdrop-filter: blur(8px)"
  >
    <h3 class="font-bold text-xl truncate min-w-0">{{ title }}</h3>
    <button
      v-if="BtnMethod"
      class="border-none hover:bg-opacity-75 py-2 px-4 rounded-full  dark:hover:bg-gray-800 hover:bg-gray-200"
      @click="BtnMethod"
    >
      <span class=""> {{ BtnTitle }} </span>
    </button>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
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
