<template>
  <div>
    <h1>Posts</h1>
    <div v-for="post in posts">  
    <h1>{{post.title}}</h1>    
    <hr>
    <v-img 
          height="100"
          width="100"
          aspect-ratio="1.5"
          contain
          :src="post.thumbnail"></v-img>
    <h6>{{post.author}}</h6>
    <hr>
    <p>{{post.short_description}}</p>
    </div>
  </div>
</template>
<script>
import PostsApiService from '../mixins/services/post-api-service';
import {PAGES_NAMES} from '../../config'
import {json_parse} from '../mixins/helperFunction'
export default {
    name:PAGES_NAMES.BLOG_PAGE,

  data: () => ({
      posts:[],
    postApi :  new  PostsApiService($cookies.get('user').auth.token),//$cookies.get('user').auth.token
  }),
    created () {
      this.initialize()
    },
     methods: {
      async initialize () {
         const res  = await this.postApi.getAllPosts()
         let n_arr=[]
         res.data.forEach(element => {
              let sh = json_parse(element.short_description)
              let url = ''
              try {
                url = sh.thumbnail[0].image_url
              } catch (error) {
                url = ''
              }
              n_arr.push({
                short_description:sh.short_description,
                title:element.title,
                thumbnail:url
              })
            });
            console.log(res.data)
            this.posts = n_arr
        // this.posts=res.data
      },
     },
};
</script>
<style>

</style>

