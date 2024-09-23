<template>
    <div>
      <loading :active.sync="isLoading"
        color="#e9272e">
      </loading>
      <section class="moteur_trajet" id="app" >
          <!-- <div class="container" style="min-height: 10vh;">
              <div class="meta d-inline d-md-none text-center">
                  <h5 class="home_title_mobile">Voyager, livrer vos colis, préparer votre tourisme au Maroc avec <b style="color: #ffc107;">GHAZALA</b> transport!</h5>
                  <div class="info" style="text-align: center;">
                  </div>
              </div>
          </div> -->
          <div class="container" style="min-height: 10vh;">
              <div class="row moteur_search">
                  <div class="col-lg-7 text-center titre d-none d-md-inline">
                      <!-- <h2 class="home_title">Voyager, livrer vos colis, préparer votre tourisme au Maroc avec <b>GHAZALA</b> transport!</h2> -->
                  </div>
                  <div class="col-lg-5 col-12 Moteur">
                      <div class="row no-gutters inner">
                          <div class="col-lg-12">
                              <v-select class="selectVille" placeholder="Sélectionner une ville de départ" :options="villesDepart" @select="selectVilleDepart($event)"></v-select>
                              <i id="icon-moteur" class="icon_circle-slelected"></i>
                          </div>
                          <div class="col-lg-12">
                              <v-select class="selectVille" v-model="villeArriveeModel" placeholder="Sélectionner une ville d'arrivée" :options="villesArrivee" @select="selectVilleArrivee($event)"></v-select>
                              <i id="icon-moteur" class="icon_circle-slelected"></i>
                          </div>
                          <div class="col-lg-6">
                              <div class="form-group">
                                  <date-picker
                                      :format="formatDate"
                                      :disabled-dates="disabledDates"
                                      class="dateVoyage"
                                      v-model="dateDepart"
                                  >
                                  </date-picker>
                                  <i id="icon-moteur" class="calendrier icon_calendar"></i>
                              </div>
                          </div>
                          <div class="col-lg-6 passagers">
                              <div class="panel-dropdown">
                                  <a href="#" @click="passengersEventHandler">
                                      <span class="qtyTotal">{{ nbrPassagers }}</span>&nbsp; Passagers
                                  </a>
                                  <div class="panel-dropdown-content">
                                      <!-- Quantity Buttons -->
                                      <qty-input v-model="nbrPassagers" :minVal="1" :maxVal="8"></qty-input> 
                                  </div>
                              </div>
                          </div>
  
                          <div class="col-lg-12">
                              <input id="submit" type="submit" @click="submit" class="btn_search" value="Rechercher">
                          
                              <div class="powered-markoub">
                                  <a href="https://www.markoub.ma/" target="_blank" style="color: #fff;font-size: 11px;">© Powered by marKoub.ma</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  
      <section>
          <div class="bg_32"></div>
      </section>
  
      <!-- <section class="slider">
                  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                      </ol>
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <img src="/img/images/3slide.jpg" class="d-block w-100" alt="">
                          </div>
                          <div class="carousel-item">
                              <img src="/img/images/2slide.jpg" class="d-block w-100" alt="">
                          </div>
                          <div class="carousel-item">
                              <img src="/img/images/4slide.jpg" class="d-block w-100" alt="">
                          </div>
                          <div class="carousel-item">
                              <img src="/img/images/1slide.jpg" class="d-block w-100" alt="">
                          </div>	
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                      </a>
                    </div>
      </section> -->
  
      <div class="bg_color_1 mt">
                  <div class="container margin_60_35" style="min-height: 10vh;">
                      <div class="main_title_2">
                          <h2>Notre engagement</h2>
                          <span><em></em></span>
                      </div>
                  </div>
                  <div class="container" style="min-height: 10vh;">	
                      <div class="row">
                          <div class="col-md-4">
                              <a class="boxed_list" style="background: #ffc107;">
                                  <img src="/img/images/controle-de-qualite.png" style="width: 70px; margin-bottom: 20px;" alt="">
                                  <h4>Qualité de service</h4>
                                  <hr style="border: 2px solid #f6f6f6;width: 100px;margin-left: auto;border-top: 0;margin-right: auto;">
                                  <p>Vous êtes le centre de nos préoccupations.</p>
                              </a>
                          </div>
                          <div class="col-md-4">
                              <a class="boxed_list" style="background: #e9272e!important;;">
                                  <img src="/img/images/bouclier.png" style="width: 70px; margin-bottom: 20px;" alt="">
                                  <h4>Sécurité</h4>
                                  <hr style="border: 2px solid #f6f6f6;width: 100px;margin-left: auto;border-top: 0;margin-right: auto;">
                                  <p>Notre volonté est surtout de vous faire en sorte que nos clients beneficient d'un voyage agréable et sécurisé.</p>
                              </a>
                          </div>
                          <div class="col-md-4">
                              <a class="boxed_list" style="background: black;">
                                  <img src="/img/images/livraison.png" style="width: 70px; margin-bottom: 20px;" alt="">
                                  <h4>Délai de livraison de -24h</h4>
                                  <hr style="border: 2px solid #f6f6f6;width: 100px;margin-left: auto;border-top: 0;margin-right: auto;">
                                  <p>Accélérant le traitement des commandes en  -24h avec GHAZALA MESSAGERIE.</p>
                              </a>
                          </div>
                      </div>
                  </div>
      </div>
          
      <div class="bg_color_2">
                      <div class="container margin_60_35">
  
                          <div class="row">
                  <div class="col-lg-12">
                      <div class="main_title_2">
                              <h2>GHAZALA TRANSPORT</h2>
                      <span><em></em></span>
                          </div>
                      <div class="row">
                      <div class="col-lg-4">
                          <div class="box_grid">
                              <figure>
                                  <nuxt-link exact-active-class="active" class="ghazala" to="/voyageurs">
                                      <img src="/img/images/voyageurs.jpg" loading="lazy" class="img-fluid" alt="Trans GHAZALA" width="800" height="533"><div class="read_more"><span>Voir plus</span></div>
                                  </nuxt-link>
                              </figure>
                              <div class="wrapper description">
                                  <h3><nuxt-link exact-active-class="active" class="ghazala" to="/voyageurs">Voyageurs</nuxt-link></h3>
                              </div>
                              <div class="description_p">
                                  <p style="padding: 0px 20px;">
                                  A cause d’une concurrence accrue, émanent de différents moyens de transport: Avion, train, particulier accrédité. La société transport GHAZALA a investi en une stratégie originale axée sur une qualité absolue et une efficacité sans faille.
                                  </p>
                              </div>
                              <ul style="text-align: center;">
                                  <nuxt-link exact-active-class="active" class="ghazala" to="/voyageurs">
                                      <button class="btn-voir" type="button" name="">Voir plus</button>
                                  </nuxt-link>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          <div class="box_grid">
                              <figure>
                                  <nuxt-link exact-active-class="active" class="ghazala" to="/touristique">
                                      <img src="/img/images/touristique.jpg" loading="lazy" class="img-fluid" alt="Trans GHAZALA" width="800" height="533"><div class="read_more"><span>Voir plus</span></div>
                                  </nuxt-link>
                              </figure>
                              <div class="wrapper description">
                                  <h3><nuxt-link exact-active-class="active" class="ghazala" to="/touristique">Touristique</nuxt-link></h3>
                              </div>
                              <div class="description_p">
                                  <p style="padding: 0 20px;">
                                  Le transport touristique est un service qui a été spécialement conçu pour les hôtels de luxe, les entreprises, ainsi que les particuliers ou groupe de particulier ayant besoin de ce service.
                                  </p>
                              </div>
                              <ul style="text-align: center;">
                                  <nuxt-link exact-active-class="active" class="ghazala" to="/touristique">
                                      <button class="btn-voir" type="button" name="">Voir plus</button>
                                  </nuxt-link>
                              </ul>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          <div class="box_grid">
                              <figure>
                                  <nuxt-link exact-active-class="active" class="ghazala" to="/service-messagerie">
                                      <img src="/img/images/messagerie.jpg" loading="lazy" class="img-fluid" alt="Trans GHAZALA" width="800" height="533"><div class="read_more"><span>Voir plus</span></div>
                                  </nuxt-link>
                              </figure>
                              <div class="wrapper description">
                                  <h3><nuxt-link exact-active-class="active" class="ghazala" to="/service-messagerie">Messagerie</nuxt-link></h3>
                              </div>
                              <div class="description_p">
                                  <p style="padding: 0 20px;">
                                  Particulier ou professionnel, la société GHAZALA Messagerie express vous assure un envoi de colis, palettes et tous types de marchandises à travers différentes destinations sur le territoire marocain.
                                  </p>
                              </div>
                              <ul style="text-align: center;">
                                  <nuxt-link exact-active-class="active" class="ghazala" to="/service-messagerie">
                                      <button class="btn-voir" type="button" name="">Voir plus</button>
                                  </nuxt-link>
                              </ul>
                          </div>
                      </div>
                  </div>
  
              </div>
                          </div>
                      </div>
      </div>
  
      <div class="wtsp-fixed">
          <a href="https://wa.me/212637222222" target="_blank"><button class="btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1536 1600"><path fill="#fff" d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104zm0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26z"/></svg>
          </button></a>
      </div>
  
          
      </div>
  </template>
  
  <script>
  import config from "~/config/config.js";
