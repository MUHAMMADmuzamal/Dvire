<template>
  <div>
    <v-app-bar
      color="white"
      dense
      dark
    >      
     <router-link to="/" exact>
                <v-img src="../assets/logo.svg" />
    </router-link>  
    <v-row>
        <v-col
        cols="6"
        sm="2"
        md="4">
        </v-col>
        <v-col>
            <router-link to="/about" exact>About</router-link>
        </v-col>
    </v-row>

      <!-- <v-toolbar-title>Page title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        
        
        <router-link to="/" exact><v-icon>mdi-heart</v-icon></router-link>
      </v-btn>

      <v-btn icon>
        
        <router-link to="/about" exact><v-icon>mdi-magnify</v-icon></router-link>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "Header",

  data: () => ({
    //
  }),
};
</script>
