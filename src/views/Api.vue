<template>
    <div class="container">
        <div class="display" v-for="task in list" :key="task.id">
            <h3>{{ task.attributes.name }}</h3>
            <p>{{ task.attributes.description }}</p>
            <span>{{ task.attributes.priority }}</span>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default{
    name : "App",
    data(){
        return {
            list :[]
        }
    },
    async mounted(){
        let url = 'http://jame.localhost/api/tasks';
        let token = '2|qJ1ErUJGPmtNK8RBTYW2d6a0N6PHkOqlcNobVBT4';

        let data = await axios.get(url, { headers: { "Authorization": `Bearer ${token}` } });
        console.log(data.data.data)
        this.list = data.data.data;
    }
}
</script>
<style scoped>
.container{
    display:flex;
    justify-content: start;
    flex-wrap: wrap;
}
.container div{
    width:250px;
    height: 250px;
    padding:20px;
    margin:20px;
}
</style>