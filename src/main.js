import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueConfetti from "vue-confetti";
import VueMeta from "vue-meta";
import GAuth from "vue-google-oauth2";
import "./tailwind.css";
import {i18n} from './plugins/i18n.js'


const gauthOption = {
  clientId:
    "10275853460-f457s1rj15u25f4lj0irtnt701187acv.apps.googleusercontent.com",
  scope: "profile email",
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
