<template>
  <div
    class="w-full h-full flex items-center justify-center bg-white md:dark:bg-gray-900 dark:bg-gray-800"
  >
    <div
      class="flex flex-col p-5 justify-center items-center bg-white dark:bg-gray-800 w-96 md:border dark:border-gray-800 rounded-md"
    >
      <img class="w-12 my-12" src="@/assets/logo_black.svg" />
      <h1 class="font-bold text-3xl my-4">Login</h1>
      <p class="text-center">{{ this.$t("login.logintxt") }}</p>
      <button
        class="loginBtn w-full my-1 bg-black disabled:bg-opacity-50 hover:bg-opacity-50 text-white py-4 px-4 rounded-md mt-20"
        ref="signinBtn"
        @click="handleGoogle"
        :disabled="!isInit"
      >
        <span v-if="isInit">Continue with Google</span>
        <span v-else>Loading...</span>
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      mode: "login",
      isInit: false,
    };
  },
  metaInfo() {
    return {
      title: "Login",
    };
  },
  created() {
    let that = this;
    let checkGauthLoad = setInterval(function() {
      that.isInit = that.$gAuth.isInit;
      if (that.isInit) clearInterval(checkGauthLoad);
    }, 1000);
  },
  methods: {
    async handleGoogle() {
      this.isInit = false;
      let authCode = null;

      try {
        authCode = await this.$gAuth.getAuthCode();
      } catch (err) {
        if (err.error == "popup_closed_by_user") this.isInit = true;
        return;
      }
      
      const res = await axios.post(
        `${process.env.VUE_APP_API_URL}/google/token`,
        { authCode: authCode }
      );
      this.$store.dispatch("setToken", res.data);
      this.$store.dispatch("setUser", res.data.user);
      this.$router.replace(this.$route.query.redirect || "/");
    },
  },
};
</script>

<style scoped>
.loginBtn:disabled {
  opacity: 0.5;
}
</style>
