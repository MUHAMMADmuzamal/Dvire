<template>
<div>
<!-- ----------------------------------------------------------------------------- -->

  <v-container fluid class="" style="background-color: #F8F4EF;">
    <v-container>
      <v-row  >
        <v-col md="6" class=" d-flex  align-center">
          <div class="">
            <slot>
              <h1>Degalų pildymo <br> kortelė</h1>
              <!-- <v-spacer></v-spacer> -->
              <p class="pt-4">DVIRE siekia kartu su metanu Lietuvos keliuose pradėti naudoti biometaną, vandenilį ir elektrą, išgaunamus iš saulės, vėjo ir perdirbtų atliekų, reikšmingai sumažinti CO2 emisijas.</p>
              
              
            </slot>
          </div>
        </v-col>
        <v-col md="6" class=" mb-n16">
          <v-img  style="" src="../assets/images/dvire_card.svg"/>
        </v-col>
      </v-row>
      

     </v-container>
  </v-container>

  <!-- ------------------------------------------------------------------------- -->
   


        
 

  <!-- ----------------------------------------------------------------------------------------- -->
<v-container fluid  style="background-color: #0F4C81 ;">

      <!-- <v-container style="position:relative"> -->
          <v-row class="ps-md-16">
            <v-col md="7" class="pt-5  pt-md-10" style="color:white;">

              <v-row class="py-5">
                <v-col>
                  <h1>Dvire kortelė</h1>
                </v-col>
              </v-row>
              
              <v-row class="">
                <v-col>
                  
                <p>
                    Degalų pildymo kortelė išduodama įmonėms, įsigijusioms metano dujomis varomus automobilius iš gamintojų, dalyvaujančių alternatyviųjų degalų Lietuvoje skatinimo iniciatyvoje DVIRE.
                    <br><br><br>
                    DVIRE kortelė suteikia galimybę palankiausiomis rinkoje sąlygomis naudotis DVIRE iniciatyvos partnerių suslėgto metano (SGD) viešojo pildymo stočių tinklu didžiuosiuose Lietuvos miestuose - Vilniuje, Kaune, Klaipėdoje, Šiauliuose ir Panevėžyje.
                    <br><br><br>
                    DVIRE kortelę išduoda ir administruoja iniciatyvą koordinuojantis startuolis UAB „Dvire“.
                </p>
                </v-col>
              </v-row>




            </v-col>

            <v-col md="5" class="d-flex align-center py-6">
              
              <v-img
              
              style="transform: translateX(12px);"
              src="../assets/images/truck.svg"
              ></v-img>
            </v-col>
          </v-row>
          
      <!-- </v-container> -->
</v-container>

<!-- ----------------------------------------------------------------------------------------- -->
<v-container fluid >

      <!-- <v-container style="position:relative"> -->
          <v-row >
            
            <v-col md="8" class="py-16 px-md-16" style="background-color: #F8F4EF; color:#000000;">

              <v-container>
                
                  <h1>Kaip naudotis kortele?</h1>
                
                  
                <p>
                    DVIRE kortele galima atsiskaityti už degalus visuose „SG dujos“ savitarnos terminaluose ir „Panevėžio autobusų parko“ (nuo 2021 m. pradžios) metano pildymo stotyje.
                    <br><br><br>
                    Mokėjimo kortelės atsiskaitymo limitą, kitas kortelės papildymo sąlygas bendru sutarimu nustato UAB „Dvire“ ir kortelės gavėjas.
                    <br><br><br>
                    Detali naudojimosi kortele ir metano dujų pildymo instrukcija skelbiama kiekvienos pildymo stoties savitarnos terminale.
                </p>
                
              </v-container>




            </v-col>

            <v-col md="4" class="d-flex align-center" style="margin-left:" >
              <v-row>
                <v-col height="100">
                  <v-img
                  
                    width="300px"
                    style=""
                    src="../assets/images/map.svg"
                    ></v-img>
                </v-col>
              
              
              
                <v-col >
                  <h3 class="text-center">Metano pildymo stotys</h3>
                </v-col>
              </v-row>
            </v-col>
            
          </v-row>

          <v-row>
            <v-col>
               
            </v-col>
          </v-row>
          
      <!-- </v-container> -->
</v-container>

<!-- ---------------------------------------------------------------------- -->

    

  <!-- ----------------------------------------------------------------------------------------- -->

  <v-container fluid >
    

    <v-row class="py-16">
      <v-col md="6" class="px-md-16">
        
       <form class="px-md-16">
        <h1 class="py-6">Kreiptis dėl kortelės</h1>
    <v-text-field
      :counter="10"
      label="Vardas"
      required
    ></v-text-field>
    <v-text-field
      :counter="10"
      label="Pavardė"
      required
    ></v-text-field>
    <v-text-field
      :counter="10"
      label="Įmonė"
      required
    ></v-text-field>
    <v-text-field
      label="El. paštas"
      required
    ></v-text-field>
    
    <v-checkbox
      label="Pažymėdamas patvirtinu, kad perskaičiau ir sutinku su Privatumo politika"
      required
    ></v-checkbox>

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
    
  </form>
      
      </v-col>
      <v-col md="6" class="py-16" >
        <v-img
        style="transform: translateX(28px);"
        src="../assets/images/single_card.svg"
        
        ></v-img>
      </v-col>
    </v-row>

  </v-container>  

  <!-- ----------------------------------------------------- -->
  <v-container>
    <h1 class="d-flex justify-center mt-n16">Naujienos</h1>
    <v-row class="d-flex justify-space-around py-16">
      <v-col class="pa-4" > 
        <div elevation class="pa-4" style="border:2px solid #25ACAB;">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          style="position: relative;"
          src="../assets/images/fan_tower.svg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
      <v-col class="pa-4" > 
        <div class="pa-4" style="border:2px solid #25ACAB;">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          src="../assets/images/fan_tower.svg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
      <v-col class="pa-4" > 
        <div class="pa-4" style="border:2px solid #25ACAB;">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          class=""
          width=""  src="../assets/images/fan_tower.svg"></v-img>
          <h2>Biometano ir vandenilio gamintojus</h2>
          <p>Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų. Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos …</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>
<script>
import { PAGES_NAMES} from "../../config";
export default {
    name: PAGES_NAMES.CARD_PAGE,

  data: () => ({
    //
  }),
};
</script>
<style>

</style>
