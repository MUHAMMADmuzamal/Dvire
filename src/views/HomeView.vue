<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import {IMAGES, PAGES_NAMES} from "../../config";
export default {
  name: PAGES_NAMES.LANDING_PAGE,
  components: {
    HelloWorld,
  },
  data: () => ({
    logo: IMAGES.COMPANY_LOGO
  }),
};
</script>
