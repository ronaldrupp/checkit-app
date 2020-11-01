<template>
  <div class="register-form-container">
    <h1>Register</h1>
    <p>{{ messageFromAPI }}</p>
    <form class="box">
      <input type="text" v-model="firstname" placeholder="Firstname" required />
      <input type="text" v-model="lastname" placeholder="Lastname" required />
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="text" v-model="email" placeholder="Email" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button @click.prevent="handleRegister" :disabled="isLoading">
        <p v-if="!isLoading">Register</p>
        <p v-else>Loading</p>
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      messageFromAPI: "",
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      isLoading: false,
    };
  },
  methods: {
    async handleRegister() {
      this.isLoading = true;
      let res = await axios.post(
        `${process.env.VUE_APP_API_URL}/user/register`,
        {
          FirstName: this.firstname,
          LastName: this.lastname,
          Email: this.email,
          Password: this.password,
          Username: this.username,
        }
      );
      this.isLoading = false;
      if (res.data == `User Registered with username ${this.username}`) {
        let res = await axios.post(
          `${process.env.VUE_APP_API_URL}/user/token`,
          {
            Email: this.email,
            Password: this.password,
          }
        );
        if (res.data.isAuthenticated) {
          this.$store.dispatch("setUser", res.data);
          this.$router.push("/");
        }
      } else this.messageFromAPI = res.data.message;
      console.log(this.messageFromAPI);
    },
  },
};
</script>

<style scoped>
.register-form-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
button {
  border: none;
  height: 2.5rem;
  border-radius: 20px;
  color: white;
  font-weight: 800;
  width: 100%;
  margin-top: 2rem;
}
@media (max-width: 768px) {
  .box {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
}
</style>
