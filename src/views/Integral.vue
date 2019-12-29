<template>
<div>
    <mt-header fixed title="积分商城"></mt-header>
    <div class='intergral'>
        <div class='banner'>
            <img :src="banner.src" alt=""/>
        </div>
        <div class='intergral_shopping'></div>
        <ul class='intergral_goods_list'>
            <li v-for="(item,i) in goodsList" :key="i" @click="goToGoodsDetail(item)">
                <div class='img_box'><img :src="item.src" alt=""></div>
                <p class='name'>{{item.name}}</p>
                <div class='money'>
                    <p class='left'></p>
                    <p class='center'>{{item.intergral}}</p>
                    <p class='right'>立即兑换</p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name:'Intergral',
    components:{

    },
    data(){
        return {
            banner:{src:require('../assets/intergral/banner.jpg')},
            goodsList:[
                {id:'1',src:require('../assets/intergral/win.jpg'),name:'路易十三经典装700ML干邑',intergral:'350600',introduce:require('../assets/intergral/luyi.png')},
                {id:'2',src:require('../assets/intergral/tea.jpg'),name:'安溪乌龙茶茶铁观音400g礼盒装',intergral:'13000',introduce:require('../assets/intergral/anxi.png')},
                {id:'3',src:require('../assets/intergral/pot.jpg'),name:'韩国进口不粘锅',intergral:'10000',introduce:require('../assets/intergral/jinkouguo.png')},
                {id:'4',src:require('../assets/intergral/phone.jpg'),name:'华为 P20 Pro',intergral:'300000',introduce:require('../assets/intergral/huawei.png')},
                {id:'5',src:require('../assets/intergral/necklace.jpg'),name:'S999纯银项链',intergral:'16000',introduce:require('../assets/intergral/xianglian.png')},
                {id:'6',src:require('../assets/intergral/razor.jpg'),name:'飞利浦（Philips）S5070 电动剃须刀 全身水洗',intergral:'50000',introduce:require('../assets/intergral/tixudao.png')},
                {id:'7',src:require('../assets/intergral/hairDrier.jpg'),name:'电吹风机',intergral:'8888',introduce:require('../assets/intergral/chuifengji.png')},
                {id:'9',src:require('../assets/intergral/vacuumCleaner.jpg'),name:'海尔地毯吸尘器',intergral:'30000',introduce:require('../assets/intergral/xichenqi.png')},
                {id:'8',src:require('../assets/intergral/batteryFurnace.jpg'),name:'美的电子炉家用',intergral:'30000',introduce:require('../assets/intergral/meidi.png')},
                {id:'8',src:require('../assets/intergral/iphone.jpg'),name:'Apple/苹果 正品 iphone  11全网通4G手机',intergral:'385000',introduce:require('../assets/intergral/iphone.png')}
            ]
        }
    },
    methods:{
        goToGoodsDetail(goods){
            this.$router.push({
                name:'goodsDetail',
                params:{goods}
            })
        }
    },
}
</script>
<style lang="css" scoped>
    .mint-header{
        font-size: 0.35rem;
        height: 0.8rem;
        font-weight: bold;
    }
    .intergral{
        overflow: scroll;
        margin: 0.8rem 0 1rem;
    }
    .banner{
        overflow: hidden;
        height: 3.5rem;
        margin-bottom: 0.1rem;
    }
    .banner img{
        width: 100%;
        height: 100%;
    }
    .intergral_shopping{
        height: 1rem;
        background: url('../assets/intergral/innergralShopping.jpg') center center no-repeat;
        margin-bottom: 0.1rem;
    }
    .intergral_goods_list{
        padding: 0 0.1rem;
        display: flex;
        overflow: hidden;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .intergral_goods_list li{
        width: 49%;
        border: 1px solid #ddd;
        border-radius: 5px;
        overflow: hidden;
        margin-bottom: 0.2rem;
        height: 4rem;
    }
    .intergral_goods_list li .img_box{
        width: 100%;
        height: 3rem;
    }
    .intergral_goods_list li img{
        width: 100%;
        height: 100%;
    }
    .intergral_goods_list .name{
        height: 0.49rem;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #444;
        line-height: 0.5rem;
        border-bottom: 1px dashed #ddd;
    }
    .intergral_goods_list .money{
        height: 0.46rem;
        line-height: 0.46rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .intergral_goods_list .money .left{
        width: 0.46rem;
        height: 0.46rem;
        background: url('../assets/intergral/intergral.png') center center no-repeat;
        background-size: 100% 100%;
    }
    .intergral_goods_list .money .center{
        width: 1.5rem;
        height: 0.46rem;
        color: red;
        text-align: center;
        font-size: 0.3rem;
    }
    .intergral_goods_list .money .right{
        width: 1.1rem;
        height: 0.36rem;
        background: red;
        border-radius: 0.23rem;
        line-height: 0.38rem;
        color: white;
        text-align: center;
        font-size: 0.22rem;
    }
</style>