<template>
    <div class="post">
        <h3>All Posts</h3>
        <div class="all" v-for="post in posts" :key="post.id">
            <router-link :to="{name : 'postDetail', params:{id: post.id }}"><h4>{{ post.title }}</h4></router-link>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            posts : [
                { title: 'This is Post Title 1', id: 1, body:'unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'},
                { title: 'This is Post Title 2', id: 2, body:'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic'},
                { title: 'This is Post Title 3', id: 3, body: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy'},
                { title: 'This is Post Title 4', id: 4, body:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate'},
            ]
        }
    }
}
</script>
<style scoped>
.post{
    width:45%;
    margin:60px auto;
    text-align: center;
}
.post h3{
    padding-bottom: 10px;
    font-size:30px;
    font-weight: 900;
}
.post .all{
    background-color: #ccc;
    cursor: pointer;
    margin:10px 0px;
    padding:8px 0px;
    border-radius: 10px;
}
.post a{
    text-decoration: none;
}
</style>