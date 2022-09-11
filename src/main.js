import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueCookies from 'vue-cookies'
import VueToast from 'vue-toast-notification';
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css';
// import 'vue-toast-notification/dist/theme-sugar.css';

import VGoogleTranslate from "v-google-translate";

Vue.use(VGoogleTranslate)

Vue.use(VueToast, {
  position:'top-right',
});

Vue.config.productionTip = false;
Vue.use(VueCookies)
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
