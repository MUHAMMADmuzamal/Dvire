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
            label="Password"
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
        submit
      </v-btn>
      <v-btn @click="clear">
        clear
      </v-btn>
    </form>
    <br>
    <router-link :to="forget_password" custom v-slot="{ navigate }">
      <span @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer; color: blue;">Forget Password?</span>
  </router-link>
  </validation-observer>
</template>
<script>
  import {PATH,NOTIFCATIONS, PAGES_NAMES } from "../../../config";
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
      email: '',
      password:'',
      show: false,
      forget_password:PATH.FORGET_PASSWORD_PAGE,
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
                
                // console.log(this.$cookies.get('user'))
                const user = {
                  "email":this.email,
                  "password":this.password
                }
                const res = await account.userLogin(user);
                console.log(res)
                const cooke={
                  auth:{
                    token:res.data[0]
                  },
                  info:res.data[1]
                }
                this.$cookies.set('user',cooke);
                if (res.status == 200) {
                  this.$toast.success(NOTIFCATIONS.LOGIN.SUCCESS)
                  this.$router.push({name:PAGES_NAMES.LANDING_PAGE})
                }else{
                  this.$toast.success(NOTIFCATIONS.ERROR)
                }
        },
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>