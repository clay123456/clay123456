<template>
<div>
    <mt-header fixed title="购物车"></mt-header>
    <div class='dont_goods' v-if="haveGoods">暂无商品</div>
    <div class='have_goods' v-else>
        <p class='place_order_time'>下单时间：</p>
        <div class='status'>
            <div class='img'>
                <img src="" alt=""/>
            </div>
            <div class='name'>透明口红X1</div>
            <div class='pay_status'>未完成付款</div>
        </div>
        <div class='btn'>
            <mt-button class='take_goods' size="small" type='danger'>提货</mt-button>
            <mt-button size="small" type='primary'>回购</mt-button>
        </div>
        <div class='price'>
            <span>单价：</span>
            <span>总价：</span>
            <mt-button class='btn' size="normal" type='primary' @click="show()">详情</mt-button>
            <div class='detail' v-if='detail' style="display: detail ? 'block' : 'none'">
                <p>订单单号：</p>
                <p>运单单号：</p>
                <p>承运公司：</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name:'ShoppingCar',
        data(){
            return {
                haveGoods: false,
                detail: false,
            }
        },
        methods:{
            show(){
                this.detail = !this.detail
            }
        }
    }
</script>
<style lang="css" scoped>
    .mint-header{
        font-size: 0.35rem;
        height: 0.8rem;
    }
    .dont_goods{
        margin-top: 0.8rem;
        width: 100%;
        height: 5rem;
        line-height: 5rem;
        text-align: center;
        font-size: 0.4rem;
        color: red;
        border-bottom: 1px dashed #ddd;
    }
    .have_goods{
        margin: 0.8rem 0 1rem;
        padding: 0 0.1rem;
    }
    .place_order_time{
        line-height: 0.5rem;
        font-size: 0.3rem;
        font-weight: bold;
        border-bottom: 1px solid #ddd;
    }
    .status{
        display: flex;
        height: 2.2rem;
        border-bottom: 1px solid #ddd;
    }
    .status .img{
        width: 2.2rem;
    }
    .status .name{
        line-height: 2.2rem;
        font-size: 0.3rem;
        margin-left: 0.1rem;
        width: 2rem;
    }
    .status .pay_status{
        text-align: center;
        color: red;
        font-size: 0.4rem;
        line-height: 2.2rem;
        font-weight: bold;
        flex: 1;
    }
    .btn{
        text-align: right;
        border-bottom: 1px solid #ddd;
        padding: 0.1rem;
    }
    .take_goods{
        margin-right: 0.1rem;
    }
    .price{
        height: 0.5rem;
        line-height: 0.5rem;
        border-bottom: 1px solid #ddd;
        padding: 0.1rem;
    }
    .price span{
        margin-right: 0.3rem;
        font-weight: bold;
    }
    .price .btn{
        float: right;
        height: 0.5rem;
        line-height: 0.5rem;
        padding: 0 0.2rem;
    }
    .detail{
        margin-top: 0.1rem;
        /* display: none; */
    }
    .detail p{
        font-weight: bold;
    }
</style>