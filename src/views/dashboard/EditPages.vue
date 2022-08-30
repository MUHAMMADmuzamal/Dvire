<template>
    <dash-board>
  <v-container fluid>
    <v-row align="center">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
        <v-select
          :items="pages"
           item-text="title"
           item-value="id"
           v-model="selected_page"
          label="Select Page to Edit"
        ></v-select>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
      >
      <h1>{{page.title}}</h1>
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
      >
        <cms-about v-if="page_ids.ABOUT_PAGE_ID == selected_page_id" :PageData="page"/>
        <cms-home v-else-if="page_ids.LANDING_PAGE_ID == selected_page_id" :PageData="page"/>
        <cms-card v-else-if="page_ids.CARD_PAGE_ID == selected_page_id" :PageData="page"/>
        <cms-news v-else-if="page_ids.NEWS_PAGE_ID == selected_page_id" :PageData="page"/>
        <!-- <cms-LegalEnvironment v-else-if="page_ids. == selected_page_id" :PageData="page"/> -->
        <!-- <cms-LegalEnvironment v-else-if="page_ids. == selected_page_id" :PageData="page"/> -->
      </v-col>
      <v-col
        
        cols="12"
      >
      <v-btn
      depressed
      color="primary"
      @click="update"
      class="d-flex justify-right"
    >
      Update
    </v-btn>
      </v-col>
    </v-row>
  </v-container>
    </dash-board>
</template>

<script>
import Dashboard from './Dashboard.vue';
import PagesApiService from '../../mixins/services/pages-api-service'
import {json_parse} from '../../mixins/helperFunction'
import Editor from '@tinymce/tinymce-vue'
import {API_KEY,APP_SETTINGS,DASHBOARD, PAGES_IDS,NOTIFCATIONS} from '../../../config'
import CmsAbout from "../../components/cms/cmsAbout.vue";
import CmsLanding from "../../components/cms/cmsLanding.vue";
import CmsCard from "../../components/cms/cmsCard.vue";
import CmsNews from "../../components/cms/cmsNews.vue";
import CmsLegalEnvironment from "../../components/cms/cmsLegalEnvironment.vue";
import CmsEUInvestments from "../../components/cms/cmsEUInvestments.vue";
    export default {
        name:DASHBOARD.PAGES_NAMES.D_ABOUT_PAGE,
        components:{
    "dash-board": Dashboard,
    "editor": Editor,
    "cms-about": CmsAbout,
    "cms-home": CmsLanding,
    "cms-card": CmsCard,
    "cms-news": CmsNews,
    "cms-LegalEnvironment": CmsLegalEnvironment,
    "cms-EUInvestments": CmsEUInvestments,
},
      data: ()=>( {
        pages:[],
        page:{
            id:'',
            content:'',
            title:'',
        },
        page_ids :PAGES_IDS,
        selected_page_id:0,
        api_key:API_KEY.TINY_MCE.Key,
        pagesApi:  new  PagesApiService($cookies.get('user').auth.token),
      }),
       created () {
        this.initialize()
    },
    computed:{
        selected_page: {
            get(){
             
           },
           set(value){
            const pg = this.get_page_from_array(value)
            this.page.title = pg[0].title
            this.page.content =  json_parse(pg[0].content);
            this.page.id = pg[0].id
            this.selected_page_id = pg[0].id

           } 
        }
    },
     methods: {
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES)
            this.pages=pages.data
      },
        async update () {
            // const index =  this.pages.findIndex(item => item.id === this.page.id);
            // console.log("in parent",data.page_data,data.path)
            const res  = await this.pagesApi.updatePageData(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES,this.page)
            if (res.status == 200) {
                this.$toast.success(NOTIFCATIONS.PAGES.UPDATE)
                
            }else{
                this.$toast.error(NOTIFCATIONS.ERROR)
            }
            this.initialize()
            // console.log(res)
      },
      get_page_from_array(value){
        return  this.pages.filter((a)=>{
                        if(a.id==value)
                        {return a}
                        });
      },

     },
    }
</script>
