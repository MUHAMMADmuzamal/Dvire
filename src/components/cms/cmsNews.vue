<template>
<v-container>
  <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                v-model="page.title"
                  label="Title"
                  counter
                ></v-text-field>
            </v-col>
          </v-row>

          <section class="pt-10">
            <h1>Section: 1</h1>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                    v-model="section1.heading_1"
                    counter
                    label="Heading 1"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                      v-model="section1.paragraph_1"
                      counter
                      label="Paragraph 1"
                      hint=""
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                      v-model="section1.buttonText1"
                      counter
                      label="Button 1 Text"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="3"
                  >
                    <v-text-field
                      v-model="section1.buttonText2"
                      counter
                      label="Button 2 Text"
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col>
                    <upload-button v-on:uploaded="uploaded($event)" :saved_images="section1.Image" :select_multiple_images="select_multiple_images" update_to="s1.1" />
                  </v-col>
                </v-row>
                   
                  
                  
                  <!-- <v-text-field
                    v-model="section1.Image"
                    counter
                    label="Image full name with extension"
                  ></v-text-field> -->
          </section>
          <update-button v-on:update="update()"/>
        </v-container>
</template>

<script>
import UpdateButton from '../updateButton/updateButton.vue'
import UploadImages from '../uploadImages/uploadimages.vue'
    export default {
      name:"CmsNews",
      props:['PageData'],
      components:{
            'update-button':UpdateButton,
            'upload-button':UploadImages,
        },
      data: ()=>( {
          select_multiple_images:false,
          section1:{
            heading_1:"Biometan?? planuojama i??gauti ir Lietuvoje ??? aplinkai draugi??ko kuro j??gain?? kils prie Panev????io",
            paragraph_1:"Kol kas visas Lietuvoje naudojamas biometanas yra importuojamas i?? u??sienio ??ali?? tarptautini?? sertifikat?? keliu ir Lietuvoje negaminamas. Vis d??lto artimiausia",
            buttonText1: "Skaityti",
            buttonText2: "Rodyti daugiau",
            Image: []
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
          this.stringify()
          this.$emit('update')
        },
         uploaded:function (param) {
          const update_to = param.update_to
          let params = param.urls
          switch (update_to) {
            case 's1.1':
              this.section1.Image = params
              break;
          
            default:
              break;
          }
          this.stringify()
        },
        stringify(){
          this.page.content = JSON.stringify({
                    section1:this.section1,
          })
        }
      },
      
    }
</script>
