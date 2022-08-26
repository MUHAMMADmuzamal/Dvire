<template>
  <dash-board>
    <v-card>
    <v-card-title>
      Types
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
    :items="types"
    sort-by="title"
    class="elevation-1"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Types</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
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
                      v-model="editedItem.name"
                      label="Type"
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
import TypesApiService from '../../mixins/services/post-api-service';
import {NOTIFCATIONS} from '../../../config'
 export default {
  name:"DashboardTypes",
  components:{
            'dash-board':Dashboard,
        },
    data: () => ({
      typeApi:  new  TypesApiService($cookies.get('user').auth.token),
      search: '',
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Type',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      types: [],
      editedIndex: -1,
      editedItem: {
        name: '',
      },
      defaultItem: {
        name: '',
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
         const type  = await this.typeApi.getAllTypes()
        this.types=type.data
      },
      editItem (item) {
        this.editedIndex = this.types.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.types.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      async deleteItemConfirm () {
        const delete_type = this.types[this.editedIndex];
        this.types.splice(this.editedIndex, 1)
        let res = await this.typeApi.deleteType(delete_type)
        console.log(res)
          if (res.status != 200) {
            this.$toast.error(NOTIFCATIONS.TYPE.ERROR);
          }else{
            this.$toast.error(NOTIFCATIONS.TYPE.DELETE);
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
          Object.assign(this.types[this.editedIndex], this.editedItem)
           res = await this.typeApi.updateType(this.types[this.editedIndex])

          if (res.status != 200) {
            this.$toast.error(NOTIFCATIONS.TYPE.ERROR);
          }else{
            this.$toast.success(NOTIFCATIONS.TYPE.UPDATE);
          }
        } else {
          this.types.push(this.editedItem)
          res = await this.typeApi.addType(this.editedItem)
          if (res.status != 200) {
            this.$toast.error(NOTIFCATIONS.TYPE.ERROR);
          }else{
            this.$toast.success(NOTIFCATIONS.TYPE.ADD);
          }
        }
        console.log(res)
        this.initialize()
        this.close()
      },
    },
  }
</script>
