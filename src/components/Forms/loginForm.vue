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
          :label="section1.email"
          required
          counter
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="password"
        rules="required|min:6"
      >
        <v-text-field
            v-model="password"
            :error-messages="errors"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            name="password"
            :label="section1.password"
            hint="At least 6 characters"
            counter
            @click:append="show = !show"
            required
          ></v-text-field>
      </validation-provider>
      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        {{section1.submit_button}}
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
    <br>
    <router-link :to="forget_password" custom v-slot="{ navigate }">
      <span @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer; color: blue;">{{section1.forget_password}}</span>
  </router-link>
  </validation-observer>
</template>
<script>
  import { NOTIFCATIONS,PAGES_NAMES,APP_SETTINGS,PAGES_IDS} from "../../../config";
  import PagesApiService from '../../mixins/services/pages-api-service'
  import {json_parse} from '../../mixins/helperFunction'
  import Account from '../../mixins/services/account.service'
  import { required,  email, min, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  const account =  Account;
  setInteractionMode('eager')


  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('min', {
    ...min,
    message: '{_field_} must be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    name:"LoginForm",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      pagesApi: new PagesApiService($cookies.get('user').auth.token),
      email: '',
      password:'',
      show: false,
      title:"",
      section1:"",
      forget_password:"",
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
        this.login()
      },
      clear () {
        this.password = ''
        this.email = ''
        this.$refs.observer.reset()
      }, 
      async login () {
                const query = new URLSearchParams(window.location.search)
                // console.log(this.$cookies.get('user'))
                const user = {
                  "email":this.email,
                  "password":this.password
                }
                const res = await account.userLogin(user);
                // console.log(res)
                const cooke={
                  auth:{
                    token:res.data[0]
                  },
                  info:res.data[1]
                }
                this.$cookies.set('user',cooke);
                if (res.status == 200) {
                  this.$toast.success(NOTIFCATIONS.LOGIN.SUCCESS)
                  if (query.has('returnUrl')) {
                    this.$router.push({path:query.get('returnUrl')})
                  }else{
                    this.$router.push({name:PAGES_NAMES.LANDING_PAGE})
                  }                  
                }else{
                  this.$toast.success(NOTIFCATIONS.ERROR)
                }
        },
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES+'/'+PAGES_IDS.LOGIN_PAGE_ID)
            this.title= pages.data.title
            const content = json_parse(pages.data.content)
            
            if (content != null) {
              if ('section1' in content) {
                  this.section1= content.section1
              }  
            }
            console.log(content)
      },
    },
    created () {
        this.initialize()
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>