//   import Loading from 'vue-loading-overlay';
//   import 'vue-loading-overlay/dist/vue-loading.css';
  import _ from "lodash";
  import axios from "axios";
  import QtyInput from '~/components/qtyInput.vue';
  export default {
      name:"home",
      components: {
        //   Loading,
          QtyInput
      },
    data: function() {
      return {
        isLoading: false,
        villeArriveeModel:null,	
        villeDepart:null,
        villesDepart: [],
        villeArrivee:null,
        villesArrivee: [],
        disabledDates: {
          to: new Date(Date.now() - 8640000)
        },
        dateDepart : new Date(Date.now()),
        nbrPassagers: 1
      }
    },
    mounted: function () {
  
      $("header").removeClass("sticky-bar");
      jQuery(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
          $("header").addClass("sticky-bar");
        }else if ($(this).scrollTop() <= 50) {
          $("header").removeClass("sticky-bar");
        }
      });
  
      var vm = this;
      axios.get(config.siteUrl+'villes/depart?societeId='+config.societeId)
        .then(response => response.data).then(response => {
          //console.log(response);
          vm.villesDepart = _.map(response, function(e){
                return {
                  id: e.id,
                  text: e.nom,
                }
              });
          vm.$store.set("villesDepartHome",vm.villesDepart);
          //console.log('villes Depart',vm.$store.get("villesDepartHome"));	
        });
    },
    methods: {
      selectVilleDepart(val){
          var {id, text} = val;
          var vm = this;
          vm.isLoading = true;
          vm.villeDepart = val;
          vm.$store.set("villeDepart",val);
          //console.log('ville Depart',vm.$store.get("villeDepart"));
          axios.get(config.siteUrl+'villes/arrivee?societeId='+config.societeId+'&villeDepartId='+id)
              .then(response => response.data).then(response => {
                  //console.log(response);
                  vm.villesArrivee = _.map(response, function(e){
                      return {
                          id: e.id,
                          text: e.nom,
                      }
                  });
                  vm.$store.set("villesArriveeHome",vm.villesArrivee);
                  //console.log('villes d Arrivee',vm.$store.get("villesArriveeHome"));
                  // vm.villeArriveeModel = vm.villesArrivee[0].id;
                  vm.selectVilleArrivee ({id: vm.villesArrivee[0].id, text: vm.villesArrivee[0].text});
                  vm.isLoading = false;
              });
      },
      selectVilleArrivee (val) {
          var vm = this;
          vm.villeArrivee = val;
          vm.$store.set("villeArrivee",val);
          //console.log('ville d Arrivee',vm.$store.get("villeArrivee"));
      }, 
      submit: function () {
          var vm = this;
          vm.$store.set("nbrPassagers",vm.nbrPassagers)
          //console.log('nbr passagers',vm.$store.get("nbrPassagers"));
          vm.$store.set("dateDepart",vm.dateDepart)
          //console.log('date Depart',vm.$store.get("dateDepart"));
          if(vm.villeDepart!= null && vm.villeArrivee!=null && vm.villeArriveeModel != null){
              vm.$router.push({
                  name: 'app-resultat',
                  /*params: {
                      villesDepart: vm.villesDepart,
                      villesArriveeHome: vm.villesArrivee,  
                      dateDepartHome: vm.$store.get("dateDepart"),//vm.dateDepart,
                      villeDepartHome: vm.$store.get("villeDepart"),//vm.villeDepart,
                      villeArriveeHome: vm.$store.get("villeArrivee"),//vm.villeArrivee,
                      nbrPassagers: vm.$store.get("nbrPassagers"),//vm.nbrPassagers
                  }*/
              })
          }else if (vm.villeDepart == null){
              vm.$toast.open({
                  message: 'Il faut choisir une ville de départ',
                  type: 'error',
                  position: 'top',
                  duration: 3000
              });
          }else if (vm.villeArriveeModel == null){
              vm.$toast.open({
                  message: 'Il faut choisir une ville d\'arrivée',
                  type: 'error',
                  position: 'top',
                  duration: 3000
              });
          }
          
      },  
      formatDate(date) {
        return moment(date).format('DD-MM-YYYY');
      },
      passengersEventHandler(e){
        // from main.js
        //$('.panel-dropdown a').on('click', function(e) {
          if ( $(e.target).parent().is(".active") ) {
            //close_panel_dropdown();
            $('.panel-dropdown').removeClass("active");
          } else {
            //close_panel_dropdown();
            $('.panel-dropdown').removeClass("active");
            $(e.target).parent().addClass('active');
          }
          e.preventDefault();
        //});
      },
      showSlider(){
          $('#slider').flexslider({
              animation: "fade",
              controlNav: true,
              animationLoop: true,
              slideshow: true,
              slideshowSpeed: 5000,
          });
      }
    },
    head () {
          return {
              script :[
  
                  {hid:'flexSlider-script', defer: true, src:'/js/jquery.flexslider.js', callback:() => { this.showSlider(); } }
              ]
          }
      }
  }
  </script>
  <style>
  .boxed_list:hover img{
      transform: scale(1.2);
      transition: all 1.4s ease; 
  }
  
  .home_title{
      color: white;
      font-weight: 700;
      line-height: 1.7;
      padding: 20px;
      font-size: 35px;
  }
  
  .home_title b{
      color: #ffc107;
  }
  
  @media (max-width: 767px) {
      .carousel-item img {
          height: auto;
      }
      .bg_color_1.mt {
          margin-top: 300px;
      }
      .carousel-indicators {
          display: none;
      }
  }
  @media (min-width: 768px) {
      .carousel-inner, .carousel-item {
          width: 100%;
      }
  }
  </style>
  <style scoped>
  .carousel li{
      border-radius: 50%;
      width: 15px;
      height: 15px;
  }
  
  
  #submit {
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  color: #fff;
  font-weight: 500;
  font-size: 17px;
  border: 0;
  padding: 0 25px;
  height: 50px;
  cursor: pointer;
  outline: none;
  width: 100%;
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  -ms-border-radius: 0 3px 3px 0;
  border-radius: 3px;
  background-color: #FFC107;
  margin-right: -1px;
  margin-top: 5px;
  }  
  #icon-moteur{
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -ms-border-radius: 3px;
  border-radius: 3px;
  font-size: 18px;
  font-size: 1.125rem;
  position: absolute;
  background-color: #fff;
  line-height: 50px;
  top: 0;
  right: 1px;
  padding-right: 15px;
  display: block;
  width: 20px;
  box-sizing: content-box;
  height: 50px;
  z-index: 9;
  color: #999;
  }  
  .selectVille >>> .select2-container--default .select2-selection--single{
  border: none!important;
  outline: none;
  }
  .selectVille >>> .select2-container--default .select2-selection--single .select2-selection__rendered {
  color: #444;
  line-height: 45px;
  }
  .selectVille >>> .select2-container--default .select2-search--dropdown .select2-search__field, .select2-container--default .select2-selection--single, .select2-container--default .select2-selection--single .select2-selection__rendered:focus{
  outline: none;
  }
  .selectVille >>> .select2-container{
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  border-radius: 3px;
  border: none;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  display: block;
  float: left;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  height: 50px;
  /* line-height: 62px; */
  outline: none;
  padding-left: 15px;
  padding-right: 27px;
  position: relative;
  text-align: left !important;
  transition: all 0.2s ease-in-out;
  user-select: none;
  white-space: nowrap;
  color: #555;
  padding-top: 2px;
  margin-bottom: 5px;
  }
  .form-group{
  margin-bottom:5px;
  }
  .form-control {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #d2d8dd;
  display: block;
  width: 100%;
  height: calc(1.5em + .75rem + 2px);
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
  .dateVoyage >>> input{
  border: 0;
  height: 50px;
  padding-left: 25px;
  border-right: 1px solid #d2d8dd;
  font-weight: 500;
  font-size: 13px;
  border-radius: 3px;
  width: 100%;
  cursor: pointer;
  }
  .panel-dropdown {
  padding: 15px 10px 0 20px;
  }
  .dateVoyage >>> input:focus {
  outline: none;
  }
  .dateVoyage >>> .vdp-datepicker__calendar .cell.selected {
  background: #ffc107;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-radius: 25px;
  }
  .dateVoyage >>> .vdp-datepicker__calendar .cell.selected:hover {
  background: #e9272e;
  }
  .dateVoyage >>> .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).day:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).month:hover, .vdp-datepicker__calendar .cell:not(.blank):not(.disabled).year:hover {
  border: 1px solid #e9272e;
  background: #e9272e;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-radius: 25px;
  }
  .dateVoyage >>> .vdp-datepicker__calendar header {
  width: 300px;
  display: block;
  line-height: 40px;
  position: absolute;
  top: -63px;
  background: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  LEFT: -1px;
  }
  .dateVoyage >>> .vdp-datepicker__calendar {
  position: absolute;
  z-index: 100;
  background: #fff;
  width: 300px;
  border: 1px solid #ccc;
  top: 115px;
  }
  @media (min-width: 992px) {
      .selectVille >>> .select2-container{
          width: 100% !important;
          min-width: 360px;
      }
  }
  @media (max-width: 991px) {
      .selectVille >>> .select2-container{
          width: 100%!important;
      }
  }
  @media (max-width: 767px) {
      .dateVoyage >>> .vdp-datepicker__calendar {
          position: absolute;
          z-index: 100;
          background: #fff;
          width: 300px;
          border: 1px solid #ccc;
          top: 115px;
      }
      .selectVille >>> .select2-container{
          width: 100%!important;
      }
      .moteur_search{
          margin: 0;
          position: relative;
          top: 170px;
      }
  }
  .container {
    margin: 0 auto;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .title {
    font-family:
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      'Helvetica Neue',
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  
  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  
  .links {
    padding-top: 15px;
  }
  @media (max-width: 767px) {
      .bg_32{
          background: url(/img/bg.png) left center no-repeat;
          width: auto;
          background-size: cover;
          height: 40vh;
      }
  }
  @media (min-width: 768px) {
      .bg_32{
          background: url(/img/bg.png) center center no-repeat;
          width: auto;
          background-size: cover;
          height: 100vh;
      }
  }
  </style>
  