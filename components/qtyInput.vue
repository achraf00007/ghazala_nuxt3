<template>
    <div class="qtyButtons">
        <label>Passagers</label>
        <div class="qtyDec" @click="decrement"></div>
        <input type="text" :value="value" @input="updateValue($event.target.value)">
        <div class="qtyInc" @click="increment"></div>
    </div>
</template>

<script>
export default {
    props:["value", "minVal","maxVal"],
    methods:{
        decrement: function () {
            var vm = this;
            if(vm.value == vm.minVal){
                return
            }
            vm.updateValue(vm.value -1);
        },
        increment: function () {
            var vm = this;
            if(vm.value == vm.maxVal){
                return
            }
            vm.updateValue(vm.value + 1);
        },
        updateValue: function (val) {
            this.$emit('input', val);
        }
    }
}
</script>

<style>

</style>