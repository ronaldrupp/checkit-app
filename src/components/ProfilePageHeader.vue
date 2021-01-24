<template>
  <div>
    <div class="flex items-center my-12 pl-4">
      <img
        class="object-cover rounded-full w-16 h-16 md:w-24 md:h-24"
        :src="`https:${$store.state.user.photoUrl}`"
      />
      <div class="flex flex-col justify-center ml-5">
        <h1 class="md:text-2xl font-semibold">{{ $store.state.user.name }}</h1>
        <h5 class="text-base">{{ $store.state.user.emailAddress }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
