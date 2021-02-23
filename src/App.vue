<template>
  <div
    id="app"
    class="dark:bg-gray-900 bg-white dark:text-white overflow-hidden outline-none"
  >
    <div class="app-wrapper">
      <NavBar v-if="showNav && $store.state.user" />
      <router-view class="flex-1" />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import PackageJson from "./../package.json";

export default {
  metaInfo: {
    // all titles will be injected into this template
    titleTemplate: "%s | Check-It",
  },
  components: {
    NavBar,
  },
  created() {
    console.log("App Version " + PackageJson.version);
  },
  computed: {
    showNav() {
      return !(
        ["Login", "Register", "ResAuth"].indexOf(this.$route.name) >
        -1
      );
    },
  },
};
</script>
<style>
:root {
  --linear-gradient: linear-gradient(
    349deg,
    rgba(132, 0, 255, 1) 0%,
    rgba(72, 72, 255, 1) 47%,
    rgba(0, 212, 255, 1) 100%
  );
}
html {
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
}
body {
  /* min-height: 100%;
  min-height: -webkit-fill-available; */
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  overflow: hidden;
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
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.app-wrapper {
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0rem auto;
}
/*
#nav a {
  font-weight: bold;
  color: #2c3e50;
}*/

a.router-link-active,
a.router-link-exact-active {
  color: #0c8fed;
}
</style>
