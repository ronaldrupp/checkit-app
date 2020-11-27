<template>
  <div
    class="w-full flex top-0 items-center sticky bg-white dark:bg-gray-900 justify-between p-2 border-b md:dark:border-gray-800"
  >
    <h3 class="font-bold text-xl">{{ title }}</h3>
    <button
      v-if="BtnMethod"
      class="border-none bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full"
      @click="BtnMethod"
    >
      <span> {{ BtnTitle }} </span>
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
