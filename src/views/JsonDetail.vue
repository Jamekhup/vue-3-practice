<template>
    <div class="jdetail">
        <h3>Json-server Detail Page</h3>

        <div v-if="data">
            <small>{{ id }}</small>
            <h4>{{ data.title }}</h4>
            <p>{{ data.body }}</p>
        </div>

        <button @click="back">Go Back</button>
    </div>
</template>
<script>
export default{
    props: ['id'],
    data(){
        return {
            data : null
        }
    },
    mounted(){
        fetch('http://localhost:3000/posts/' + this.id)
        .then((res) => res.json())
        .then(getData => 
        this.data = getData 
        )
        .catch(err => console.log(err.message))
    },

    methods:{
        back(){
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.jdetail{
    width:45%;
    margin:60px auto;
    text-align: center;
}
.jdetail h3{
    font-size:27px;
    padding-bottom: 10px;
}
</style>