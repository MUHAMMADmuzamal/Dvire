<template>
<v-container>

          <v-text-field
          v-model="page.title"
            label="Title"
            counter
          ></v-text-field>
          <div>
            <h1>Section: 1</h1>
                  <v-text-field
                    v-model="section1.heading_1"
                    counter
                    label="Heading 1 Part 1"
                  ></v-text-field>
                  <v-text-field
                    v-model="section1.heading_1_text_inside_span_tag"
                    counter
                    label="Heading 1 Text with Different Color"
                  ></v-text-field>
                  <v-text-field
                    v-model="section1.heading_1_after_span_tag"
                    counter
                    label="Heading 1 Part 2"
                  ></v-text-field>
                  <v-textarea
                    label="Paragraph 1"
                    v-model="section1.paragraph_1"
                    counter
                    hint=""
                  ></v-textarea>
                  <v-text-field
                    v-model="section1.buttonText"
                    counter
                    label="Button Text"
                  ></v-text-field>
                  <!-- <v-text-field
                    v-model="section1.image"
                    counter
                    label="Image full name with extension"
                  ></v-text-field> -->
                  <upload-button v-on:uploaded="uploaded($event)" :saved_images="section1.Image" :select_multiple_images="select_multiple_images" update_to="s1.1" />
            <h1>Section: 2</h1>
                  <v-text-field
                    v-model="section2.heading_1"
                    counter
                    label="Heading 1"
                  ></v-text-field>
                  <v-textarea
                    v-model="section2.paragraph_1"
                    counter
                    label="Paragraph 1"
                    hint=""
                  ></v-textarea>
                  <upload-button v-on:uploaded="uploaded($event)" :saved_images="section2.icon_1" :select_multiple_images="select_multiple_images" update_to="s2.1" />
                  <upload-button v-on:uploaded="uploaded($event)" :saved_images="section2.icon_2" :select_multiple_images="select_multiple_images" update_to="s2.2" />
                  <upload-button v-on:uploaded="uploaded($event)" :saved_images="section2.icon_3" :select_multiple_images="select_multiple_images" update_to="s2.3" />
                  <!-- <v-text-field
                    v-model="section2.icon_1"
                    counter
                    label="Icon full name with extension"
                  ></v-text-field>
                  <v-text-field
                    v-model="section2.icon_2"
                    counter
                    label="Icon full name with extension"
                  ></v-text-field>
                  <v-text-field
                    v-model="section2.icon_3"
                    counter
                    label="Icon full name with extension"
                  ></v-text-field> -->
            <h1>Section: 3</h1>
                  <v-text-field
                    v-model="section3.heading_1"
                    counter
                    label="Heading 1"
                  ></v-text-field>
                  <v-text-field
                    v-model="section3.heading_2"
                    counter
                    label="Heading 2"
                  ></v-text-field>
                   <v-textarea
                    v-model="section3.paragraph_1"
                    counter
                    label="Paragraph 1"
                    hint=""
                  ></v-textarea>
                  <v-text-field
                    v-model="section3.heading_3"
                    counter
                    label="Heading 3"
                  ></v-text-field>
                  <v-textarea
                    v-model="section3.paragraph_2"
                    counter
                    label="Paragraph 2"
                    hint=""
                  ></v-textarea>
                  <v-textarea
                    v-model="section3.paragraph_3"
                    counter
                    label="Paragraph 3"
                    hint=""
                  ></v-textarea>
                  <upload-button v-on:uploaded="uploaded($event)" :saved_images="section3.image" :select_multiple_images="select_multiple_images" update_to="s3.1" />
                  <!-- <v-text-field
                    v-model="section3.image"
                    counter
                    label="Image full name with extension"
                  ></v-text-field> -->

            <h1>Section: 4</h1>
                 <v-text-field
                    v-model="section4.mainHeading"
                    counter
                    label="Heading 1"
                  ></v-text-field>
                 <v-text-field
                    v-model="section4.heading_1"
                    counter
                    label="Heading 1"
                  ></v-text-field>
                  <v-textarea
                    v-model="section4.paragraph_1"
                    counter
                    label="Paragraph 1"
                    hint=""
                  ></v-textarea>
                 <v-text-field
                    v-model="section4.heading_2"
                    counter
                    label="Heading 2"
                  ></v-text-field>
                  <v-textarea
                    v-model="section4.paragraph_2"
                    counter
                    label="Paragraph 2"
                    hint=""
                  ></v-textarea>
                 <v-text-field
                    v-model="section4.heading_3"
                    counter
                    label="Heading 3"
                  ></v-text-field>
                  <v-textarea
                    v-model="section4.paragraph_3"
                    counter
                    label="Paragraph 3"
                    hint=""
                  ></v-textarea>
                 <v-text-field
                    v-model="section4.heading_4"
                    counter
                    label="Heading 4"
                  ></v-text-field>
                  <v-textarea
                    v-model="section4.paragraph_4"
                    counter
                    label="Paragraph 4"
                    hint=""
                  ></v-textarea>
                 <v-text-field
                    v-model="section4.heading_5"
                    counter
                    label="Heading 5"
                  ></v-text-field>
                  <v-textarea
                    v-model="section4.paragraph_5"
                    counter
                    label="Paragraph 5"
                    hint=""
                  ></v-textarea>
                 <v-text-field
                    v-model="section4.heading_6"
                    counter
                    label="Heading 6"
                  ></v-text-field>
                  <v-textarea
                    v-model="section4.paragraph_6"
                    counter
                    label="Paragraph 6"
                    hint=""
                  ></v-textarea>
            <h1>Section: 5</h1>
                  <v-text-field
                    v-model="section5.heading_1"
                    counter
                    label="Heading 1"
                  ></v-text-field>
                   <v-textarea
                    v-model="section5.paragraph_1"
                    counter
                    label="Paragraph 1"
                    hint=""
                  ></v-textarea>
                  <upload-button v-on:uploaded="uploaded($event)" :saved_images="section5.image_1" :select_multiple_images="select_multiple_images" update_to="s5.1" />
                  <upload-button v-on:uploaded="uploaded($event)" :saved_images="section5.slider_images"  update_to="s5.2" />
                  <!-- <v-text-field
                    v-model="section5.slider_images"
                    counter
                    label="Image full name with extension and all images are coma separated"
                  ></v-text-field>
                  <v-text-field
                    v-model="section5.image_1"
                    counter
                    label="Image full name with extension"
                  ></v-text-field> -->
          </div>
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
          heading_1:"Važiuokime",
          heading_1_after_span_tag:"nei iki šiol.",
          heading_1_text_inside_span_tag: "kitaip",
          paragraph_1:"Degalai iš perdirbamų atliekų, saulės ir vėjo – toksturėtų būti mūsų pasirinkimas.",
          buttonText: "Nuolaidų kortelė",
          Image: []
        },
        section2:{
          heading_1:"Degalai",
          paragraph_1:"Degalai iš perdirbamų atliekų, saulės ir vėjo – toks turėtų būti mūsų pasirinkimas, kad sumažintume CO2 emisijas ir sukurtume klimatui neutralią ekonomiką.",
          icon_1:[],
          icon_2:[],
          icon_3:[],
        },
        section3:{
          heading_1:"Kodėl mes?",
          heading_2:"Misija",
          paragraph_1:"Pagreitinti alternatyvių atsinaujinančių degalų panaudojimą transporte.",
          heading_3:"Tikslai",
          paragraph_2:"Pagreitinti alternatyvių atsinaujinančių degalų - biometano, vandenilio, naudojamų kartu su elektra - naudojimą transporte.Padėti degalų vartotojams ir degalų tiekėjams smarkiai sumažinti CO2 emisiją.",
          paragraph_3:"Padėti degalų vartotojams ir degalų tiekėjams smarkiai sumažinti CO2 emisiją.",
          image:[],
        },
        section4:{
          mainHeading:"Konsultuojame",
          heading_1:"Biometano ir vandenilio gamintojus",
          paragraph_1:"Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų.",
          heading_2:"CNG ir LNG degalų pardavėjus praktikus",
          paragraph_2:"Patariame, kaip reikšmingai prisidėti prie atsinaujinančių degalų infrastruktūros plėtros.",
          heading_3:"Benzino ir dyzelino degalų pardavėjus",
          paragraph_3:"",
          heading_4:"Transporto priemonių gamintojų atstovus",
          paragraph_4:"Konsultuojame, kaip lengvai prisitaikyti prie naujų aplinkosaugos reikalavimų.",
          heading_5:"Vyriausybines ir nevyriausybines organizacijas",
          paragraph_5:"Žinome, kaip laiku ir tinkamai pasiruošti Europos Sąjungos direktyvų ir Lietuvoje jas įtvirtinančio Alternatyviųjų degalų įstatymo nuostatų įgyvendinimui.",
          heading_6:"Transporto parkų valdytojams",
          paragraph_6:"Žinome, kaip laiku ir tinkamai pasiruošti Europos Sąjungos direktyvų ir Lietuvoje jas įtvirtinančio Alternatyviųjų degalų įstatymo nuostatų įgyvendinimui.",
        },
        section5:{
          heading_1:"Prisijunk prie šios garbingos grupės",
          paragraph_1:"Įmonės, kurios metė iššūkį teršiems degalams ir kurios prisideda prie CO2 emisijos sumažinimo:",
          slider_images:[],
          image_1:[],
        },
      }),
      created() {
          this.page = this.PageData
          if (this.page.content != null) {
            if ('section1' in this.page.content) {
              this.section1= this.page.content.section1      
              this.section2= this.page.content.section2     
              this.section3= this.page.content.section3      
              this.section4= this.page.content.section4      
              this.section5= this.page.content.section5  
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
              this.section2.icon_1 = params
              break;
            case 's2.2':
              this.section2.icon_2 = params
              break;
            case 's2.3':
              this.section2.icon_3 = params
              break;
            case 's3.1':
              this.section3.image = params
              break;
            case 's5.1':
              this.section5.image_1 = params
              break;
            case 's5.2':

              this.section5.slider_images = params
              break;
          
            default:
              break;
          }
        this.stringify()
          // console.log("in landing page",this.page.content)
        },
                stringify(){
                    this.page.content = JSON.stringify({
                    section1:this.section1,
                    section2:this.section2,
                    section3:this.section3,
                    section4:this.section4,
                    section5:this.section5,
          })
        }
      },  
           
    }
</script>
