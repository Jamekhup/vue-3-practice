<template>
    <p>Reaction Time : {{ score }} ms</p>
    <p class="rank">{{ rank }}</p>
</template>
<script>
export default{
    props :['score'],
    data(){
        return{
            rank: null
        }
    },

    mounted(){
        if(this.score < 250){
            this.rank = "Real Quick"
        }else if(this.score < 500){
            this.rank = 'Not Bad'
        }else{
            this.rank = 'Too Slow'
        }


    }
}
</script>

<style scoped>
    p{
        text-align: center;
    }
    .rank{
        font-size: 30px;
        color:tomato;
    }
</style>