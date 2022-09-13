<template>
<v-container>
  <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="page.title"
                  label="Title"
                  counter
                ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
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
            </v-col>
          </v-row>
          
               
                    <update-button v-on:update="update()"/>
        </v-container>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import {API_KEY} from '../../../config'
import UpdateButton from '../updateButton/updateButton.vue'
    export default {
      name:"CmsConsultingOrders",
      props:['PageData'],
      components:{
            'editor': Editor,
             'update-button':UpdateButton,
        },
      data: ()=>( {
        api_key:API_KEY.TINY_MCE.Key,
      }),
      created() {
          this.page = this.PageData
      },  
      methods:{
        update:function(){
          this.$emit('update')
        }
      },    
    }
</script>
