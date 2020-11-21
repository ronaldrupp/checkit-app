<template>
  <div class="flex flex-col items-center">
    <h1 class="font-bold text-3xl my-12">Login</h1>
    <form class="flex flex-col w-5/6">
      <p v-if="messageFromAPI" class="error">{{ messageFromAPI.message }}</p>
      <input
        class="px-4 rounded-full h-12"
        type="email"
        placeholder="E-Mail"
        v-model="email"
      />
      <input
        class="mt-4 px-4 rounded-full h-12"
        type="password"
        placeholder="Passwort"
        v-model="password"
      />
      <router-link
        to="/login/forgotpassword"
        class="self-end mt-3 text-sm"
        >Forgot Password</router-link
      >
      <div class="flex flex-col mt-5">
        <button
          @click="handleLogin"
          class="w-full my-6 bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full"
          :disabled="isLoading"
        >
          <p v-if="!isLoading">Log in</p>
          <p v-else>Loading</p>
        </button>
      </div>
    </form>
    <div class="flex flex-col mt-5 w-5/6">
      <button
        class="w-100 my-1 bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full"
        @click.prevent="$emit('change-mode', '')"
      >
        Create an account
      </button>
      <button
        class="w-100 my-1 bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full"
        @click.prevent="handleGoogle"
      >
        Continue with Google
      </button>
    </div>
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
    async handleGoogle() {
      const googleUser = await this.$gAuth.signIn();
      console.log(googleUser);
      this.$store.dispatch("setUser", googleUser.tt.Ad);
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
