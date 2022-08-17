// import ProfileImage from "./assets/Images/profile.png";
import CompanyLogoSVG from "./src/assets/images/logo.svg";
import OGIMAGE from "./src/assets/images/og_image.png";
import GAS from "./src/assets/images/gas.svg";
import LEAF from "./src/assets/images/leaf.svg";
import FLASH from "./src/assets/images/flash.svg";
import CLOUD from "./src/assets/images/cloud_image.svg";

let IMAGES = {
  COMPANY_LOGO: CompanyLogoSVG,
  OG_IMAGE: OGIMAGE,
  GAS: GAS,
  LEAF: LEAF,
  FLASH: FLASH,
  CLOUD: CLOUD,
};

const PAGES_NAMES = {
    LANDING_PAGE: "Home",
    ABOUT_PAGE: "About",
    CARD_PAGE: "Card",
    DICTIONARY_PAGE: "Dictionary",
    LAWS_PAGE: "Laws",
    NEWS_PAGE: "News",
    LANG_PAGE : "LT | EN",
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
};

const baseUrl = "http://127.0.0.1:3000";
const download_base_url = "http://127.0.0.1:8000";
// const download_base_url = "https://api.groupick.in";
// const baseUrl = "https://api.groupick.in/api/v1";

const APP_SETTINGS = {
  API_PATH: {
    ACCOUNT: {
      registerAccount: baseUrl + "/users",
      // registerAccount: baseUrl + "/auth/signup/",
      loginAccount: baseUrl + "/auth/login/",
      profileUpdate: baseUrl + "/auth/update/",
    },
    // PRODUCT: {
    //   productListing: baseUrl + "/products/",
    //   createProduct: baseUrl + "/products/",
    //   uploadImage: baseUrl + "/products",
    // },
    // CATEGORY: {
    //   categoryListing: baseUrl + "/categories/",
    // },
    // CATALOG:{
    //   bulkupload: baseUrl + "/catalogs/bulk-add/",
    //   bulkimageupload: baseUrl + "/catalogs/bulk-add/images/file/",
    //   bulkgetimages: baseUrl + "/catalogs/bulk-add/getallimages/",
    //   bulkgetdata: baseUrl + "/catalogs/bulk-add/info",
    //   download_excel_file: download_base_url + "/media/template.xlsx",
    // },
  },
};


const COLORS = {
    MAIN_COLOR_1 : "#F8F4EF",
    SECTION_3_COLOR : "#0F4C81",
};
export { BRAND_NAME, IMAGES, PATH, PAGES_NAMES, COLORS, APP_SETTINGS };