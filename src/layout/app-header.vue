<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      temporary
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img :src="profile_image"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{user_name}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title  style="cursor: pointer">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :color="color_change"
      :fixed="fixed_nav_bar"
      width="100%"
      elevate-on-scroll
    >
    <v-container>
      <v-row>
        <v-col>
          <v-toolbar-title class="d-flex align-center">
            <router-link :to="landing_page" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer">
              <v-img :src="logo"></v-img>
              </span>
            </router-link>
          </v-toolbar-title>
        </v-col>
        <v-col class="hidden-xs-only hidden-sm-only pt-5">
          <v-toolbar-items v-if="!dashboard">
            <v-btn
              text
              class="nav_hover"
              v-for="item,index in menuItems"
              v-if="index<6"
              :key="item.title"
              :to="item.path">
              {{ item.title }}
            </v-btn>
            <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="item,index in menuItems"
            v-if="index>=6"
            :key="index"
            :to="item.path"
          >
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
          </v-toolbar-items>
        </v-col>
        <v-col class="hidden-md-and-up">
          <span v-if="!dashboard" class="d-flex justify-end" >
              <v-app-bar-nav-icon @click="showHideDrawar()"></v-app-bar-nav-icon>
          </span>
        </v-col>
        <v-col v-if="dashboard" >
          <!-- show on dashboard -->
          <span>
              <v-app-bar-nav-icon @click="showHideDrawar()"></v-app-bar-nav-icon>
          </span>
        </v-col>
        
      </v-row>
    </v-container>
        <!-- <v-toolbar :color="color"> -->
          <!-- <v-spacer></v-spacer>

          <v-spacer></v-spacer> -->
          <!-- show on normal website -->

          <!-- <v-spacer></v-spacer> -->

        <!-- </v-toolbar> -->
        </v-app-bar>
  </div>
</template>
<script>
import {IMAGES, PATH, BRAND_NAME, COLORS} from "../../config";
export default {
  name: "Header",
  data: () => ({
        logo: IMAGES.COMPANY_LOGO,
        landing_page: PATH.LANDING_PAGE,
        appTitle: BRAND_NAME,
        color_change:COLORS.MAIN_COLOR_1,
        fixed_nav_bar:false,
        color: "#F8F4EF",
        profile_image:"https://randomuser.me/api/portraits/men/78.jpg",
        user_name:"Guest",

  }),
  computed:{
    menuItems:function(){
      if (this.$store.state.app_header_states.dashboard) {
        return this.$store.state.app_header_states.dashboard_menu_items;
      }
      return this.$store.state.app_header_states.web_menu_items;
    },
    drawer:{
           get(){
             return  this.$store.state.app_header_states.side_bar_show;
           },
           set(value){
              this.$store.commit('showHideSideBarDrawer',value);
           } 
        },
    showMenuButton:function(){
          // if (this.$store.state.app_header_states.dashboard) {
          //   return  ""
          // }else{
          //     return"hidden-sm-and-up"
          // }
            
          return this.$store.state.app_header_states.dashboard

        },
    dashboard:function(){
        return this.$store.state.app_header_states.dashboard;
  },
  },
    created () {
      window.addEventListener("scroll", this.handleScroll);
    },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },



  methods:{
    handleScroll(event) {
            if (window.scrollY > 0) {
              this.fixed_nav_bar=true;
              this.color_change="white";
            }else{
              this.fixed_nav_bar=false;
              this.color_change=COLORS.MAIN_COLOR_1;
            }
      // console.log(window.scrollY);
    },
    showHideDrawar: function(){
      this.drawer = !this.drawer;
    },
  }
};
</script>
<style scoped>
.nav_hover{
    display: inline-block;
    color: #000000;
    text-decoration: none;   
}
.nav_hover::before {
   background-color: transparent ; 
}
 .nav_hover:hover{
    backface-visibility: hidden;    
    color:#16ACAC;
}
.nav_hover::after{
    content: '';
    display: block;
    width: 0;
    height: 2px; 
    background: #16ACAC;
    transition: width .3s;
}
.nav_hover:hover::after{
    width: 80%;
}
</style>
