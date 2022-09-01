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
        v-model="section1.forget_password"
        counter
        label="Forget Password"
      ></v-text-field>
      <v-text-field
        v-model="section1.submit_button"
        counter
        label="Submit Button"
      ></v-text-field>
  </div>
  <update-button v-on:update="update()"/>
</v-container>
</template>

<script>
import UpdateButton from '../updateButton/updateButton.vue'
    export default {
      name:"CmsLogin",
      props:['PageData'],
      components:{
            'update-button':UpdateButton,
        },
      data: ()=>( {
          section1:{
              email: 'E-mail',
              password:'Password',
              forget_password:'Forget Password?',
              submit_button:'Login',
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