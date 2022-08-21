<template>
      <!-- <v-container class="pa-5"  :style="{ 'background-color': card_color }"  >
      <h1 class="text-center">Konsultuojame</h1>
          <v-row class="pt-5">
            <v-col md="4" class="pt-5" >
            <h4>Biometano ir vandenilio gamintojus</h4>
            <p>
              Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų.
            </p>
            </v-col>
            <v-col md="4" class="pt-5" >
            <h4>CNG ir LNG degalų pardavėjus praktikus</h4>
            <p>
              Patariame, kaip reikšmingai prisidėti prie atsinaujinančių degalų infrastruktūros plėtros.
            </p>
            </v-col>
            <v-col md="4" class="pt-5" >
            <h4>Benzino ir dyzelino degalų pardavėjus</h4>
            <p>
              
            </p>
            </v-col>
          </v-row>
          <v-row class="pt-5">
            <v-col md="4" class="pt-5" >
            <h4>Transporto priemonių gamintojų atstovus</h4>
            <p>
              Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų.
            </p>
            </v-col>
            <v-col md="4" class="pt-5" >
            <h4>Vyriausybines ir nevyriausybines organizacijas</h4>
            <p>
              Žinome, kaip laiku ir tinkamai pasiruošti Europos Sąjungos direktyvų ir Lietuvoje jas įtvirtinančio Alternatyviųjų degalų įstatymo nuostatų įgyvendinimui.
            </p>
            </v-col>
            <v-col md="4" class="pt-5" >
            <h4>Transporto parkų valdytojams</h4>
            <p>
              Žinome, kaip laiku ir tinkamai pasiruošti Europos Sąjungos direktyvų ir Lietuvoje jas įtvirtinančio Alternatyviųjų degalų įstatymo nuostatų įgyvendinimui.
            </p>
            </v-col>
          </v-row>
      </v-container> -->
      <v-container class="pa-9" :style="{ 'background-color': card_color }" >
      <h1 class="text-center py-5">Konsultuojame</h1>
      <v-row class="pt-5">
        <v-col md="4" class="px-8">
          <h4>Biometano ir vandenilio gamintojus</h4>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų.</p>
        </v-col>

        <v-col  md="4" class="px-8">
          <h4>CNG ir LNG degalų pardavėjus praktikus</h4>
          <p>Patariame, kaip reikšmingai prisidėti prie atsinaujinančių degalų infrastruktūros plėtros.</p>
        </v-col>

        <v-col  md="4" class="px-8">
          <h4>Benzino ir dyzelino degalų pardavėjus</h4>
          <p></p>
        </v-col>
      </v-row>

      <v-row>
      <v-col md="4" class="px-8">
          <h4>Transporto priemonių gamintojų atstovus</h4>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų.</p>
        </v-col>

        <v-col md="4" class="px-8">
          <h4>Vyriausybines ir nevyriausybines organizacijas</h4>
          <p>Žinome, kaip laiku ir tinkamai pasiruošti Europos Sąjungos direktyvų ir Lietuvoje jas įtvirtinančio Alternatyviųjų degalų įstatymo nuostatų įgyvendinimui.</p>
        </v-col>
        
        <v-col md="4" class="px-8">
          <h4>Transporto parkų valdytojams</h4>
          <p>Žinome, kaip laiku ir tinkamai pasiruošti Europos Sąjungos direktyvų ir Lietuvoje jas įtvirtinančio Alternatyviųjų degalų įstatymo nuostatų įgyvendinimui.</p>
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
      
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
