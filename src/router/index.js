import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Feedback from "../views/Feedback.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/feedback/:id",
    name: "Feedback",
    component: Feedback,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
