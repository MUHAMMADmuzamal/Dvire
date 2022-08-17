<template>
<h1 @click="login">
    Testing login  Page
</h1>
</template>

<script>
// @ is an alias to /src
// import {IMAGES} from "../../config";
import HttpApiService from '../mixins/services/seller-api-service'
import AC from '../mixins/services/account.service'
const hp = new HttpApiService("token");
const account =  AC;
export default {
  name: "login",
  data: () => ({
  }),
  methods: {
    login:function () {
            // var user = { id:1, name:'Journal',session:'25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX' };
            var user = {
                        "email": "test1@gmail.com",
                        "address": "address 1",
                        "password" : "123456",
                        "username" : "test1",
                        "companycode" : "12345",
                        "mobile" : "1234589"
                      };
            // this.$cookies.set('user',user);
            // console.log("set cookie");
            // console.log(user);
            // console.log("now get cookie cookie");
            // console.log(this.$cookies.get('user'))
            
            account.registerUser(user);
            hp.getAllProducts();
    },
  }
};
</script>
