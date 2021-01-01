<template>
  <div class="flex items-center px-4 py-8">
    <div class="flex flex-col w-full">
      <input
        class="bg-gray-200 dark:text-black rounded-md w-full md:w-1/3 p-1 placeholder-gray-500 placeholder-opacity-75"
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
