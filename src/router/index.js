import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/index";
import SavedFeedbacksView from "../views/SavedFeedbacksView.vue";
import Feedback from "../views/Feedback.vue";
import LoginView from "../views/LoginView.vue";
import Profile from "../views/Profile.vue";
import NotFound from "../views/404.vue";
import ClassView from "../views/ClassView.vue";
import ClassDetailView from "../views/ClassDetailView.vue";
import CreateFeedbackView from "../views/CreateFeedbackView.vue";
import FeedbackDetail from "../views/FeedbackDetail";
import resFromAPI from "../views/resFromAPI.vue";
import CreateFeedbackClassic from "../views/CreateFeedbackClassic.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/class" },
  {
    path: "/class",
    name: "Class",
    component: ClassView,
  },
  { path: "/class/:courseId", component: ClassDetailView },
  { path: "/class/:courseId/:feedback", component: FeedbackDetail },
  {
    path: "/resAuth",
    name: "ResAuth",
    component: resFromAPI,
  },
  {
    path: "/login",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/feedback/:courseId/:surveyId",
    name: "Feedback",
    component: Feedback,
  },
  {
    path: "/savedfeedbacks",
    name: "Feedbacks",
    component: SavedFeedbacksView,
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
    path: "/create/classic",
    name: "classicfeedback",
    component: CreateFeedbackClassic,
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
  if (to.name !== "LoginView" && to.name !== "ResAuth" && !store.state.user) {
    console.log(to);
    next({
      name: "LoginView",
      query: {
        redirect: to.path,
      },
    });
  } else next();
});

export default router;
