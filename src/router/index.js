import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home/index.vue'
import Detail from '../Detail/index.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router