<template>
  <div>
    <div class="flex items-center ml-12 mt-12">
      <img
        class="object-cover rounded-full w-24 h-24"
        :src="$store.state.user.hK"
      />
      <div class="flex flex-col justify-center ml-5">
        <h1 class="text-2xl font-bold">{{$store.state.user.Ad}}</h1>
        <h5 class="text-base">{{$store.state.user.cu}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
