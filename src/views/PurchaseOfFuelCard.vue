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
                <h1>Lorem ipsum dolor sit amet, consectetur edipiscing elit.</h1>
                <!-- <v-spacer></v-spacer> -->
                <p class="pt-4" width="50px">DVIRE siekia kartu su metanu Lietuvos keliuose pradėti naudoti biometaną, vandenilį ir elektrą, išgaunamus iš saulės, vėjo ir perdirbtų atliekų, reikšmingai sumažinti CO2 emisijas.</p>
                <v-btn
                  elevation="0"
                  x-large                
                  tile
                  class="btn1" 
                  style="color:white "
                  color="#25ACAB"
                  @click="show_div = !show_div"
                >
                  Nuolaidų kortelė
                </v-btn>
                
              <!-- </slot> -->
            </div>
          </v-col>
          <v-col md="6" class=" mb-n16">
            <v-img  style="" src="../assets/images/dvire_card.svg"/>
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
                    <h1>Dvire kortelė</h1>
                  </v-col>
                </v-row>
                
                <v-row class="">
                  <v-col>
                    
                  <p>
                      Degalų pildymo kortelė išduodama įmonėms, įsigijusioms metano dujomis varomus automobilius iš gamintojų, dalyvaujančių alternatyviųjų degalų Lietuvoje skatinimo iniciatyvoje DVIRE.
                      <br><br><br>
                      DVIRE kortelė suteikia galimybę palankiausiomis rinkoje sąlygomis naudotis DVIRE iniciatyvos partnerių suslėgto metano (SGD) viešojo pildymo stočių tinklu didžiuosiuose Lietuvos miestuose - Vilniuje, Kaune, Klaipėdoje, Šiauliuose ir Panevėžyje.
                      <br><br><br>
                      DVIRE kortelę išduoda ir administruoja iniciatyvą koordinuojantis startuolis UAB „Dvire“.
                  </p>
                  </v-col>
                </v-row>
  
  
  
  
              </v-col>
  
              <v-col md="5" class="d-flex align-center py-6">
                
                <v-img
                
                style="transform: translateX(12px);"
                src="../assets/images/truck.svg"
                ></v-img>
              </v-col>
            </v-row>
            
        <!-- </v-container> -->
    </v-container>
  
    <!-- ----------------------------------------------------------------------------------------- -->
  
   <v-container fluid style="background-color:#F8F4EF; text-align:center;" >
    <v-container fluid class="py-16">
      <h1>Book your Paid Consultation Now.</h1>
      <p class="py-6">
        Please choose your desired paid consultation meeting length. You will be prompted for payment after selecting a day and time.
      </p>
      <v-row class="d-flex justify-center" align="center">
        <v-col>
          <v-btn @click="show_date_form_div_func('30')" class="my-2 mx-2 white--text" rounded color="#49475b">30 Minutes-$150</v-btn>
  
          <v-btn @click="show_date_form_div_func('1')" class="my-2 mx-2 white--text" rounded color="#49475b">1-hour-$150</v-btn>
  
          <v-btn @click="show_date_form_div_func('2')" class="my-2 mx-2 white--text" rounded color="#49475b">2 Hours-$150</v-btn>
        </v-col>
      </v-row>
  
      <v-row class="pt-4">
        <v-col>
          <a href="" style="text-decoration: none;">
            <strong>
              * Click here to read our booking policy before you book your consultation!
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
                  This is a {{show_date_form_div_value.time}} meeting, it's strictly enforced. If you need more time, please see other options.
                </p>
                  
                <p>
                  Please review our Book Policy online at 
                  <a href="">
                    https://lmt.ca/book/#booking-policy
                  </a>
                </p>
              </v-col>
            </v-row>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-3">
            <form >
              <v-text-field
                
                
                label="Konsultacijos tema"
                required
              ></v-text-field>
              <v-text-field
           
                
                :counter="10"
                label="Vardas"
                required
              ></v-text-field>
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
                block             
                tile
                width=""
                class="btn1"
                style="color:white "
                color="#25ACAB"
               
              >
                Siųsti
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
  }),
    created () {
      this.initialize()
    },
     methods: {
      async initialize () {
         const res  = await this.pagesApi.getPages(PATH.Payment_Card)
        this.pageData=res.data
      },
      allowedDates: val => parseInt(val.split('-')[2], 10) % 2 === 0,
      showhide(index){
        
       for(let i=0; i<this.showHideArr.length; i++) {
        console.log("first",this.showHideArr)
          if (index == i) {
            console.log(index)
            console.log("before update",this.showHideArr)
            this.$set(this.showHideArr, i, !this.showHideArr[i])
            console.log("after update",this.showHideArr)
            
          }else{
            this.$set(this.showHideArr, i, false)
          }
        }
        console.log("end",this.showHideArr)
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

