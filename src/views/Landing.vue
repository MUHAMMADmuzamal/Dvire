<template>
  <div>
    <section-1 :data="pageContent.section1"/>
    <section-2 :data="pageContent.section2"/>
    <section-3 :data="pageContent.section3"/>
    <section-4 :data="pageContent.section4"/>
    <section-5 :data="pageContent.section5"/>

  </div>
</template>

<script>
// @ is an alias to /src
import Section_1 from "@/components/Sections/Section_1.vue";
import Section_2 from "@/components/Sections/Section_2.vue";
import Section_3 from "@/components/Sections/Section_3.vue";
import Section_4 from "@/components/Sections/Section_4.vue";
import Section_5 from "@/components/Sections/Section_5.vue";
import {IMAGES, PAGES_NAMES,COLORS,APP_SETTINGS,PAGES_IDS} from "../../config";
import PagesApiService from '../mixins/services/pages-api-service'
import {json_parse} from '../mixins/helperFunction'
export default {
  name: PAGES_NAMES.LANDING_PAGE,
  components: {
    "section-1":Section_1,
    "section-2":Section_2,
    "section-3":Section_3,
    "section-4":Section_4,
    "section-5":Section_5,
  },
  data: () => ({
    logo: IMAGES.COMPANY_LOGO,
    card_color: COLORS.MAIN_COLOR_1,
    pagesApi: new PagesApiService(),
    title:"",
    pageContent:{},
  }),
  created () {
        this.initialize()
    },
  methods: {
        async initialize () {
            const pages  = await this.pagesApi.getPages(APP_SETTINGS.API_PATH.PAGES.ALL_PAGES+'/'+PAGES_IDS.LANDING_PAGE_ID)
            this.title= pages.data.title
            const content = json_parse(pages.data.content)
            console.log(content)
            if (content != null) {
              if ('section1' in content) {
                  this.pageContent= content
              }  
            }
      },
      translate(key){
        return this.$store.getters.localised(key);
      },

     },
};
</script>
