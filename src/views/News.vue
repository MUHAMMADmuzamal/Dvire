<template>
<div>
  <v-container fluid class="pa-md-16 py-16" style="background-color: #F8F4EF;">
    <v-container class="pa-md-6">
      <v-row class="pa-md-6 my-10" style="background-color:white; border:2px solid #25ACAB;">
        
        <v-col md="6" class="d-md-none">
          <v-img
          contain
          src="../assets/images/factory.jpg"
          ></v-img>
        </v-col>

        <v-col md="6">
          <h1>
            Biometaną planuojama išgauti ir Lietuvoje – aplinkai draugiško kuro jėgainė kils prie Panevėžio
          </h1>
          <p class="py-6">
            Kol kas visas Lietuvoje naudojamas biometanas yra importuojamas iš užsienio šalių tarptautinių sertifikatų keliu ir Lietuvoje negaminamas. Vis dėlto artimiausia
          </p>

          <v-btn
          elevation="0"
          x-large                
          tile
          width=""
          class="col-md-6"
          style="color:white "
          color="#25ACAB"
          >
          Siųsti
          </v-btn>

        </v-col>

        <v-col md="6" class="d-none d-md-flex align-start">
          <v-img
          contain
          src="../assets/images/factory.jpg"
          ></v-img>
        </v-col>
      </v-row>
      

     </v-container>
  </v-container>

  <!-- ------------------------------------------------------------------------- -->
  <v-container>
    <v-row class="d-flex justify-space-around  mt-n16 ">
      <v-col > 
        <div elevation class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          style="position: relative;"
          src="../assets/images/DNR.jpg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
      <v-col > 
        <div class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          src="../assets/images/LRS.png"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
      <v-col > 
        <div class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          class=""
          width=""  src="../assets/images/road_truck.jpg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
    </v-row>
  </v-container>

  <!-- ----------------------------------------------------- -->
  <v-container>
    <v-row class="d-flex justify-space-around ">
      <v-col > 
        <div elevation class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          style="position: relative;"
          src="../assets/images/dvire_tablet.png"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
      <v-col > 
        <div class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          src="../assets/images/jungle_truck.png"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
      <v-col > 
        <div class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          class=""
          width=""  src="../assets/images/road_van.png"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center py-16">
        <v-btn
          elevation="0"
          x-large                
          tile
          width=""
          
          class="col-md-3"
          style="color:white "
          color="#25ACAB"
          >
          Rodyti daugiau
          </v-btn>
      </v-col>
    </v-row>
  </v-container>
</div>

</template>
<script>
import { PAGES_NAMES} from "../../config";
export default {
    name: PAGES_NAMES.NEWS_PAGE,

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.box_shadow{
  transition: box-shadow .3s;
  border:2px solid #25ACAB;
  background-color: white;
}
.box_shadow:hover {
  box-shadow: 0 0 20px rgba(33,33,33,.3); 
  cursor: pointer;
}
</style>
