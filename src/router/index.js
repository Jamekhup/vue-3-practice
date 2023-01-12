import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'
import Todo from "../views/Todo.vue"
import Form from "../views/Form.vue"
import Reaction from "../views/Reaction.vue"
import Calculator from "../views/Calculator.vue"
import API from "../views/Api.vue"
import notFound from "../views/notFound.vue"
import Posts from "../views/posts/Posts.vue"
import postDetail from "../views/posts/postDetail.vue"
import Json from "../views/Json.vue"
import JsonDetail from "../views/JsonDetail.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
            name : "Home"
        },
        {
            path: '/todo',
            component: Todo,
            name : "Todo"
        },
        {
            path: '/popup',
            component : Form,
            name : "Form"
        },
        {
            path: '/reaction',
            component : Reaction,
            name : "Reaction"
        },
        {
            path : '/calculator',
            component : Calculator,
            name : "Calculator"
        },
        {
            path : '/api',
            component : API,
            name : "Api"
        },
        {
            path: '/posts',
            component: Posts,
            name: "posts"
        },
        {
            path: '/posts/:id',
            component: postDetail,
            name: "postDetail",
            props: true
        },

        {
            path: '/json',
            component: Json,
            name: "Json",
        },

        {
            path: '/json/:id',
            component: JsonDetail,
            name: "JsonDetail",
            props : true
        },
        {
            name :'notFound',
            // path:'/:pathMatch(.*)*',
            path:'/:catchAll(.*)*',
            component : notFound,
        }
    ]
})

export default router