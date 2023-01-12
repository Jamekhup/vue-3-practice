<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        <p>Click Me</p>
    </div>
</template>
<script>
export default{
    props:['delay'],
    data(){
        return{
            showBlock: false,
            timer : null,
            reactionTime : 0,
        }
    },
    mounted(){
        setTimeout(() => { 
            this.showBlock = true
            this.startTimer()
        } , this.delay)
    },
    methods: {
        startTimer(){
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10);
        },

        stopTimer(){
            clearInterval(this.timer)
            this.$emit('end',this.reactionTime)
        }
    }
}
</script>
<style scoped>
.block{
    width:40%;
    margin:20px auto;
    text-align: center;
    background-color: aquamarine;
    padding:60px 0px;
    cursor: pointer;
}
.block p{
    color:tomato;
}
</style>