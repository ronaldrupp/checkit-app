<template>
  <div class="flex flex-col items-center">
    <h1>Login</h1>
    <form class="flex flex-col w-5/6">
      <p v-if="messageFromAPI" class="error">{{ messageFromAPI.message }}</p>
      <input type="email" placeholder="E-Mail" v-model="email" />
      <input type="password" placeholder="Passwort" v-model="password" />
      <router-link to="/foo" style="font-size: 0.8rem; align-self: flex-end	"
        >Forgot Password</router-link
      >
      <div class="flex flex-col mt-5">
        <button
          @click="handleLogin"
          class="w-full my-1 bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full"
          :disabled="isLoading"
        >
          <p v-if="!isLoading">Log in</p>
          <p v-else>Loading</p>
        </button>
        <button
          class="w-full my-1 bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full"
          @click.prevent="$emit('change-mode', '')"
        >
          Create an account
        </button>
        <button
          class="w-full my-1 bg-black hover:bg-opacity-75 text-white py-2 px-4 rounded-full"
          @click.prevent="handleGoogle"
        >
          Continue with Google
        </button>
      </div>
    </form>
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

input {
  border-radius: var(--border-radius);
  height: 2.5rem;
  margin-bottom: 0.5rem;
  background-color: var(--input-background-color);
  border: none;
  padding: 0.5rem;
  width: 100%;
  font-family: "Jost";
}
input::placeholder {
  color: var(--input-placeholder-color);
}
</style>
