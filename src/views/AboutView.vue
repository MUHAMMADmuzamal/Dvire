<template>
  <div>
    <h1>{{translate(about.title)}}</h1>
    <div v-html="about.content">      
    </div>
  </div>
</template>
<script>
import PagesApiService from '../mixins/services/pages-api-service'
import {PAGES_NAMES,APP_SETTINGS} from '../../config'
import { json_parse } from '@/mixins/helperFunction';
const PATH = APP_SETTINGS.API_PATH.ABOUT
export default {
    name:PAGES_NAMES.ABOUT_PAGE,

  data: () => ({

      about:{
            id:'',
            title:'',
            content:''
        },
    aboutApi:  new  PagesApiService(),
  }),
    created () {
      this.initialize()
    },
     methods: {
      async initialize () {
         const res  = await this.aboutApi.getPages(PATH.About)
        this.about.id=res.data.id
        this.about.title=res.data.title
        this.about.content=json_parse(res.data.content).section1
      },
      translate(key){
        return this.$store.getters.localised(key);
      },
     },
};
</script>
<style>

</style>

