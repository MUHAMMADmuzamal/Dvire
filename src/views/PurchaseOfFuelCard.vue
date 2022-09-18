<template>
  <div>
    <!-- <h1>{{pageData.title}}</h1>
    <div v-html="pageData.content">      
    </div> -->
    <v-container fluid class="" style="background-color: #F8F4EF;">
      <v-container>
        <v-row  >
          <v-col md="6" class=" d-flex  align-center">
            <div class="col-sm-8 col-md-9">
              <!-- <slot> -->
                <h1>{{section1.heading_1}}</h1>
                <!-- <v-spacer></v-spacer> -->
                <p class="pt-4" width="50px">{{section1.paragraph_1}}</p>
                <v-btn
                  elevation="0"
                  x-large                
                  tile
                  class="btn1" 
                  style="color:white "
                  color="#25ACAB"
                  @click="show_div = !show_div"
                >
                  {{section1.buttonText}}
                </v-btn>
                
              <!-- </slot> -->
            </div>
          </v-col>
          <v-col md="6" class=" mb-n16">
            <v-img  style="" :src="dvire_card"/>
          </v-col>
        </v-row>
  
        
        
  
       </v-container>
    </v-container>
    
  
    <!-- ------------------------------------------------------------------------- -->
     
     <v-container  fluid class="" v-show="show_div">
      
  
      <v-row class="py-16">
        <v-col md="6" class="px-md-16">
          
          <form class="px-md-16">
            <h1 class="py-6">Kreiptis dėl kortelės</h1>
            <v-text-field

              :counter="10"
              label="Pavardė"
              required
            ></v-text-field>
            <v-text-field
 
              :counter="10"
              label="Įmonė"
              required
            ></v-text-field>
            <v-text-field
   
              
              label="Vat Code"
              required
            ></v-text-field>
            <v-text-field

              label="Gas Available for Transport"
              required
            ></v-text-field>
            <v-text-field
   
              :counter="10"
              label="Gas Planned to have Vehicles"
              required
            ></v-text-field>    
            <v-text-field

              label="El. paštas"
              required
            ></v-text-field>
            <v-text-field
      
              label="Mobilus tel"
              required
            ></v-text-field>
            
            <v-btn
              elevation="0"
              x-large                
              tile
              width=""
              class="col-md-6"
              style="color:white "
              color="#25ACAB"
            
            >
              Siųsti
            </v-btn>
            
          </form>
        
        </v-col>
        <v-col md="6" class="py-16" >
          <v-img
          style="transform: translateX(28px);"
          src="../assets/images/single_card.svg"
          
          ></v-img>
        </v-col>
      </v-row>
  
    </v-container>  
  
  
          
   
  
    <!-- ----------------------------------------------------------------------------------------- -->
    <v-container fluid   style="background-color: #0F4C81 ;">
  
        <!-- <v-container style="position:relative"> -->
            <v-row class="ps-md-16">
              <v-col md="7" class="pt-5  pt-md-10" style="color:white;">
  
                <v-row class="py-5">
                  <v-col>
                    <h1>{{section2.heading_1}}</h1>
                  </v-col>
                </v-row>
                
                <v-row class="">
                  <v-col>
                    
                  <p>
                      {{section2.paragraph_1}}
                      <br><br><br>
                     {{section2.paragraph_2}}
                      <br><br><br>
                      {{section2.paragraph_3}}
                  </p>
                  </v-col>
                </v-row>
  
  
  
  
              </v-col>
  
              <v-col md="5" class="d-flex align-center py-6">
                
                <v-img
                
                style="transform: translateX(12px);"
                :src="truck"
                ></v-img>
              </v-col>
            </v-row>
            
        <!-- </v-container> -->
    </v-container>
  
    <!-- ----------------------------------------------------------------------------------------- -->
  
   <v-container fluid style="background-color:#F8F4EF; text-align:center;" >
    <v-container fluid class="py-16">
      <h1>{{section3.heading_1}}</h1>
      <p class="py-6">
        {{section3.paragraph_1}}
      </p>
      <v-row class="d-flex justify-center" align="center">
        <v-col>
          <v-btn @click="show_date_form_div_func(section3.minutes_hours_time_1)" class="my-2 mx-2 white--text" rounded color="#49475b">30 Minutes-$150</v-btn>
  
          <v-btn @click="show_date_form_div_func(section3.minutes_hours_time_2)" class="my-2 mx-2 white--text" rounded color="#49475b">1-hour-$150</v-btn>
  
          <v-btn @click="show_date_form_div_func(section3.minutes_hours_time_3)" class="my-2 mx-2 white--text" rounded color="#49475b">2 Hours-$150</v-btn>
        </v-col>
      </v-row>
  
      <v-row class="pt-4">
        <v-col>
          <a href="" style="text-decoration: none;">
            <strong>
              {{section3.notification_href}}
            </strong>
          </a>
        </v-col>
      </v-row>
  
    </v-container>
   </v-container>
  
   <!-- --------------------onclick time button----------------------------------- -->
  <!--  -->
    <v-container fluid rounded v-show="show_date_form_div" class="my-6" style="background-color:#ffffff; border:0.5px solid #CFD8DC; box-shadow: 0 0 15px rgba(33,33,33,.3); ">
      <!-- <v-container fluid elevation="2" rounded style="background-color:#ffffff; border:0.5px solid #CFD8DC;"> -->
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-3" style="overflow-y: scroll; height:75vh;">
            <v-img
            src="../assets/images/logo.svg"
            class="text--center"
            width="80%"
            ></v-img>
            <v-divider class="my-6"></v-divider>
            <v-row>
              <v-col>
                <v-avatar>
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  >
                </v-avatar>
                <br><br>
                <strong  style="color:gray">jordan task</strong>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h1 class="d-flex">
                  Paid Consultation / Discovery ({{show_date_form_div_value.time}} {{show_date_form_div_value.hm}})
                </h1>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col block class="d-flex py-4" style="color:gray">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12S17.5 2 12 2M16.3 15.2L11 12.3V7H12.5V11.4L17 13.9L16.3 15.2Z" />
                </svg>
                <strong class="ps-1">{{show_date_form_div_value.time}} {{show_date_form_div_value.shm}}</strong>
              </v-col>
            </v-row>
            <v-row>
              <v-col block class="d-flex py-1" style="color:gray">
                <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
                </svg>
                <strong class="ps-1">Web conferencing details provided upon confirmation.</strong>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col block class="d-flex py-1" style="color:gray">
              <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H20A2 2 0 0 0 22 18V6A2 2 0 0 0 20 4M20 11H4V8H20Z" />
              </svg>
              <strong class="ps-1">{{show_date_form_div_value.price}} CAD</strong>
              </v-col>
            </v-row>
  
            <v-row class="pt-6">
              <v-col>
                <p >
                  {{section4.see_other_option_msg_p1}} {{show_date_form_div_value.time}} {{section4.see_other_option_msg_p2}}
                </p>
                  
                <p>
                  {{section4.see_other_option_msg_p3}}
                  <a href="">
                    {{section4.see_other_option_href}}
                  </a>
                </p>
              </v-col>
            </v-row>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3">
            <form >
              <v-text-field
                
                
                :label="section4.form_field_1"
                required
              ></v-text-field>
              <v-text-field
           
                
                :counter="10"
                :label="section4.form_field_2"
                required
              ></v-text-field>
              <v-text-field
                
                
                :counter="10"
                :label="section4.form_field_3"
                required
              ></v-text-field>
              
              <v-text-field
            
                
                :counter="10"
                :label="section4.form_field_4"
                required
              ></v-text-field>
              <v-text-field
               
                
              :label="section4.form_field_5"
                required
              ></v-text-field>
              <v-text-field
                
                
              :label="section4.form_field_6"
                required
              ></v-text-field>
              
              <v-btn
                elevation="0"
                x-large   
                block             
                tile
                width=""
                class="btn1"
                style="color:white "
                color="#25ACAB"
               
              >
                {{section4.buttonText}}
              </v-btn>
              
            </form>
          </div>
          <div class="col-xs-10 col-sm-6 col-md-3">
            <template >
            <v-row  class="pa-4" justify="center">
              <v-date-picker
                width="100%"
                v-model="date"
                :allowed-dates="allowedDates"
                class="mt-4"
                min="2016-06-15"
                max="2018-03-20"
              ></v-date-picker>
            </v-row>
          </template>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-3 pt-6">
              <div class="pt-2 pb-2" v-for="sh, i in showHideArr" :key="i">
                <v-btn block x-large outlined @click="showhide(i)" v-show="!sh" color="info" class="">6:00am</v-btn>
                <div class="row mt-n6 mt-sm-n3">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <v-btn block x-large v-show="sh" color="secondary" width="100%" class="">6:00am</v-btn>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <v-btn block x-large v-show="sh" color="info" width="100%" class="">Confirm</v-btn>
                  </div>
                </div>
              </div>
            </div>
        </div>
        
      <!-- </v-container> -->
    </v-container>
  </div>
