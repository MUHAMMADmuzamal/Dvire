<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      
      <validation-provider
        v-slot="{ errors }"
        name="email"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          counter
          required
        ></v-text-field>
      </validation-provider>
      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
  </validation-observer>
</template>

<script>
// @ is an alias to /src
import { PAGES_NAMES} from "../../config";
import { required,  email,  } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

import HttpApiService from '@/mixins/services/http-api-services'
import Account from '@/mixins/services/account.service'
const http_api_services = new HttpApiService("token");
const account =  Account;
    setInteractionMode('eager')
  extend('email', {
    ...email,
    message: 'Email must be valid',
  })
export default {
  name: PAGES_NAMES.FORGET_PASSWORD_PAGE,
  components:{
      ValidationProvider,
      ValidationObserver,
  },
  data: () => ({
    email:'',
  }),
  methods: {
      submit () {
        this.$refs.observer.validate()
        this.forgetPass()
      },
      clear () {
        this.email= '',
        this.$refs.observer.reset()
      }, 
      async forgetPass () {
                // this.$cookies.set('user',user);
                // console.log("set cookie");
                // console.log(user);
                // console.log("now get cookie cookie");
                // console.log(this.$cookies.get('user'))
                const user = {
                    email: this.email,
                }
                const res = await account.forgetPass(user);
                // const res = await http_api_services.getAllProducts();
                console.log(res)
                
                
        },
    },
};
</script>
