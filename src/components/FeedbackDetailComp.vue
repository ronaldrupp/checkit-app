<template>
  <div>
    <div
      v-for="(result, idx) in dataFromAPI"
      :key="idx"
      class="flex flex-col border rounded-md m-5 p-5 border-b transition duration-100 dark:border-gray-800 "
    >
      <p class="text-lg font-semibold mb-4">{{ result.question }}</p>
      <div class="flex flex-wrap items-center justify-around">
        <Charts :result="result" class="md:w-min w-full self-center" />
        <div>
          <p
            class="mb-4 text-lg"
            v-for="(answers, idx) in result.answer"
            :key="idx"
          >
            {{ (answers.percent * 100).toFixed(0) }} % der Befragten antworteten
            mit: {{ answers.option }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Charts from "@/components/Charts.vue";
export default {
  components: {
    Charts,
  },
  data() {
    return {
      dataFromAPI: [
        {
          question: "Wie fandest du den heutigen Unterricht?",
          answer: [
            {
              option: "Gut",
              percent: 0.33,
              count: 8,
            },
            {
              option: "Schlecht",
              percent: 0.12,
              count: 3,
            },
            {
              option: "Naja",
              percent: 0.55,
              count: 13,
            },
          ],
        },
        {
          question: "Wie fandest du die Folien?",
          answer: [
            {
              option: "Gut",
              percent: 0.66,
              count: 16,
            },
            {
              option: "Schlecht",
              percent: 0.08,
              count: 2,
            },
            {
              option: "Unverständlich",
              percent: 0.32,
              count: 6,
            },
          ],
        },
        {
          question: "Die Stunde heute war in Summe:",
          answer: [
            {
              option: "Fad",
              percent: 0.41,
              count: 10,
            },
            {
              option: "Ok",
              percent: 0.12,
              count: 3,
            },
            {
              option: "Interessant",
              percent: 0.37,
              count: 9,
            },
            {
              option: "Episch",
              percent: 0.1,
              count: 3,
            },
          ],
        },
      ],
    };
  },
  props: {
    feedback: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.custom {
  width: 16em;
}
</style>
