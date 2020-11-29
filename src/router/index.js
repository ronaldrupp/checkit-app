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
import CreateFeedbackView from "../views/CreateFeedbackView.vue";
import FeedbackDetail from "../views/FeedbackDetail";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/class" },
  {
    path: "/class",
    name: "Class",
    component: ClassView,
    // children: [
    //   { path: "/class/:class", component: ClassComp },
    //   { path: "/:class/:feedback", component: FeedbackDetail },
    // ],
  },
  { path: "/class/:class", component: ClassComp },
  { path: "/class/:class/:feedback", component: FeedbackDetail },
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
    path: "/feedbacks",
    name: "Feedbacks",
    component: Home,
  },
  {
    path: "/create",
    name: "CreateFeedback",
    component: CreateFeedbackView,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/imprint",
    name: "Imprint",
    component: () =>
      import(/* webpackChunkName: "imprint" */ "../views/Impressum.vue"),
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: "smooth",
      };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.name !== "LoginView" && !store.state.user) next({ name: "LoginView" });
  else next();
});

export default router;
