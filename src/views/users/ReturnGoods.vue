<template>
<div>
    <mt-header fixed title="提现">
        <router-link to="" slot="left">
            <mt-button icon="back" @click="goBack()"></mt-button>
        </router-link>
    </mt-header>
    <div class='return-box'>
        <div class='quota'>
            我的额度：<span>￥10000</span>
        </div>
        <mt-field label="提现金额：" v-model="amount" placeholder='请输入提现金额'></mt-field>
        <mt-field label="姓名：" v-model="username" placeholder='请输入持卡人姓名'></mt-field>
        <mt-field label="银行名称：" v-model="bankname" placeholder='请输入银行名称'></mt-field>
        <mt-field label="银行卡号：" v-model="banknumber" placeholder='请输入卡号'></mt-field>
        <mt-field label="开户行：" v-model="openbank" placeholder='请输入开户行'></mt-field>
        <mt-field></mt-field>
        <p class='tips'>退货后，到账时间在3-5分钟。请耐心等待，如有问题，请联系客服</p>
        <div class='btn-box'>
            <mt-button type='primary'>立即提现</mt-button>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'returnGoods',
    data() {
        return {
            amount:'',
            username:'',
            bankname:'',
            banknumber:'',
            openbank:'',
        }
    },
    methods:{
        goBack(){
            window.history.go(-1)
        },

    }
}
</script>
<style lang="css" scoped>
    .mint-header{
        font-size: 0.35rem;
        height: 0.8rem;
        font-weight: bold;
        z-index: 5;
    }
    .return-box{
        height: calc(100vh - 0.8rem);
        padding: 0.8rem 0.2rem 0;
        overflow: scroll;
        position: relative;
        background: white;
        z-index: 4;
    }
    .quota{
        height: 1.6rem;
        line-height: 1.6rem;
        font-size: 0.6rem;
        font-weight: bold;
        text-align: center;
        margin-bottom: 0.2rem;
    }
    .quota span{
        color: #26a2ff;
    }
    .return-box .tips{
        color: red;
        line-height: 0.4rem;
        padding: 0.2rem 0;
        font-size: 0.3rem;
        margin-top: -1rem;
        position: relative;
        z-index: 1;
    }
    .btn-box{
        text-align: center;
    }
</style>