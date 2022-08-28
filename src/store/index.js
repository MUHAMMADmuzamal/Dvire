import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { PAGES_NAMES, PATH, DASHBOARD } from "../../config";
export default new Vuex.Store({
  strict:true,
  state: {
    app_header_states:{
      side_bar_show : false,
      web_menu_items:[
        // { title: PAGES_NAMES.LANDING_PAGE, path: PATH.LANDING_PAGE },    
        { title: PAGES_NAMES.CARD_PAGE, path: PATH.CARD_PAGE },
        { title: PAGES_NAMES.NEWS_PAGE, path: PATH.NEWS_PAGE },
        { title: PAGES_NAMES.LEGAL_ENVIRONMENT_PAGE, path: PATH.LEGAL_ENVIRONMENT_PAGE },
        { title: PAGES_NAMES.EU_INVESTMENTS_PAGE, path: PATH.EU_INVESTMENTS_PAGE },  
        { title: PAGES_NAMES.ABOUT_PAGE, path: PATH.ABOUT_PAGE},
        { title: PAGES_NAMES.DICTIONARY_PAGE, path: PATH.DICTIONARY_PAGE },
        { title: PAGES_NAMES.LAWS_PAGE, path: PATH.LAWS_PAGE },
        { title: PAGES_NAMES.LANG_PAGE, path: PATH.LANG_PAGE },
        { title: PAGES_NAMES.BLOG_PAGE, path: PATH.BLOG_PAGE },
        { title: PAGES_NAMES.SIGNUP_PAGE, path: PATH.SIGNUP_PAGE},
        { title: PAGES_NAMES.LOGIN_PAGE, path: PATH.LOGIN_PAGE },       
            
        { title: DASHBOARD.PAGES_NAMES.DASHBOARD_PAGE, path: DASHBOARD.PATH.DASHBOARD },
  ],
      dashboard_menu_items:[
        { title: DASHBOARD.PAGES_NAMES.DASHBOARD_PAGE, path: DASHBOARD.PATH.DASHBOARD},
        { title: DASHBOARD.PAGES_NAMES.D_ABOUT_PAGE, path: DASHBOARD.PATH.D_ABOUT_PAGE},
        { title: DASHBOARD.PAGES_NAMES.D_POSTS_PAGE, path: DASHBOARD.PATH.D_POSTS_PAGE},
        { title: DASHBOARD.PAGES_NAMES.D_EDIT_PAGES_PAGE, path: DASHBOARD.PATH.D_EDIT_PAGES_PAGE},
  ],
  dashboard: false,
    },
  auth:{
    token:"",
    userInfo:{}
  }
  },
  getters: {
    //use when need some calculations on data.
    isAdmin(){
      return state.auth.userInfo.is_admin == 0 ? true :false; 
    },
    isLogin(){
      return !!state.auth.token;
    }
  },
  mutations: {
    showHideSideBarDrawer:(state,value)=>{
      state.app_header_states.side_bar_show = value;
    },
    setDashboard:(state,value=false)=>{
      state.app_header_states.dashboard = value;
    },
  },
  actions: {},
  modules: {},
});
