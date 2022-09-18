<template>
<v-container>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-text-field
        v-model="page.title"
          label="Title"
          counter
        ></v-text-field>
    </v-col>
  </v-row>
  
    <section>
      <h1>Section 1</h1>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="section1.heading_1"
              counter
              label="Heading 1"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Paragraph 1"
              v-model="section1.paragraph_1"
              counter
              hint=""
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              label="Button Text"
              v-model="section1.buttonText"
              counter
              hint=""
            ></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <upload-button v-on:uploaded="uploaded($event)" :saved_images="section1.Image" :select_multiple_images="select_multiple_images" update_to="s1.1" />
          </v-col>
        </v-row>
    </section>

    <section class="pt-16">
          <h1>Section 2</h1>

          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section2.heading_1"
                counter
                label="Heading 1"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section2.paragraph_1"
                counter
                label="Paragraph 1"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section2.paragraph_2"
                counter
                label="Paragraph 2"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section2.paragraph_3"
                counter
                label="Paragraph 3"
                hint=""
              ></v-text-field>
            </v-col> 
          </v-row>

          <v-row>
            <v-col>
              <upload-button v-on:uploaded="uploaded($event)" :saved_images="section2.image_1" :select_multiple_images="select_multiple_images" update_to="s2.1" />
            </v-col>
          </v-row>
    </section>

    <section class="pt-16">
          <h1>Section 3</h1>

          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.heading_1"
                counter
                label="Heading 1"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.paragraph_1"
                counter
                label="Paragraph 1"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.minutes_hours_time_1"
                counter
                label="Time for section 1"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.minutes_hours_time_unit_1"
                counter
                label="Time Uint for section 1"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.price_1"
                counter
                label="Cost for section 1"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.minutes_hours_time_2"
                counter
                label="Time for section 2"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.minutes_hours_time_unit_2"
                counter
                label="Time Uint for section 2"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.price_2"
                counter
                label="Cost for section 2"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.minutes_hours_time_3"
                counter
                label="Time for section 3"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.minutes_hours_time_unit_3"
                counter
                label="Time Uint for section 3"
                hint=""
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              md="4"
            >
              <v-text-field
                v-model="section3.price_3"
                counter
                label="Cost for section 3"
                hint=""
              ></v-text-field>
            </v-col>
          </v-row>
    </section>

    <section class="pt-16">
      <h1>Section 4</h1>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.heading_1"
            counter
            label="Heading"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.conferencing_detial"
            counter
            label="conferencing detail"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.see_other_option_msg_p1"
            counter
            label="see other option message"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.see_other_option_msg_p2"
            counter
            label="see other option message"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.see_other_option_msg_p3"
            counter
            label="see other option message"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.see_other_option_href"
            counter
            label="see other option link"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.form_field_1"
            counter
            label="form field 1"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.form_field_2"
            counter
            label="form field 2"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.form_field_3"
            counter
            label="form field 3"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.form_field_4"
            counter
            label="form field 4"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.form_field_5"
            counter
            label="form field 5"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.form_field_6"
            counter
            label="form field 6"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"  
          >
            <v-text-field
            v-model="section4.buttonText"
            counter
            label="Button text"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- <upload-button v-on:uploaded="uploaded($event)" :saved_images="section4.image" :select_multiple_images="select_multiple_images" update_to="s4.1" /> -->
    </section>
  
  <update-button v-on:update="update()"/>
</v-container> 
</template>

<script>
import UploadImages from '../uploadImages/uploadimages.vue'
import UpdateButton from '../updateButton/updateButton.vue'
    export default {
      name:"cmsPurchaseOfFuelCard",
      props:['PageData'],
      components:{
             'update-button':UpdateButton,
             'upload-button':UploadImages,
        },
      data: ()=>( {
        select_multiple_images:false,
        section1:{
          heading_1:"Lorem ipsum dolor sit amet, consectetur edipiscing elit.",
          paragraph_1:"DVIRE siekia kartu su metanu Lietuvos keliuose pradėti naudoti biometaną, vandenilį ir elektrą, išgaunamus iš saulės, vėjo ir perdirbtų atliekų, reikšmingai sumažinti CO2 emisijas.",
          buttonText:'Nuolaidų kortelė',
          Image: []
        },
        section2:{
          heading_1:"Dvire kortelė",
          paragraph_1:"Degalų pildymo kortelė išduodama įmonėms, įsigijusioms metano dujomis varomus automobilius iš gamintojų, dalyvaujančių alternatyviųjų degalų Lietuvoje skatinimo iniciatyvoje DVIRE.",
          paragraph_2:"DVIRE kortelė suteikia galimybę palankiausiomis rinkoje sąlygomis naudotis DVIRE iniciatyvos partnerių suslėgto metano (SGD) viešojo pildymo stočių tinklu didžiuosiuose Lietuvos miestuose - Vilniuje, Kaune, Klaipėdoje, Šiauliuose ir Panevėžyje.",
          paragraph_3:"DVIRE kortelę išduoda ir administruoja iniciatyvą koordinuojantis startuolis UAB „Dvire“.",
          image_1:[],
        },
        section3:{
          heading_1:"Book your Paid Consultation Now.",
          paragraph_1:"Please choose your desired paid consultation meeting length. You will be prompted for payment after selecting a day and time.",
          minutes_hours_time_1:30,
          minutes_hours_time_unit_1:'Minutes',
          price_1:150,
          minutes_hours_time_2:1,
          minutes_hours_time_unit_2:'Hour',
          price_2:200,
          minutes_hours_time_3:2,
          minutes_hours_time_unit_3:'Hour',
          price_3:250,
          notification_href:"* Click here to read our booking policy before you book your consultation!"
        },
        section4:{
          heading_1:" Paid Consultation / Discovery ",
          conferencing_detial:"Web conferencing details provided upon confirmation.",
          see_other_option_msg_p1: " This is a",
          see_other_option_msg_p2: "meeting, it's strictly enforced. If you need more time, please see other options. ",
          see_other_option_msg_p3: "Please review our Book Policy online at",
          see_other_option_href: " https://lmt.ca/book/#booking-policy",
          form_field_1:"Konsultacijos tema",
          form_field_2:"Vardas",
          form_field_3:"Pavardė",
          form_field_4:"Įmonė",
          form_field_5:"El. paštas",
          form_field_6:"Mobilus tel",
          buttonText:"Siųsti",
          },
      }),
      created() {
          this.page = this.PageData
          if (this.page.content != null) {
            if ("section1" in this.page.content) {
              this.section1= this.page.content.section1      
              this.section2= this.page.content.section2     
              this.section3= this.page.content.section3   
              this.section4= this.page.content.section4    
            }
          }
      },  
      methods:{
        update:function(){
          this.stringify()
          this.$emit('update')
        },
        uploaded:function (param) {
          const update_to = param.update_to
          let params = param.urls
          switch (update_to) {
            case 's1.1':
              this.section1.Image = params
              break;
            case 's2.1':
              this.section2.image_1 = params
              break;          
            default:
              break;
          }
          this.stringify()
        },
        stringify(){
                    this.page.content = JSON.stringify({
                    section1:this.section1,
                    section2:this.section2,
                    section3:this.section3,
                    section4:this.section4,
          })
        }
      },    
    }
</script>
