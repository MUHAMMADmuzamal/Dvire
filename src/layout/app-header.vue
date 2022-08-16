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
        <v-toolbar>
          <span class="hidden-sm-and-up">
              <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </span>
          <v-toolbar-title>
            <router-link :to="landing_page" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer">{{ appTitle }}</span>
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn
              text
              v-for="item in menuItems"
              :key="item.title"
              :to="item.path">
              {{ item.title }}
            </v-btn>
          </v-toolbar-items>
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
        drawer: false,
        profile_image:"https://randomuser.me/api/portraits/men/78.jpg",
        user_name:"Ali",
        menuItems: [
            { title: PAGES_NAMES.LANDING_PAGE, path: PATH.LANDING_PAGE },
            { title: PAGES_NAMES.ABOUT_PAGE, path: PATH.ABOUT_PAGE},
            { title: PAGES_NAMES.CARD_PAGE, path: PATH.CARD_PAGE },
            { title: PAGES_NAMES.DICTIONARY_PAGE, path: PATH.DICTIONARY_PAGE },
            { title: PAGES_NAMES.LAWS_PAGE, path: PATH.LAWS_PAGE },
            { title: PAGES_NAMES.NEWS_PAGE, path: PATH.NEWS_PAGE },
      ]
  }),
};
</script>
