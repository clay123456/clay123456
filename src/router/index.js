import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Integral from '@/views/Integral'
import Promotion from '@/views/Promotion'
import ShoppingCar from '@/views/ShoppingCar'
import User from '@/views/User'
import Register from '@/views/Register'
import Login from '@/views/Login'
import GoodsDetail from '@/views/GoodsDetail'

Vue.use(VueRouter)


const router = new VueRouter({
    routes:[
        {path:'/',name:'home',component:Home},
        {path:'/home',name:'home',component:Home},
        {path:'/integral',name:'integral',component:Integral},
        {path:'/promotion',name:'promotion',component:Promotion},
        {path:'/shoppingCar',name:'shoppingCar',component:ShoppingCar},
        {path:'/user',name:'user',component:User},
        {path:'/register',name:'register',component:Register},
        {path:'/login',name:'login',component:Login},
        {path:'/goodsDetail',name:'goodsDetail',component:GoodsDetail},
    ]
})

export default router