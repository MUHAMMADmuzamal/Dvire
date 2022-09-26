<template>
  <div>
    <h1>{{translate(pageData.title)}}</h1>
    <div v-html="pageData.content">      
    </div>
  </div>
</template>
<script>
import PagesApiService from '../mixins/services/pages-api-service'
import {PAGES_NAMES,APP_SETTINGS} from '../../config'
import { json_parse } from '@/mixins/helperFunction';
const PATH = APP_SETTINGS.API_PATH.PROPS
export default {
    name:PAGES_NAMES.PROPS_PAGE,

  data: () => ({
      pageData:{
            id:'',
            title:'',
            content:''
        },
    pagesApi:  new  PagesApiService(),
  }),
    created () {
      this.initialize()
    },
     methods: {
      async initialize () {
         const res  = await this.pagesApi.getPages(PATH.Props)
        this.pageData.id=res.data.id
        this.pageData.title=res.data.title
        this.pageData.content=json_parse(res.data.content).section1
      },
      translate(key){
        return this.$store.getters.localised(key);
      },
     },
};
</script>
<style>

</style>

