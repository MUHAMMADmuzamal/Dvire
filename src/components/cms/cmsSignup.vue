<template>
<v-container>
  <v-text-field
  v-model="page.title"
    label="Title"
    counter
  ></v-text-field>
  <div>
    <h1>Section: 1</h1>
      <v-text-field
        v-model="section1.name"
        counter
        label="Name"
      ></v-text-field>
      <v-text-field
        v-model="section1.surname"
        counter
        label="Surname"
      ></v-text-field>
      <v-text-field
        v-model="section1.address"
        counter
        label="Address"
      ></v-text-field>
      <v-text-field
        v-model="section1.company_code"
        counter
        label="Company Code"
      ></v-text-field>
      <v-text-field
        v-model="section1.phoneNumber"
        counter
        label="Phone Number"
      ></v-text-field>
      <v-text-field
        v-model="section1.receive_news_and_notices"
        counter
        label="Receive News and Notices"
      ></v-text-field>
      <v-text-field
        v-model="section1.gas_available_for_transport"
        counter
        label="Gas Available for Transport"
      ></v-text-field>
      <v-text-field
        v-model="section1.gas_planned_to_have_vehicles"
        counter
        label="Gas Planned to have Vehicles"
      ></v-text-field>
      <v-text-field
        v-model="section1.email"
        counter
        label="E-mail"
      ></v-text-field>
      <v-text-field
        v-model="section1.password"
        counter
        label="Password"
      ></v-text-field>
      <v-text-field
        v-model="section1.submit_button"
        counter
        label="Submit button"
      ></v-text-field>
  </div>
  <update-button v-on:update="update()"/>
</v-container>
</template>

<script>
import UpdateButton from '../updateButton/updateButton.vue'
    export default {
      name:"CmsSignup",
      props:['PageData'],
      components:{
            'update-button':UpdateButton,
        },
      data: ()=>( {
          section1:{
              name:'Name',
              address:'Address',
              surname:'Surname',
              company_code:'Company Code',
              vat_code:'Vat Code',
              date:'Date',
              phoneNumber:'Phone Number',
              receive_news_and_notices: "Receive News and Notices",
              gas_available_for_transport:'Gas Available for Transport',
              gas_planned_to_have_vehicles:'Gas Planned to have Vehicles',
              email: 'E-mail',
              password:'Password',
              submit_button:"Signup",
        },
      }),
      created() {
          this.page = this.PageData
          console.log(this.page)
          if (this.page.content != null) {
            if ("section1" in this.page.content) {
              this.section1= this.page.content.section1         
            }
          }
      },
      methods:{
        update:function(){
          this.page.content = JSON.stringify({
                    section1:this.section1,
          })
          this.$emit('update')
        },
      },
      
    }
</script>