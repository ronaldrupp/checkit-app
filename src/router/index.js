import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import Feedback from "../views/Feedback.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/register",
    name: "RegisterView",
    component: RegisterView,
  },
  {
    path: "/feedback/:id",
    name: "Feedback",
    component: Feedback,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (
    to.name !== "LoginView" &&
    to.name !== "Feedback" &&
    to.name !== "RegisterView" &&
    !store.state.user
  )
    next({ name: "LoginView" });
  else next();
});

export default router;
