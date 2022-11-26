import { createRouter, createWebHistory } from "vue-router";
import VueHeader from "../components/VueHeader.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: VueHeader,
  },
  {
    path: "/demolition/",
    name: "demolition",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/VueDemolition.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
