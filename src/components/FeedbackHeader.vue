<template>
  <div class="py-1 px-2">
    <div class="">
      <div class="w-full h-2 flex shadow-2xl	">
        <div
          class="flex-grow "
          :class="{
            completed: questionIndex >= index,
            'not-completed': questionIndex < index,
          }"
          v-for="(quest, index) in dataFromAPI.questions"
          :key="quest.id"
        ></div>
      </div>
      <div>
        <h3 class="font-bold text-lg">WEBT: Unterricht vom 15.10.2020</h3>
        <div class="flex items-center">
          <img
            class="w-5 h-5 rounded-full object-cover"
            :src="dataFromAPI.creator.photo_url"
          />
          <p class="mx-2 text-base text-gray-800">{{dataFromAPI.creator.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataFromAPI: {
      type: Object,
    },
    questionIndex: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.completed {
  background: var(--background-color);
}
.not-completed {
  background: var(--background-color);
  opacity: 0.3;
}
</style>
