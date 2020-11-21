<template>
  <div id="app">
    <NavBar v-if="showNav && $store.state.user" />
    <router-view class="flex-grow" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
  computed: {
    showNav() {
      return !(["Login", "Register", "Feedback"].indexOf(this.$route.name) > -1);
    },
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;800&display=swap");

:root {
  --primary-color: #30a1f2;
  --secondary-color: black;
  --linear-gradient: linear-gradient(
    349deg,
    rgba(132, 0, 255, 1) 0%,
    rgba(72, 72, 255, 1) 47%,
    rgba(0, 212, 255, 1) 100%
  );
  --background-color: white;
  --alert-color: rgb(255, 100, 100);
  --input-background-color: #ededed;
  --input-placeholder-color: #7b7b7b;
  --border-radius: 20px;
}
html {
  height: -webkit-fill-available;
  box-sizing: border-box;
  height: 100%;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
body {
  min-height: -webkit-fill-available;
  margin: 0px;
  padding: 0px;
  height: 100%;
}
button {
  background-color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);
}
h1 {
  margin: 0;
}
a {
  text-decoration: none;
  color: var(--secondary-color);
}
#app {
  font-family: "Jost", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 100%;
}
/*
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
