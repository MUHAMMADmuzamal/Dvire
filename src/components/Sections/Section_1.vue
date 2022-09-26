<template>
  <v-container fluid :style="{ 'background-color': card_color }">
  <!-- {{data.Image[0].image_url}} -->
    <v-container>
      <v-row  >
        <v-col md="6" class=" d-flex  align-center">
          <div class="">
            <slot>
              <h1>{{translate(data.heading_1)}} <span style="color:#16ACAC;">{{translate(data.heading_1_text_inside_span_tag)}} </span><br>{{translate(data.heading_1_after_span_tag)}}</h1>
              <v-spacer></v-spacer>
              <!-- <p>{{translate("Fuel from recyclable waste, sun and wind should be our choice.")}}</p>              -->
              <p>{{translate(data.paragraph_1)}}</p>                        
            </slot>
          </div>
        </v-col>
        <v-col md="6" class=" mt-5">
          <v-img class="" style="" :src="og_image"/>
        </v-col>
      </v-row>
      
        <v-row class="d-flex align-start mt-lg-n16">
          <v-col>
            <!-- <v-btn
                elevation="0"
                x-large                
                tile
                class="col-md-3" 
                style="color:white "
                color="#25ACAB"
              >
                {{data.buttonText}}
              </v-btn> -->
              <generic-button :text="translate(data.buttonText)" cls="btn1 col-md-4 col-lg-4"/>
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
import GenericButton from '../GenericButton/GenericButton.vue'
export default {
  name: "Section_1",
    components:{
    'generic-button':GenericButton,
  },
  props: {
    data:{
        text: String,
        default: "",
    },
  },
  data: ()=>({
      sticky: false,
      card_color: COLORS.MAIN_COLOR_1,
      og_image: IMAGES.OG_IMAGE,
      
  }),
  updated(){
      this.og_image = this.data.Image[0].image_url

  },
  methods:{
    translate(key){

        return this.$store.getters.localised(key);
      },
  }
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
