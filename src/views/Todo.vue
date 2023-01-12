<script setup>
    import { ref, onMounted, watch, computed } from "vue";
    import swal from 'sweetalert'
    const todos = ref([])
    // const name = ref('')

    const input_content = ref('')
    const input_category = ref(null)

    const todos_asc = computed(() => todos.value.sort((a,b) => {
        return a.createdAt - b.createdAt
    }))

    const addTodo = () => {
        if(input_content.value.trim() === '' || input_content.value == null){
            return false;
        }

        todos.value.push({
            content:input_content.value,
            category:input_category.value,
            createdAt : new Date().getTime(),
            done: false
        })

        input_content.value = ""
        input_category.value =""
    }

    watch(todos, newVal => {
        localStorage.setItem('todo',JSON.stringify(newVal))
    },{deep:true})


    onMounted(() => {
        todos.value = JSON.parse(localStorage.getItem('todo')) || []
    })

    const removeTodo = todo => {
        
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this List!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your To Do List has been deleted!", {
                        icon: "success",
                    });
                    todos.value = todos.value.filter(t => t !== todo)
                    
                } else {
                    swal("Your To DO List isn't deleted!");
                }
            });

        
    }

    
</script>
<template>
    <div class="container">
        <h3>To Do App With Vue 3</h3>
        <form @submit.prevent="addTodo">
            <h4>What's on your to do list</h4>
            <input v-model="input_content" type="text" placeholder="Write Your To Do List">

            <h4>Pick Category</h4>
            <div class="category">
                <label for="">
                    <input v-model="input_category" type="radio" class="iPersonal" name="category" value="personal">
                    <span class="personal"></span>
                    <div>Personal</div>
                </label>
                <label for="">
                    <input v-model="input_category" type="radio" class="bPersonal" name="category" value="business">
                    <span class="business"></span>
                    <div>Business</div>
                </label>
            </div>
            <button type="submit" class="fsubmit" name="Add Todo">Add To do list</button>
        </form>
        
        <div class="list">
            <h1>To Do Lists</h1>
            <div v-for="todo in todos_asc" class="items">
                <h4>{{ todo.content }}</h4>
                <p>{{ todo.category }}</p>
                <button @click="removeTodo(todo)">Done</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container{
    width:45%;
    margin:60px auto;
    background-color:bisque;
    padding:20px;
}
.container h3{
    text-align: center;
    padding-bottom: 10px;
}
.container form input[type="text"]{
    width:100%;
    padding:8px 3px;
    outline:none;
    margin:10px 0px;
}

.container .category{
    display:flex;
    justify-content: space-between;
}
.container h4{
    font-size: 14px;
    margin-bottom: 8px;
}
.container .category label{
    background-color: coral;
    text-align: center;
    padding:10px;
    width:40%;
}
.container .category label input[type="radio"]::before{
    content: "";
        width: 0.65em;
        height: 0.65em;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
}
.container .category label .iPersonal:checked::before{
    transform: scale(1);
}
.container .fsubmit{
    display: block;
    width:100%;
    margin-top: 10px;
    padding:10px;
    border:none;
    background-color:#222;
    cursor: pointer;
    color:#fff;
}

.container .list{
    margin-top: 20px;
}
.container .list h1{
    font-size:18px;
    margin-bottom: 10px;
}
.container .list .items{
    display:flex;
    justify-content: space-between;
    background-color: rgb(209, 205, 205);
    padding:10px;
    align-items: center;
    margin:8px 0px;
}
.container .list .items button{
    border:none;
    background-color: tomato;
    color:#fff;
    cursor: pointer;
    padding:4px 2px;
}
</style>