<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-3xl my-12">Login</h1>
    <p>{{ this.$t("login.logintxt") }}</p>
    <button
      class="w-100 my-1 bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full mt-20"
      @click.prevent="handleGoogle"
    >
      Continue with Google
    </button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      messageFromAPI: "",
      isLoading: false,
    };
  },
  methods: {
    async handleLogin() {
      this.isLoading = true;
      let res = await axios.post(`${process.env.VUE_APP_API_URL}/user/token`, {
        Email: this.email,
        Password: this.password,
      });
      this.isLoading = false;
      if (res.data.isAuthenticated) {
        this.$store.dispatch("setUser", res.data);
        this.$router.replace("/");
      } else this.messageFromAPI = res.data;
    },
    redirectToGoogle() {
      document.location.href = `${process.env.VUE_APP_API_URL}/user/login`;
    },
    async handleGoogle() {
      const authCode = await this.$gAuth.getAuthCode();
      console.log(
        `${process.env.VUE_APP_API_URL}/auth_callback?code=${authCode}`
      );
      const res = await axios.get(
        `${process.env.VUE_APP_API_URL}/auth_callback?code=${authCode}`
      );
      this.$store.dispatch("setToken", res.data);
      this.$store.dispatch("setUser", res.data.userInfo);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.error {
  text-align: center;
  color: var(--alert-color);
}
</style>
