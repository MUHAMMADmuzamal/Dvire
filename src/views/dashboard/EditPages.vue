<template>
    <dash-board>
  <v-container elevation-8 rounded class="my-6">
    <v-row class="d-flex justify-center py-16" >
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-select
          :items="pages"
           item-text="title"
           item-value="id"
           v-model="selected_page"
          label="Select Page to Edit"
        ></v-select>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <v-col
        cols="12"
      >
      <h1 class="text-center" style="color:#16ACAC">{{page.title}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="d-flex"
        cols="12"
      >
        <cms-about v-if="page_ids.ABOUT_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-home v-else-if="page_ids.LANDING_PAGE_ID == selected_page_id" :PageData="page"  v-on:update="update()"/>
        <cms-card v-else-if="page_ids.CARD_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-news v-else-if="page_ids.NEWS_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-LegalEnvironment v-else-if="page_ids.LEGAL_ENVIRONMENT_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-EUInvestments v-else-if="page_ids.EU_INVESTMENTS_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-Signup v-else-if="page_ids.SIGNUP_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-Login v-else-if="page_ids.LOGIN_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-ForgetPassword v-else-if="page_ids.FORGET_PASSWORD_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-Footer v-else-if="page_ids.FOOTER_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-Blogs v-else-if="page_ids.BLOG_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-ConsultationDescriptionPage v-else-if="page_ids.CONSULTATION_DESCRIPTION_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-ConsultingOrders v-else-if="page_ids.CONSULTATION_ORDER_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-Contacts v-else-if="page_ids.CONTACTS_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-Dictionary v-else-if="page_ids.DICTIONARY_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-GasStationNetworkMap v-else-if="page_ids.GAS_STATION_NETWORK_MAP_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-Laws v-else-if="page_ids.LAWS_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-Props v-else-if="page_ids.PROPS_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-PurchaseOfFuelCard v-else-if="page_ids.PAYMENT_CARD_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-RequestForm v-else-if="page_ids.REQUEST_FORM_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
        <cms-SelfService v-else-if="page_ids.SELF_SERVICE_PAGE_ID == selected_page_id" :PageData="page" v-on:update="update()"/>
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
import CmsSignup from "../../components/cms/cmsSignup.vue";
import CmsLogin from "../../components/cms/cmsLogin.vue";
import CmsForgetPassword from "../../components/cms/cmsForgetPassword.vue";
import cmsFooter from "../../components/cms/cmsFooter.vue";
import cmsBlogs from "../../components/cms/cmsBlogs.vue";
import cmsConsultationDescriptionPage from "../../components/cms/cmsConsultationDescriptionPage.vue";
import cmsConsultingOrders from "../../components/cms/cmsConsultingOrders.vue";
import cmsContacts from "../../components/cms/cmsContacts.vue";
import cmsDictionary from "../../components/cms/cmsDictionary.vue";
import cmsGasStationNetworkMap from "../../components/cms/cmsGasStationNetworkMap.vue";
import cmsLaws from "../../components/cms/cmsLaws.vue";
import cmsProps from "../../components/cms/cmsProps.vue";
import cmsPurchaseOfFuelCard from "../../components/cms/cmsPurchaseOfFuelCard.vue";
import cmsRequestForm from "../../components/cms/cmsRequestForm.vue";
import cmsSelfService from "../../components/cms/cmsSelfService.vue";
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
    "cms-Signup": CmsSignup,
    "cms-Login": CmsLogin,
    "cms-ForgetPassword": CmsForgetPassword,
    "cms-Footer": cmsFooter,
    "cms-Blogs": cmsBlogs,
    "cms-ConsultationDescriptionPage": cmsConsultationDescriptionPage,
    "cms-ConsultingOrders": cmsConsultingOrders,
    "cms-Contacts": cmsContacts,
    "cms-Dictionary": cmsDictionary,
    "cms-GasStationNetworkMap": cmsGasStationNetworkMap,
    "cms-Laws": cmsLaws,
    "cms-Props": cmsProps,
    "cms-PurchaseOfFuelCard": cmsPurchaseOfFuelCard,
    "cms-RequestForm": cmsRequestForm,
    "cms-SelfService": cmsSelfService,
},
      data: ()=>( {
        pages:[],
        page:{
            id:'',
            content:'',
            title:'',
            // images:[],
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
            // this.page.images =  json_parse(pg[0].images);
            this.page.id = pg[0].id
            this.selected_page_id = pg[0].id

           } 
        }
    },
     methods: {
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES)
            this.pages=pages.data
            console.log(this.pages)
      },
        async update () {
            // const index =  this.pages.findIndex(item => item.id === this.page.id);
            // console.log("in parent",data.page_data,data.path)
            console.log(this.page)
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
      uploaded:function (params) {
          this.page.images = params;
        }
    }
</script>
