<template>
    <layout/>
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
