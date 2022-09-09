<template>
<v-container>

    <v-file-input
        counter
        :multiple="select_multiple_images"
        show-size
        truncate-length="15"
        v-model="images"
        @change=""
    ></v-file-input>
    <v-btn
      depressed
      color="primary"
      @click="upload"
      class="d-flex justify-right"
    >
      Upload
    </v-btn>
    <p style="color:red">
        After Upload Images kindly press update to save data.
    </p>
    <div v-show="show_images_table">
        <v-simple-table height="300px">
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Url
                </th>
                <th class="text-left">
                    Delete
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="item in saved_images"
                :key="item.name"
                >
                <td>{{ item.image }}</td>
                <td>{{ item.image_url }}</td>
                <td>
                    <v-btn
                    depressed
                    color="error"
                    class="d-flex justify-right"
                    @click="delete_image(item)"
                    >
                    Delete
                    </v-btn>
                </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </div>
</v-container>
</template>

<script>
import { NOTIFCATIONS } from "../../../config";
import ImagesApiService from '../../mixins/services/images-api-service'
    export default {
      name:"UploadImages",
      props:{
        show_images_table:{
            default:true
        },
        select_multiple_images:{
            default:true
        },
        update_to:{
            // default:true
            type: String,
        }
        ,
        saved_images:function () {
        return []
      }
      },
      data: ()=>( {
       images:[],
    //    urls:this.saved_images,
       imageApi:new ImagesApiService($cookies.get('user').auth.token),
    //    show_all:this.show_images_table,
    //    multiple_images:this.select_multiple_images,
      }),
      methods:{
          upload: async function () { 
            let arr=[];
            let res={status:0}
            let formData = new FormData();
       
            if (this.select_multiple_images) {
            
                for (let i=0; i< this.images.length; i++) {
                    formData.append(`image[]`, this.images[i]);
                }
                    res = await this.imageApi.addImages(formData)
                    arr = this.saved_images.concat(res.data[0])
           }else{     
                    if (this.saved_images) {
                        let id =false
                        if (this.saved_images.length > 0) {
                           id = Number.isInteger(this.saved_images[0].id)
                        }
                    if (this.saved_images && id) {
                        formData.append(`image`, this.images);
                        formData.append(`_method`, 'PUT');
                        res =  await this.imageApi.updateImages_with_id(formData,this.saved_images[0].id)
                        arr.push({
                            image: res.data.image,
                            image_url: res.data.image_url,
                            id:this.saved_images[0].id,
                            user_id:res.data.user_id,
                        });
                    }else{
                        formData.append(`image[]`, this.images);
                        res = await this.imageApi.addImages(formData)
                        arr =  res.data[0]
                    }
           }
           }
           console.log(this.saved_images,this.images,this.update_to)
           this.$emit('uploaded',{urls:arr,update_to:this.update_to});
            if (res.status == 200) {
                this.$toast.success(NOTIFCATIONS.IMAGES.ADD)
                
            }else{
                this.$toast.error(NOTIFCATIONS.ERROR)
            }            
      },
          delete_image: async function (image) {
            const index = this.saved_images.indexOf(image)
            this.saved_images.splice(index,1)
           const res =  await this.imageApi.deleteImages(image)
            if (res.status == 200) {
                this.$toast.success(NOTIFCATIONS.IMAGES.DELETE)
                
            }else{
                this.$toast.error(NOTIFCATIONS.ERROR)
            }
        //    console.log('delete response',res.data)
      },
      }
    }
</script>
