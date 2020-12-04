<template>
  <div class="w-full">
    <router-link
      :to="redirectTo"
      class="md:flex-grow-0 md:w-full justify-center md:justify-start flex-grow duration-100 hover:bg-gray-200 flex items-center p-2 lg:px-4 lg:py-2 md:rounded-lg md:mt-4 hover:bg-grey-100 dark:hover:bg-gray-800 "
    >
      <slot></slot>
      <p class="hidden lg:block lg:ml-3 text-l font-semibold">{{title}}</p>
    </router-link>
  </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "No Title set"
        },
        redirectTo: String
    },
};
</script>

<style scoped></style>
