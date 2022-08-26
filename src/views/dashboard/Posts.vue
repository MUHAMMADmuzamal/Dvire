<template>
  <dash-board>
    <v-card>
    <v-card-title>
      
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>

    <v-data-table
    :headers="headers"
    :items="posts"
    sort-by="title"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Posts</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <!-- <router-link :to="post_page" custom v-slot="{ navigate }">
              <span @click="navigate" @keypress.enter="navigate" role="link" style="cursor: pointer"> -->
              <v-btn
              color="primary"
              dark
              class="mb-2"
                v-bind="attrs"
              v-on="on"
            >
              New Post
            </v-btn>
              <!-- </span>
            </router-link> -->
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.title"
                      label="Title"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-select
                    :items="types"
                    label="Type"
                    item-text="name"
                    item-value="id"
                    v-model="editedItem.type_id"
                    ></v-select>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.author"
                      label="Author"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <editor
                    :api-key="api_key"
                          :init="{
                            height:500,
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
                          v-model="editedItem.description"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
        </template>
      </v-data-table>
    </v-card>
  </dash-board>
</template>

<script>
import Dashboard from './Dashboard.vue';
import PostsApiService from '../../mixins/services/post-api-service';
import {API_KEY, DASHBOARD,NOTIFCATIONS} from '../../../config'
import Editor from '@tinymce/tinymce-vue'
 export default {
  name:"DashboardPosts",
  components:{
            'dash-board':Dashboard,
            'editor': Editor,
        },
    data: () => ({
      postApi :  new  PostsApiService($cookies.get('user').auth.token),
      api_key:API_KEY.TINY_MCE.Key,
      post_page: DASHBOARD.PATH.D_BLOG_ADD_PAGE,
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title',
        },
        { text: 'Type', value: 'type.name' },
        { text: 'Description', value: 'description' },
        { text: 'Author', value: 'author' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      posts: [],
      types: [],
      editedIndex: -1,
      editedItem: {
        title: '',
        type_id: '',
        author:'',
        description: '',
        type:''
      },
      defaultItem: {
        title: '',
        type_id: '',
        author:'',
        description: '',
        type:''
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      async initialize () {
         const post  = await this.postApi.getAllPosts()
         const type  = await this.postApi.getAllTypes()
        this.posts=post.data
        this.types=type.data
      },
      editItem (item) {
        this.editedIndex = this.posts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        // this.$router.push(DASHBOARD.PATH.D_BLOG_EDIT_REDIRECT_PAGE+`/${item.id}`) 
      },

      deleteItem (item) {
        this.editedIndex = this.posts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        const delete_post = this.posts[this.editedIndex];
        this.posts.splice(this.editedIndex, 1)
        let res = await this.postApi.deletePost(delete_post)
        console.log(res)
          if (res.status != 200) {
            this.$toast.error(NOTIFCATIONS.ERROR);
          }else{
            this.$toast.error(NOTIFCATIONS.POST.DELETE);
          }
        
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      async save () {
        let res ='';
        if (this.editedIndex > -1) {
          // let x = this.types.filter((a)=>{
          //   if(a.name==this.editedItem.type.name)
          //   {return a}
          //   });
          // this.editedItem.type.id = x[0].id;
          // this.editedItem.type_id = x[0].id;
          Object.assign(this.posts[this.editedIndex], this.editedItem)
           res = await this.postApi.updatePost(this.posts[this.editedIndex])
          if (res.status == 200) {
            this.$toast.success(NOTIFCATIONS.POST.UPDATE);
          }else{
            this.$toast.error(NOTIFCATIONS.ERROR);
          }
        } else {
          this.posts.push(this.editedItem)
          res = await this.postApi.addPost(this.editedItem)
          if (res.status == 200) {
            this.$toast.success(NOTIFCATIONS.POST.ADD);
          }else{
            this.$toast.error(NOTIFCATIONS.ERROR);
          }
        }
        console.log(res)
        
        this.initialize()
        this.close()
      },
    },
  }
</script>
