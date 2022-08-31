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
                    v-model="section1.heading_1"
                    counter
                    label="Heading 1"
                  ></v-text-field>
                   <v-textarea
                    v-model="section1.paragraph_1"
                    counter
                    label="Paragraph 1"
                    hint=""
                  ></v-textarea>
                  <v-text-field
                    v-model="section1.buttonText"
                    counter
                    label="Button Text"
                  ></v-text-field>
                  <v-text-field
                    v-model="section1.Image"
                    counter
                    label="Image full name with extension"
                  ></v-text-field>
          </div>
          <update-button v-on:update="update()"/>
        </v-container>
</template>

<script>
import { json_parse } from '@/mixins/helperFunction'
import UpdateButton from '../updateButton/updateButton.vue'
    export default {
      name:"CmsLanding",
      props:['PageData'],
      components:{
            'update-button':UpdateButton,
        },
      data: ()=>( {
          section1:{
            heading_1:"Biometaną planuojama išgauti ir Lietuvoje – aplinkai draugiško kuro jėgainė kils prie Panevėžio",
            paragraph_1:"Kol kas visas Lietuvoje naudojamas biometanas yra importuojamas iš užsienio šalių tarptautinių sertifikatų keliu ir Lietuvoje negaminamas. Vis dėlto artimiausia",
            buttonText: "Skaityti",
            Image: "factory.jpg"
        },
      }),
      created() {
          this.page = this.PageData
          if (this.page.content != null) {
            if ('section1' in this.page.content) {
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
        }
      },
      
    }
</script>
