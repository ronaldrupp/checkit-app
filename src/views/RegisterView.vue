<template>
  <div class="container">
    <div class="box">
      <img class="logo" src="@/assets/logo.png" />
      <form>
        <input
          type="text"
          v-model="firstname"
          placeholder="Firstname"
          required
        />
        <input type="text" v-model="lastname" placeholder="Lastname" required />
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="text" v-model="email" placeholder="Email" required />
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />
        <button @click.prevent="handleRegister">Register</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async handleRegister() {
      let res = await axios.post(`${process.env.VUE_APP_API_URL}/register`, {
        FirstName: this.firstname,
        LastName: this.lastname,
        Email: this.email,
        Password: this.password,
        Username: this.username,
      });
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
      }
    },
  },
};
</script>

<style scoped>
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
button {
  border: none;
  background-color: var(--primary-color);
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
