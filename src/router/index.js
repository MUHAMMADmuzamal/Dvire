import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Card from "../views/Card.vue";
import Dictionary from "../views/Dictionary";
import Laws from "../views/Laws";
import News from "../views/News";
import About from "../views/AboutView.vue";
import login from "../views/Login.vue";
import {PATH, PAGES_NAMES} from '../../config'

Vue.use(VueRouter);

const routes = [
  {
    path: PATH.LANDING_PAGE,
    name: PAGES_NAMES.LANDING_PAGE,
    component: Landing,
  },
  {
    path: PATH.CARD_PAGE,
    name: PAGES_NAMES.CARD_PAGE,
    component: Card,
  },
  {
    path: PATH.NEWS_PAGE,
    name: PAGES_NAMES.NEWS_PAGE,
    component: News,
  },
  {
    path: PATH.LAWS_PAGE,
    name: PAGES_NAMES.LAWS_PAGE,
    component: Laws,
  },
  {
    path: PATH.DICTIONARY_PAGE,
    name: PAGES_NAMES.DICTIONARY_PAGE,
    component: Dictionary,
  },
  {
    path: PATH.ABOUT_PAGE,
    name: PAGES_NAMES.ABOUT_PAGE,
    component: About,
  },
  {
    path: "/testing",
    name: "testing",
    component: login,
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
