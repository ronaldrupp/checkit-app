<template>
  <div>
    <div class="flex items-center my-12 pl-4">
      <img
        class="object-cover rounded-full w-16 h-16 md:w-24 md:h-24"
        :src="$store.state.user.picture"
      />
      <div class="flex flex-col justify-center ml-5">
        <h1 class="md:text-2xl font-semibold">{{ $store.state.user.firstName }} {{ $store.state.user.lastName }}</h1>
        <h5 class="text-base">{{ $store.state.user.email }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
