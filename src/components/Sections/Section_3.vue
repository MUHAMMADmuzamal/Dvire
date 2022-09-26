<template>
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
            <slot>
              <v-col md="8" class="pt-5  pt-md-10" style="color:white;">

              <v-row class="pa-5">
                <v-col>
                  <h1>{{translate(data.heading_1)}}</h1>
                </v-col>
              </v-row>
              
              <v-row class="pl-5">
                <v-col>
                  <h4 style="color:#9CCB3B;">{{translate(data.heading_2)}}</h4>
                <p>
                  {{translate(data.paragraph_1)}}
                </p>
                </v-col>
              </v-row>

              <v-row class="pl-5">
                <v-col>
                  <h4 style="color:#9CCB3B;">{{translate(data.heading_3)}}</h4>
                </v-col>
              </v-row>
              
              <v-row class="pl-5 d-none d-md-flex">
                <v-col md="6" >
                  <p>
                    {{translate(data.paragraph_2)}}
                  </p>
                </v-col>
                <v-col md="6" >
                  <p>
                    {{translate(data.paragraph_3)}}
                  </p>
                </v-col>
              </v-row>

              <!------------------- mobile view ----------------------------->
              <v-row class="pl-5 d-md-none">
                <v-col >
                  <p>
                    {{translate(data.paragraph_2)}}
                  </p>
                
                  <p>
                    {{translate(data.paragraph_3)}}
                  </p>
                </v-col>
              </v-row>

            </v-col>
            </slot>

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
    props: {
    data:{
        text: String,
        default: "",
    },
  },
  name: "Section_3",
  data: ()=>({
      sticky: false,
      card_color: COLORS.SECTION_3_COLOR,
      backgourd_image_url: IMAGES.CLOUD,
      gas_station_icon_image: IMAGES.GAS_STATION_ICON_IMAGE,
      
  }),
      updated(){
      this.gas_station_icon_image = this.data.image[0].image_url

  },
  methods:{
    translate(key){
      return this.$store.getters.localised(key);
      },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
