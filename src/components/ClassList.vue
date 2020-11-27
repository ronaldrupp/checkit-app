<template>
  <div class="flex md:h-full flex-col border-r md:dark:border-gray-700">
    <Header title="My Class" BtnTitle="+" :BtnMethod="addNewClass" />
    <div
      class="w-full  text-center py-6 hover:bg-gray-100 dark:hover:bg-gray-800"
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
import Header from "./Header";
export default {
  components: {
    Header,
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
  methods: {
    addNewClass() {
      alert("in progress...")
    }
  },
};
</script>

<style lang="scss" scoped></style>
