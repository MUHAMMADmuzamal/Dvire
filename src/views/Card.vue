<template>
<div>
  <v-container fluid class="" style="background-color: #F8F4EF;">
    <v-container>
      <v-row  >
        <v-col md="6" class=" d-flex  align-center">
          <div class="col-sm-8 col-md-9">
              <h1>{{translate(section1.heading_1)}} <br> {{translate(section1.heading_1_text_after_br_tag)}}</h1>
              <p class="pt-4">{{translate(section1.paragraph_1)}}</p>
          </div>
        </v-col>
        <v-col md="6" class=" mb-n16">
          <!-- <v-img  style="" src="../assets/images/dvire_card.svg"/> -->
          <v-img  style="" :src="dvire_card"/>
        </v-col>
      </v-row>
      

     </v-container>
  </v-container>
<v-container fluid  style="background-color: #0F4C81 ;">

      <!-- <v-container style="position:relative"> -->
          <v-row class="ps-md-16">
            <v-col md="7" class="pt-5  pt-md-10" style="color:white;">

              <v-row class="py-5">
                <v-col>
                  <h1>{{translate(section2.heading_1)}}</h1>
                </v-col>
              </v-row>
              
              <v-row class="">
                <v-col>
                  
                <p>
                    {{translate(section2.paragraph_1)}}
                    <br><br><br>
                    {{translate(section2.paragraph_2)}}
                    <br><br><br>
                    {{translate(section2.paragraph_3)}}
                </p>
                </v-col>
              </v-row>




            </v-col>

            <v-col md="5" class="d-flex align-center py-6">
              
              <v-img
              
              style="transform: translateX(12px);"
              :src="truck"
              ></v-img>
            </v-col>
          </v-row>
          
      <!-- </v-container> -->
</v-container>

<!-- ----------------------------------------------------------------------------------------- -->

<v-container fluid >
          <v-row >
            
            <v-col md="7" class="py-16 px-md-16" style="background-color: #F8F4EF; color:#000000;">

              <v-container class="pe-md-16 pe-sm-16">
                
                  <h1>{{translate(section3.heading_1)}}</h1>
                
                  
             <p>
                    {{translate(section3.paragraph_1)}}
                    <br><br><br>
                    {{translate(section3.paragraph_2)}}
                    <br><br><br>
                    {{translate(section3.paragraph_3)}}
                </p>

                <h3 class="d-flex d-md-none justify-center ">{{translate(section4.heading_1)}}</h3>
                
              </v-container>




            </v-col>

            <div class="col-md-5 d-flex align-sm-center ms-md-n16  mt-n16 mt-lg-16" style="" >
              
              <div class="map ms-md-n16  mt-xs-n16 ">
              
                <v-img
                src="../assets/images/map_background.svg"
                style="display:block; height:auto;"
                ></v-img>
              
              <div class="map_points" style="">
                    
              <v-tooltip bottom color="white">
                <template v-slot:activator="{ on, attrs }">
                    
                    <div class="map_point" v-bind="attrs" v-on="on" style="left: calc(3.5656% - 15px); top: calc(28.9079% - 15px)">
                    
                    <div class="point" style=""></div>
                    
                    <div class="point-brand" style="">
                      <v-img src="../assets/images/logo_on_map.svg" style="width: 100%; height: auto;"></v-img>
                    </div>
                    
                    <div class="city" style="">
                      Klaipėda
                    </div>
                  </div>
                </template>
                    <span style="font-weight: 600; color: black;">Degalinė,</span>
                    <span style="color:black;"> Garažų g. 2</span>
              </v-tooltip>

              <v-tooltip bottom color="white">
                <template v-slot:activator="{ on, attrs }">
                    
                    <div class="map_point logo_right" v-bind="attrs" v-on="on" style="left: calc(70.5024% - 15px); top: calc(70.6638% - 15px)">
                    
                    <div class="point"></div>
                   
                    <div class="point-brand">
                      <v-img src="../assets/images/logo_on_map.svg" style="width: 100%; height: auto;"></v-img>
                    </div>
                    
                    <div class="city">
                      Vilnius
                    </div>
                  </div>
                </template>
                    <span style="font-weight: 600; color: black;">Degalinė,</span>
                    <span style="color:black;"> Panerių g. 42</span>
              </v-tooltip>


              <v-tooltip bottom color="white">
                <template v-slot:activator="{ on, attrs }">
                    
                    <div class="map_point" v-bind="attrs" v-on="on" style="left: calc(57.2581% - 15px); top: calc(32.0000% - 15px)">
                    
                    <div class="point"></div>
                    
                    <div class="point-brand">
                      <v-img src="../assets/images/logo_on_map.svg" style="width: 100%; height: auto;"></v-img>
                    </div>
                    
                    <div class="city">
                      Panevėžys
                    </div>
                  </div>
                </template>
                    <span style="font-weight: 600; color: black;">Degalinė,</span>
                    <span style="color:black;"> J.Basanavičiaus g. 67</span>
              </v-tooltip>


              <v-tooltip bottom color="white">
                <template v-slot:activator="{ on, attrs }">
                    
                    <div class="map_point" v-bind="attrs" v-on="on" style="left: calc(36.0887% - 15px); top: calc(18.4000% - 15px)">
                    
                    <div class="point"></div>
                    
                    <div class="point-brand">
                      <v-img src="../assets/images/logo_on_map.svg" style="width: 100%; height: auto;"></v-img>
                    </div>
                    
                    <div class="city">
                      Šiauliai
                    </div>
                  </div>
                </template>
                    <span style="font-weight: 600; color: black;">Degalinė,</span>
                    <span style="color:black;"> Vaidoto g. 42B</span>
              </v-tooltip>


              <v-tooltip bottom color="white">
                <template v-slot:activator="{ on, attrs }">
                    
                    <div class="map_point logo_right" v-bind="attrs" v-on="on" style="left: calc(52.8226% - 15px); top: calc(59.2000% - 15px)">
                    
                    <div class="point"></div>
                    
                    <div class="point-brand">
                      <v-img src="../assets/images/logo_on_map.svg" style="width: 100%; height: auto;"></v-img>
                    </div>
                    
                    <div class="city">
                      Kaunas
                    </div>
                  </div>
                </template>
                    <span style="font-weight: 600; color: black;">Degalinė,</span>
                    <span style="color:black;"> Ašigalio g. 6P</span>
              </v-tooltip>

              

              </div>
                <h2 class="d-none d-md-flex justify-center ">Metano pildymo stotys</h2>
              </div>
            </div>
            
          </v-row>
