<template>
  <div class="flex w-full md:w-48 md:h-full flex-col md:border-r md:dark:border-gray-700">
    <Header title="My Class" BtnTitle="+" :BtnMethod="addNewClass"><plus-icon /></Header>
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
import {PlusIcon} from 'vue-feather-icons'
export default {
  components: {
    Header,
    PlusIcon
  },
  data() {
    return {
      classesList: [
        { name: "Medientechnik Marketing 4BHITM" },
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
