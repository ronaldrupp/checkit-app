<template>
  <div class="w-full">
    <router-link
      :to="redirectTo"
      class="md:flex-grow-0 relative transition ease-in-out active:scale-50 md:w-full justify-center md:justify-start flex-grow duration-100 md:hover:bg-gray-200 flex items-center p-2 lg:px-4 lg:py-3 rounded-full lg:rounded-lg md:mt-4 hover:bg-grey-100 md:dark:hover:bg-gray-800 "
    >
      <slot name="icon"></slot>
      <p
        class="hidden lg:block lg:ml-3 text-l font-semibold overflow-hidden truncate"
      >
        {{ title }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "No Title set",
    },
    redirectTo: { type: String, default: "#" },
  },

};
</script>

<style scoped></style>
