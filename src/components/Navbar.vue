<template>
    <nav class="mynav">
        <router-link class="nav-item" :to="{name : 'Home'}">Home</router-link>
        <router-link class="nav-item" :to="{name : 'Todo'}">To Do</router-link>
        <router-link class="nav-item" :to="{name : 'Form'}">Form</router-link>
        <router-link class="nav-item" :to="{name : 'Reaction'}">Reaction</router-link>
        <router-link class="nav-item" :to="{name : 'Calculator'}">Calculator</router-link>
        <router-link class="nav-item" :to="{name : 'Api'}">API</router-link>
        <router-link class="nav-item" :to="{name : 'posts'}">Posts</router-link>
        <router-link class="nav-item" :to="{name : 'Json'}">Json</router-link>
    </nav>
</template>
