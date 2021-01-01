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
import axios from 'axios'
// import jwt_decode from 'jwt-decode'

export default {
  components: {
    // LottieAnimation,
  },
  created () {
    this.callAPI();
  },
  methods: {
    async callAPI() {
      // console.log(jwt_decode('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIiLCJqdGkiOiJkYmMwYWE1Ni0yZWRkLTQyMjMtOTQ2OC01NWI4YjQwZDQ0ZTciLCJlbWFpbCI6InJ1cHAucjAyQGh0bHdpZW53ZXN0LmF0IiwidWlkIjoiMSIsImV4cCI6MTYwOTQxNzQxMCwiaXNzIjoiU2VjdXJlQXBpIiwiYXVkIjoiU2VjdXJlQXBpVXNlciJ9.5FmfYYbHRazUGgM1k1HRndsKQvAvvP3HRG8HoOYg79g'))
      let res = await axios.get(`${process.env.VUE_APP_API_URL}/user/getuser/${this.$route.query.id}`)   
      // console.log("API "+res.data)
      this.$store.dispatch("setToken", {aT: this.$route.query.aT, rT: this.$route.query.rT});
      this.$store.dispatch("setUser", res.data);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
