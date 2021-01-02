<template>
  <div class="flex items-center px-4 py-8">
    <div class="flex flex-col w-full">
      <input
        class="dark:bg-black w-full outline-none dark:text-white dark:placeholder-white text-xl font-bold rounded-md p-1 placeholder-gray-800 placeholder-opacity-75"
        type="text"
        :placeholder="$t('create.titleFeedback')"
        v-model="data.name"
      />
    </div>
  </div>
</template>

<script>
export default {
props: {
  data: {
    type: Object,
  },
},
};
</script>

<style lang="scss" scoped></style>
