<template>
<div>
  <v-container fluid class="pa-md-16 py-16" style="background-color: #F8F4EF;">
    <v-container class="pa-md-6">
      <v-row class="pa-sm-6 my-10" style="background-color:white; border:2px solid #25ACAB;">
        
        <div class="d-md-none col-sm-12">
          <v-img
          aspect-ratio="1.5"
          src="../assets/images/factory.jpg"
          ></v-img>
        </div>

        <v-col md="6">
          <h1 class="pt-6" >
            {{translate(section1.heading_1)}}
          </h1>
          <p class="py-6">
            {{translate(section1.paragraph_1)}}
          </p>

          <!-- <button class="btn1 col-sm-6" >Skaityti</button> -->
          <div class="col-sm-6">
            <generic-button :text="translate(section1.buttonText1)"/>
          </div>

        </v-col>

        <v-col md="6" class="d-none d-md-flex align-start">
          <v-img
          aspect-ratio="1.5"
          :src="factory"
          ></v-img>
        </v-col>
      </v-row>
      

     </v-container>
  </v-container>

  <!-- ------------------------------------------------------------------------- -->
  <v-container>
    <v-row class=" mt-n16 ">
      <div 
      class="col-sm-6 col-md-4"
      v-for="ns in news"
      >
        <div elevation class="pa-4 box_shadow" @click="openNews(ns.id)">
          <v-img 
          height=""
          aspect-ratio="1.5"
          contain
          :src="ns.thumbnail"></v-img>
          <h2>{{translate(ns.title)}}</h2>
          <p>{{translate(ns.short_description)}}</p>
        </div>
      </div>
    </v-row>

    <v-row>
      <v-col class="d-flex justify-center py-16">
        <!-- <button class="btn1" >Rodyti daugiau</button> -->
        <generic-button :text="translate(section1.buttonText2)"/>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>
<script>
import { PAGES_NAMES,APP_SETTINGS,PAGES_IDS,PATH} from "../../config";
import PagesApiService from '../mixins/services/pages-api-service'
import NewsApiService from '../mixins/services/news-api-service'
import {json_parse} from '../mixins/helperFunction'
import GenericButton from '../components/GenericButton/GenericButton.vue'
import factory from '../assets/images/factory.jpg'
export default {
    name: PAGES_NAMES.NEWS_PAGE,
  components:{
    'generic-button':GenericButton,
  },
  data: () => ({
    pagesApi: new PagesApiService(),
    newsAPi: new NewsApiService(),//$cookies.get('user').auth.token
    news:[],
    title:"",
    section1:"",
    factory:factory,
  }),
  created () {
        this.initialize()
    },
  methods: {
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES+'/'+PAGES_IDS.NEWS_PAGE_ID)
            this.title= pages.data.title
            const content = json_parse(pages.data.content)
            
            if (content != null) {
              if ('section1' in content) {
                  this.section1= content.section1
                  this.factory = this.section1.Image[0].image_url
              }  
            }
            const res_news  = await this.newsAPi.getAllNews(APP_SETTINGS.API_PATH.NEWS.News)
            let n_arr=[]
            res_news.data.forEach(element => {
              let sh = json_parse(element.short_description)
              let url = ''
              try {
                url = sh.thumbnail[0].image_url
              } catch (error) {
                url = ''
              }
              let shh = json_parse(sh.short_description)
              n_arr.push({
                short_description:shh.short_description,
                title:element.title,
                thumbnail:url,
                id:element.id
              })
            });
            console.log(res_news.data,n_arr)
            this.news = n_arr
      },
      openNews(id){
        console.log('in function',PATH.NEWS_PAGE+`/${id}`)
       this.$router.push( PATH.NEWS_PAGE+`/${id}`)
        // next({ path: PATH.NEWS_PAGE+`/${id}`})
        // this.$router.resolve({ path: PATH.NEWS_DETAIL_PAGE+ `/${id}` })
      },
      translate(key){
        return this.$store.getters.localised(key);
      },

     },
};
</script>
<style scoped>
.box_shadow{
  transition: box-shadow .3s;
  border:2px solid #25ACAB;
  background-color: white;
}
.box_shadow:hover {
  box-shadow: 0 0 20px rgba(33,33,33,.3); 
  cursor: pointer;
}
</style>
