<template>
  <div class="container">
    <form class="box">
      <img class="logo" src="@/assets/logo.png" />
      <input type="email" placeholder="E-Mail" v-model="email" />
      <input type="password" placeholder="Passwort" v-model="password" />
      <router-link to="/foo" style="font-size: 0.8rem; align-self: flex-end	"
        >Forgot Password</router-link
      >
      <button @click="handleLogin" class="login-btn" :disabled="isLoading">
        <p v-if="!isLoading">Log in</p>
        <p v-else>Loading</p>
        </button>
      <router-link to="/register">Create an account</router-link>
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
      isLoading: false
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
      this.$store.dispatch("setUser", res.data);
      this.$router.replace("/");
    },
    async handleGoogle() {
      const googleUser = await this.$gAuth.signIn();
      this.$store.dispatch("setUser", googleUser.tt);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.google-btn {
  margin-top: 2rem;
}
button:disabled,
button[disabled]{
  opacity: 0.5;
}
.login-btn {
  margin: 1.5rem 0rem 0.5rem 0rem;
}
.container {
  background-color: var(--primary-color);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 50%;
  margin: 2rem 0rem;
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
input {
  border-radius: var(--border-radius);
  height: 2.5rem;
  margin-bottom: 0.5rem;
  background-color: var(--input-background-color);
  border: none;
  padding: 0.5rem;
  width: 100%;
  font-family: 'Jost';
}
input::placeholder {
  color: var(--input-placeholder-color);
}
button {
  border: none;
  background-color: var(--primary-color);
  height: 2.5rem;
  border-radius: 20px;
  color: white;
  font-weight: 800;
  width: 100%;
}
@media (max-width: 768px){
  .box{
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
}
</style>
