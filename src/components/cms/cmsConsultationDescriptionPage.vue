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
                    v-model="content"
                    />
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <upload-button v-on:uploaded="uploaded($event)" :saved_images="images"  />
          </v-col>
        </v-row>
    
             <update-button v-on:update="update()"/>
        </v-container>
</template>

<script>
import Editor from '@tinymce/tinymce-vue'
import {API_KEY} from '../../../config'
import UpdateButton from '../updateButton/updateButton.vue'
import UploadImages from '../uploadImages/uploadimages.vue'
    export default {
      name:"CmsConsultationDescriptionPage",
      props:['PageData'],
      components:{
            'editor': Editor,
             'update-button':UpdateButton,
             'upload-button':UploadImages,
        },
      data: ()=>( {
        api_key:API_KEY.TINY_MCE.Key,
        content:'',
        images:[],
      }),
      created() {
          this.page = this.PageData
         if (this.page.content != null) {
            if ("section1" in this.page.content) {
              this.content= this.page.content.section1      
              this.images= this.page.content.images      
            }
         }
      },  
      methods:{
        update:function(){
          this.stringify()
          this.$emit('update')
        },
        uploaded:function (params) {
          
          this.images = params.urls
          this.stringify()
        },
        stringify(){
                    this.page.content = JSON.stringify({
                    section1:this.content,
                    images: this.images,
          })
        }
      },    
    }
</script>
