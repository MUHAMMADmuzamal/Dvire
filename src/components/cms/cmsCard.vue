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
              v-model="section1.heading_1_text_after_br_tag"
              counter
              label="Heading 1 Text in new line"
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
        </v-row>

        <v-row>
          <v-col>
            <upload-button v-on:uploaded="uploaded($event)" :saved_images="section1.Image" :select_multiple_images="select_multiple_images" update_to="s1.1" />
          </v-col>
        </v-row>
          
          
          
          <!-- <v-text-field
            v-model="section1.image"
            counter
            label="Image full name with extension"
          ></v-text-field> -->
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

          <!-- <v-text-field
            v-model="section2.icon_1"
            counter
            label="Image  full name with extension"
          ></v-text-field> -->
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
                v-model="section3.paragraph_2"
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
                v-model="section3.paragraph_3"
                counter
                label="Paragraph 3"
                hint=""
              ></v-text-field>
            </v-col>
          </v-row>

          <!-- <v-text-field
            v-model="section3.image"
            counter
            label="Image full name with extension"
          ></v-text-field> -->
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
            label="Map Heading"
            ></v-text-field>
          </v-col>
        </v-row>
         <!-- <v-text-field
            v-model="section4.image"
            counter
            label="Image full name with extension"
          ></v-text-field> -->
        <!-- <upload-button v-on:uploaded="uploaded($event)" :saved_images="section4.image" :select_multiple_images="select_multiple_images" update_to="s4.1" /> -->
    </section>

    <section class="pt-16">
      <h1>Section 5</h1>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="section5.heading_1"
              counter
              label="Form Heading"
            ></v-text-field>
          </v-col>
        </v-row>

        <h4 class="py-4">Form Fields</h4>

        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="section5.form_field_1"
              counter
              label="Form Field 1"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="section5.form_field_2"
              counter
              label="Form Field 2"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="section5.form_field_3"
              counter
              label="Form Field 3"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="section5.form_field_4"
              counter
              label="Form Field 4"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="section5.checkbox"
              counter
              label="Checkbox text"
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="4"
          >
            <v-text-field
              v-model="section5.buttonText"
              counter
              label="Button text"
            ></v-text-field>
          </v-col>
        </v-row>
          
        <v-row>
          <v-col>
            <upload-button v-on:uploaded="uploaded($event)" :saved_images="section5.image" :select_multiple_images="select_multiple_images" update_to="s5.1" />
          </v-col>
        </v-row>
          <!-- <v-text-field
            v-model="section5.image"
            counter
            label="Image full name with extension"
          ></v-text-field> -->
    </section>

    <section class="pt-16"> 
          <h1>Section 6</h1>
          
          <v-row>
            <v-col
             cols="12"
             sm="6"
             md="4"
            >
              <v-text-field
                v-model="section6.heading_1"
                counter
                label="Heading 1"
              ></v-text-field>
            </v-col>
          </v-row>
    </section>
  
  <update-button v-on:update="update()"/>
</v-container> 
</template>

<script>
import UpdateButton from '../updateButton/updateButton.vue'
import UploadImages from '../uploadImages/uploadimages.vue'
    export default {
      name:"CmsLanding",
      props:['PageData'],
      components:{
            'update-button':UpdateButton,
            'upload-button':UploadImages,
        },
      data: ()=>( {
        select_multiple_images:false,
        section1:{
          heading_1:"Degal?? pildymo",
          heading_1_text_after_br_tag: "kortel??",
          paragraph_1:"DVIRE siekia kartu su metanu Lietuvos keliuose prad??ti naudoti biometan??, vandenil?? ir elektr??, i??gaunamus i?? saul??s, v??jo ir perdirbt?? atliek??, reik??mingai suma??inti CO2 emisijas.",
          Image: []
        },
        section2:{
          heading_1:"Dvire kortel??",
          paragraph_1:"Degal?? pildymo kortel?? i??duodama ??mon??ms, ??sigijusioms metano dujomis varomus automobilius i?? gamintoj??, dalyvaujan??i?? alternatyvi??j?? degal?? Lietuvoje skatinimo iniciatyvoje DVIRE.",
          paragraph_2:"DVIRE kortel?? suteikia galimyb?? palankiausiomis rinkoje s??lygomis naudotis DVIRE iniciatyvos partneri?? susl??gto metano (SGD) vie??ojo pildymo sto??i?? tinklu did??iuosiuose Lietuvos miestuose - Vilniuje, Kaune, Klaip??doje, ??iauliuose ir Panev????yje.",
          paragraph_3:"DVIRE kortel?? i??duoda ir administruoja iniciatyv?? koordinuojantis startuolis UAB ???Dvire???.",
          image_1:[],
        },
        section3:{
          heading_1:"Kaip naudotis kortele?",
          paragraph_1:"DVIRE kortele galima atsiskaityti u?? degalus visuose ???SG dujos??? savitarnos terminaluose ir ???Panev????io autobus?? parko??? (nuo 2021 m. prad??ios) metano pildymo stotyje.",
          paragraph_2:"Mok??jimo kortel??s atsiskaitymo limit??, kitas kortel??s papildymo s??lygas bendru sutarimu nustato UAB ???Dvire??? ir kortel??s gav??jas.",
          paragraph_3:"Detali naudojimosi kortele ir metano duj?? pildymo instrukcija skelbiama kiekvienos pildymo stoties savitarnos terminale.",
        },
        section4:{
          heading_1:"Metano pildymo stotys",
          // image:[]
          },

        section5:{
          heading_1:"Kreiptis d??l kortel??s",
          form_field_1:"Vardas",
          form_field_2:"Pavard??",
          form_field_3:"??mon??",
          form_field_4:"El. pa??tas",
          checkbox:"Pa??ym??damas patvirtinu, kad perskai??iau ir sutinku su Privatumo politika",
          buttonText:"Si??sti",
          image:[]
        },
        section6:{
          heading_1:"Naujienos",
        },
      }),
      created() {
          this.page = this.PageData
          console.log(this.page)
          if (this.page.content != null) {
            if ("section1" in this.page.content) {
              this.section1= this.page.content.section1      
              this.section2= this.page.content.section2     
              this.section3= this.page.content.section3   
              this.section4= this.page.content.section4   
              this.section5= this.page.content.section5   
              this.section6= this.page.content.section6   
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
            // case 's4.1':
            //   this.section4.image = params
            //   break;
            case 's5.1':
              this.section5.image = params
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
                    section5:this.section5,
                    section6:this.section6,
          })
        }
      },
    }
</script>
