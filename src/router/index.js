import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Card from "../views/Card.vue";
import Dictionary from "../views/Dictionary";
import Laws from "../views/Laws";
import News from "../views/News";
import About from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/card",
    name: "card",
    component: Card,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/laws",
    name: "laws",
    component: Laws,
  },
  {
    path: "/dictionary",
    name: "dictionary",
    component: Dictionary,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