</template>
<script>
import PagesApiService from '../mixins/services/pages-api-service'
import {PAGES_NAMES,APP_SETTINGS} from '../../config'
import {json_parse} from '../mixins/helperFunction'
import turck from '../assets/images/truck.svg'
import dvire_card from '../assets/images/dvire_card.svg'
const PATH = APP_SETTINGS.API_PATH.PAYMENT_CARD
export default {
    name:PAGES_NAMES.PAYMENT_CARD_WITHOUT_SPACE_PAGE,

  data: () => ({
    showHideArr:[false,false,false],
          date: '2018-03-02',
          picker: null,
          show_div:false,
          show_date_form_div:false,
          hide_current_button:false,
          show_date_form_div_value:{
            time:'',
            hm:'',
            shm:'',
            price:''
          },
      pageData:{
            id:'',
            title:'',
            content:''
        },
    pagesApi:  new  PagesApiService(),
    title:"",
    section1:"",
    section2:"",
    section3:"",
    section4:"",
    dvire_card:dvire_card,
    truck:turck,
  }),
    created () {
      this.initialize()
    },
     methods: {
      async initialize () {
            const pages  = await this.pagesApi.getPages(PATH.Payment_Card)
            this.title= pages.data.title
            const content = json_parse(pages.data.content)
            
            if (content != null) {
              if ('section1' in content) {
                  this.section1= content.section1
                  this.section2= content.section2
                  this.section3= content.section3
                  this.section4= content.section4
                  this.dvire_card = this.section1.Image[0].image_url
                  this.truck = this.section2.image_1[0].image_url
              }  
            }
            console.log(content)
      },
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
      showhide(index){
        
       for(let i=0; i<this.showHideArr.length; i++) {
          if (index == i) {
            this.$set(this.showHideArr, i, !this.showHideArr[i])
            
          }else{
            this.$set(this.showHideArr, i, false)
          }
        }
      },
      show_date_form_div_func: function(value){
        this.show_date_form_div = !this.show_date_form_div;
        if(value == 30){
          this.show_date_form_div_value={
            time:30,
            hm:'Minutes',
            shm:'min',
            price:'$150'
          }
        }else if(value == 1){
          this.show_date_form_div_value={
            time:1,
            hm:'Hours',
            shm:'hour',
            price:'$200'
          }
        }else{
          this.show_date_form_div_value={
            time:2,
            hm:'Hours',
            shm:'hour',
            price:'$400'
          }
        }
        console.log(value,this.show_date_form_div)
      }
     },
};
</script>
<style>

</style>

