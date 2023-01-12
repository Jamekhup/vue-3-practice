<template>
    <div class="detail">
        <h3 class="">Post Detail Page</h3>
        <p>The Post id is - {{ id}}</p>
        <h1>{{ title }}</h1>
        <p>{{ body }}</p>
        <button @click="goBack">Go Back</button>
    </div>
</template>
<script>
export default{
    props:['id'],
    data(){
        return {
            // id: this.$route.params.id  - get param id

        }
    },
    methods:{
        goBack(){
            this.$router.go(-1)
            // to redirect
            // this.$router.push({name : 'Home'})
        }
    }
}
</script>

<style scoped>
.detail{
    width:45%;
    margin:60px auto;
    text-align: center;
}
.detail h3{
    font-size: 25px;
    padding-bottom: 10px;
}
</style>