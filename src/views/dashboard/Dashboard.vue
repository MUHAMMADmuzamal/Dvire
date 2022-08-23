<template>
<div>
    <slot></slot>
</div>
</template>
<script>
import {IMAGES, PATH, BRAND_NAME, PAGES_NAMES} from "../../../config";
export default {
  name: "Dashboard",
  data: () => ({

  }),
mounted: function () {
  this.$store.commit('showHideSideBarDrawer',true);
  this.$store.commit('setDashboard',true);
},
destroyed:function () {
  this.$store.commit('showHideSideBarDrawer',false);
  this.$store.commit('setDashboard',false);
},
};
</script>
