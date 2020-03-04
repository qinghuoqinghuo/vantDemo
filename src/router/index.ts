import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/live',
        name: 'live',
        component: () => import('../views/TVLive.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/user.vue')
    }, {
        path: '/shopCar',
        name: 'shopcar',
        component: () => import('../views/shopCar.vue')

    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
