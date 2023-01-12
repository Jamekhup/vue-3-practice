<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{sale : theme === 'sale'}">
            <slot></slot>
            <div class="action">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:['header','text','theme'],
    methods:{
        closeModal(){
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.modal{
    width:400px;
    padding:20px;
    margin:100px auto;
    background-color: #fff;
    border-radius: 10px;
    text-align: center;
}
.backdrop{
    position: fixed;
    top:0;
    width:100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
}
</style>