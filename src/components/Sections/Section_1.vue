<template>
  <!-- <v-container fluid :style="{ 'background-color': card_color }">
  
    <v-row>
      <v-col md="6" class="pa-16">
        <div class="pa-5">
          <slot>
            <h1>Važiuokime <span>kitaip </span><br> nei iki šiol.</h1>
            <v-spacer></v-spacer>
            <p>Degalai iš perdirbamų atliekų, saulės ir vėjo – toks<br> turėtų būti mūsų pasirinkimas.</p>
            <v-spacer></v-spacer>
            <v-btn
              depressed
              color="primary"
            >
              Nuolaidų kortelė
            </v-btn>
          </slot>
        </div>
      </v-col>
      <v-col md="6">
        <v-img :src="og_image"/>
      </v-col>
    </v-row>
     <div class="vl"></div>   
  </v-container> -->
  <v-container fluid :style="{ 'background-color': card_color }">
    <v-container>
      <v-row  >
        <v-col md="6" class=" d-flex  align-center">
          <div class="">
            <slot>
              <h1>Važiuokime <span style="color:#16ACAC;">kitaip </span><br> nei iki šiol.</h1>
              <v-spacer></v-spacer>
              <p>Degalai iš perdirbamų atliekų, saulės ir vėjo – toks<br> turėtų būti mūsų pasirinkimas.</p>
              
              
            </slot>
          </div>
        </v-col>
        <v-col md="6" class=" mt-5">
          <v-img class="" style="" :src="og_image"/>
        </v-col>
      </v-row>
      
        <v-row class="d-flex align-start mt-lg-n16">
          <v-col>
            <v-btn
                elevation="0"
                x-large                
                tile
                class="col-md-3" 
                style="color:white "
                color="#25ACAB"
              >
                Nuolaidų kortelė
              </v-btn>
          </v-col>
        </v-row>

        <v-row id="degalai">
          <v-col>
            <a href="#degalai">
              <div class="d-flex justify-center" style="border-left: 2px solid black;
              height: 44px;
              position: ;
              left: 50%;
              margin-left: 50%;
              top: 50%; 
              margin-bottom: -70px;
              
              "> 
            </div>
            </a>
          </v-col>
        </v-row>
      
     </v-container>
  </v-container>
</template>
<script>
import {COLORS, IMAGES } from "../../../config";
export default {
  name: "Section_2",
  // props: {
  //   text:{
  //       text: String,
  //       default: "",
  //   },
  //   subText:{
  //       text: String,
  //       default: "",
  //   },
  // },
  data: ()=>({
      sticky: false,
      card_color: COLORS.MAIN_COLOR_1,
      og_image: IMAGES.OG_IMAGE,
      
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vl{
        border-left: 2px solid black;
        height: 44px;
        position: relative;
        left: 50%;
        margin-left: -3px;
        top: 0; 
        margin-bottom: -34px;
}
</style>
