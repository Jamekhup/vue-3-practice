<template>
    <div class="json">
        <h3>Json-Server with Json</h3>
        
        <div class="posts" v-for="post in posts" :key="post.id">
            <router-link :to="{name: 'JsonDetail', params :{id: post.id}}"><h4>{{ post.title }}</h4></router-link>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return {
            posts : []
        }
    },
    mounted(){
        fetch('http://localhost:3000/posts')
        .then((res) => res.json())
        .then(getData => this.posts = getData)
        .catch(err => console.log(err.message))
    }
}
</script>
<style scoped>
.json{
    width:45%;
    margin:60px auto;
    text-align: center;
}
.json h3{
    padding-bottom: 10px;
    font-size:26px;
}
.json .posts{
    background-color: #ccc;
    cursor: pointer;
    margin:10px 0px;
    padding:10px 0px;
}
.json a{
    text-decoration: none;
}
</style>