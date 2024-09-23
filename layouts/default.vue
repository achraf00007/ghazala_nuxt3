<template>
    <div>
      <div id="preloader"><div data-loader="circle-side"></div></div>
      
      <header class="header m-0 menu_fixed sticky">
        
      <div class="header_content m-0">
  
              <div id="logo" class="logo">
                  <nuxt-link to="/">
                  <img src="/img/ghazala-logo-blanc.svg" width="300" height="50" data-retina="true" alt="" class="logo_normal">
                      <img src="/img/ghazala_logo.svg" width="300" height="50" data-retina="true" alt="" class="logo_sticky">
                  </nuxt-link>
              </div>
  
              <a href="#menu" class="btn_mobile">
                  <div class="hamburger hamburger--spin" id="hamburger">
                      <div class="hamburger-box">
                          <div class="hamburger-inner"></div>
                      </div>
                  </div>
              </a>
  
              <nav id="menu" class="main-menu">
                  <ul>
                      <li><nuxt-link exact-active-class="active" class="ghazala" to="/">Accueil</nuxt-link>
                      </li><span class="separator_menu d-none d-sm-inline-block">|</span>
                      <li><nuxt-link exact-active-class="active" class="ghazala" to="/voyageurs">Voyageurs</nuxt-link>
              <!--ul>
                  <li>
                    <a href="#">Présentation</a>
                  </li>
                  <li>
                          <a href="#">Flotte</a>
                  </li>
                  <li>
                          <a href="#">Confort plus</a>
                  </li>
                  <li>
                          <a href="#">Le réseau voyageurs</a>
                  </li>
                  <li>
                          <a href="#">Horaires</a>
                  </li>
              </ul-->
                      </li><span class="separator_menu d-none d-sm-inline-block">|</span>
  
                      <li><nuxt-link exact-active-class="active" class="ghazala" to="/touristique">Touristique</nuxt-link>
              <!--ul>
                    <li>
                      <a href="#">Présentation</a>
                    </li>
                    <li>
                            <a href="#">Flotte</a>
                    </li>
                    <li>
                            <a href="#">Services</a>
                    </li>
                    <li>
                            <a href="#">Le réseau touristique</a>
                    </li>
              </ul-->
                      </li><span class="separator_menu d-none d-sm-inline-block">|</span>
  
                      <li><nuxt-link exact-active-class="active" class="ghazala" to="/service-messagerie">Messagerie</nuxt-link>            <!--ul>
                <li>
                        <a href="#">Présentation</a>
                </li>
                <li>
                        <a href="#">Flotte</a>
                </li>
                <li>
                        <a href="#">Services</a>
                </li>
                <li>
                        <a href="#">Le réseau messagerie</a>
                </li>
              </ul-->
                      </li><span class="separator_menu d-none d-sm-inline-block">|</span>
  
                      <li><nuxt-link exact-active-class="active" class="ghazala" to="/ghazala-inspiration">Ghazala Inspiration</nuxt-link>
              <!--ul>
                <li>
                        <a href="#">Galerie images</a>
                </li>
                <li>
                        <a href="#">Vidéo</a>
                </li>
              </ul-->
            </li><span class="separator_menu d-none d-sm-inline-block">|</span>
  
                      <li><nuxt-link exact-active-class="active" class="ghazala" to="/qui-sommes-nous">Qui sommes-nous?</nuxt-link>
              <!--ul>
                <li>
                        <a href="#">Nous connaitre</a>
                </li>
                <li>
                        <a href="#">Notre histoire</a>
                </li>
                <li>
                        <a href="#">le mot du directeur</a>
                </li>
                <li>
                        <a href="#">Moyens et logistique</a>
                </li>
                <li>
                        <a href="#">GHAZALA en chiffres</a>
                </li>
              </ul-->
                      </li>
                  </ul>
              </nav>
  
      </div>
  
          </header>
  
      <slot></slot>
  
      <footer>
              <div class="container" style="min-height: 10vh;padding:30px 0;text-align: center;">
                  <div class="row" style="margin: 0;">
  
            <div class="col-lg-2"></div>
  
                      <div class="col-lg-8 col-md-12 p-r-5 mb-4">
                          <p>
                <nuxt-link to="/">
                  <img src="/img/ghazala-logo-blanc.svg" width="160" height="50" data-retina="true" alt="">
                </nuxt-link>
              </p>
                          <p>Le groupement professionnel GHAZALA est une société de transport spécialisée dans le transport interurbain de voyageurs, le transport touristique et le transport de marchandises et de messagerie express à travers le territoire marocain.</p>
                      </div>
  
            <div class="col-lg-2"></div>
  
            
                      <div class="col-lg-4 col-md-6 text-center text-md-left">
              <h5>Siège Messagerie</h5>
                          <ul class="contacts">
                <li><a href="https://www.google.com/maps/place/Trans+Ghazala/@33.5838984,-7.5965887,16.97z/data=!4m12!1m5!3m4!2zMzPCsDM1JzAyLjYiTiA3wrAzNSc1MC4wIlc!8m2!3d33.5840481!4d-7.5972283!3m5!1s0xda7cd67f6dc8341:0x4cb10c0c107428f3!8m2!3d33.5840947!4d-7.5974935!16s%2Fg%2F11cr_ft0dl" target="_blank"><i class="fa fa-map-marker"></i>134, Angle Route Ouled Ziane & Rue Asswane Imm A N°1 - 20500 - Casablanca - Maroc.</a></li>
                <li><a href="tel://05-22-45-22-25"><i class="fa fa-phone"></i>05-22-45-22-25</a>| &nbsp;<a href="tel://05-22-45-22-34">05-22-45-22-34</a></li>
                <li><a href="mailto:ghazala@menara.ma"><i class="fa fa-envelope"></i>ghazala@menara.ma</a></li>
                          </ul>
                      </div>
            
            <div class="col-lg-4 col-md-6 text-center text-md-left">
              <h5>Siège Voyageurs</h5>
              <ul>
                <li><a href="https://www.google.com/maps/place/Transport+Laghzala/@33.5917292,-7.6560142,12z/data=!3m1!4b1!4m6!3m5!1s0xda7cd14748d4539:0x88d436a2a7a430ed!8m2!3d33.591606!4d-7.585802!16s%2Fg%2F11b6hyrd2q" target="_blank"><i class="fa fa-map-marker"></i>Hay Adil, Lot N°1, Chouhada Hay Mohammadi Casablanca - Maroc.</a></li>
                <li><a href="tel://0522605070"><i class="fa fa-phone"></i>05-22-60-50-70</a></li>
                <li><a href="mailto:voyageur@transghazala.ma"><i class="fa fa-envelope"></i>voyageur@transghazala.ma</a></li>
              </ul>
            </div>
            
                      <div class="col-lg-4 col-md-6 text-center text-md-left">
              <h5>Siège Touristique</h5>
                          <ul class="contacts">
                <li><a href="https://www.google.com/maps/place/Transport+Laghzala/@33.5917292,-7.6560142,12z/data=!3m1!4b1!4m6!3m5!1s0xda7cd14748d4539:0x88d436a2a7a430ed!8m2!3d33.591606!4d-7.585802!16s%2Fg%2F11b6hyrd2q" target="_blank"><i class="fa fa-map-marker"></i>Hay Adil, Lot N°1, Chouhada Hay Mohammadi Casablanca - Maroc.</a></li>
                              <li><a href="tel://06661322792"><i class="fa fa-phone"></i>06-61-32-27-92</a></li>
                              <li><a href="mailto:tourisme@transghazala.ma"><i class="fa fa-envelope"></i>tourisme@transghazala.ma</a></li>
                          </ul>
                          <!--div>
                <h5>Suivez-nous</h5>
                <div class="follow_us">
                  <ul>
                    <li><a href="#0"><i class="ti-facebook"></i></a></li>
                    <li><a href="#0"><i class="ti-twitter-alt"></i></a></li>
                    <li><a href="#0"><i class="ti-google"></i></a></li>
                    <li><a href="#0"><i class="ti-instagram"></i></a></li>
                  </ul>
                </div>
                          </div-->
                      </div>
            
            <div class="col-lg-12 ">
              <h5 class="m-0">Rejoignez-nous</h5>
              <ul class="contacts m-0" style="display: inline-block;">
                <li class="social-media-icon"><a href="https://www.facebook.com/GhazalaTransport" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 896 1664"><path fill="currentColor" d="M895 12v264H738q-86 0-116 36t-30 108v189h293l-39 296H592v759H286V905H31V609h255V391q0-186 104-288.5T667 0q147 0 228 12z"/></svg>
                </a></li>
                <li class="social-media-icon"><a href="https://wa.me/0637222222" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1536 1600"><path fill="currentColor" d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104zm0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26z"/></svg>
                </a></li>
                <li class="social-media-icon"><a href="https://www.instagram.com/ghazalatransport/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1024 768q0-106-75-181t-181-75t-181 75t-75 181t75 181t181 75t181-75t75-181zm138 0q0 164-115 279t-279 115t-279-115t-115-279t115-279t279-115t279 115t115 279zm108-410q0 38-27 65t-65 27t-65-27t-27-65t27-65t65-27t65 27t27 65zM768 138q-7 0-76.5-.5t-105.5 0t-96.5 3t-103 10T315 169q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103t-3 96.5t0 105.5t.5 76.5t-.5 76.5t0 105.5t3 96.5t10 103T169 1221q20 50 58 88t88 58q29 11 71.5 18.5t103 10t96.5 3t105.5 0t76.5-.5t76.5.5t105.5 0t96.5-3t103-10t71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103t3-96.5t0-105.5t-.5-76.5t.5-76.5t0-105.5t-3-96.5t-10-103T1367 315q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10t-96.5-3t-105.5 0t-76.5.5zm768 630q0 229-5 317q-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124T5 1085q-5-88-5-317t5-317q10-208 124-322T451 5q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z"/></svg>
                </a></li>
                <li class="social-media-icon"><a href="https://www.linkedin.com/company/ghazala-transport/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1536 1504"><path fill="currentColor" d="M349 497v991H19V497h330zm21-306q1 73-50.5 122T184 362h-2q-82 0-132-49T0 191q0-74 51.5-122.5T186 20t133 48.5T370 191zm1166 729v568h-329V958q0-105-40.5-164.5T1040 734q-63 0-105.5 34.5T871 854q-11 30-11 81v553H531q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52t87-43.5T1157 474q171 0 275 113.5T1536 920z"/></svg>
                </a></li>
              </ul>
            </div>
                  </div>
                  <!--/row-->
              </div>
        <div class="container" style="min-height: 10vh;">
          <hr>
              <div class="row">
                      <div class="col-lg-12">
                    <span style="float: left"> © 2024 Trans GHAZALA | Tous droits réservés.</span>
                    <span style="float: right;"><a href="https://www.markoub.ma/" class="poweredby" target="_blank">Powered by <img src="/img/images/mascot-markoub.svg" alt=""> marKoub.ma</a> </span>
                      </div>
                  </div>
        </div>
          </footer>
      <!--<div id="toTop"></div> Back to top button -->
    </div>
  </template>

<script>

export default {
  components: {
  },
  data: function() {
    return {
    }
  },
  mounted: function () {
    window.initDefault(jQuery);
    jQuery('[data-loader="circle-side"]').fadeOut(); // will first fade out the loading animation
		jQuery('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
		jQuery('body').delay(350);
		jQuery('.hero_in h1,.hero_in form').addClass('animated');
		jQuery('.hero_single, .hero_in').addClass('start_bg_zoom');
		jQuery(window).scroll();

    //Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-FN4J25Q64L');
    
  },
  methods: {
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.social-media-icon a:hover{
  color: white;
}

.social-media-icon{
  float: left;
  margin-top: 15px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

footer a:focus{
  color: #fff;
}
</style>
