<template>
  <div>
    <input type="text" v-model="name" />
    <input type="email" v-model="email" />
    <input type="password" v-model="password" />
    <button>Register</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      password: "",
      email: "",
    };
  },
  methods: {
    async handleRegister() {
      let res = await axios.post(`${process.env.VUE_APP_API_URL}/register`, {
        name: this.name,
        password: this.password,
        email: this.email,
      });
      this.$store.dispatch("setUser", res.data);
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>
