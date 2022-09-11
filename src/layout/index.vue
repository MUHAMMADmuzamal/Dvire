<template>
<v-app class="pa-4">
  <v-google-translate :languages="languages"  @select="languageSelectedHandler"/>
<div class="pa-4">
      <app-header/>
    <v-main >
      <router-view />
    </v-main>
    <app-footer/>
</div>
</v-app>

</template>
<script>
import Header from './app-header.vue'
import Footer from './app-footer.vue'
export default {
    name:'Layout',
   components: {
    "app-header":Header,
    "app-footer":Footer,
  },

  data: () => ({
    languages:[
    {
    code: "en",
    name: "English",
    cname: "英语",
    ename: "English",
  },  {
    code: "lt",
    name: "lietuvių kalba",
    cname: "立陶宛语",
    ename: "Lithuanian",
  },  {
    code: "ru",
    name: "Русский",
    cname: "俄语",
    ename: "Russian",
  },
    ]
  }),
  methods: {
    languageSelectedHandler(info) {
      console.log(info);
    },
  },
};
</script>
<style>

</style>
