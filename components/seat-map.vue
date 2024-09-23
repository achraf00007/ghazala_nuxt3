<template>
  <div>
    <div v-if="selectedResult != ''" :id="mapId" class="seat-map">
      <div class="front-indicator" style="text-align: start;margin-bottom: 20px;">
          <img src="/img/volant.png" style="height: 35px; width: 35px;" />
      </div>
    </div>
  </div>
</template>

<script>
import _map from 'lodash/map';
import _includes from 'lodash/includes'
import _toInteger from 'lodash/toInteger'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
require('assets/jsc/jquery.seat-charts.min.js')
import 'assets/jsc/jquery.seat-charts.css'

export default {
  name: 'SeatMap',
  props:['selectedResult','mapId','seatMap','preSelectedSeats','unavailableSeats','siegesFemmes','busOrder','prixTotal', 'basketId', 'source'],
  data () {
    return {
      showLegend: false
    }
  }, 
  watch: {
    seatMap: function (newValue, oldValue) {
      let vm = this;
      vm.createSeatMap();
    }
  },
  mounted (){
    let vm = this;
    if (vm.$props.seatMap != undefined && vm.$props.seatMap !== []){
      vm.createSeatMap();
    }
  },
  methods: {
    seatSelected(number) {
      var vm = this;
      this.$emit('seatSelected',{seatNumber:number, busOrdre: vm.busOrder, isSiegeFemme: vm.isSiegeFemme(number)});
    },
    seatDeselected(number) {
      var vm = this;
      this.$emit('seatDeselected',{seatNumber:number,busOrdre: vm.busOrder});
    },
    isSiegeFemme(number) {
      var vm = this;
      return _includes(_map(vm.siegesFemmes, 'seatNumber'),_toInteger(number));
    },
    createSeatMap(){
      var vm = this;

      $('.seatCharts-row',vm.$el).remove();
      $('.seatCharts-legendItem',vm.$el).remove();
      $('.seat-map,.seat-map *',vm.$el).unbind().removeData();
      $('.seat-map',vm.$el).attr('aria-activedescendant', null);

      var sc = $('.seat-map',vm.$el).seatCharts({
        map: vm.$props.seatMap,
        seats: {
            f: {
                price: vm.$props.prixTot / vm.$props.preSelectedSeats.length,
                classes: 'siege-libre', //your custom CSS class
                category: 'Siege Libre'
            }

        },
        naming: {
            left: false,
            top: false,
            getLabel: function(character, row, column) {
                return firstSeatLabel++;
            },
        },
        legend: {
            node: $('#legend'),
            items: [
                ['f', 'available', 'Siège libre'],
                ['f', 'available-femme', 'Siège Femme'],
                ['f', 'unavailable', 'Siège non disponible'],
                ['f', 'encours', 'Siège en cours de réservation'],
            ]
        },
        click: function () {
          let seatNumber = this.settings.label;
          
          if (this.status() == 'available' || this.status() == 'available-femme') {

            if(vm.$props.source == "MARKOUB"){

              let siegeARemplacer = vm.$props.preSelectedSeats[0];
              if(vm.isSiegeFemme(siegeARemplacer.seatNumber))
                sc.get(''+siegeARemplacer.seatNumber).status('available-femme');
              else
                sc.get(''+siegeARemplacer.seatNumber).status('available');
              vm.seatDeselected(siegeARemplacer.seatNumber);
              vm.$props.preSelectedSeats.shift();
              siegeARemplacer.seatNumber = seatNumber;
              vm.$props.preSelectedSeats.push(siegeARemplacer);

              vm.seatSelected(seatNumber)
              
              return 'selected';
            }

            return this.style();
          } 
          
          else if (this.status() == 'selected') {
            return this.status();

            //seat has been vacated
            vm.seatDeselected(seatNumber)
            return 'available';
          } else if (this.status() == 'unavailable') {
            //seat has been already booked
            return 'unavailable';
          } else {
            return this.style();
          }
        }
      });
      
      var siegesFemmes = _map(vm.$props.siegesFemmes, 'seatNumber');
      sc.get(siegesFemmes).status("available-femme");

      var unavailableSeats = _map(vm.$props.unavailableSeats, 'seatNumber');
      sc.get(unavailableSeats).status("unavailable");

      var preSelectedSeats = _map(vm.$props.preSelectedSeats, 'seatNumber');
      sc.get(preSelectedSeats).status("selected");
    }
  }
}
</script>

<style>
  .seat-map{ 
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: white
  }
  div.seatCharts-space {
    background: none
  }
  div.seatCharts-cell {
    color: #182C4E;
    height: 38px;
    width: 30px;
    line-height: 25px
  }
  div.seatCharts-seat {
      color: #FFFFFF;
      cursor: pointer
  }
  div.seatCharts-row {
      height: 44px
  }
  div.seatCharts-seat.available {
      background: url(/img/seat-available.png);
      /*background-color: #B9DEA0*/
  }
  
  div.seatCharts-seat.available.first-class {
      /* 	background: url(vip.png); */
      background-color: #3a78c3
  }
  div.seatCharts-seat.focused {
      background: url(/img/seat-selected.png);
      /*background-color: #76B474*/
  }
  div.seatCharts-seat.selected {
      background: url(/img/seat-selected.png);
      /*background-color: #E6CAC4*/
  }
  div.seatCharts-seat.unavailable {
      background: url(/img/seat-unavailable.png);
      color: transparent;
      opacity: 0.6;
      /*background-color: #472B34*/
  }
  div.seatCharts-seat.encours {
      /*background: url(/Content/front/img/seat-encours.png);*/
      background-color: #472B34
  }
  div.seatCharts-seat.available-femme{
    background: url('/img/seat-available-femme.png') ;
  }
  div.seatCharts-container {
      width: 211px;
      padding: 14px;
      padding-top: 10px;
      padding-bottom: 25px
  }
  div.seatCharts-legend {
      padding-left: 0px;
      bottom: 16px
  }
  ul.seatCharts-legendList {
      padding-left: 0px
  }
  span.seatCharts-legendDescription {
      margin-left: 5px;
      line-height: 30px
  }
  .checkout-button {
      display: block;
      margin: 10px 0;
      font-size: 14px
  }
  .cancel-cart-item {
      cursor: pointer
  }
  #selected-seats {
      max-height: 180px;
      overflow-y: auto;
      overflow-x: none
  }
  div.seatCharts-seat.encours {
      cursor: not-allowed
  }
</style>