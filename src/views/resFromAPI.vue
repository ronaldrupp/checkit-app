<template>
  <div class="flex items-center justify-center">
    <!-- <lottie-animation
      path="../assets/loading.json"
      :loop="true"
      :autoPlay="true"
      :loopDelayMin="2.5"
      :loopDelayMax="5"
      :speed="1"
      :width="256"
      :height="256"
    /> -->
    <p class="text-3xl text-center">{{$t('resFromAPI.loading')}}</p>
  </div>
</template>

<script>
// import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
export default {
  components: {
    // LottieAnimation,
  },
  created () {
    this.callAPI();
  },
  methods: {
    async callAPI() {
      console.log(this.$route.query.aT);
      console.log(this.$route.query.rT);
          
      this.$store.dispatch("setUser", '');
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
