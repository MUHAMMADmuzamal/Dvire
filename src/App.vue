<template>
<!-- <div > -->
  <!-- <v-google-translate
      :defaultLanguageCode="defaultLanguageCode"
      :defaultPageLanguageCode="defaultPageLanguageCode"
      :fetchBrowserLanguage="false"
      @select="languageSelectedHandler"
    /> -->
    <layout/>
<!-- </div> -->
</template>

<script>
import Layout from './layout/index.vue'
export default {
  name: "App",
  components:{
    "layout":Layout,
  },

  data: () => ({
    defaultLanguageCode: "lt",
    defaultPageLanguageCode: "en",
  }),
};
</script>
