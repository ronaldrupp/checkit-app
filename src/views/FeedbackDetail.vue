<template>
  <div class="overflow-y-scroll pb-20">
    <div class="flex flex-col">
      <Header :back="true" :title="$route.params.feedback"></Header>
      <div
        class="flex flex-col border rounded-md m-5 p-5 justify-between md:items-start border-b transition duration-100 dark:border-gray-800 "
      >
      <p class="text-lg">Sind Sie dumm?</p>
        <div class="max-w-md">
          <Charts />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./../components/Header";
import Charts from "@/components/Charts.vue";
export default {
  components: {
    Header,
    Charts,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
