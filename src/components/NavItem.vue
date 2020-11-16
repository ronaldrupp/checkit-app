<template>
  <div>
    <router-link to="/my-questions-and-answers" class="">
      {{icon}}
      <p class="hidden lg:block lg:ml-3 text-xl">{{title}}</p>
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
        icon: {
            type: Object
        }
    },
};
</script>

<style scoped></style>
