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
      window.localStorage.setItem("user", value);
    },
  },
  actions: {
    setUser(context, value) {
      context.commit("setUser", value);
    },
  },
  modules: {},
});
