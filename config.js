// import ProfileImage from "./assets/Images/profile.png";
import CompanyLogoSVG from "./src/assets/images/logo.svg";
import CompanyLogoWhiteSVG from "./src/assets/images/logo_white.svg";
import OGIMAGE from "./src/assets/images/og_image.svg";
import GAS from "./src/assets/images/gas.svg";
import LEAF from "./src/assets/images/leaf.svg";
import FLASH from "./src/assets/images/flash.svg";
import CLOUD from "./src/assets/images/cloud_image.svg";
import GAS_STATION_ICON_IMAGE from "./src/assets/images/gas_station_icon_image.svg";
import GAS_STATION_IMAGE from "./src/assets/images/gas_station.svg";
import LINKEDIN_ICON from "./src/assets/images/fb_icon.svg";
import FB_ICON from "./src/assets/images/linkedin_icon.svg";

let IMAGES = {
  COMPANY_LOGO: CompanyLogoSVG,
  COMPANY_LOGO_WHITE: CompanyLogoWhiteSVG,
  OG_IMAGE: OGIMAGE,
  GAS: GAS,
  LEAF: LEAF,
  FLASH: FLASH,
  CLOUD: CLOUD,
  GAS_STATION_ICON_IMAGE: GAS_STATION_ICON_IMAGE,
  GAS_STATION_IMAGE: GAS_STATION_IMAGE,
  FB_ICON: FB_ICON,
  LINKEDIN_ICON: LINKEDIN_ICON,
};

const PAGES_NAMES = {
    LANDING_PAGE: "Home",
    ABOUT_PAGE: "About",
    CARD_PAGE: "Card",
    DICTIONARY_PAGE: "Dictionary",
    LAWS_PAGE: "Laws",
    NEWS_PAGE: "News",
    LANG_PAGE : "LT | EN",
    LOGIN_PAGE : "Login",
    SIGNUP_PAGE : "Signup",
    PROFILE_PAGE : "Profile",
    FORGET_PASSWORD_PAGE : "ForgetPassword",
    CONTACTS_PAGE : "contact",
    PROPS_PAGE : "Props",
    GAS_STATION_NETWORK_MAP_PAGE : "Gas Station Network Map",
    REQUEST_FORM_PAGE : "Request Form",
    SELF_SERVICE_PAGE : "Self-Service",
    PAYMENT_CARD_PAGE : "Purchase of a fuel payment card",
    CONSULTATION_ORDER_PAGE : "Consultation order",
};

let BRAND_NAME = "Dvire";

const PATH = {
  LANDING_PAGE: "/",
  ABOUT_PAGE: "/about",
  CARD_PAGE: "/card",
  DICTIONARY_PAGE: "/dictionary",
  LAWS_PAGE: "/laws",
  NEWS_PAGE: "/news",
  LANG_PAGE : "/lang",
  LOGIN_PAGE : "/login",
  SIGNUP_PAGE : "/signup",
  PROFILE_PAGE : "/profile",
  FORGET_PASSWORD_PAGE: '/forgetpass',
  CONTACTS_PAGE : "/contact",
  PROPS_PAGE : "/props",
  GAS_STATION_NETWORK_MAP_PAGE : "/Gas_station_network_map",
  REQUEST_FORM_PAGE : "/requestform",
  SELF_SERVICE_PAGE : "/selfservice",
  PAYMENT_CARD_PAGE : "/paymentcard",
  CONSULTATION_ORDER_PAGE : "/Consultationorder",
};
const baseUrl_dashboard = '/dashboard'
const DASHBOARD = {
    PATH:{
      DASHBOARD : baseUrl_dashboard,
      D_ABOUT_PAGE : baseUrl_dashboard + '/about',
      D_POSTS_PAGE : baseUrl_dashboard + '/posts',
      D_TYPES_PAGE : baseUrl_dashboard + '/types',
    },
    PAGES_NAMES:{
      DASHBOARD_PAGE: "Dashboard",
      D_ABOUT_PAGE: "About",
      D_POSTS_PAGE: "Posts",
      D_TYPES_PAGE: "Types",
    }
};

// const baseUrl = "http://restapi.adequateshop.com";
const baseUrl = "http://localhost:8000";
// const baseUrl = "http://localhost:3000";
// const baseUrl = "https://api.groupick.in/api/v1";

const APP_SETTINGS = {
  API_PATH: {
    BASEURL: baseUrl,
    // ACCOUNT: {
    //   registerAccount: baseUrl + "/api/register",
    //   loginAccount: baseUrl + "/api/login",
    // },
    // POSTS:{
    //   Posts: baseUrl + "/api/posts",
    //   Types: baseUrl + "/api/types",
    // },
    // ABOUT:{
    //   About: baseUrl + "/api/about",
    // },

    // Testing Api Paths
    ACCOUNT: {
      registerAccount: baseUrl + "/api/register",
      loginAccount: baseUrl + "/api/login",
    },
    POSTS:{
      Posts: baseUrl + "/api/post",
      Types: baseUrl + "/api/type",
    },
    ABOUT:{
      About: baseUrl + "/about",
    },
    USER:{
      User: baseUrl + "/userS",
    },
  },
};


const COLORS = {
    MAIN_COLOR_1 : "#F8F4EF",
    SECTION_3_COLOR : "#0F4C81",
};

const API_KEY={
  TINY_MCE:{
    Key:'aml8k16foy26t9p28u0jp4ma2ogwa84fv6zyf0l9lf09opw3',
  }
}
export { BRAND_NAME, IMAGES, PATH, PAGES_NAMES, COLORS, APP_SETTINGS , DASHBOARD, API_KEY};