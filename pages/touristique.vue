<template>
  <div>
    <div class="container-fluid">
      
      <div class="row">
        <div class="col-lg-12 p-0">
          <div class="image-top mb-5">
            <h1 class="text-center">GHAZALA TOURISTIQUE</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="px-md-0 px-4 mt-md-0 container">
      <div class="">

        <div class="card card-img-scale p-4" style="border-radius: 5px;box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px 0px;">
          <div class="row d-flex align-items-center">
            <div class="col-lg-4">
                <div class="zoom-image">
                  <img src="/img/images/touristique1.jpg" class="card-img-top" alt="...">
                </div>
            </div>
            <div class="col-lg-8 pl-0 pl-md-5">
                <div class="touristique-text">
                  <h4 class="text-center my-4">Découvrir la richesse marocaine</h4>
                  <p class="pl-2">Le transport touristique est un service qui été spécialement conçu pour les hôtels de luxe, les entreprises, ainsi que les particuliers, ou groupe de particulier ayant besoin de ce service.</p> 
                </div>
            </div>
          </div>
        </div>

        <div class="card card-img-scale p-4 mt-5" style="border-radius: 5px;box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px 0px;">
          <div class="row d-flex align-items-center">
            <div class="col-lg-4 order-md-2">
              <div class="zoom-image">
                <img src="/img/images/touristique2.jpg" class="card-img-top" alt="...">
              </div>
            </div>
            <div class="col-lg-8 pl-0 pl-md-5 order-md-1">
              <div class="touristique-text">
                <h4 class="text-center my-4">On vous amène à votre destination</h4>
                <p class="pl-2">
                  GHAZALA TOURISME a investi dans la qualité du service rendu. Cette qualité passe par:
                  <br>- Une expérience riche et réussie.
                  <br>- Un parc de transport haut de gamme.
                  <br>- Des ressources humaines impliquées et qualifiées
                  <br>- Le respect de la réglementation sociale.
                  <br>- La ponctualité et la sécurité sont nos engagements.
                  <br>- Une flexibilité accrue.
                </p>
                <p class="pl-2">Nos équipes de professionnels vous font bénéficier d'un service de qualité, et assurent vos voyages en toute sécurité.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    <form @submit.prevent="sendEmail">
      <div class="container px-md-0 px-4">
        <section class="devis-bg mb-5 mt-5">
          <div class="row">
            <div class="col-lg-6"></div>
            <div class="col-lg-6 text-center devis-form">
              <h4 class="devis-title">Demandez un devis 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.67 7.066l-1.08-1.34a1.5 1.5 0 0 1-.309-.77l-.19-1.698a1.51 1.51 0 0 0-1.329-1.33l-1.699-.19c-.3-.03-.56-.159-.78-.329L8.945.33a1.504 1.504 0 0 0-1.878 0l-1.34 1.08a1.5 1.5 0 0 1-.77.31l-1.698.19c-.7.08-1.25.63-1.33 1.329l-.19 1.699c-.03.3-.159.56-.329.78L.33 7.055a1.504 1.504 0 0 0 0 1.878l1.08 1.34c.17.22.28.48.31.77l.19 1.698c.08.7.63 1.25 1.329 1.33l1.699.19c.3.03.56.159.78.329l1.339 1.08c.55.439 1.329.439 1.878 0l1.34-1.08c.22-.17.48-.28.77-.31l1.698-.19c.7-.08 1.25-.63 1.33-1.329l.19-1.699c.03-.3.159-.56.329-.78l1.08-1.339a1.504 1.504 0 0 0 0-1.878zM6.5 12.01L3 8.51l1.5-1.5l2 2l5-5L13 5.56l-6.5 6.45z" fill="#FFC107"/></svg>
              </h4>
              <div class="row">
                <div class="col-lg-6 form-group"><input type="text" v-model="name" class="donnees" placeholder="Nom"></div>
                <div class="col-lg-6 form-group"><input type="text" v-model="subject" class="donnees" placeholder="Sujet"></div>
                <div class="col-lg-6 form-group">
                  <!-- <input type="number" v-model="telephone" class="donnees" placeholder="Téléphone"> -->
                  <vue-tel-input 
                    class="donnees"
                    ref="intlTel"
                    v-model="telephone"
                    :ignoredCountries="['EH']"
                    :preferredCountries="['MA', 'FR']"
                    defaultCountry="MA"
                    mode="national"
                    :inputOptions="optionsTel"
                  >
                  </vue-tel-input>
                </div>
                <div class="col-lg-6 form-group"><input type="email" v-model="email" class="donnees form-control" placeholder="Adresse mail"></div>
                <div class="col-lg-12 form-group"><textarea rows="4" v-model="message" class="donnees-textarea mb-4 pt-3" placeholder="Message ..." ></textarea></div>
                <div class="col-lg-12"><button type="submit" class="envoyer-devis">Envoyer</button></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </form>

    <div class="wtsp-fixed">
      <a href="https://wa.me/0637222222" target="_blank"><button class="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1536 1600"><path fill="#fff" d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104zm0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26z"/></svg>
      </button></a>
    </div>

  </div>  
