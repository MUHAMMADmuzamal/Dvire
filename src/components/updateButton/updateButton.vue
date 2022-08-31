<template>
    <v-btn
      depressed
      color="primary"
      @click="update"
      class="d-flex justify-right"
    >
      Update
    </v-btn>
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
      }
    }
</script>
