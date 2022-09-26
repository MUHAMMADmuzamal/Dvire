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

import * as VueGoogleMaps from "vue2-google-maps"

Vue.use(VueGoogleMaps, {
  load: {
    key: "Add Your Google Map Key",
    libraries: "places" // necessary for places input
  }
});

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
