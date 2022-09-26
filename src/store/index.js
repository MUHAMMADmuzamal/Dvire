import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { PAGES_NAMES, PATH, DASHBOARD, ROLES } from "../../config";
// import en from '../lang/en'
// import lt from '../lang/lt'
// import ru from '../lang/ru'
// const eng = JSON.parse('{"hello":"hello","goodbye":"Goodbye"}');
export default new Vuex.Store({
  strict:true,
  state: {
    app_header_states:{
      side_bar_show : false,
      web_menu_items:[
        // { title: PAGES_NAMES.LANDING_PAGE, path: PATH.LANDING_PAGE },    
        { title: PAGES_NAMES.CARD_PAGE, path: PATH.CARD_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.NEWS_PAGE, path: PATH.NEWS_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.LEGAL_ENVIRONMENT_PAGE, path: PATH.LEGAL_ENVIRONMENT_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.EU_INVESTMENTS_PAGE, path: PATH.EU_INVESTMENTS_PAGE,requiredLogin:false, showFor:ROLES.USER },  
        { title: PAGES_NAMES.ABOUT_PAGE, path: PATH.ABOUT_PAGE,requiredLogin:false, showFor:ROLES.USER},
        { title: PAGES_NAMES.DICTIONARY_PAGE, path: PATH.DICTIONARY_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.LAWS_PAGE, path: PATH.LAWS_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.CONSULTATION_DESCRIPTION_PAGE, path: PATH.CONSULTATION_DESCRIPTION_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.CONSULTATION_ORDER_PAGE, path: PATH.CONSULTATION_ORDER_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.CONTACTS_PAGE, path: PATH.CONTACTS_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.GAS_STATION_NETWORK_MAP_PAGE, path: PATH.GAS_STATION_NETWORK_MAP_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.PROPS_PAGE, path: PATH.PROPS_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.PAYMENT_CARD_PAGE, path: PATH.PAYMENT_CARD_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.REQUEST_FORM_PAGE, path: PATH.REQUEST_FORM_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.SELF_SERVICE_PAGE, path: PATH.SELF_SERVICE_PAGE,requiredLogin:false, showFor:ROLES.USER },
        // { title: PAGES_NAMES.LANG_PAGE, path: PATH.LANG_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.BLOG_PAGE, path: PATH.BLOG_PAGE,requiredLogin:false, showFor:ROLES.USER },
        { title: PAGES_NAMES.SIGNUP_PAGE, path: PATH.SIGNUP_PAGE,requiredLogin:false, showFor:ROLES.USER},
        { title: PAGES_NAMES.LOGIN_PAGE, path: PATH.LOGIN_PAGE,requiredLogin:false, showFor:ROLES.USER},       
        { title: PAGES_NAMES.LOGOUT_PAGE, path: PATH.LOGOUT_PAGE,requiredLogin:false, showFor:ROLES.USER },       
            
        { title: DASHBOARD.PAGES_NAMES.DASHBOARD_PAGE, path: DASHBOARD.PATH.DASHBOARD,requiredLogin:true, showFor:ROLES.ADMIN },
  ],
      dashboard_menu_items:[
        { title: DASHBOARD.PAGES_NAMES.DASHBOARD_PAGE, path: DASHBOARD.PATH.DASHBOARD,requiredLogin:true, showFor:ROLES.ADMIN},
        { title: DASHBOARD.PAGES_NAMES.D_POSTS_PAGE, path: DASHBOARD.PATH.D_POSTS_PAGE,requiredLogin:true, showFor:ROLES.ADMIN},
        { title: DASHBOARD.PAGES_NAMES.D_EDIT_PAGES_PAGE, path: DASHBOARD.PATH.D_EDIT_PAGES_PAGE,requiredLogin:true, showFor:ROLES.ADMIN},
        { title: DASHBOARD.PAGES_NAMES.D_TYPES_PAGE, path: DASHBOARD.PATH.D_TYPES_PAGE,requiredLogin:true, showFor:ROLES.ADMIN},
        { title: DASHBOARD.PAGES_NAMES.D_USERS_PAGE, path: DASHBOARD.PATH.D_USERS_PAGE,requiredLogin:true, showFor:ROLES.ADMIN},
        { title: DASHBOARD.PAGES_NAMES.D_LANGUAGES_PAGE, path: DASHBOARD.PATH.D_LANGUAGES_PAGE,requiredLogin:true, showFor:ROLES.ADMIN},
        { title: DASHBOARD.PAGES_NAMES.D_NEWS_PAGE, path: DASHBOARD.PATH.D_NEWS_PAGE,requiredLogin:true, showFor:ROLES.ADMIN},
  ],
  dashboard: false,
    },
    activeLocale: 'lt',
    language:{
      en:null,
      lt:null,
      ru:null,
    },
  },
  getters: {
    //use when need some calculations on data.
    localised: (state) =>(key) => {
      const lang  = localStorage.getItem('lang')

      if (lang != undefined) {
        state.activeLocale = lang;
      }
      if (state.language[state.activeLocale] != null && state.language[state.activeLocale][key] != undefined ) {
        if (key in state.language[state.activeLocale]) {
          return state.language[state.activeLocale][key];
        }
      }
      return key 
      // return state.language[state.activeLocale][key];
      
    },
  },
  mutations: {
    showHideSideBarDrawer:(state,value)=>{
      state.app_header_states.side_bar_show = value;
    },
    setDashboard:(state,value=false)=>{
      state.app_header_states.dashboard = value;
    },
    changeLanguage(state,key){
      localStorage.setItem('lang', key);
      state.activeLocale=key;
    },
    setEn(state,en){
      state.language.en = en;
    },
    setLt(state,lt){
      state.language.lt = lt;
    },
    setRu(state,ru){
      state.language.ru = ru;
    },
  },
  actions: {},
  modules: {},
});
