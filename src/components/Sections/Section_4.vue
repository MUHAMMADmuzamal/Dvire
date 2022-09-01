<template>
      <v-container class="pa-9" :style="{ 'background-color': card_color }" >
      <h1 class="text-center py-5">{{data.mainHeading}}</h1>
      <v-row class="pt-5">
        <v-col md="4" class="px-8">
          <h4>{{data.heading_1}}</h4>
          <p>{{data.paragraph_1}}</p>
        </v-col>

        <v-col  md="4" class="px-8">
          <h4>{{data.heading_2}}</h4>
          <p>{{data.paragraph_2}}</p>
        </v-col>

        <v-col  md="4" class="px-8">
          <h4>{{data.heading_3}}</h4>
          <p>{{data.paragraph_3}}</p>
        </v-col>
      </v-row>

      <v-row>
      <v-col md="4" class="px-8">
          <h4>{{data.heading_4}}</h4>
          <p>{{data.paragraph_4}}</p>
        </v-col>

        <v-col md="4" class="px-8">
          <h4>{{data.heading_5}}</h4>
          <p>{{data.paragraph_5}}</p>
        </v-col>
        
        <v-col md="4" class="px-8">
          <h4>{{data.heading_6}}</h4>
          <p>{{data.paragraph_6}}</p>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
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
      
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
