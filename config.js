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
import SLIDER_IMAGE from "./src/assets/images/slider_images.svg";

let IMAGES = {
  BASE_ADDRESS:"./src/assets/images/",
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
  SLIDER_IMAGES: [{src:SLIDER_IMAGE}],
};

const PAGES_NAMES = {
    LANDING_PAGE: "Home",
    ABOUT_PAGE: "About",
    CARD_PAGE: "Card",
    DICTIONARY_PAGE: "Dictionary",
    LAWS_PAGE: "Laws",
    NEWS_PAGE: "News",
    BLOG_PAGE: "Blogs",
    LANG_PAGE : "LT | EN",
    LOGIN_PAGE : "Login",
    LOGOUT_PAGE : "Logout",
    SIGNUP_PAGE : "Signup",
    PROFILE_PAGE : "Profile",
    FORGET_PASSWORD_PAGE : "ForgetPassword",
    CONTACTS_PAGE : "contact",
    PROPS_PAGE : "Props",
    GAS_STATION_NETWORK_MAP_PAGE : "Gas Station Network Map",
    GAS_STATION_NETWORK_MAP_WITHOUT_SPACE_PAGE : "GasStationNetworkMap",
    REQUEST_FORM_PAGE : "Request Form",
    REQUEST_FORM_WITHOUT_SPACE_PAGE : "RequestForm",
    SELF_SERVICE_PAGE : "Self-Service",
    PAYMENT_CARD_PAGE : "Purchase of a fuel payment card",
    PAYMENT_CARD_WITHOUT_SPACE_PAGE : "Purchase_of_a_fuel_payment_card",
    CONSULTATION_ORDER_PAGE : "Consultation order",
    CONSULTATION_ORDER_WITHOUT_SPACE_PAGE : "Consultation order",
    CONSULTATION_DESCRIPTION_PAGE : "Consultation Description",
    CONSULTATION_DESCRIPTION_WITHOUT_SPACE_PAGE : "ConsultationDescription",
    LEGAL_ENVIRONMENT_PAGE : "Legal Environment",
    EU_INVESTMENTS_PAGE : "EU Investments",
    EU_INVESTMENTS_WITHOUT_SPACE_PAGE : "EUInvestments",
    LEGAL_ENVIRONMENT_WITHOUT_SPACE_PAGE : "LegalEnvironment",
};
const PAGES_IDS = {
    LANDING_PAGE_ID: 1,
    ABOUT_PAGE_ID: 2,
    CARD_PAGE_ID: 11,
    DICTIONARY_PAGE_ID: 20,
    LAWS_PAGE_ID: 21,
    NEWS_PAGE_ID: 3,
    BLOG_PAGE_ID: 22,
    LANG_PAGE_ID : 0,
    
    CONTACTS_PAGE_ID : 4,
    PROPS_PAGE_ID : 5,
    GAS_STATION_NETWORK_MAP_PAGE_ID :6,
    REQUEST_FORM_PAGE_ID : 7,
    SELF_SERVICE_PAGE_ID : 8,
    PAYMENT_CARD_PAGE_ID : 9,
    CONSULTATION_ORDER_PAGE_ID : 10,
    CONSULTATION_DESCRIPTION_PAGE_ID : 12,
    EU_INVESTMENTS_PAGE_ID : 14,
    LEGAL_ENVIRONMENT_PAGE_ID : 13,
    SIGNUP_PAGE_ID : 15,
    LOGIN_PAGE_ID : 16,
    FORGET_PASSWORD_PAGE_ID : 17,
    HEADER_PAGE_ID : 18,
    FOOTER_PAGE_ID : 19,
};

let BRAND_NAME = "Dvire";

