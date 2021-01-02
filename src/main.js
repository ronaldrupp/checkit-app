import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueConfetti from "vue-confetti";
import VueMeta from "vue-meta";
import "./tailwind.css";
import {i18n} from './plugins/i18n.js'
import vueScrollto from "vue-scrollto";

Vue.use(vueScrollto);
Vue.use(VueConfetti);
Vue.use(VueMeta);



Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