</template>

<script>
import axios from "axios";
export default {
  components: {
  },
  data: function() {
    return {
      optionsTel: { placeholder: "Téléphone" },
      name: '',
      subject: '',
      telephone: '',
      email: '',
      message: '',
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

  },
  methods: {
    sendEmail: function() {
      var vm = this;
      var data = new FormData();
      data.append('name', vm.name);
      data.append('subject', vm.subject);
      data.append('telephone', vm.telephone);
      data.append('email', vm.email);
      data.append('message', vm.message);
      
      if ( vm.name != '' && vm.subject != '' && vm.$refs.intlTel.phoneObject.valid == true != '' && vm.email != '' && vm.message != '' ){
        axios.post('devis_touristique.php', data)
          .then(response => {
            console.log(response);
            if (response.data == true) {
              vm.$toast.open({
                message: 'Votre devis a été envoyer avec succès',
                type: 'success',
                position: 'top',
                duration: 5000
              });
            }
            else {
              vm.$toast.open({
                message: 'Votre devis n\'a pas été envoyer !!',
                type: 'error',
                position: 'top',
                duration: 5000
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
        
          vm.name = '';
          vm.subject = '';
          vm.telephone = '';
          vm.email = '';
          vm.message = '';
      }else {
        vm.$toast.open({
          message: 'Il faut remplir toutes vos informations correctement!',
          type: 'error',
          position: 'top',
          duration: 5000
        });
      }
    }
  }
}
</script>

<style scoped>
.image-top{
  width: 100%;
  background: url(/img/images/touristique-top.jpg) center bottom no-repeat;
  background-size: cover;
}
.image-top .bg-opacity{
  background: #00000056;
  height: 500px;
}
.devis-bg {
  background: url(/img/images/touristique.jpg) no-repeat;
  height: 600px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}
</style>
<style>
.vti__input {
  border-radius: 5px;
  color: #555;
}
.vti__input::placeholder{
  color: #bbb;
}

.image-top h1{
  color: #ffc107;
  text-shadow: 1px 1px 5px #ac8406;
  font-weight: 600;
  position: absolute;
  top: 200px;
  width: 100%;
  font-size: 50px;
}

.donnees{
  height: 50px;
}

.donnees, .donnees-textarea{
  width: 100%;
  color: #555;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-bottom: 15px;
  padding-left: 10px;
  font-weight: 500;
}

.envoyer-devis{
  width: 50%;
  border: none;
  outline: none;
  height: 50px;
  background-color: #ffc107;
  font-weight: 600;
  border-radius: 5px;
  font-size: 17px;
}

.donnees::placeholder, .donnees-textarea::placeholder{
  color: #bbb;
}

.touristique-text h4{
  color: #e82638;
  font-weight: 600;
}

.devis-title {
  font-weight: 600; 
  color: white;
  margin-bottom: 25px !important;
}


@media (min-width: 768px) {
  .image-top{  
  height: 500px;
  }

  .devis-form {
    position: absolute;
    right: 20px;
    top: 140px;
  }

  .devis-bg:before {
    position: absolute;
    right: -13%;
    left: auto;
    top: -195px;
    content: "";
    width: 82%;
    height: 210%;
    background: rgb(202 31 38 / 70%);
    transform: rotate(32deg);
  }
}

@media (max-width: 767px) {
  .devis-form {
    position: absolute;
    right: 0;
    top: 50px;
  }
  .devis-bg:before {
    position: absolute;
    right: 0;
    left: auto;
    top: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: rgb(202 31 38 / 70%);
  }
}

@media (max-width: 767px){
  .image-top h1{
    top: 100px;
    font-size: 28px;
  }
  .image-top{
    height: 170px ;
  }
}
</style>
