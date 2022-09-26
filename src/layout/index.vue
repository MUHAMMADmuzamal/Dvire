<template>
<v-app class="pa-4">
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
import LanguagesApiService from "../mixins/services/language-api-service";
export default {
    name:'Layout',
   components: {
    "app-header":Header,
    "app-footer":Footer,
  },

  data: () => ({
    langApi :  new  LanguagesApiService()
  }),
  methods:{
    getWordsForTranslation : async  function () {
     let  lang = await this.langApi.getAllWordsForTranslationLtToOther();
      lang= lang.data
      console.log(lang)
    this.$store.commit("setEn", lang[0]);
    this.$store.commit("setLt", lang[2]);
    this.$store.commit("setRu", lang[1]);
    }
  },
  created(){
    this.getWordsForTranslation()
  }
};
</script>
<style>

</style>
