<template>
  <div>
<v-container fluid class="" style="background-color: #F8F4EF;">
    <v-container>
      <v-row  >
        <v-col md="6" class="pt-16">
          <!-- <div class="">
            <slot> -->
              <h1>{{section1.heading_1}} <br> {{section1.heading_1_after_br_tag}} </h1>
              <!-- <v-spacer></v-spacer> -->
              <p class="pt-4">{{section1.paragraph_1}}</p>
              
              
            <!-- </slot>
          </div> -->
        </v-col>
        <v-col md="6" class="pt-16 mb-n6">
          <p class="font-italic " style="color:#094D82;">{{section1.paragraph_2}}</p>
          <v-img  style="" src="../assets/images/office.svg"/>
        </v-col>
      </v-row>
      

     </v-container>
  </v-container>

  <!-- ------------------------------------------------------------------------- -->
   
  <v-container fluid>
      <v-container class="py-16">
    <h1 class="text-center pb-16">{{section2.heading_1}}</h1>
    <v-row>
      <v-col md="6" class="">
        <p>{{section2.paragraph_1_p1}}<b>{{section2.paragraph_1_p2}}.</b> {{section2.paragraph_1_p3}}</p>
        <a href="" style="color:#25ACAB;">Į{{section2.anchor_tag}}</a>
      </v-col>
      
      <v-col md="6" class="d-flex justify-center">
        <v-img
        src="../assets/images/cars.png"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
  </v-container>

        
 

  <!-- ----------------------------------------------------------------------------------------- -->
  <v-container fluid class="pa-6 pa-sm-16" style="background-color: #11B5BA; color: white;">
    <h1 class="text-center">{{section3.heading_1}}</h1>
  </v-container>

  <!-- ----------------------------------------------------------------------------------------- -->
  
  
  
  <v-container fluid class=" px-5 py-16   " >
    <v-container class=" mt-4" style="background-color:#F8F4EF ;">
        <h1 class="text-center py-6">
          {{section4.heading_1}}
        </h1>     

<!-- --------------------------------laptop view---------------------------------------------- -->

        <v-row class=" d-md-flex text-center mb-n12" style="width:80%; margin:auto;">
          <v-col md="2" class="" >
              <img src="../assets/images/ecocar.svg" alt="" srcset="" />
          </v-col>
          <v-col md="2" class="">
              <img src="../assets/images/minivan.svg" alt="" srcset=""/>
          </v-col>
          <v-col md="2" class="">
              <img src="../assets/images/truck2.svg" alt="" srcset="" class=""/>
          </v-col>
          <v-col md="2" class="" >
              <img src="../assets/images/bus3.svg" alt="" srcset="" />
          </v-col>
          <v-col md="2" class="">
              <img src="../assets/images/van.svg" alt="" srcset=""/>
          </v-col>
          <v-col md="2" class="">
              <img src="../assets/images/truck1.svg" alt="" srcset="" class=""/>
          </v-col>
        </v-row>
        
  </v-container>
  </v-container>  

  <!-- ----------------------------------------------------------------------------------------- -->
  <v-container>
      <p class="px-2 px-md-16"><b>{{section4.paragraph_1_p1}}</b> {{section4.paragraph_1_p2}}</p>
  </v-container>
  <!-- ----------------------------------------------------------------------------------------- -->

  <v-container>
    <v-row>
      <v-col class="px-8">
        <b class="d-flex justify-center py-6">{{section5.heading_1}}</b>
        <v-img
        src="../assets/images/graph1.svg"
        ></v-img>
        <p class="py-6">
          {{section5.paragraph_1}}
        </p>
      </v-col>
      <v-col class="px-8">
        <b class="d-flex justify-center py-6">{{section5.heading_2}}</b>
        <v-img
        src="../assets/images/graph2.svg"
        ></v-img>
        <p class="py-6">
          {{section5.paragraph_2}}
        </p>
      </v-col>
    </v-row>
  </v-container>


  <!-- ----------------------------------------------------- -->
  <v-container>
    <h1 class="d-flex justify-center ">{{section6.heading_1}}</h1>
    <v-row class="d-flex justify-space-around py-16">
      <v-col class="pa-4" > 
        <div elevation class="pa-4" style="border:2px solid #25ACAB;">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          style="position: relative;"
          src="../assets/images/fan_tower.svg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
      <v-col class="pa-4" > 
        <div class="pa-4" style="border:2px solid #25ACAB;">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          src="../assets/images/fan_tower.svg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
      <v-col class="pa-4" > 
        <div class="pa-4" style="border:2px solid #25ACAB;">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          class=""
          width=""  src="../assets/images/fan_tower.svg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>
<script>
import { PAGES_NAMES,APP_SETTINGS,PAGES_IDS} from "../../config";
import PagesApiService from '../mixins/services/pages-api-service'
import {json_parse} from '../mixins/helperFunction'
export default {
    name:PAGES_NAMES.LEGAL_ENVIRONMENT_WITHOUT_SPACE_PAGE,

  data: () => ({
    pagesApi: new PagesApiService($cookies.get('user').auth.token),
    title:"",
    section1:"",
    section2:"",
    section3:"",
    section4:"",
    section5:"",
    section6:"",
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
                  this.section3= content.section3
                  this.section4= content.section4
                  this.section5= content.section5
                  this.section6= content.section6
              }  
            }
            console.log(content)
      },

     },
};
</script>
<style>

</style>