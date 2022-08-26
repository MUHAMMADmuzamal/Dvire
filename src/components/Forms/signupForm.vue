<template>
  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="name"
        rules="required"
      >
        <v-text-field
          v-model="name"
          counter
          :error-messages="errors"
          label="Name"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="surname"
        rules="required"
      >
        <v-text-field
          v-model="surname"
          counter
          :error-messages="errors"
          label="SurName"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="address"
        rules="required"
      >
        <v-text-field
          v-model="address"
          counter
          :error-messages="errors"
          label="Address"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="company_code"
        :rules="{
          required: true,
        }"
      >
        <v-text-field
          v-model="company_code"
          counter
          :error-messages="errors"
          label="Company Code"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="vat_code"
        :rules="{
        }"
      >
        <v-text-field
          v-model="vat_code"
          counter
          :error-messages="errors"
          label="Vat Code"
        ></v-text-field>
      </validation-provider>
      <v-date-picker v-model="date"></v-date-picker>
      <validation-provider
        v-slot="{ errors }"
        name="phoneNumber"
        :rules="{
          required: true,
          regex: '^[+][0-9]{10}$'
        }"
      >
        <v-text-field
          v-model="phoneNumber"
          :counter="11"
          :error-messages="errors"
          label="Phone Number"
          required
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="gas_available_for_transport"
        :rules="{
        }"
      >
        <v-text-field
          v-model="gas_available_for_transport"
          counter
          :error-messages="errors"
          label="Gas Available for Transport"
        ></v-text-field>
      </validation-provider>
      <validation-provider
        v-slot="{ errors }"
        name="gas_planned_to_have_vehicles"
        :rules="{
        }"
      >
        <v-text-field
          v-model="gas_planned_to_have_vehicles"
          counter
          :error-messages="errors"
          label="Gas Planned to have Vehicles"
        ></v-text-field>
      </validation-provider>
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

        <v-text-field
            v-model="password"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            required
          ></v-text-field>
           
      <validation-provider
        v-slot="{ errors }"
        name="receive_news_and_notices"
      >
        <v-checkbox
          v-model="receive_news_and_notices"
          :error-messages="errors"
          :value="receive_news_and_notices"
          label="Receive News and Notices"
          type="checkbox"
        ></v-checkbox>
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
  <!-- <validation-observer
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
  </validation-observer> -->
</template>
<script>
  import {NOTIFCATIONS } from "../../../config";
  import Account from '../../mixins/services/account.service'
  import { required,  email, min,max, regex, digits } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  const account =  Account;
  setInteractionMode('eager')

  extend('min', {
    ...min,
    message: '{_field_} must be greater than {length} characters',
  })

  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('regex', {
    ...regex,
    // message: '{_field_} {_value_} does not match +XXXXXXXXXX',
    message: '{_field_} {_value_} does not match {regex}',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    name:"SignupForm",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name:'',
      address:'',
      surname:'',
      company_code:'',
      vat_code:'',
      date:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      phoneNumber:'',
      receive_news_and_notices: true,
      gas_available_for_transport:'',
      gas_planned_to_have_vehicles:'',
      email: '',
      password:'',
      show: false,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
        this.signup()
      },
      clear () {
        this.name='',
        this.address='',
        this.surname='',
        this.company_code='',
        this.vat_code='',
        this.date=(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        this.phoneNumber='',
        this.receive_news_and_notices= true,
        this.gas_available_for_transport='',
        this.gas_planned_to_have_vehicles='',
        this.email= '',
        this.password='',
        this.$refs.observer.reset()
      }, 
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
      async signup () {
                // this.$cookies.set('user',user);
                // console.log("set cookie");
                // console.log(user);
                // console.log("now get cookie cookie");
                // console.log(this.$cookies.get('user'))
                const user = {

                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation : this.password,
                    remember_token : "",
                    surname : this.surname,
                    address: this.address,
                    company_code:this.company_code,
                    vat_code : this.vat_code,
                    date : this.date,
                    phone_no : this.phoneNumber,
                    gas_available : this.gas_available_for_transport,
                    gas_planned : this.gas_planned_to_have_vehicles,
                    // notification: this.receive_news_and_notices,
                }
                const res = await account.registerUser(user);
                if (res.status == 200) {
                  this.$toast.success(NOTIFCATIONS.SIGNUP.SUCCESS)
                }else{
                  this.$toast.success(NOTIFCATIONS.ERROR)
                }
                console.log(res)
                
                
        },
    },
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>