<template>
    <h1>{{ title }}</h1>
    <div v-if="showModal">
        <Modal theme="sale" @close="toggleModal">
            <h1>Vue 3 Tesing</h1>
            <p>Try Harder</p>
            <template v-slot:links>
                <a href="#">Go to Link 1</a>
                <a href="#">Go to Link 2</a>
            </template>
        </Modal>
    </div>
    <button @click="toggleModal">Show Modal</button>
</template>
<script>

import Modal from "../views/Modal.vue"

export default{
    
    name : 'Form',
    components : {Modal},
    data(){
        return{
            title: 'My First Vue App',
            header: 'Sign Up for Giveaway',
            text:'Do not miss the chance',
            showModal : false
        }
    },
    methods:{
        toggleModal() {
            this.showModal = !this.showModal
        }
    }

}
</script>