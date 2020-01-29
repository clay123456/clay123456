<template>
<div class='footer'>
    <mt-tabbar :selected.sync="selected">
        <mt-tab-item v-for="(item,i) in list" :id="item.name" :key="i">
            <div @click="changeTabbar(i)">
                <router-link :to="item.to">
                    <div><img slot="icon" :src="index === i ? item.activesrc : item.src"/></div>
                    <p :class="index === i ? 'active' : ''">{{item.name}}</p>
                </router-link>
            </div>
        </mt-tab-item>
    </mt-tabbar>
</div>
</template>
<script>

export default {
    name: 'Footer',
    components:{

    },
    data(){
        return {
            selected: false,
            list:[
                {name:'主页',src:require('../assets/tabbar/home.png'),to:'/home',activesrc:require('../assets/tabbar/home-active.png')},
                {name:'积分',src:require('../assets/tabbar/integral.png'),to:'/integral',activesrc:require('../assets/tabbar/integral-active.png')},
                {name:'促销',src:require('../assets/tabbar/promotion.png'),to:'/promotion',activesrc:require('../assets/tabbar/promotion-active.png')},
                {name:'购物车',src:require('../assets/tabbar/shopcar.png'),to:'/shoppingCar',activesrc:require('../assets/tabbar/shopcar-active.png')},
                {name:'我的',src:require('../assets/tabbar/user.png'),to:'/user',activesrc:require('../assets/tabbar/user-active.png')},
            ],
            index: 0,
        }
    },
    methods:{
        changeTabbar(i){
            this.index = i
        },
        
    },
}
</script>
<style lang="css" scoped>
    img{
        width: 0.5rem;
        height: auto;
    }
    a{
        text-decoration: none;
        color: #555;
    }
    .footer{
        width: 100%;
        position: fixed;
        bottom: -4px;
        left: 0;
        z-index: 3;
        height: 1rem;
    }
    .active{
        color: #1296db;
    }
</style>