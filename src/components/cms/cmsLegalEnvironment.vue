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
          v-model="section1.heading_1_after_br_tag"
          counter
          label="Heading 1 part 2"
        ></v-text-field>
        <v-textarea
          label="Paragraph 1"
          v-model="section1.paragraph_1"
          counter
          hint=""
        ></v-textarea>
        <v-textarea
          label="Paragraph 2"
          v-model="section1.paragraph_2"
          counter
          hint=""
        ></v-textarea>
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
          label="Paragraph 2 part 1"
          v-model="section2.paragraph_1_p1"
          counter
          hint=""
        ></v-textarea>
        <v-textarea
          label="Paragraph 2 part 2"
          v-model="section2.paragraph_1_p2"
          counter
          hint=""
        ></v-textarea>
        <v-textarea
          label="Paragraph 2 part 3"
          v-model="section2.paragraph_1_p3"
          counter
          hint=""
        ></v-textarea>
        <v-text-field
          v-model="section2.anchor_tag"
          counter
          label="Anchor tag"
        ></v-text-field>
        <!-- <v-text-field
          v-model="section2.image"
          counter
          label="Image full name with extension"
        ></v-text-field> -->
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section2.image" :select_multiple_images="select_multiple_images" update_to="s2.1" />
      <h1>Section: 3</h1>
        <v-text-field
          v-model="section3.heading_1"
          counter
          label="Heading 1"
        ></v-text-field>
      <h1>Section: 4</h1>
        <v-text-field
          v-model="section4.heading_1"
          counter
          label="Heading 1"
        ></v-text-field>
        <!-- <v-text-field
          v-model="section4.icon_1"
          counter
          label="Icon full name with extension"
        ></v-text-field>
        <v-text-field
          v-model="section4.icon_2"
          counter
          label="Icon full name with extension"
        ></v-text-field>
        <v-text-field
          v-model="section4.icon_3"
          counter
          label="Icon full name with extension"
        ></v-text-field>
        <v-text-field
          v-model="section4.icon_4"
          counter
          label="Icon full name with extension"
        ></v-text-field>
        <v-text-field
          v-model="section4.icon_5"
          counter
          label="Icon full name with extension"
        ></v-text-field>
        <v-text-field
          v-model="section4.icon_6"
          counter
          label="Icon full name with extension"
        ></v-text-field> -->
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section4.icon_1" :select_multiple_images="select_multiple_images" update_to="s4.1" />
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section4.icon_2" :select_multiple_images="select_multiple_images" update_to="s4.2" />
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section4.icon_3" :select_multiple_images="select_multiple_images" update_to="s4.3" />
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section4.icon_4" :select_multiple_images="select_multiple_images" update_to="s4.4" />
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section4.icon_5" :select_multiple_images="select_multiple_images" update_to="s4.5" />
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section4.icon_6" :select_multiple_images="select_multiple_images" update_to="s4.6" />
        <v-textarea
          label="Paragraph 1 Part 1"
          v-model="section4.paragraph_1_p1"
          counter
          hint=""
        ></v-textarea>
        <v-textarea
          label="Paragraph 1 Part 2"
          v-model="section4.paragraph_1_p2"
          counter
          hint=""
        ></v-textarea>
      <h1>Section: 5</h1>
        <v-text-field
          v-model="section5.heading_1"
          counter
          label="Heading 1"
        ></v-text-field>
        <v-textarea
          label="Paragraph 1"
          v-model="section5.paragraph_1"
          counter
          hint=""
        ></v-textarea>
        <v-text-field
          v-model="section5.heading_2"
          counter
          label="Heading 2"
        ></v-text-field>
        <v-textarea
          label="Paragraph 2"
          v-model="section5.paragraph_2"
          counter
          hint=""
        ></v-textarea>
      <h1>Section: 6</h1>
        <v-text-field
          v-model="section6.heading_1"
          counter
          label="Heading 1"
        ></v-text-field>
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section5.graph1" :select_multiple_images="select_multiple_images" update_to="s5.1" />
        <upload-button v-on:uploaded="uploaded($event)" :saved_images="section5.graph2" :select_multiple_images="select_multiple_images" update_to="s5.2" />
    </div>
    <update-button v-on:update="update()"/>
