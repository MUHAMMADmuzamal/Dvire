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
  </div>
  <update-button v-on:update="update()"/>
</v-container>
</template>

<script>
import UpdateButton from '../updateButton/updateButton.vue'
    export default {
      name:"CmsForgetPassword",
      props:['PageData'],
      components:{
            'update-button':UpdateButton,
        },
      data: ()=>( {
          section1:{
              email: 'E-mail',
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