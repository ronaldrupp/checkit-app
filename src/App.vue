<template>
  <div id="app">
    <!-- <h1>Vuex: {{ $store.state.user }}</h1>
    <input type="text" v-model="userName" @keyup="setUser"/> -->
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "Tess Tosterone",
    };
  },
  created() {
    this.setUser();
  },
  methods: {
    setUser() {
      this.$store.dispatch("setUser", this.userName);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;800&display=swap");
body {
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Jost", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
