<template>
  <div class="login-form-container">
    <h1>Login</h1>
    <sup>BETA</sup>
    <form class="box">
      <p v-if="messageFromAPI" class="error">{{ messageFromAPI.message }}</p>
      <input type="email" placeholder="E-Mail" v-model="email" />
      <input type="password" placeholder="Passwort" v-model="password" />
      <router-link to="/foo" style="font-size: 0.8rem; align-self: flex-end	"
        >Forgot Password</router-link
      >
      <button @click="handleLogin" class="login-btn" :disabled="isLoading">
        <p v-if="!isLoading">Log in</p>
        <p v-else>Loading</p>
      </button>
      <button @click.prevent="$emit('change-mode', '')">
        Create an account
      </button>
      <button @click.prevent="handleGoogle" class="google-btn">
        Continue with Google
      </button>
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
.login-form-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: var(--background-color);
  border-radius: var(--border-radius);
  width: 400px;
}
.error {
  text-align: center;
  color: var(--alert-color);
}
.google-btn {
  margin-top: 2rem;
}

.login-btn {
  margin: 1.5rem 0rem 0.5rem 0rem;
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
button {
  border: none;
  background-color: var(--secondary-color);
  height: 2.5rem;
  border-radius: 20px;
  color: white;
  font-weight: 800;
  width: 100%;
}
@media (max-width: 768px) {
  .box {
    width: 100%;
    height: 100%;
    justify-content: center;
    border-radius: 0px;
  }
}
</style>
