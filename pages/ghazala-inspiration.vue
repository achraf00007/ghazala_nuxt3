<template>
  <div class="marginTopPage p-0">
    <div class="container-fluid image-top-inspiration">
          <div class="row">
            <div class="col-lg-6 col-12">  
              <span class="text-inspiration">            
              <h1 class="text-center">Voyager c'est vivre!</h1>
              <h4 class="text-center">Ghazala Inspiration vous aide à trouver les meilleures destinations au Maroc.</h4>
            </span>
            </div>
            <div class="col-lg-6">

            </div>
      </div>
    </div>

    <div class="wtsp-fixed">
      <a href="https://wa.me/0637222222" target="_blank"><button class="btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 1536 1600"><path fill="#fff" d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5zm-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104zm0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26z"/></svg>
      </button></a>
    </div>
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
  }
}
</script>

<style scoped>
.image-top-inspiration{
  width: 100%;
  background: url(/img/images/ghazala-inspiration-bg.png) center center no-repeat;
  background-size: cover;
  height: 100vh;
}

@media (max-width: 767px){
  .image-top-inspiration{
      height: 40vh;
    }
}
</style>

<style>
.image-top-inspiration h1{
  color: #ffc107;
  font-weight: 600;
  width: 100%;
  font-size: 40px;
  margin-bottom: 30px;
}

.image-top-inspiration h4{
  color: white;
  font-weight: 400;
  width: 100%;
  font-size: 27px;
  line-height: 1.7;
}

.text-inspiration{
  backdrop-filter: blur(10px);
  position: absolute;
  top: 35vh;
  padding: 20px 5px;
}

@media (max-width: 767px){
  .image-top-inspiration h1{
    font-size: 25px;
  }

  .image-top-inspiration h4{
    font-size: 15px;
  }
  .text-inspiration{
    backdrop-filter: blur(3px);
    top: 15vh;
    left: 0;
  }
}
</style>