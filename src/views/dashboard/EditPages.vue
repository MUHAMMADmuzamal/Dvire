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
        <cms-about v-if="page_ids.ABOUT_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update($event)"/>
        <!-- <cms-about v-if="page_ids.ABOUT_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update($event)"/> -->
      </v-col>
      <v-col
        class="d-flex"
        cols="12"
      >
      <v-btn
      depressed
      color="primary"
      @click="update"
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
import Editor from '@tinymce/tinymce-vue'
import {API_KEY,APP_SETTINGS,DASHBOARD, PAGES_IDS} from '../../../config'
import CmsAbout from "../../components/cms/cmsAbout.vue";
    export default {
        name:DASHBOARD.PAGES_NAMES.D_ABOUT_PAGE,
        components:{
    "dash-board": Dashboard,
    "editor": Editor,
    "cms-about": CmsAbout,
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
            this.page.content = this.json_parse(pg[0].content);
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
                this.$toast.success("successfully")
                
            }else{
                this.$toast.error("error")
            }
            this.initialize()
            console.log(res)
      },
      get_page_from_array(value){
        return  this.pages.filter((a)=>{
                        if(a.id==value)
                        {return a}
                        });
      },
      json_parse(str) {
            try {
                str = JSON.parse(str);
            } catch (e) {
                return str
            }
            return str
        }
     },
    }
</script>