</v-container>
</template>

<script>
import UpdateButton from '../updateButton/updateButton.vue'
import UploadImages from '../uploadImages/uploadimages.vue'
    export default {
      name:"CmsLegalEnvironments",
      props:['PageData'],
      components:{
            'update-button':UpdateButton,
            'upload-button':UploadImages,
        },
      data: ()=>( {
        select_multiple_images:false,
        section1:{
          heading_1:"Europos žaliasis",
          heading_1_after_br_tag:"kursas",
          paragraph_1:"Europos žaliasis kursas - tai Europos Sąjungos tikslas iki 2050 m. užtikrinti poveikio klimatui neutralumą. Šiam tikslui pasiekti reikia transformuoti Europos visuomenę ir ekonomiką, o transformacija turės būti ekonomiškai efektyvi, teisinga ir socialiniu požiūriu subalansuota.",
          paragraph_2:"Lietuva imasi veiksmų: pritarta Alternatyvių degalų įstatymui – transporto sektorius vystysis pagal Žaliąjį kursą",
          Image: [],
        },
        section2:{
          heading_1:"Alternatyvių degalų įstatymas",
          paragraph_1_p1:"Alternatyvių degalų įstatymas Lietuvoje sukurs galimybes iki 2030 m. iki",
          paragraph_1_p2:"15 proc.",
          paragraph_1_p3:"padidinti atsinaujinančių energijos išteklių (AEI) dalį transporto sektoriuje – ir taip reikšmingai sumažinti neigiamą poveikį klimatui bei skatinti vietinių biodegalų vartojimą",
          anchor_tag:"Įstatymo projektas",
          image:[],
        },
        section3:{
          heading_1:"Nuo 2026 m. visi per viešuosius pirkimus įsigyjami lengvieji automobiliai ir autobusai turės būti netaršūs.",
        },
        section4:{
          heading_1:"Netaršios transporto priemonės",
          icon_1:[],
          icon_2:[],
          icon_3:[],
          icon_4:[],
          icon_5:[],
          icon_6:[],
          paragraph_1_p1:"Netaršios transporto priemonės",
          paragraph_1_p2:"- Nuo 2026 m. netaršiomis transporto priemonėmis bus laikomos priemonės, naudojančios biometaną arba metano ir vandenilio mišinius.",
        },
        section5:{
          heading_1:"Privaloma AEI dalis benzino ir dyzelino tiekėjams",
          paragraph_1:"Transporto sektoriaus gamtinių dujų tiekėjai privalo užtikrinti, kad biodujos arba nebiologiniai dujiniai degalai iš atsinaujinančių energijos išteklių parduotų gamtinių dujų energinėje vertėje kiekvienais kalendoriniais metais sudarytų atitinkamą dalį",
          heading_2:"Privaloma AEI dalis gamtinių dujų tiekėjams",
          paragraph_2:"Degalų tiekėjai privalo užtikrinti, kad degalai iš atsinaujinančių energijos išteklių bendroje degalų tiekėjo vidaus rinkai patiekto benzino ir dyzelino energinėje vertėje kiekvienais kalendoriniais metais sudarytų atitinkamą dalį.",
          graph1:[],        
          graph2:[],        
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
              this.section2.image = params
              break;
            case 's4.1':
              this.section4.icon_1 = params
              break;
            case 's4.2':
              this.section4.icon_2 = params
              break;
            case 's4.3':
              this.section4.icon_3 = params
              break;
            case 's4.4':
              this.section4.icon_4 = params
              break;
            case 's4.5':
              this.section4.icon_5 = params
              break;
            case 's4.6':
              this.section4.icon_6 = params
              break;
            case 's5.1':
              this.section5.graph1 = params
              break;
            case 's5.2':
              this.section5.graph2 = params
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
