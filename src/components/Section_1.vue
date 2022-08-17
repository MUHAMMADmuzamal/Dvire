<template>
  <v-container fluid :style="{ 'background-color': card_color }">
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
            <!-- <v-sheet
              color="teal"
              height="50"
              width="150"
            >
            <span class="pt-10">Nuolaidų kortelė</span>
            </v-sheet> -->
          </slot>
        </div>
      </v-col>
      <v-col md="6">
        <v-img :src="og_image"></v-img>
      </v-col>
    </v-row>
    <span class="d-flex justify-center">|</span>
  </v-container>
</template>
<script>
import {COLORS, IMAGES } from "../../config";
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
</style>
