<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
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
        <v-toolbar :color="color">
          <v-toolbar-title>
            <router-link :to="landing_page" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer">
              <v-img :src="logo"></v-img>
              </span>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <!-- show on normal website -->
          <v-toolbar-items v-if="!dashboard"  class="hidden-xs-only">
            <v-btn
              text
              v-for="item in menuItems"
              :key="item.title"
              :to="item.path">
              {{ item.title }}
            </v-btn>
          </v-toolbar-items>
          <span v-if="!dashboard"  class="hidden-sm-and-up">
              <v-app-bar-nav-icon @click="showHideDrawar()"></v-app-bar-nav-icon>
          </span>
          <!-- show on dashboard -->
          <span  v-if="dashboard">
              <v-app-bar-nav-icon @click="showHideDrawar()"></v-app-bar-nav-icon>
          </span>
        </v-toolbar>
  </div>
</template>
<script>
import {IMAGES, PATH, BRAND_NAME, PAGES_NAMES} from "../../config";
export default {
  name: "Header",
  data: () => ({
        logo: IMAGES.COMPANY_LOGO,
        landing_page: PATH.LANDING_PAGE,
        appTitle: BRAND_NAME,
        // drawer: false,
        // dashboard:false,
        // showMenuButton:true,
        color: "#F8F4EF",
        profile_image:"https://randomuser.me/api/portraits/men/78.jpg",
        user_name:"Ali",
      //   menuItems: [
      //       { title: PAGES_NAMES.LANDING_PAGE, path: PATH.LANDING_PAGE },
      //       { title: PAGES_NAMES.ABOUT_PAGE, path: PATH.ABOUT_PAGE},
      //       { title: PAGES_NAMES.CARD_PAGE, path: PATH.CARD_PAGE },
      //       { title: PAGES_NAMES.DICTIONARY_PAGE, path: PATH.DICTIONARY_PAGE },
      //       { title: PAGES_NAMES.LAWS_PAGE, path: PATH.LAWS_PAGE },
      //       { title: PAGES_NAMES.NEWS_PAGE, path: PATH.NEWS_PAGE },
      //       { title: PAGES_NAMES.LANG_PAGE, path: PATH.LANG_PAGE },
      // ],
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


  methods:{
    showHideDrawar: function(){
      this.drawer = !this.drawer;
    },
  }
};
</script>
