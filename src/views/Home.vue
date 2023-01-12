<script setup>
    import { ref } from "vue";
    const count = ref(0)
    // export default({
    //     data(){
    //         return {
    //             count : 0,
    //             show : true
    //         }
    //     },
    //     methods : {
    //         increase(){
    //             this.count = this.count + 1
    //         },

    //         decrease(){
    //             this.count = this.count - 1
    //         },
          
    //     }
    // });
    const show = ref(false)
    const showModal = ref(false)
    const newNote = ref("")
    const note = ref([])
    let errorMessage = ref("")

    function getRandomColor() {
       return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    }

    const addNote = () => {

        if(newNote.value.length < 10){
            return errorMessage.value = "must be more than 10 character"
        }

        note.value.push({
            id:Math.floor(Math.random() * 1000000 ),
            text: newNote.value,
            date:new Date(),
            backgroundColor: getRandomColor()
        })
        
        showModal.value = false
        newNote.value = ""
    }
</script>
<template>
   <div class="count">
        <h1>{{ count }}</h1>
        <button @click="count++">+</button>
        <button @click="count--">-</button>
   </div>

   <div class="show">
        <h1 v-show="show">Text to show and hide</h1>
        <button @click="show = true">Toggle</button>
   </div>

   <br>
   <!-- Note Part -->
   <div class="ntitle">
    <div>
        <h1>Add Notes</h1>
    </div>
    <div>
        <button @click="showModal = true">+</button>
    </div>
   </div>

   <div class="nlist">
        <div v-for="notes in note" 
        :style="{backgroundColor:notes.backgroundColor}"
        :key="notes.id">
            <h4>{{notes.text}}</h4>
            <small>{{notes.date.toLocaleDateString('en-US')}}</small>
        </div>
   </div>

   <div v-if="showModal" class="nmodal">
    <button @click="showModal = false" class="close">&times;</button>
        <p class="error" v-show="errorMessage">{{ errorMessage }}</p>
        <textarea v-model.trim="newNote" name="" id="" cols="30" rows="10" placeholder="Add Note"></textarea>
        <button @click="addNote">Add</button>
   </div>
</template>

<style scoped>
.count, .show{
    padding:40px 0px 30px 0px;
    text-align: center;
    background-color: aqua;
}
.count button{
    padding:4px 10px;
    margin:10px 15px;
    cursor: pointer;
}
.show button{
    padding:4px 10px;
    margin-left: 5px;
    margin-right: 5px;
}

/* for note */
.ntitle{
    display: flex;
    justify-content: space-between;
    width:50%;
    margin: 20px auto;
    
}
.ntitle div{
    align-items: center;
    justify-items: center;
}
.ntitle div button{
    background-color: tomato;
    color:#fff;
    border:none;
    padding:5px 12px;
    font-size:20px;
    border-radius: 50%;
    cursor: pointer;
}
.nlist{
    margin:0 auto;
    width:50%;
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
}
.nlist div{
    border-radius: 15px;
    padding:10px;
    margin:0px 6px 20px 6px;
    width:31.3%;
}
.nlist div h4{
    font-size:15px;
    color:#222;
    margin-bottom: 20px;
}
.nlist div small{
    font-size:12px;
    color:#333;
}
.nmodal{
    width:40%;
    background-color: beige;
    border:1px solid #ccc;
    padding:15px;
    position: fixed;
    top: 30%;
    left: 30%;
    z-index: 30;
}
.nmodal .close{
    float:right;
    z-index: 10;
    margin-bottom: 4px;
    border-radius: 50%;
    padding:4px 9px;
    cursor: pointer;
}
.nmodal .error{
    font-size:13px;
    color:red;
    margin-bottom: 9px;
}
.nmodal textarea{
    width:100%;
    box-sizing: border-box;
    outline: none;
    padding:10px;
}
.nmodal button{
    border:none;
    cursor: pointer;
    background-color: tomato;
    padding:4px 13px;
    color:#fff;
}
</style>