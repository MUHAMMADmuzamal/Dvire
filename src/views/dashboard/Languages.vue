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
      :items="languages"
      sort-by="title"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Languages</v-toolbar-title>
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
                Add New Word
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
                        v-model="editedItem.name_english"
                        label="English word"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name_lithuanian"
                        label="Lithuanian word"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name_russian"
                        label="Russian word"
                      ></v-text-field>
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
  import LanguagesApiService from '../../mixins/services/language-api-service';
  import {DASHBOARD,NOTIFCATIONS} from '../../../config'
   export default {
    name:DASHBOARD.PAGES_NAMES.D_LANGUAGES_PAGE,
    components:{
              'dash-board':Dashboard,
          },
      data: () => ({
        langApi :  new  LanguagesApiService($cookies.get('user').auth.token),
        search: '',
        dialog: false,
        dialogDelete: false,
        headers: [
          {
            text: 'English',
            align: 'start',
            sortable: false,
            value: 'name_english',
          },
          { text: 'Lithuanian', value: 'name_lithuanian' },
          { text: 'Russian', value: 'name_russian' },
          { text: 'Actions', value: 'actions', sortable: false },
        ],
        languages: [],
        editedIndex: -1,
        editedItem: {
          name_english: '',
          name_lithuanian: '',
          name_russian:'',
        },
        defaultItem: {
          name_english: '',
          name_lithuanian: '',
          name_russian:'',
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
           const lang  = await this.langApi.getAllWords()
           this.languages = lang.data
           console.log(lang)
        },
        editItem (item) {
          this.editedIndex = this.languages.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
        deleteItem (item) {
          this.editedIndex = this.languages.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        async deleteItemConfirm () {
          const delete_post = this.languages[this.editedIndex];
          this.languages.splice(this.editedIndex, 1)
          let res = await this.langApi.deleteWord(delete_post)
          console.log(res)
            if (res.status != 200) {
              this.$toast.error(NOTIFCATIONS.ERROR);
            }else{
              this.$toast.error(NOTIFCATIONS.WORD.DELETE);
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
            Object.assign(this.languages[this.editedIndex], this.editedItem)
             res = await this.langApi.updateWord(this.languages[this.editedIndex])
             if (res.status == 200) {
            this.$toast.success(NOTIFCATIONS.WORD.UPDATE);
          }else{
            this.$toast.error(NOTIFCATIONS.ERROR);
          }
          } else {
            this.languages.push(this.editedItem)
            res = await this.langApi.addWord(this.editedItem)
            if (res.status == 200) {
            this.$toast.success(NOTIFCATIONS.WORD.ADD);
          }else{
            this.$toast.error(NOTIFCATIONS.ERROR);
          }
          }
          // console.log(res)
          
          this.initialize()
          this.close()
        },
      },
    }
  </script>
  