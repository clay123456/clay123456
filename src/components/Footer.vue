<template>
<div class='footer'>
    <mt-tabbar :selected.sync="selected">
        <mt-tab-item id="主页">
            <router-link to='home'>
                <div><img slot="icon" src="../assets/100x100.png"></div>
                <p>主页</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="积分">
            <router-link to='integral'>
                <div><img slot="icon" src="../assets/100x100.png"></div>
                <p>积分</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="促销">
            <router-link to='/promotion'>
                <div><img slot="icon" src="../assets/100x100.png"></div>
                <p>促销</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="购物车">
            <router-link to='/shoppingCar'>
                <div><img slot="icon" src="../assets/100x100.png"></div>
                <p>购物车</p>
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="我的">
            <router-link to='/user'>
                <div><img slot="icon" src="../assets/100x100.png"></div>
                <p>我的</p>
            </router-link>
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
        }
    }
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
        bottom: 0;
        left: 0;
        z-index: 3;
        height: 1rem;
    }
</style>