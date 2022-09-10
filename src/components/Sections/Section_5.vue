<template>
      <v-container fluid style="padding-left:10%;">
    <h1 class="pt-6">{{data.heading_1}}</h1>
    <p class="pt-10">{{data.paragraph_1}}</p>

    <v-row>
      <v-col md="6">
        
        <v-carousel hide-delimiters height="30vh" class="my-16">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            class="text-center"
          >
          <img :src="item.src" width="60%" height="100vh" class="my-10 my-sm-0 my-md-14 my-lg-16" alt="" srcset="">
        </v-carousel-item>
        </v-carousel>
      
      </v-col>
      <v-col md="6" class="pl-n2">
        <v-img
        :src="gas_station_image"
        class="ml-9"
        ></v-img>
      </v-col>
    </v-row>

  </v-container>
</template>
<script>
import { image } from "vee-validate/dist/rules";
import {COLORS, IMAGES } from "../../../config";
export default {
  name: "Section_4",
  props: {
    data:{
        text: String,
        default: "",
    },
  },
  data: ()=>({
      sticky: false,
      card_color: COLORS.MAIN_COLOR_1,
      gas_station_image: IMAGES.GAS_STATION_IMAGE,
      items: IMAGES.SLIDER_IMAGES,
      run:true
      
  }),
    updated(){
      if(this.run){
      const arr = []
      // this.items = this.data.slider_images
      console.log(this.data.slider_images)
      for (let index = 0; index < this.data.slider_images.length; index++) {
        arr.push({src:this.data.slider_images[index].image_url})
        
      }
      console.log(arr)
      this.items = arr
      this.gas_station_image = this.data.image_1[0].image_url
      }
    this.run=false
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
