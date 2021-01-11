import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: JSON.parse(window.localStorage.getItem("user")),
    token: {},
    courses: []
  },
  mutations: {
    setUser(state, value) {
      this.state.user = value;
      window.localStorage.setItem("user", JSON.stringify(value));
    },
    setLogout() {
      this.state.user = undefined;
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("token");
    },
    setCourses(value) {
      this.state.courses = value
    },
    setToken(state, value) {
      this.state.token = value;
      window.localStorage.setItem("token", JSON.stringify(value));
    },
  },
  actions: {
    setUser(context, value) {
      context.commit("setUser", value);
    },
    logout(context) {
      context.commit("setLogout");
    },
    setToken(context, value) {
      context.commit("setToken", value)
    },
    async getCourses(context) {
      console.log(this.state.token)
      let res = await axios.get(
        `${process.env.VUE_APP_API_URL}/Courses/registedcourses/${this.state.token.userId}`,
        {headers: { Authorization: `Bearer ${this.state.token.aT}` }}
      );
      console.log(res)
      context.commit("setCourses", res.data)
    }
  },
  modules: {},
});
