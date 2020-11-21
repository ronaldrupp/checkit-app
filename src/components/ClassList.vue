<template>
  <div class="flex md:h-full flex-col border-r-2 ">
    <!-- <Header title="My Classes" /> -->
    <div
      class="w-full  text-center py-6 hover:bg-gray-200"
      v-for="klasse in classesList"
      :key="klasse.name"
    >
      <router-link class="" :to="`/class/${klasse.name}`">
        <p>{{ klasse.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
// import Header from "./Header";
export default {
  components: {
    // Header,
  },
  data() {
    return {
      classesList: [
        { name: "1bhitm" },
        { name: "2bhitm" },
        { name: "3bhitm" },
        { name: "4bhitm" },
        { name: "5bhitm" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
