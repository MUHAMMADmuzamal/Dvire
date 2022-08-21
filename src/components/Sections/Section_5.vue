<template>
      <!-- <v-container>
        <h1 class="pt-5">Prisijunk prie šios garbingos grupės</h1>
        <v-row class="pt-5">
          <v-col md="6">
            <p>
              Įmonės, kurios metė iššūkį teršiems degalams ir kurios prisideda prie CO2 emisijos sumažinimo:
            </p>
            <v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
          </v-col>
          <v-col md="6">
            <v-img class="pt-5" :src="gas_station_image"/>
          </v-col>
        </v-row>
      </v-container> -->
      <v-container fluid style="padding-left:10%;">
    <h1 class="pt-6">Prisijunk prie šios garbingos grupės</h1>
    <p class="pt-10">Įmonės, kurios metė iššūkį teršiems degalams ir kurios prisideda prie CO2 emisijos sumažinimo:</p>

    <v-row>
      <v-col md="6">
        
        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
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
import {COLORS, IMAGES } from "../../../config";
export default {
  name: "Section_4",
  data: ()=>({
      sticky: false,
      card_color: COLORS.MAIN_COLOR_1,
      og_image: IMAGES.OG_IMAGE,
      gas_image: IMAGES.GAS,
      flash_image: IMAGES.FLASH,
      leaf_image: IMAGES.LEAF,
      backgourd_image_url: IMAGES.CLOUD,
      gas_station_icon_image: IMAGES.GAS_STATION_ICON_IMAGE,
      gas_station_image: IMAGES.GAS_STATION_IMAGE,
      items: [
          {
            src: '../../../assets/images/iveco.svg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
