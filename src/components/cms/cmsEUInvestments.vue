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
        label="Heading 1"
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
      <v-textarea
        v-model="section2.paragraph_2_p1"
        counter
        label="Paragraph 2 part 1"
        hint=""
      ></v-textarea>
      <v-textarea
        v-model="section2.paragraph_2_p2"
        counter
        label="Paragraph 2 part 2"
        hint=""
      ></v-textarea>
      <v-textarea
        v-model="section2.paragraph_2_p3"
        counter
        label="Paragraph 2 part 3"
        hint=""
      ></v-textarea>
      <v-textarea
        v-model="section2.paragraph_2_p4"
        counter
        label="Paragraph 2 part 4"
        hint=""
      ></v-textarea>
      <v-textarea
        v-model="section2.paragraph_2_p5"
        counter
        label="Paragraph 2 part 5"
        hint=""
      ></v-textarea>
      <v-textarea
        v-model="section2.paragraph_2_p6"
        counter
        label="Paragraph 2 part 6"
        hint=""
      ></v-textarea>
  </div>
  <update-button v-on:update="update()"/>
</v-container>
</template>

<script>
import UpdateButton from '../updateButton/updateButton.vue'
import UploadImages from '../uploadImages/uploadimages.vue'
    export default {
      name:"CmsEUinvestments",
      props:['PageData'],
      components:{
            'update-button':UpdateButton,
            'upload-button':UploadImages,
        },
      data: ()=>( {
          select_multiple_images:false,
          section1:{
          heading_1:"ES Investicijos",
          Image: []
        },
        section2:{
          heading_1:"Įgyvendiname projektą „UAB Dvire“ elektroninės platformos kūrimas“",
          paragraph_1:"Finansuojama iš Europos regioninės plėtros fondo, kaip Europos Sąjungos atsako į COVID-19 pandemiją priemonė",
          paragraph_2_p1:"2022 m. sausio 28 d. LR ekonomikos ir inovacijų ministro įsakymu Nr. 4-160 projektui",
          paragraph_2_p2:"„UAB „Dvire“ elektroninės platformos kūrimas“",
          paragraph_2_p3:"skirtas 50 000,00 Eur finansavimas pagal priemonę „E-komercijos modelis COVID-19“. Uždarosios akcinės bendrovės „Dvire“ platinama DVIRE kortelė suteikia galimybę palankiausiomis rinkoje sąlygomis naudotis DVIRE iniciatyvos partnerių suslėgto metano (SGD) viešojo pildymo stočių tinklu didžiuosiuose Lietuvos miestuose – Vilniuje, Kaune, Klaipėdoje, Šiauliuose ir Panevėžyje. Bendrovės siekia kartu su metanu Lietuvos keliuose pradėti naudoti biometaną, vandenilį ir elektrą, išgaunamus iš saulės, vėjo ir perdirbtų atliekų, reikšmingai sumažinti CO2 emisijas.Projekto tikslas – informacinių technologijų verslo sandoriams valdyti elektroniniu būdu diegimas, siekiant padidinti pajamų augimą.",
          paragraph_2_p4:"Siekiant numatytų tikslų UAB „Dvire“ planuoja įgyvendinti projektą, kurio metu bus sukurta elektroninė platforma bendrovės produktų pardavimui. Tokiu būdu klientai savarankiškai be kontakto su UAB „Dvire“ ir UAB „Dvire“ partnerių darbuotojais, galės naudotis paslaugomis, kurios šiuo metu nepasiekiamos internetinėje parduotuvėje. Įgyvendinus projektą tikimasi pritraukti naujų vartotojų, kas leis padidinti įmonės pardavimus ir pelningumą.",
          paragraph_2_p5:"Projektas Nr. 13.1.1-LVPA-K-860-01-0575 „UAB „Dvire“ elektroninės platformos kūrimas“ finansuojamas iš Europos regioninės plėtros fondo, kaip Europos Sąjungos atsako į COVID-19 pandemiją priemonė.",
          paragraph_2_p6:"Projekto įgyvendinimo trukmė: iki 2023 m. vasario 08 d.",
        },
      }),
      created() {
          this.page = this.PageData
          console.log(this.page)
          if (this.page.content != null) {
            if ("section1" in this.page.content) {
              this.section1= this.page.content.section1      
              this.section2= this.page.content.section2      
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
          
            default:
              break;
          }
          this.stringify()
        },
        stringify(){
                    this.page.content = JSON.stringify({
                    section1:this.section1,
                    section2:this.section2,
          })
        }
      },
      
    }
</script>