<template>
<div>
  <v-container fluid class="pa-md-16 py-16" style="background-color: #F8F4EF;">
    <v-container class="pa-md-6">
      <v-row class="pa-sm-6 my-10" style="background-color:white; border:2px solid #25ACAB;">
        
        <div class="d-md-none col-sm-12">
          <v-img
          aspect-ratio="1.5"
          src="../assets/images/factory.jpg"
          ></v-img>
        </div>

        <v-col md="6">
          <h1 class="pt-6" >
            Biometaną planuojama išgauti ir Lietuvoje – aplinkai draugiško kuro jėgainė kils prie Panevėžio
          </h1>
          <p class="py-6">
            Kol kas visas Lietuvoje naudojamas biometanas yra importuojamas iš užsienio šalių tarptautinių sertifikatų keliu ir Lietuvoje negaminamas. Vis dėlto artimiausia
          </p>

          <!-- <button class="btn1 col-sm-6" >Skaityti</button> -->
          <div class="col-sm-6">
            <generic-button text="Skaityti"/>
          </div>

        </v-col>

        <v-col md="6" class="d-none d-md-flex align-start">
          <v-img
          aspect-ratio="1.5"
          src="../assets/images/factory.jpg"
          ></v-img>
        </v-col>
      </v-row>
      

     </v-container>
  </v-container>

  <!-- ------------------------------------------------------------------------- -->
  <v-container>
    <v-row class=" mt-n16 ">
      <div class="col-sm-6 col-md-4">
        <div elevation class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          src="../assets/images/DNR.jpg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-4"> 
        <div class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          src="../assets/images/LRS.png"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-4"> 
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
      </div>
    </v-row>
  </v-container>

  <!-- ----------------------------------------------------- -->
  <v-container>
    <v-row class=" ">
      <div class="col-sm-6 col-md-4"> 
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
      </div>
      <div class="col-sm-6 col-md-4">
        <div class="pa-4 box_shadow">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          src="../assets/images/jungle_truck.png"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </div>
      <div class="col-sm-6 col-md-4"> 
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
      </div>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center py-16">
        <!-- <button class="btn1" >Rodyti daugiau</button> -->
        <generic-button text="Rodyti daugiau"/>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>
<script>
import { PAGES_NAMES} from "../../config";
import GenericButton from '../components/GenericButton/GenericButton.vue'
export default {
    name: PAGES_NAMES.NEWS_PAGE,
  components:{
    'generic-button':GenericButton,
  },
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
