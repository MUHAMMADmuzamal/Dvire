<template>
  <div>
    <h1>{{pageData.title}}</h1>
    <div v-html="pageData.content">      
    </div>
  </div>
</template>
<script>
import PagesApiService from '../mixins/services/pages-api-service'
import {PAGES_NAMES,APP_SETTINGS} from '../../config'
const PATH = APP_SETTINGS.API_PATH.CONTACTS
export default {
    name:PAGES_NAMES.CONTACTS_PAGE,

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
         const res  = await this.pagesApi.getPages(PATH.Contacts)
        this.pageData=res.data
      },
     },
};
</script>
<style>

</style>

