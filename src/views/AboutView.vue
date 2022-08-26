<template>
  <div>
    <h1>{{about.title}}</h1>
    <div v-html="about.content">      
    </div>
  </div>
</template>
<script>
import PagesApiService from '../mixins/services/pages-api-service'
import {PAGES_NAMES,APP_SETTINGS} from '../../config'
const PATH = APP_SETTINGS.API_PATH.ABOUT
export default {
    name:PAGES_NAMES.ABOUT_PAGE,

  data: () => ({
      about:{
            id:'',
            title:'',
            content:''
        },
    aboutApi:  new  PagesApiService($cookies.get('user').auth.token),
  }),
    created () {
      this.initialize()
    },
     methods: {
      async initialize () {
         const res  = await this.aboutApi.getData(PATH.About)
        this.about=res.data
      },
     },
};
</script>
<style>

</style>

