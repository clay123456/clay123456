import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Integral from '@/views/Integral'
import Promotion from '@/views/Promotion'
import ShoppingCar from '@/views/ShoppingCar'
import User from '@/views/User'
Vue.use(VueRouter)


const router = new VueRouter({
    routes:[
        {path:'/',name:'home',component:Home},
        {path:'/home',name:'home',component:Home},
        {path:'/integral',name:'integral',component:Integral},
        {path:'/promotion',name:'promotion',component:Promotion},
        {path:'/shoppingCar',name:'shoppingCar',component:ShoppingCar},
        {path:'/user',name:'user',component:User}
    ]
})

export default router