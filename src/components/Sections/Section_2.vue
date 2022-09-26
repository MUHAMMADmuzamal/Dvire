<template>
  <v-container fluid class=" pa-5 mb-5 mt-5 ">
    <h1 class="text-center">{{translate(data.heading_1)}}</h1>
    <v-container class=" mt-4" :style="{ 'background-color': card_color }">
        <p class="text-center" style="width:80%; margin:auto;">
            {{translate(data.paragraph_1)}}
        </p>     
        <v-row class="d-none d-md-flex text-center" style="width:80%; margin:auto;">
          <v-col md="4" class="mb-n13">
              <img :src="leaf_image" alt="" srcset="" style=" padding-top: 30px;"/>
          </v-col>
          <v-col md="4" class="mb-n13">
              <img :src="gas_image" alt="" srcset="" style=" padding-top: 30px;"/>
          </v-col>
          <v-col md="4" class="mb-n13">
              <img :src="flash_image" alt="" srcset="" style=" padding-top: 30px;" class="pr-4"/>
          </v-col>
        </v-row>
<!-- --------------------------------mobile view---------------------------------------------- -->
        <v-row class="d-md-none text-center">
          <v-col xs="12"  class="mb-n8">
              <img :src="leaf_image" alt="" srcset="" style=" padding-top: 30px;"/>
          </v-col>
        </v-row>
        <v-row class="d-md-none text-center">
          <v-col xs="12"  class="mb-n8">
              <img :src="gas_image" alt="" srcset="" style=" padding-top: 30px;"/>
          </v-col>
        </v-row>
        <v-row class="d-md-none text-center">
          <v-col xs="12"  class="mb-n8">
              <img :src="flash_image" alt="" srcset="" style=" padding-top: 30px;" class="pr-4"/>
          </v-col>
        </v-row>
  </v-container>
  </v-container>
</template>
<script>
import {COLORS, IMAGES } from "../../../config";
export default {
  name: "Section_2",
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
      gas_image: IMAGES.GAS,
      flash_image: IMAGES.FLASH,
      leaf_image: IMAGES.LEAF,
      
  }),
    updated(){
      this.gas_image = this.data.icon_2[0].image_url
      this.flash_image = this.data.icon_3[0].image_url
      this.leaf_image = this.data.icon_1[0].image_url

  },
  methods:{
    translate(key){
      return this.$store.getters.localised(key);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
