<template>
  <div>
<v-container fluid class="" style="background-color: #F8F4EF;">
    <v-container>
      <v-row  >
        <v-col md="6" class="pt-16">
          <!-- <div class="">
            <slot> -->
              <h1>{{translate(section1.heading_1)}} <br> {{translate(section1.heading_1_after_br_tag)}} </h1>
              <!-- <v-spacer></v-spacer> -->
              <p class="pt-4">{{translate(section1.paragraph_1)}}</p>
              
              
            <!-- </slot>
          </div> -->
        </v-col>
        <v-col md="6" class="pt-16 mb-n6">
          <p class="font-italic " style="color:#094D82;">{{translate(section1.paragraph_2)}}</p>
          <v-img  style="" :src="office"/>
        </v-col>
      </v-row>
      

     </v-container>
  </v-container>

  <!-- ------------------------------------------------------------------------- -->
   
  <v-container fluid>
      <v-container class="py-16">
    <h1 class="text-center pb-16">{{translate(section2.heading_1)}}</h1>
    <v-row>
      <v-col md="6" class="">
        <p>{{translate(section2.paragraph_1_p1)}}<b>{{translate(section2.paragraph_1_p2)}}.</b> {{translate(section2.paragraph_1_p3)}}</p>
        <a href="" style="color:#25ACAB;">Į{{translate(section2.anchor_tag)}}</a>
      </v-col>
      
      <v-col md="6" class="d-flex justify-center">
        <v-img
        :src="cars"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
  </v-container>

        
 

  <!-- ----------------------------------------------------------------------------------------- -->
  <v-container fluid class="pa-6 pa-sm-16" style="background-color: #11B5BA; color: white;">
    <h1 class="text-center">{{translate(section3.heading_1)}}</h1>
  </v-container>

  <!-- ----------------------------------------------------------------------------------------- -->
  
  
  
  <v-container fluid class=" px-5 py-16   " >
    <v-container class=" mt-4" style="background-color:#F8F4EF ;">
        <h1 class="text-center py-6">
          {{translate(section4.heading_1)}}
        </h1>     

<!-- --------------------------------laptop view---------------------------------------------- -->

        <v-row class=" d-md-flex text-center mb-n12" style="width:80%; margin:auto;">
          <v-col md="2" class="" >
              <img :src="ecocar" alt="" srcset="" />
          </v-col>
          <v-col md="2" class="">
              <img :src="minivan" alt="" srcset=""/>
          </v-col>
          <v-col md="2" class="">
              <img :src="truck2" alt="" srcset="" class=""/>
          </v-col>
          <v-col md="2" class="" >
              <img :src="bus3" alt="" srcset="" />
          </v-col>
          <v-col md="2" class="">
              <img :src="van" alt="" srcset=""/>
          </v-col>
          <v-col md="2" class="">
              <img :src="truck1" alt="" srcset="" class=""/>
          </v-col>
        </v-row>
        
  </v-container>
  </v-container>  

  <!-- ----------------------------------------------------------------------------------------- -->
  <v-container>
      <p class="px-2 px-md-16"><b>{{translate(section4.paragraph_1_p1)}}</b> {{translate(section4.paragraph_1_p2)}}</p>
  </v-container>
  <!-- ----------------------------------------------------------------------------------------- -->

  <v-container>
    <v-row>
      <v-col class="px-8">
        <b class="d-flex justify-center py-6">{{translate(section5.heading_1)}}</b>
        <v-img
        :src="graph1"
        ></v-img>
        <p class="py-6">
          {{translate(section5.paragraph_1)}}
        </p>
      </v-col>
      <v-col class="px-8">
        <b class="d-flex justify-center py-6">{{translate(section5.heading_2)}}</b>
        <v-img
        :src="graph2"
        ></v-img>
        <p class="py-6">
          {{translate(section5.paragraph_2)}}
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
import office from '../assets/images/office.svg'
import cars from '../assets/images/cars.png'
import ecocar from '../assets/images/ecocar.svg'
import minivan from '../assets/images/minivan.svg'
import truck2 from '../assets/images/truck2.svg'
import bus3 from '../assets/images/bus3.svg'
import van from '../assets/images/van.svg'
import truck1 from '../assets/images/truck1.svg'
import graph1 from '../assets/images/graph1.svg'
import graph2 from '../assets/images/graph2.svg'
export default {
    name:PAGES_NAMES.LEGAL_ENVIRONMENT_WITHOUT_SPACE_PAGE,

  data: () => ({
    pagesApi: new PagesApiService(),
    title:"",
    section1:"",
    section2:"",
    section3:"",
    section4:"",
    section5:"",
    section6:"",
    office:office,
    cars:cars,
    ecocar:ecocar,
    minivan:minivan,
    truck2:truck2,
    bus3:bus3,
    van:van,
    truck1,truck1,
    graph1,graph1,
    graph2:graph2,
  }),
   created () {
        this.initialize()
    },
  methods: {
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES+'/'+PAGES_IDS.LEGAL_ENVIRONMENT_PAGE_ID)
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
                  this.office = this.section1.Image[0].image_url
                  this.cars = this.section2.image[0].image_url
                  this.ecocar = this.section4.icon_1[0].image_url
                  this.minivan = this.section4.icon_2[0].image_url
                  this.truck2 = this.section4.icon_3[0].image_url
                  this.bus3 = this.section4.icon_4[0].image_url
                  this.van = this.section4.icon_5[0].image_url
                  this.truck1 = this.section4.icon_6[0].image_url
                  this.graph1 = this.section5.graph1[0].image_url
                  this.graph2 = this.section5.graph2[0].image_url
              }  
            }
            console.log(content)
      },
      translate(key){
        return this.$store.getters.localised(key);
      },

     },
};
</script>
<style>

</style>