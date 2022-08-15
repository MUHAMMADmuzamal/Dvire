<template>
<v-app>
    <app-header/>
    <v-main>
      <router-view />
    </v-main>
    <app-footer/>
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
    //
  }),
};
</script>
<style>

</style>
