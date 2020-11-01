<template>
  <div id="app">
    <NavBar v-if="$store.state.user" />
    <router-view class="routerView"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;800&display=swap");

:root {
  --primary-color: #30a1f2;
  --background-color: white;
  --input-background-color: #ededed;
  --input-placeholder-color: #7b7b7b;
  --border-radius: 20px;
}
html {
  height: -webkit-fill-available;
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  min-height: -webkit-fill-available;
  margin: 0px;
  padding: 0px;
}
h1 {
  margin: 0;
}
a{
  text-decoration: none;
  color: var(--primary-color);
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
.routerView{
  flex-grow: 1;
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