</v-container>
  <v-container fluid >
    

    <v-row class="py-16">
      <v-col md="6" class="px-md-16">
        
       <form class="px-md-16">
        <h1 class="py-6">{{translate(section5.heading_1)}}</h1>
    <v-text-field
      :counter="10"
      :label="translate(section5.form_field_1)"
      required
    ></v-text-field>
    <v-text-field
      :counter="10"
      :label="translate(section5.form_field_2)"
      required
    ></v-text-field>
    <v-text-field
      :counter="10"
      :label="translate(section5.form_field_3)"
      required
    ></v-text-field>
    <v-text-field
      :label="translate(section5.form_field_4)"
      required
    ></v-text-field>
    
    <v-checkbox
      :label="translate(section5.checkbox)"
      required
    ></v-checkbox>

    <v-btn
      elevation="0"
      x-large                
      tile
      width=""
      class="col-md-6"
      style="color:white "
      color="#25ACAB"
    >
      {{translate(section5.buttonText)}}
    </v-btn>
    
  </form>
      
      </v-col>
      <v-col md="6" class="py-16" >
        <v-img
        style="transform: translateX(28px);"
        :src="single_card"
        
        ></v-img>
      </v-col>
    </v-row>

  </v-container>  

  <!-- ----------------------------------------------------- -->
  <v-container>
    <h1 class="d-flex justify-center mt-n16">{{translate(section6.heading_1)}}</h1>
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

import turck from '../assets/images/truck.svg'
import dvire_card from '../assets/images/dvire_card.svg'
import single_card from '../assets/images/single_card.svg'
export default {
    name: PAGES_NAMES.CARD_PAGE,

  data: () => ({
    pagesApi: new PagesApiService(),
    title:"",
    section1:"",
    section2:"",
    section3:"",
    section4:"",
    section5:"",
    section6:"",
    dvire_card:dvire_card,
    truck:turck,
    single_card:single_card,
  }),
    created () {
        this.initialize()
    },
  methods: {
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES+'/'+PAGES_IDS.CARD_PAGE_ID)
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
                  this.dvire_card = this.section1.Image[0].image_url
                  this.truck = this.section2.image_1[0].image_url
                  this.single_card = this.section5.image[0].image_url
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
<style scoped>
.map{
  width:100%; position:relative;
}
.map_points{
  position: absolute; left: 0; top: 0; width: 100%; height: 100%;
}
.map_point{
  position: absolute; display: flex; align-items: center; cursor: pointer;
}
.point{
  height: 15px; width: 15px; border-radius: 50%; background-color: #ffffff;
}
.point-brand{
  position: absolute; left: -4px; top: 0px; transform: translate(0, -100%); width: 30px;
}
.city{
  color: #ffffff; font-size: 15px; font-weight: 500; position: absolute; left: 15px; padding-right: 0; padding-left: 5px;
}
.map_point.logo_right .city{
  padding-right: 5px; right: 15px; left: auto;
}
</style>
