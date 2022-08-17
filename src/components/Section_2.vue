<template>
  <v-container  :style="{ 'background-color': card_color }">
    <div class="container" align="center">
        <div class="pa-5">
          <slot>
           <p>
            Degalai iš perdirbamų atliekų, saulės ir vėjo – toks turėtų būti mūsų pasirinkimas, kad sumažintume  CO2 emisijas ir sukurtume klimatui neutralią ekonomiką.
           </p>
          <v-row>
            <v-col>
              <img :src="leaf_image" alt="" srcset=""/>
              Biometanas
            </v-col>
            <v-col>
              <img :src="gas_image" alt="" srcset=""/>
              Vandenilis
            </v-col>
            <v-col>
              <img :src="flash_image" alt="" srcset=""/>
              Elektra
            </v-col>
          </v-row>
          </slot>
        </div>
    </div>
  </v-container>
</template>
<script>
import {COLORS, IMAGES } from "../../config";
export default {
  name: "Section_1",
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
      gas_image: IMAGES.GAS,
      flash_image: IMAGES.FLASH,
      leaf_image: IMAGES.LEAF,
      
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
