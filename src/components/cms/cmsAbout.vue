<template>
<v-container>
          <v-text-field
          v-model="page.title"
            label="Title"
          ></v-text-field>
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
                    v-model="page.content"
                    />
        </v-container>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import {API_KEY} from '../../../config'
    export default {
      name:"CmsAbout",
      props:['PageData'],
      components:{
            'editor': Editor,
        },
      data: ()=>( {
        api_key:API_KEY.TINY_MCE.Key,
      }),
      created() {
          this.page = this.PageData
      },
      
    }
</script>
