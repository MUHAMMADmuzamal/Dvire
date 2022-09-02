<template>
  <div>
    <h1>Posts</h1>
    <div v-for="post in posts">  
    <h1>{{post.title}}</h1>    
    <hr>
    <h6>{{post.author}}</h6>
    <hr>
    <p>{{post.description}}</p>
    </div>
  </div>
</template>
<script>
import PostsApiService from '../mixins/services/post-api-service';
import {PAGES_NAMES} from '../../config'
export default {
    name:PAGES_NAMES.BLOG_PAGE,

  data: () => ({
      posts:[],
    postApi :  new  PostsApiService(),
  }),
    created () {
      this.initialize()
    },
     methods: {
      async initialize () {
         const res  = await this.postApi.getAllPosts()
        this.posts=res.data
      },
     },
};
</script>
<style>

</style>

