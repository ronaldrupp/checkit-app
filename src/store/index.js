import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: window.localStorage.getItem("user"),
  },
  mutations: {
    setUser(state, value) {
      this.state.user = value;
      console.log(value)
      window.localStorage.setItem("user", value);
    },
    setLogout() {
      this.state.user = undefined;
      window.localStorage.removeItem("user");
    },
  },
  actions: {
    setUser(context, value) {
      context.commit("setUser", value);
    },
    logout(context) {
      context.commit("setLogout");
    },
  },
  modules: {},
});
