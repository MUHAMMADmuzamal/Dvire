<template>
  <div>
    <v-container fluid class="" style="background-color: #F8F4EF;">
    <v-container>
      <h1 class="d-flex justify-center pt-16">{{translate(section1.heading_1)}}</h1>
      <v-row class="d-flex justify-center px-md-16">
        <v-col class="col-md-10 col-xs-12 mb-n6" >
              
              <br>
              <v-img style="" :src="flag_image"></v-img>

        </v-col>
      </v-row>
      

     </v-container>
  </v-container>

  <!-- ------------------------------------------------------------------------- -->
   
  <v-container fluid>
      <v-container class="py-16">
        <v-row class="d-flex justify-center px-md-16">
          <v-col class="col-md-10 col-xs-12 ">
            <p class="font-weight-normal" style="color:#ABABAB;">
              {{translate(section2.paragraph_1)}}
            </p>
            <h1 class="d-flex justify-center py-6">
              {{translate(section2.heading_1)}}
            </h1>
            <p class="pt-6">
              {{translate(section2.paragraph_2_p1)}}<b>{{translate(section2.paragraph_2_p2)}}</b> {{translate(section2.paragraph_2_p3)}}
              <br><br> <br>
              {{translate(section2.paragraph_2_p4)}}
              <br> <br> <br>
              {{translate(section2.paragraph_2_p5)}}
              <br> <br> <br>
              <b>{{translate(section2.paragraph_2_p6)}}</b>
            </p>
          </v-col>
        </v-row>
   
  </v-container>
  </v-container>
  </div>
</template>
<script>
import { PAGES_NAMES,APP_SETTINGS,PAGES_IDS} from "../../config";
import PagesApiService from '../mixins/services/pages-api-service'
import {json_parse} from '../mixins/helperFunction'
import flag_image from '../assets/images/flag.jpg'
export default {
    name:PAGES_NAMES.LEGAL_ENVIRONMENT_WITHOUT_SPACE_PAGE,

  data: () => ({
    pagesApi: new PagesApiService(),
    title:"",
    section1:"",
    section2:"",
    flag_image: flag_image,
  }),
  created () {
        this.initialize()
    },
  methods: {
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES+'/'+PAGES_IDS.EU_INVESTMENTS_PAGE_ID)
            this.title= pages.data.title
            const content = json_parse(pages.data.content)
            
            if (content != null) {
              if ('section1' in content) {
                  this.section1= content.section1
                  this.section2= content.section2
                  this.flag_image = this.section1.Image[0].image_url
              }  
            }
      },
      translate(key){
        return this.$store.getters.localised(key);
      },


     },
};
</script>
<style>

</style>