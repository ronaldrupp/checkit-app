import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueConfetti from "vue-confetti";
import VueMeta from "vue-meta";
import "./tailwind.css";
import { i18n } from "./plugins/i18n.js";
import GAuth from "vue-google-oauth2";
import { polyfill } from "seamless-scroll-polyfill";

polyfill();

const gauthOption = {
  clientId:
    "10275853460-f457s1rj15u25f4lj0irtnt701187acv.apps.googleusercontent.com",
  scope:
    "https://www.googleapis.com/auth/classroom.announcements https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.profile.photos https://www.googleapis.com/auth/classroom.profile.emails https://www.googleapis.com/auth/classroom.rosters https://www.googleapis.com/auth/classroom.rosters.readonly openid",
  prompt: "select_account",
};

Vue.use(GAuth, gauthOption);
Vue.use(VueConfetti);
Vue.use(VueMeta);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
