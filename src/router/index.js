import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Card from "../views/Card.vue";
import Dictionary from "../views/Dictionary";
import Laws from "../views/Laws";
import News from "../views/News";
import Blogs from "../views/Blogs";
import About from "../views/AboutView.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import ForgetPass from "../views/ForgetPassword.vue";
//dashboard
import DashBoard from "../views/dashboard/Dashboard.vue";
import D_About from "../views/dashboard/About.vue";
import D_Posts from "../views/dashboard/Posts.vue";
import D_Types from "../views/dashboard/Types.vue";
import {PATH, PAGES_NAMES, DASHBOARD} from '../../config'

Vue.use(VueRouter);

// function r_route (path, file, name, children,dashboard=false) {
//   let component = ''
//   if (dashboard) {
//     component = require(`../views/dashboard/${file}.vue`)
//   }else{
//     component = require(`../views/${file}.vue`)
//   }
//   return {
//     exact: true,
//     path,
//     name,
//     children,
//     component: component
//   }
// }
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
    path: PATH.BLOG_PAGE,
    name: PAGES_NAMES.BLOG_PAGE,
    component: Blogs,
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
    path: PATH.LOGIN_PAGE,
    name: PAGES_NAMES.LOGIN_PAGE,
    component: Login,
  },
  {
    path: PATH.SIGNUP_PAGE,
    name: PAGES_NAMES.SIGNUP_PAGE,
    component: Signup,
  },
  {
    path: PATH.FORGET_PASSWORD_PAGE,
    name: PAGES_NAMES.FORGET_PASSWORD_PAGE,
    component: ForgetPass,
  },
  //dashboard 
  {
    path: DASHBOARD.PATH.DASHBOARD,
    name: DASHBOARD.PAGES_NAMES.DASHBOARD_PAGE,
    component: DashBoard,
  },
  {
    path: DASHBOARD.PATH.D_ABOUT_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.D_ABOUT_PAGE,
    component: D_About,
  },
  {
    path: DASHBOARD.PATH.D_POSTS_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.D_POSTS_PAGE,
    component: D_Posts,
  },
  {
    path: DASHBOARD.PATH.D_TYPES_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.D_TYPES_PAGE,
    component: D_Types,
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