const PATH = {
  LANDING_PAGE: "/",
  ABOUT_PAGE: "/about",
  CARD_PAGE: "/card",
  DICTIONARY_PAGE: "/dictionary",
  LAWS_PAGE: "/laws",
  NEWS_PAGE: "/news",
  BLOG_PAGE: "/blogs",
  LANG_PAGE : "/lang",
  LOGIN_PAGE : "/login",
  LOGOUT_PAGE : "/logout",
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
  CONSULTATION_DESCRIPTION_PAGE : "/Consultation_Description",
  LEGAL_ENVIRONMENT_PAGE: "/LegalEnvironment",
  EU_INVESTMENTS_PAGE: "/euinvestments"
};
const baseUrl_dashboard = '/dashboard'
const DASHBOARD = {
    PATH:{
      DASHBOARD : baseUrl_dashboard,
      D_ABOUT_PAGE : baseUrl_dashboard + '/about',
      D_POSTS_PAGE : baseUrl_dashboard + '/posts',
      D_NEWS_PAGE : baseUrl_dashboard + '/d_news',
      D_TYPES_PAGE : baseUrl_dashboard + '/types',
      D_BLOG_ADD_PAGE: baseUrl_dashboard + "/post",
      D_EDIT_PAGES_PAGE: baseUrl_dashboard + "/editpages/",
      D_USERS_PAGE: baseUrl_dashboard + "/users",
      
    },
    PAGES_NAMES:{
      DASHBOARD_PAGE: "Dashboard",
      D_ABOUT_PAGE: "About",
      D_POSTS_PAGE: "Posts",
      D_NEWS_PAGE: "News",
      D_TYPES_PAGE: "Types",
      D_EDIT_PAGES_PAGE: "EditPages",
      D_USERS_PAGE: "Users",
    }
};

const baseUrl = "http://localhost:8000";
// const baseUrl = "http://localhost:3000";
// const baseUrl = "https://testing.fostermarketing.pk";

const APP_SETTINGS = {
  API_PATH: {
    BASEURL: baseUrl,
    ACCOUNT: {
      registerAccount: baseUrl + "/api/register",
      loginAccount: baseUrl + "/api/login",
    },
    POSTS:{
      Posts: baseUrl + "/api/post",
      Types: baseUrl + "/api/type",
    },
    ABOUT:{
      About: baseUrl + "/api/page/" + PAGES_IDS.ABOUT_PAGE_ID,
    },
    CONSULTATION:{
      Consultation_description: baseUrl + "/api/page/" + PAGES_IDS.CONSULTATION_DESCRIPTION_PAGE_ID,
      Consultation_order: baseUrl + "/api/page/" + PAGES_IDS.CONSULTATION_ORDER_PAGE_ID,
    },
    USERS:{
      Users: baseUrl + "/api/user",
      AllUsers: baseUrl + "/api/allusers",
    },
    PAGES:{
      ALL_PAGES: baseUrl + '/api/page',
    },
    CONTACTS:{
      Contacts: baseUrl + '/api/page/'+ PAGES_IDS.CONTACTS_PAGE_ID,
    },
    DICTIONARY:{
      Dictionary: baseUrl + '/api/page/'+ PAGES_IDS.DICTIONARY_PAGE_ID,
    },
    GAS_STATION_NETWORK_MAP:{
      Gas_station_network_map: baseUrl + '/api/page/'+ PAGES_IDS.GAS_STATION_NETWORK_MAP_PAGE_ID,
    },
    PAYMENT_CARD:{
      Payment_Card: baseUrl + '/api/page/'+ PAGES_IDS.PAYMENT_CARD_PAGE_ID,
    },
    REQUEST_FORM:{
      Request_form: baseUrl + '/api/page/'+ PAGES_IDS.REQUEST_FORM_PAGE_ID,
    },
    LAWS:{
      Laws: baseUrl + '/api/page/'+ PAGES_IDS.LAWS_PAGE_ID,
    },
    SELF_SERVICE:{
      Self_Service: baseUrl + '/api/page/'+ PAGES_IDS.SELF_SERVICE_PAGE_ID,
    },
    PROPS:{
      Props: baseUrl + '/api/page/'+ PAGES_IDS.PROPS_PAGE_ID,
    },
    NEWS:{
      News: baseUrl + '/api/news',
    }
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


const NOTIFCATIONS={
  ERROR:"Something Went Wrong",
  POST:{
    DELETE:"Post Deleted",
    ADD:"Post Added Successfully.",
    UPDATE:"Post Update Successfully.",
  },
  NEWS:{
    DELETE:"News Deleted",
    ADD:"News Added Successfully.",
    UPDATE:"News Update Successfully.",
  },
  TYPE:{
    DELETE:"Type Deleted",
    ADD:"Type Added Successfully.",
    UPDATE:"Type Update Successfully.",
  },
  SIGNUP:{
    SUCCESS:"Account Created Successfully."
  },
  LOGIN:{
    SUCCESS:"Login Successfully."
  },
  LOGIN:{
    SUCCESS:"Logout Successfully."
  },
  PAGES:{
    UPDATE:"Update Successfully."
  },
}

const ROLES={
  ADMIN:"admin",
  USER:"user",
}
export { BRAND_NAME, IMAGES, PATH, PAGES_NAMES, COLORS, APP_SETTINGS , DASHBOARD, API_KEY, NOTIFCATIONS, PAGES_IDS,ROLES};