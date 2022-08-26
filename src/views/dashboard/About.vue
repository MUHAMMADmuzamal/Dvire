<template>
    <dash-board>
        <v-container>
            <!-- <h3 class="my-3">{{about.title}}</h3> -->
            <input type="text" v-model="about.title">
               <editor
               :api-key="api_key"
                    :init="{
                        height: 500,
                        menubar: false,                        
                          plugins: [
                                    'advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
                                    'searchreplace', 'wordcount', 'visualblocks', 'code', 'fullscreen', 'insertdatetime', 'media',
                                    'table', 'emoticons', 'template', 'help'
                                ],
                                toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
                                    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
                                    'forecolor backcolor emoticons | help',
                                menu: {
                                    favs: { title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons' }
                                },
                                menubar: 'favs file edit view insert format tools table help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                    }"
                    v-model="about.content"
                    />
                    <v-btn
                    depressed
                    elevation="2"
                    @click="update()"
                    >Update</v-btn>
                    <v-btn
                    depressed
                    elevation="2"
                    >Reset</v-btn>
        </v-container>
    </dash-board>
</template>

<script>
import Dashboard from './Dashboard.vue';
import PagesApiService from '../../mixins/services/pages-api-service'
import Editor from '@tinymce/tinymce-vue'
import {API_KEY,APP_SETTINGS} from '../../../config'
const PATH = APP_SETTINGS.API_PATH.ABOUT
    export default {
        name:"DashboardAbout",
        components:{
            'dash-board':Dashboard,
            'editor': Editor,
        },
      data: ()=>( {
        about:{
            id:'',
            title:'',
            content:''
        },
        api_key:API_KEY.TINY_MCE.Key,
        aboutApi:  new  PagesApiService($cookies.get('user').auth.token),
      }),
       created () {
      this.initialize()
    },
     methods: {
      async initialize () {
        
         const res  = await this.aboutApi.getData(PATH.About)
        this.about=res.data
      },
      async update(){
        const res  = await this.aboutApi.updateData(PATH.About,this.about)
        console.log(res)

      },
     },
    }
</script>
