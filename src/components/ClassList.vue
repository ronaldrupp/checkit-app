<template>
  <div class="flex w-full md:h-full  flex-col md:dark:border-gray-700">
    <Header title="My Class" :BtnMethod="addNewClass"><plus-icon /></Header>
    <div class="flex flex-col md:p-2">
      <router-link
        :to="`/class/${klasse.name}`"
        class="w-full px-2 md:rounded-lg py-6 hover:bg-gray-100 dark:hover:bg-gray-800"
        v-for="klasse in classesList"
        :key="klasse.name"
      >
        <p class="font-semibold">{{ klasse.name }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import { PlusIcon } from "vue-feather-icons";
export default {
  components: {
    Header,
    PlusIcon,
  },
  data() {
    return {
      classesList: [
        { name: "SEW 5BHITM" },
        { name: "ITP 4BHITM" },
        { name: "SEW 4BHITM" },
        { name: "WEBT 4BHITM" },
        { name: "WEBT 5BHITM" },
      ],
    };
  },
  methods: {
    addNewClass() {
      alert("in progress...");
    },
  },
};
</script>

<style lang="scss" scoped></style>
