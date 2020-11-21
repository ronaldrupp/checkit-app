import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import Home from "../views/Home.vue";
import Feedback from "../views/Feedback.vue";
import LoginView from "../views/LoginView.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/404.vue";
import ClassView from "../views/ClassView.vue";
import ClassComp from "../components/ClassComp.vue";

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
    path: "/feedback/:id",
    name: "Feedback",
    component: Feedback,
  },
  {
    path: "/class",
    name: "Class",
    component: ClassView,
    children: [{ path: "/class/:class", component: ClassComp }],
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "*",
    component: NotFound,
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
