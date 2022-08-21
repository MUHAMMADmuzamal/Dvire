<template>
<v-container>
  <login-form/>
</v-container>
</template>

<script>
// @ is an alias to /src
import  LoginForm  from "../components/Forms/loginForm.vue";
import { PAGES_NAMES} from "../../config";

export default {
  name: PAGES_NAMES.LOGIN_PAGE,
  components:{
    'login-form':LoginForm,
  },
  data: () => ({
    
  }),
};
</script>
