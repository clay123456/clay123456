<template>
<div class='detail'>
    <mt-header fixed title="商品详情">
        <router-link to="" slot="left">
            <mt-button icon="back" @click="goBack()"></mt-button>
        </router-link>
    </mt-header>
    <div class='goods-box'>
        <div class='img'>
            <img :src="goodsList.src" alt=""/>
        </div>
        <div class='name'>{{goodsList.name}}</div>
        <div class='price'>积分：{{goodsList.intergral}}</div>
        <div class='price'>运费：运费首件12.00元,此后每件依次加0元</div>
        <div class='price'>
            <span class='number'>数量：</span>
            <span class='reduce'>-</span>
            <span><input class='num' type="text" value='1'/></span>
            <span class='reduce'>+</span>
        </div>
    </div>
    <div class='goods-introduce'>
        <div class='title'>商品介绍</div>
        <img :src="goodsList.introduce" alt=""/>
    </div>
    <div class='footer'>
        <div class='jifen'>积分：</div>
        <div class='btn'>立即兑换</div>
    </div>
</div>
</template>
<script>
export default {
    name:'goodsDetail',
    data(){
        return {
            goodsList: {},
        }
    },
    created(){
        this.goodsList = this.$route.params.goods
    },
    methods:{
        goBack(){
            window.history.go(-1)
        }
    }
}
</script>
<style lang="css">
    .detail{
        min-height: 100vh;
        position: relative;
        z-index: 4;
        background: white;
    }
    .mint-header{
        font-size: 0.35rem;
        height: 0.8rem;
        font-weight: bold;
    }
    .goods-box{
        padding: 0.8rem 0 1rem;
        overflow: scroll;
    }
    .img{
        overflow: hidden;
    }
    .img img{
        width: 100%;
        height: auto;
    }
    .name{
        line-height: 0.6rem;
        font-size: 0.28rem;
        padding: 0 0.1rem;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
    }
    .price{
        height: 0.8rem;
        line-height: 0.8rem;
        padding: 0 0.1rem;
        font-size: 0.32rem;
        border-bottom: 1px solid #ddd;
    }
    .num{
        width: 0.6rem;
        height: 0.36rem;
        border: 1px solid #ddd;
        text-align: right;
        padding-right: 0.1rem;
    }
    .price span{
        float: left;
        padding: 0 0.2rem;
    }
    .price .number{
        padding: 0;
    }
    .price .reduce{
        text-align: center;
        width: 0.2rem;
        height: 0.4rem;
        background: #ddd;
        padding: 0 0.06rem;
        color: white;
        margin-top: 0.2rem;
        line-height: 0.4rem;
    }
    .goods-introduce{
        overflow: hidden;
        padding-bottom: 1rem;
    }
    .title{
        height: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        background: black;
        color: white;
        font-size: 0.3rem;
        font-weight: bold;
    }
    .goods-introduce img{
        width: 100%;
        height: auto;
    }
    .footer{
        height: 1rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
    .footer .jifen{
        width: 60%;
        height: 1rem;
        float: left;
        line-height: 1rem;
        font-size: 0.32rem;
        background: orange;
        color: white;
        text-align: center;
    }
    .footer .btn{
        width: 40%;
        height: 1rem;
        background: #26a2ff;
        color: white;
        float: left;
        text-align: center;
        line-height: 1rem;
        font-size: 0.32rem;
    }
</style>