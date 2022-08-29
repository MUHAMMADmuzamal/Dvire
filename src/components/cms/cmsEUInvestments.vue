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
      },
      created() {
          this.page = this.PageData
          if ("section1" in this.page.content) {
            this.section1= this.page.content.section1      
          }else{
            this.section1= ""      
          }      
      },
      computed:{
        full_page:function(){
          return {
                    section1:this.section1,
          }
        }
      }
      
    }
</script>
