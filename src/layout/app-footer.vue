<template>
  <v-footer
    dark
    padless
  >
  <v-container fluid :style="{ 'background-color': card_color , 'color':'white'}">
    <v-container class="d-flex justify-center">
      <v-row class="pt-5 pb-5 mb-5">
        <v-col class="pb-5 pt-4">
          <v-img :src="logo"/>
          <br>
          <a href="" style="color:white;">Privatumo politika</a>
          <br>
          <a href="" style="color:white;">Kita teisinė informacija</a>
        </v-col>
        <v-col class="pb-5 pt-4">
          <h3 class="pb-5">Kontaktai</h3>
          El. paštas: <a href="" style="color:white;">info@dvire.lt</a>
          <br>
          Tel. nr.: <a href="" style="color:white;">+370 (699) 01960</a>
        </v-col>
        <v-col class="pb-5 pt-4">
          <h3 class="pb-5">Sekite mus</h3>
          <br>
          <a href="" class="mx-2"><img :src="fb_icon" alt="" srcset=""></a>
          <a href="" class="mx-2"><img :src="linkedin_icon" alt="" srcset=""></a>
        </v-col>
      </v-row>
    </v-container>
      
      <v-container  class="pb-4">
        <hr>
        <center>© Visos teisės saugomos UAB „Dvire”</center>
      </v-container>
  </v-container>
  </v-footer>
</template>
<script>
import {COLORS, IMAGES } from "../../config";
export default {
    name:'Footer',

  data: () => ({
         icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      card_color: COLORS.SECTION_3_COLOR,
      logo: IMAGES.COMPANY_LOGO_WHITE,
      fb_icon: IMAGES.FB_ICON,
      linkedin_icon: IMAGES.LINKEDIN_ICON
  }),
};
</script>
