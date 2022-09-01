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
        v-model="section1.anchor_tag_1"
        counter
        label="Anchor Tag 1"
      ></v-text-field>
      <v-text-field
        v-model="section1.anchor_tag_2"
        counter
        label="Anchor tag 2"
      ></v-text-field>
      <v-text-field
        v-model="section1.heading_1"
        counter
        label="Heading 1"
      ></v-text-field>
      <v-text-field
        v-model="section1.before_anchor_tag_1"
        counter
        label="Before Anchor tag 1"
      ></v-text-field>
      <v-text-field
        v-model="section1.inside_anchor_tag_1"
        counter
        label="Inside Anchor tag 1"
      ></v-text-field>
      <v-text-field
        v-model="section1.before_anchor_tag_2"
        counter
        label="Before Anchor tag 2"
      ></v-text-field>
      <v-text-field
        v-model="section1.inside_anchor_tag_2"
        counter
        label="Inside Anchor tag 2"
      ></v-text-field>
      <v-text-field
        v-model="section1.heading_2"
        counter
        label="Heading 2"
      ></v-text-field>
      <v-text-field
        v-model="section1.copy_write"
        counter
        label="Copy Write"
      ></v-text-field>
      <v-text-field
        v-model="section1.logo"
        counter
        label="Logo"
      ></v-text-field>
      <v-text-field
        v-model="section1.icon_1"
        counter
        label="Icon 1"
      ></v-text-field>
      <v-text-field
        v-model="section1.icon_2"
        counter
        label="Icon 2"
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
              anchor_tag_1:'Privatumo politika',
              anchor_tag_2:'Kita teisinė informacija',
              heading_1:'Kontaktai',
              before_anchor_tag_1:'El. paštas:',
              inside_anchor_tag_1:'info@dvire.lt',
              before_anchor_tag_2:'Tel. nr.:',
              inside_anchor_tag_2:'+370 (699) 01960',
              heading_2:'Sekite mus',
              logo:'logo_white.svg',
              icon_1:'mdi-facebook',
              icon_2:'mdi-linkedin',
              copy_write:'© Visos teisės saugomos UAB „Dvire”',
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