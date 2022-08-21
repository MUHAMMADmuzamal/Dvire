<template>
<v-container>
  <signup-form/>
</v-container>
</template>

<script>
// @ is an alias to /src
import  SignupForm  from "../components/Forms/signupForm.vue";
import { PAGES_NAMES} from "../../config";

export default {
  name: PAGES_NAMES.SIGNUP_PAGE,
  components:{
    'signup-form':SignupForm,
  },
  data: () => ({
    
  }),
};
</script>
