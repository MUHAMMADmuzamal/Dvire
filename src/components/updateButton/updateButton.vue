<template>
<v-row class="d-flex justify-center pt-16">
      <v-col cols="12" sm="6" md="6" >
        <v-btn
          depressed
          color="success"
          large
          block
          @click="update"
          
        >
          {{translate('Update')}}
        </v-btn>
      </v-col>
    </v-row>
</template>

<script>
    export default {
      name:"UpdateButton",
      data: ()=>( {
       
      }),
      methods:{
          update:function () {
            this.$emit('update');
      },
      translate(key){
        return this.$store.getters.localised(key);
      },
      }
    }
</script>
