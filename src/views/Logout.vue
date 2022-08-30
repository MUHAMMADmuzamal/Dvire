<template>
</template>

<script>
// @ is an alias to /src
import { PAGES_NAMES} from "../../config";

export default {
  name: PAGES_NAMES.LOGOUT_PAGE,
  components:{
  },
  data: () => ({
    
  }),
  created () {
      const cooke={
        auth:{
          token:""
        },
        info:""
      }
      $cookies.set('user',cooke);
      this.$router.push({name:PAGES_NAMES.LANDING_PAGE})
    },
};
</script>
