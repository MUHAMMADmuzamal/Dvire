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
export default {
    name:'Layout',
   components: {
    "app-header":Header,
    "app-footer":Footer,
  },

  data: () => ({
  }),
};
</script>
<style>

</style>
