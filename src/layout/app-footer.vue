<template>
  <v-footer
    dark
    padless
  >
  <v-container fluid style="background-color:#0F4C81 ; color:white">
    <v-container class="d-flex justify-center">
      <v-row class="pt-5 pb-5 mb-5">
        <v-col class=" pa-7">
          <v-img 
          :src="logo"
          max-width="123"
          class="mb-md-7"
          ></v-img>
          <br>
          <a class="d-none d-md-flex" href="" style="color:white;">{{section1.anchor_tag_1}}</a>
          <br>
          <a class="d-none d-md-flex" href="" style="color:white;">{{section1.anchor_tag_2}}</a>
        </v-col>
        <v-col class=" pa-7">
          <h1 class="mb-md-10">{{section1.heading_1}}</h1>
          {{section1.before_anchor_tag_1}} <a href="" style="color:white;">{{section1.inside_anchor_tag_1}}</a>
          <br> 
          {{section1.before_anchor_tag_2}} <a href="" style="color:white;">{{section1.inside_anchor_tag_2}}</a>
        </v-col>
        <v-col class=" pa-7">
          <h1 class="mb-md-5">{{section1.heading_2}}</h1>
          <br>
          <a href="" class="mx-2"><img :src="linkedin_icon" alt="" srcset=""></a>
          <a href="" class="mx-2"><img :src="fb_icon" alt="" srcset=""></a>
  <!-- -----------mobile view-------------------------------------------------------------- -->
                <v-row class="d-md-none">
                  <v-col class="py-12">
                    <a class="" href="" style="color:white;">{{section1.anchor_tag_1}}</a>
                    <br>
                    <a class="" href="" style="color:white;">{{section1.anchor_tag_2}}</a>
                  
                  </v-col>
                </v-row>

        </v-col>

       
      </v-row>

      

    </v-container>

      
      <v-container >
        <hr> 
        <center  class="pt-6">{{section1.copy_write}}</center>
      </v-container>
  </v-container>
  </v-footer>
</template>
<script>
import { APP_SETTINGS,PAGES_IDS,COLORS, IMAGES} from "../../config";
import PagesApiService from '../mixins/services/pages-api-service'
import {json_parse} from '../mixins/helperFunction'
export default {
    name:'Footer',

  data: () => ({
         icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      card_color: COLORS.SECTION_3_COLOR,
      logo: IMAGES.COMPANY_LOGO_WHITE,
      fb_icon: IMAGES.FB_ICON,
      linkedin_icon: IMAGES.LINKEDIN_ICON,
      title:"",
      section1:"",
      pagesApi: new PagesApiService(),
  }),
  created () {
        this.initialize()
    },
  methods:{
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES+'/'+PAGES_IDS.FOOTER_PAGE_ID)
            this.title= pages.data.title
            const content = json_parse(pages.data.content)
            
            if (content != null) {
              if ('section1' in content) {
                  this.section1= content.section1
              }  
            }
            console.log(content)
      },
  }
};
</script>
