<script setup>
    import { ref,computed } from "vue";
    const num1 = ref('')
    const num2 = ref('')

    const total = ref('')

   

</script>
<template>
    <div class="main">
        <input type="number" v-model="num1" placeholder="Enter Number">
        <input type="number" v-model="num2" placeholder="Enter Number">
        <button @click="calculate('plus')">+</button>
        <button @click="calculate('minus')">-</button>
        <button @click="calculate('multiply')">*</button>
        <button @click="calculate('divide')">/</button>
        <button @click="calculate('modulus')">%</button>
        <br>
        <br>
        <h3>Result : </h3>
    </div>
</template>

<style scoped>
.main{
    width:40%;
    margin:60px auto;
    padding:20px;
}
.main input{
    width:100%;
    box-sizing: border-box;
    padding:8px 3px;
    margin:4px 0px;
    outline: none;
}
.main button{
    width:15%;
    height:20px;
    margin-right: 10px;
    cursor: pointer;
}
</style>