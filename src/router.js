import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'
import About from './views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { transition: 'slide-left' }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: { transiton: 'slide-right' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router