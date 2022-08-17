<template>
  <v-container  :style="{ 'background-color': card_color }">
  <v-parallax :src="backgourd_image_url">
      <!-- <div :style="{background: 'url('+backgourd_image_url+')'}" class="pa-0 ma-0">
hello
  </div> -->
  </v-parallax>
  </v-container>
</template>
<script>
import {COLORS, IMAGES } from "../../config";
export default {
  name: "Section_1",
  data: ()=>({
      sticky: false,
      card_color: COLORS.SECTION_3_COLOR,
      og_image: IMAGES.OG_IMAGE,
      gas_image: IMAGES.GAS,
      flash_image: IMAGES.FLASH,
      leaf_image: IMAGES.LEAF,
      backgourd_image_url: IMAGES.CLOUD,
      
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
