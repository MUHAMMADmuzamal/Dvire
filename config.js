// import ProfileImage from "./assets/Images/profile.png";
import CompanyLogoSVG from "./src/assets/images/logo.svg";
// import Illustration1 from "./assets/Images/illus1.jpg";
// import DashIllustration from "./assets/Images/dashboard-happy.jpg";
// import ReturnCardImage from "./assets/Images/white-solid-cut-outs-gown-women.jpg";
// import Dollar from "./assets/Images/dollar.png";
// import Info from "./assets/Images/info.png";
// import ProductDetailImg from "./assets/Images/product-detail-carousel.jpg";
// import ProductDetailImgCard from "./assets/Images/product-detail-carousel-card.png";
// import HeroBanner from "./assets/Images/hero.png";
// import Thumbnail1 from "./assets/Images/commision-tile.png";
// import Thumbnail2 from "./assets/Images/business-tile.png";
// import Thumbnail3 from "./assets/Images/supplier.png";
// import AuthBackground from "./assets/Images/auth-bg.png";
// import FooterBackground from "./assets/Images/footer-bg.png";

// import AboutUs from "./assets/Images/About-us.docx";
// import PrivacyPolicy from "./assets/Images/Privacy-policy.docx";
// // import Refund from "./assets/Images/Refund.docx";
// import Refund from "./assets/Images/Refund2.pdf";


// import TermAndCondition from "./assets/Images/terms-of-service.docx";

let IMAGES = {
  // AUTH_BG: AuthBackground,
  // HERO_BANNER: HeroBanner,
  // THUMB_NAIL1: Thumbnail1,
  // THUMB_NAIL2: Thumbnail2,
  // THUMB_NAIL3: Thumbnail3,
  // PROFLE_IMAGE: ProfileImage,
  COMPANY_LOGO: CompanyLogoSVG,
  // DUMMY_ILLUSTRATION: Illustration1,
  // Dashboard_Illustration: DashIllustration,
  // Return_Card_Image: ReturnCardImage,
  // Return_Detail_Card_Image: ReturnCardImage,
  // DOLLAR: Dollar,
  // INFO: Info,
  // PRODUCTDETAILIMG: ProductDetailImg,
  // PRODUCTDETAILIMGCARD: ProductDetailImgCard,
  // CARD_IMAGE: ReturnCardImage,
  // FOOTER_BG: FooterBackground,

  // ABOUT_US: AboutUs,
  // PRIVACY_POLICY: PrivacyPolicy,
  // REFUND: Refund,
  // TERM_AND_CONDITION: TermAndCondition,
};

const PAGES_NAMES = {
    LANDING_PAGE: "Home",
    ABOUT_PAGE: "About",
    CARD_PAGE: "Card",
    DICTIONARY_PAGE: "Dictionary",
    LAWS_PAGE: "Laws",
    NEWS_PAGE: "News",
};

let BRAND_NAME = "Dvire";

const PATH = {
  LANDING_PAGE: "/",
  ABOUT_PAGE: "/about",
  CARD_PAGE: "/card",
  DICTIONARY_PAGE: "/dictionary",
  LAWS_PAGE: "/laws",
  NEWS_PAGE: "/news",
  // LANDING_PAGE: "/",
  // LOGIN: "/auth/login",
  // REGISTER: "/auth/register",
  // SELLER_PROFILE: "/seller",
  // DASHBOARD: "/dashboard",
  // ADD_PODUCT: "/add-product",
  // CONTACTS: "/contacts",
  // ORDERS: "/orders",
  // RETURN_RTO_ORDERS: "/return-rto-order",
  // RETURN_ORDER_DETAIL: "/return-order-detail/orderId=:orderId",
  // INVENTORY: "/inventory",
  // INVENTORY_PRODUCT_DETAIL: "/inventory-product-detail/productId=:productId",
  // EDIT_INVENTORY_PRODUCT: "/edit-inventory-product/productId=:productId",
  // PAYMENT: "/payment",
  // REVIEW_AND_RATING: "/review-and-ratings",
  // REVIEW_AND_RATING_SINGLE_PRODUCT: "/review-and-ratings/productId=:productId",
  // SETTINGS: "/settings",
  // NOTICE: "/notice",
  // SUPPORT: "/support",
  // ORDER_DETAIL: "/order-detail/orderId=:orderId",

  // ABOUT_US: "/about-us",
  // PRIVACY_POLICY: "/privacy-policy",
  // TERM_AND_CONDITION: "/terms-and-condition",
  // REFUND: "/refund-policy",

};

const baseUrl = "http://127.0.0.1:8000/api/v1";
const download_base_url = "http://127.0.0.1:8000";
// const download_base_url = "https://api.groupick.in";
// const baseUrl = "https://api.groupick.in/api/v1";

// const APP_SETTINGS = {
//   API_PATH: {
//     ACCOUNT: {
//       registerAccount: baseUrl + "/auth/signup/",
//       loginAccount: baseUrl + "/auth/login/",
//       verifyOtp: baseUrl + "/auth/otp/verify/",
//       profileUpdate: baseUrl + "/auth/update/",
//     },
//     PRODUCT: {
//       productListing: baseUrl + "/products/",
//       createProduct: baseUrl + "/products/",
//       uploadImage: baseUrl + "/products",
//     },
//     CATEGORY: {
//       categoryListing: baseUrl + "/categories/",
//     },
//     CATALOG:{
//       bulkupload: baseUrl + "/catalogs/bulk-add/",
//       bulkimageupload: baseUrl + "/catalogs/bulk-add/images/file/",
//       bulkgetimages: baseUrl + "/catalogs/bulk-add/getallimages/",
//       bulkgetdata: baseUrl + "/catalogs/bulk-add/info",
//       download_excel_file: download_base_url + "/media/template.xlsx",
//     },
//   },
// };

// const GENERIC_MESSAGE = {
//   REQUIRED_FIELD_MESSAGE: "This Feild are required",
// };

// const TOAST_STYLE = {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
// };

export { BRAND_NAME, IMAGES, PATH, PAGES_NAMES };
// export { BRAND_NAME, IMAGES, PATH, APP_SETTINGS, GENERIC_MESSAGE, TOAST_STYLE };
