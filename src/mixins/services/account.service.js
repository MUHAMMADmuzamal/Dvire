// import http from "../http-common";

import { APP_SETTINGS } from "../../../config";

// import axios from "axios";
const axios = require("axios");
class AccountDataService {
  registerUser(data, auth) {
    return axios.post(
      `${APP_SETTINGS.API_PATH.ACCOUNT.registerAccount}`,
      data,
      {
        headers: {
          // 'Accept': 'application/json',
          // 'Content-Type': 'application/json',
          // Authorization: 'Bearer ' + auth.yodha_user.token
        },
      }
    );
  }

  userLogin(data, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.ACCOUNT.loginAccount}`, data, {
      headers: {
        // Authorization: 'Bearer ' + auth.yodha_user.token
      },
    });
  }
  forgetPass(data, auth) {
    return axios.post(`${APP_SETTINGS.API_PATH.ACCOUNT.loginAccount}`, data, {
      headers: {
        // Authorization: 'Bearer ' + auth.yodha_user.token
      },
    });
  }

  // updateProfile(data, auth) {
  //   console.log("data=>", data);
  //   return axios.post(
  //     `${APP_SETTINGS.API_PATH.ACCOUNT.profileUpdate}`,
  //     data.updateProfileData,
  //     {
  //       headers: {
  //         Authorization: "Bearer " + data?.header.mee_too_user.token,
  //       },
  //     }
  //   );
  // }
}

export default new AccountDataService();
