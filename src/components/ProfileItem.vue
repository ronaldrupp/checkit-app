<template>
  <div>
    <router-link :to="redirectTo">
      <div
        class="flex w-full items-center justify-between p-4 rounded-lg hover:bg-gray-100 min-w-0  dark:hover:bg-gray-800 md:mb-4"
      >
        <div class="flex items-center">
          <slot></slot>
          <div class="flex ml-4">
            <div>
              <h1 class="text-base font-semibold">{{ title }}</h1>
              <p class="text-sm">{{ description }}</p>
            </div>
          </div>
        </div>
        <div class="">
          <ChevronRightIcon size="2x" />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { ChevronRightIcon } from "vue-feather-icons";

export default {
  components: {
    ChevronRightIcon,
  },
  props: {
    title: {
      type: String,
      default: "No Title set",
    },
    description: {
      type: String,
    },
    redirectTo: String,
  },
};
</script>

<style lang="scss" scoped></style>
