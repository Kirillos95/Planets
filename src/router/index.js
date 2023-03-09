import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/mercury",
    name: "mercury",
    component: () => import("../views/MercuryV.vue"),
  },
  {
    path: "/venus",
    name: "venus",
    component: () => import("../views/VenusV.vue"),
  },
  {
    path: "/earth",
    name: "earth",
    component: () => import("../views/EarthV.vue"),
  },
  {
    path: "/mars",
    name: "mars",
    component: () => import("../views/MarsV.vue"),
  },
  {
    path: "/jupiter",
    name: "jupiter",
    component: () => import("../views/JupiterV.vue"),
  },
  {
    path: "/saturnus",
    name: "saturnus",
    component: () => import("../views/SaturnusV.vue"),
  },
  {
    path: "/uranus",
    name: "uranus",
    component: () => import("../views/UranusV.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
