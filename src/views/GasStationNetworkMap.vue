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
const PATH = APP_SETTINGS.API_PATH.GAS_STATION_NETWORK_MAP
export default {
    name:PAGES_NAMES.GAS_STATION_NETWORK_MAP_WITHOUT_SPACE_PAGE,

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
        const res  = await this.pagesApi.getPages(PATH.Gas_station_network_map)
        this.pageData=res.data
      },
     },
};
</script>
<style>

</style>

