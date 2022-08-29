<template>
<v-container>

          <v-text-field
          v-model="page.title"
            label="Title"
          ></v-text-field>
          <div>
            <h1>Section: 1</h1>
                 <editor
               :api-key="api_key"
                    :init="editor_setting"
                    v-model="section1"
                    />
            <h1>Section: 2</h1>
                 <editor
               :api-key="api_key"
                    :init="editor_setting"
                    v-model="section2"
                    />
            <h1>Section: 3</h1>
                 <editor
               :api-key="api_key"
                    :init="editor_setting"
                    v-model="section3"
                    />
            <h1>Section: 4</h1>
                 <editor
               :api-key="api_key"
                    :init="editor_setting"
                    v-model="section4"
                    />
            <h1>Section: 5</h1>
                 <editor
               :api-key="api_key"
                    :init="editor_setting"
                    v-model="section5"
                    />
            <h1>Section: 6</h1>
                 <editor
               :api-key="api_key"
                    :init="editor_setting"
                    v-model="section6"
                    />
              </div>

        </v-container>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import {API_KEY} from '../../../config'
    export default {
      name:"CmsLanding",
      props:['PageData'],
      components:{
            'editor': Editor,
        },
      data: ()=>( {
        api_key:API_KEY.TINY_MCE.Key,
        section1:"",
        section2:"",
        section3:"",
        section4:"",
        section5:"",
        section6:"",
        editor_setting:{
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
                    }
      }),
      watch: {
        section1: function (val) {
          this.page.content = JSON.stringify(this.full_page)
        },
        section2: function (val) {
          this.page.content = JSON.stringify(this.full_page)
        },
        section3: function (val) {
          this.page.content = JSON.stringify(this.full_page)
        },
        section4: function (val) {
          this.page.content = JSON.stringify(this.full_page)
        },
        section5: function (val) {
          this.page.content = JSON.stringify(this.full_page)
        },
        section6: function (val) {
          this.page.content = JSON.stringify(this.full_page)
        },
      },
      created() {
          this.page = this.PageData
          if ("section1" in this.page.content) {
              this.section1= this.page.content.section1      
              this.section2= this.page.content.section2     
              this.section3= this.page.content.section3      
              this.section4= this.page.content.section4      
              this.section5= this.page.content.section5  
              this.section6= this.page.content.section6  
          }else{
            this.section1= ""      
            this.section2= ""     
            this.section3= "" 
            this.section4= ""     
            this.section5= ""
            this.section6= ""
          }    
      },
      computed:{
        full_page:function(){
          return {
                    section1:this.section1,
                    section2:this.section2,
                    section3:this.section3,
                    section4:this.section4,
                    section5:this.section5,
                    section6:this.section6,
          }
        }
      }
      
    }
</script>
