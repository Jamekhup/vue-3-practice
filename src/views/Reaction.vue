<template>
    <div class="main">
        <h1>Reaction Timer</h1>
        <button @click="start" :disabled="isPlaying">Start</button>
    </div>
    <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
    <Result v-if="showResult" :score="score"/>
</template>
<script>
import Block from "../components/Block.vue";
import Result from "../components/Result.vue";
export default{
    name:'Reaction',
    components:{Block, Result},
    data(){
        return{
            isPlaying : false,
            delay : null,
            score : null,
            showResult : false
        }
    },  
    methods:{
        start(){
            this.delay = 2000 + Math.random() *5000
            this.isPlaying = true
            console.log(this.delay)
            this.showResult = false
        },

        endGame(getTime) {
            this.score = getTime
            this.isPlaying = false
            this.showResult = true
        }
    }
}
</script>

<style scoped>
.main{
    width:40%;
    margin:60px auto 20px auto;
    text-align: center;
}
.main button{
    padding:4px 13px;
    cursor: pointer;
}
p{
    text-align: center;
}
</style>