<template>
<div>
  <h1>{{translate(title)}}</h1>
  <p v-html="content"></p>
</div>
</template>
<script>
import { PAGES_NAMES} from "../../config";
import NewsApiService from '../mixins/services/news-api-service'
import {json_parse} from '../mixins/helperFunction'
import GenericButton from '../components/GenericButton/GenericButton.vue'
export default {
    name: PAGES_NAMES.NEWS_DETAIL_PAGE,
  components:{
    'generic-button':GenericButton,
  },
  data: () => ({
    newsAPi: new NewsApiService(),//$cookies.get('user').auth.token
    content:'',
    title:'',
  }),
  created () {
        this.initialize()
    },
  methods: {
        async initialize () {
            const news_detail  = await this.newsAPi.getNews(this.$route.params.id)
            console.log(news_detail.data)
            this.title= news_detail.data.title
            this.content= news_detail.data.content
      },
      translate(key){
        return this.$store.getters.localised(key);
      },

     },
};
</script>
<style scoped>
</style>
