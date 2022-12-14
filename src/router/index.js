import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Card from "../views/Card.vue";
import Dictionary from "../views/Dictionary";
import Laws from "../views/Laws";
import News from "../views/News";
import NewsDetail from "../views/NewsDetail";
import Blogs from "../views/Blogs";
import About from "../views/AboutView.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Signup from "../views/Signup.vue";
import ForgetPass from "../views/ForgetPassword.vue";
import LegalEnvironment from "../views/LegalEnvironment.vue";
import EUInvestments from "../views/EUInvestments.vue";
import ConsultationDescriptionPage from "../views/ConsultationDescriptionPage.vue";
import ConsultingOrders from "../views/ConsultingOrders.vue";
import Contacts from "../views/Contacts.vue";
import GasStationNetworkMap from "../views/GasStationNetworkMap.vue";
import Props from "../views/Props.vue";
import PurchaseOfFuelCard from "../views/PurchaseOfFuelCard.vue";
import RequestForm from "../views/RequestForm.vue";
import SelfService from "../views/SelfService.vue";
//dashboard
import DashBoard from "../views/dashboard/Dashboard.vue";
import D_Posts from "../views/dashboard/Posts.vue";
import D_Types from "../views/dashboard/Types.vue";
import D_Users from "../views/dashboard/Users.vue";
import D_EditPages from "../views/dashboard/EditPages.vue";
import D_News from "../views/dashboard/News.vue";
import D_languages from "../views/dashboard/Languages";
import {PATH, PAGES_NAMES, DASHBOARD, ROLES} from '../../config'
import AuthenticationService from '../mixins/services/auth-service'
Vue.use(VueRouter);

const routes = [
  {
    path: PATH.LANDING_PAGE,
    name: PAGES_NAMES.LANDING_PAGE,
    component: Landing,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.CARD_PAGE,
    name: PAGES_NAMES.CARD_PAGE,
    component: Card,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.NEWS_PAGE,
    name: PAGES_NAMES.NEWS_PAGE,
    component: News,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.NEWS_DETAIL_PAGE,
    name: PAGES_NAMES.NEWS_DETAIL_PAGE,
    component: NewsDetail,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.BLOG_PAGE,
    name: PAGES_NAMES.BLOG_PAGE,
    component: Blogs,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.LAWS_PAGE,
    name: PAGES_NAMES.LAWS_PAGE,
    component: Laws,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.DICTIONARY_PAGE,
    name: PAGES_NAMES.DICTIONARY_PAGE,
    component: Dictionary,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.CONSULTATION_ORDER_PAGE,
    name: PAGES_NAMES.CONSULTATION_ORDER_PAGE,
    component: ConsultingOrders,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.CONSULTATION_DESCRIPTION_PAGE,
    name: PAGES_NAMES.CONSULTATION_DESCRIPTION_PAGE,
    component: ConsultationDescriptionPage,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.CONTACTS_PAGE,
    name: PAGES_NAMES.CONTACTS_PAGE,
    component: Contacts,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.GAS_STATION_NETWORK_MAP_PAGE,
    name: PAGES_NAMES.GAS_STATION_NETWORK_MAP_PAGE,
    component: GasStationNetworkMap,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.PROPS_PAGE,
    name: PAGES_NAMES.PROPS_PAGE,
    component: Props,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.PAYMENT_CARD_PAGE,
    name: PAGES_NAMES.PAYMENT_CARD_PAGE,
    component: PurchaseOfFuelCard,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.REQUEST_FORM_PAGE,
    name: PAGES_NAMES.REQUEST_FORM_PAGE,
    component: RequestForm,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.SELF_SERVICE_PAGE,
    name: PAGES_NAMES.SELF_SERVICE_PAGE,
    component: SelfService,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.ABOUT_PAGE,
    name: PAGES_NAMES.ABOUT_PAGE,
    component: About,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.LOGIN_PAGE,
    name: PAGES_NAMES.LOGIN_PAGE,
    component: Login,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.SIGNUP_PAGE,
    name: PAGES_NAMES.SIGNUP_PAGE,
    component: Signup,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.FORGET_PASSWORD_PAGE,
    name: PAGES_NAMES.FORGET_PASSWORD_PAGE,
    component: ForgetPass,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.LEGAL_ENVIRONMENT_PAGE,
    name: PAGES_NAMES.LEGAL_ENVIRONMENT_PAGE,
    component: LegalEnvironment,
    meta: { authorize: [] }, 
  },
  {
    path: PATH.EU_INVESTMENTS_PAGE,
    name: PAGES_NAMES.EU_INVESTMENTS_PAGE,
    component: EUInvestments,
    meta: { authorize: [] }, 
  },
  //dashboard 
  {
    path: DASHBOARD.PATH.DASHBOARD,
    name: DASHBOARD.PAGES_NAMES.DASHBOARD_PAGE,
    component: DashBoard,
    meta: { authorize: [ROLES.ADMIN] } 
  },
  {
    path: DASHBOARD.PATH.D_POSTS_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.D_POSTS_PAGE,
    component: D_Posts,
    meta: { authorize: [ROLES.ADMIN] } 
  },
  {
    path: DASHBOARD.PATH.D_TYPES_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.D_TYPES_PAGE,
    component: D_Types,
    meta: { authorize: [ROLES.ADMIN] } 
  },
  {
    path: DASHBOARD.PATH.D_EDIT_PAGES_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.D_EDIT_PAGES_PAGE,
    component: D_EditPages,
    meta: { authorize: [ROLES.ADMIN] } 
  },
  {
    path: DASHBOARD.PATH.D_USERS_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.D_USERS_PAGE,
    component: D_Users,
    meta: { authorize: [ROLES.ADMIN] } 
  },
  {
    path: DASHBOARD.PATH.D_LANGUAGES_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.D_LANGUAGES_PAGE,
    component: D_languages,
    meta: { authorize: [ROLES.ADMIN] } 
  },
  {
    path: DASHBOARD.PATH.D_NEWS_PAGE,
    name: "D_"+DASHBOARD.PAGES_NAMES.NEWS_PAGE,
    component: D_News,
    meta: { authorize: [ROLES.ADMIN] } 
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
  {
    path: PATH.LOGOUT_PAGE,
    name: PAGES_NAMES.LOGOUT_PAGE,
    component: Logout,
    meta: { authorize: [] } 
  },
  // otherwise redirect to home
  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const { authorize } = to.meta;
  const currentUser = new AuthenticationService($cookies.get('user'));
  if (authorize.length > 0) {
      if (!currentUser.isLogin()) {
          // not logged in so redirect to login page with the return url
          return next({ path: PATH.LOGIN_PAGE, query: { returnUrl: to.path } });
      }
      
      // check if route is restricted by role
      if (authorize.length && !authorize.includes(currentUser.role())) {
          // role not authorised so redirect to home page
          return next({ path: '/' });
      }
  }

  next();
})