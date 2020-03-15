import Vue from 'vue'
import VueRouter from 'vue-router'//引入vue-router

Vue.use(VueRouter);

import Home from '../pages/Home.vue'
import User from '../pages/User.vue'
import Look from '../pages/Look.vue'
import Order from '../pages/Order.vue'
import Login from '../pages/Login.vue'
import Reg from '../pages/Reg.vue'
import SetUp from '../pages/SetUp.vue'

let routes = [
    {path:'/home', component: Home},
    {path:'/user', component: User},
    {path:'/order', component: Order},
    {path:'/look', component: Look},
    {path:'/login', component: Login, name:'login'},
    {path:'/set', component: SetUp,},
    {path:'/reg', component: Reg},
    {path:'/', redirect: '/home'}
]

const router = new VueRouter({
    routes
})

export default router;