<template>
    <!-- <section :style="{ 'background-color': card_color }">
      <v-container fluid  :style="{background: 'url('+backgourd_image_url+')', 'background-repeat':'no-repeat'}"  >
          <v-row>
            <v-col md="8" class="pt-5" style="color:white;">
              <v-row class="pa-5">
                <h1>Kodėl mes?</h1>
              </v-row>
              <h4 style="color:#9CCB3B;">Misija</h4>
              <v-row class="pl-5 pr-5">
                <p>
                  Pagreitinti alternatyvių atsinaujinančių degalų panaudojimą transporte.
                </p>
              </v-row>
              <h4 style="color:#9CCB3B;">Tikslai</h4>
              <v-row class="pa-5">
                <v-col md="5">
                  <p>
                    Pagreitinti alternatyvių atsinaujinančių degalų - biometano, vandenilio, naudojamų kartu su elektra - naudojimą transporte.
                  </p>
                </v-col>
                <v-col md="5">
                  <p>
                    Padėti degalų vartotojams ir degalų tiekėjams smarkiai sumažinti CO2 emisiją.
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col md="4" class="pt-5">
              <img :src="gas_station_icon_image" alt="" srcset="" style="padding-left: 100px;">
            </v-col>
          </v-row>
      </v-container>
    </section> -->
    <v-container fluid  :style="{ 'background-color': card_color }">
  <v-row class="mb-n16">
        <v-col class="mb-md-n16">
            <v-img
            :src="backgourd_image_url"
            class="mb-md-n16"
            height="160%"
            ></v-img>
        </v-col>
      </v-row>

      <v-container style="position:relative">
          <v-row >
            <v-col md="8" class="pt-5  pt-md-10" style="color:white;">

              <v-row class="pa-5">
                <v-col>
                  <h1>Kodėl mes?</h1>
                </v-col>
              </v-row>
              
              <v-row class="pl-5">
                <v-col>
                  <h4 style="color:#9CCB3B;">Misija</h4>
                <p>
                  Pagreitinti alternatyvių atsinaujinančių degalų panaudojimą transporte.
                </p>
                </v-col>
              </v-row>

              <v-row class="pl-5">
                <v-col>
                  <h4 style="color:#9CCB3B;">Tikslai</h4>
                </v-col>
              </v-row>
              
              <v-row class="pl-5 d-none d-md-flex">
                <v-col md="6" >
                  <p>
                    Pagreitinti alternatyvių atsinaujinančių degalų - biometano, vandenilio, naudojamų kartu su elektra - naudojimą transporte.
                  </p>
                </v-col>
                <v-col md="6" >
                  <p>
                    Padėti degalų vartotojams ir degalų tiekėjams smarkiai sumažinti CO2 emisiją.
                  </p>
                </v-col>
              </v-row>

              <!------------------- mobile view ----------------------------->
              <v-row class="pl-5 d-md-none">
                <v-col >
                  <p>
                    Pagreitinti alternatyvių atsinaujinančių degalų - biometano, vandenilio, naudojamų kartu su elektra - naudojimą transporte.
                  </p>
                
                  <p>
                    Padėti degalų vartotojams ir degalų tiekėjams smarkiai sumažinti CO2 emisiją.
                  </p>
                </v-col>
              </v-row>

            </v-col>

            <v-col md="4" class="pt-4">
              
              <v-img
              :src="gas_station_icon_image"
              max-height=""
              max-width="200"
              class="mb-n6 mt-md-16 "
              style="margin-left:100px;"
              ></v-img>
              <!-- <img fluid class="" src="../assets/pic1.svg" alt=""  style="padding-left: ; "> -->
            </v-col>
            <!-- </v-parallax> -->
          </v-row>
          
      </v-container>
</v-container>
</template>
<script>
import {COLORS, IMAGES } from "../../../config";
export default {
  name: "Section_3",
  data: ()=>({
      sticky: false,
      card_color: COLORS.SECTION_3_COLOR,
      backgourd_image_url: IMAGES.CLOUD,
      gas_station_icon_image: IMAGES.GAS_STATION_ICON_IMAGE,
      
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
