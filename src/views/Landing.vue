<template>
  <div>
    <section-1 />
    <h1 class="d-flex justify-center"><b>Degalai</b></h1>
    <section-2 />
    <section-3 />
  </div>
</template>

<script>
// @ is an alias to /src
import Section_1 from "@/components/Section_1.vue";
import Section_2 from "@/components/Section_2.vue";
import Section_3 from "@/components/Section_3.vue";
import {IMAGES, PAGES_NAMES} from "../../config";
export default {
  name: PAGES_NAMES.LANDING_PAGE,
  components: {
    "section-1":Section_1,
    "section-2":Section_2,
    "section-3":Section_3,
  },
  data: () => ({
    logo: IMAGES.COMPANY_LOGO
  }),
};
</script>
