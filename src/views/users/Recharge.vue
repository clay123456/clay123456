<template>
<div>
    <mt-header fixed title="充值">
        <router-link to="" slot="left">
            <mt-button icon="back" @click="goBack()"></mt-button>
        </router-link>
    </mt-header>
    <div class='recharge-box'>
        <mt-field label="选择金额：" v-model="money" placeholder='请选择充值金额'/>
        <div class='btn-list'>
            <mt-button v-for="(item,i) in btnList" :key="i" @click="selectMoney(item.value,i)" :class="index===i ? 'active' : ''">{{item.value}}</mt-button>
        </div>
        <div class='recharge-path'>
            <div v-for="(item,i) in rechargeList" :key="i" @click='selectRechargePath(i)'>
                <img :src="rechargePath ===i ? item.activesrc : item.src" alt=""/>
            </div>
        </div>
        <div class='btn-box'>
            <mt-button class='btn' type="danger" @click="showRechargePath">立即进货</mt-button>
        </div>
    </div>
    <div class='qrcode' :style="{display: popupVisible ? 'block' : 'none'}" @click="showRechargePath">
        <div class='content' @click="(e)=>e.stopPropagation()">
            <div class='img-box'>
                <img src="" alt=""/>
            </div>
            <p>请截图保存二维码，启动支付宝扫一扫，选择相册中的保存的二维码图片，长按扫码支付</p>
            <mt-button type='primary' @click="showRechargePath">我已支付</mt-button>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name:'recharge',
        data(){
            return {
                btnList:[
                    {value:'100'},
                    {value:'200'},
                    {value:'300'},
                    {value:'500'},
                    {value:'1000'},
                    {value:'2000'},
                    {value:'3000'},
                    {value:'5000'}
                ],
                index: '',
                money: '',
                rechargeList:[
                    {src:require('../../assets/user/zfb.png'),activesrc:require('../../assets/user/onzfb.png')},
                    {src:require('../../assets/user/weixin.png'),activesrc:require('../../assets/user/onweixin.png')},
                    {src:require('../../assets/user/yinlian.png'),activesrc:require('../../assets/user/onyinlian.png')}
                ],
                rechargePath: 0,
                popupVisible: false,
            }
        },
        methods:{
            goBack(){
                window.history.go(-1)
            },
            selectMoney(money,i){
                this.money = money
                this.index = i
            },
            selectRechargePath(i){
                this.rechargePath = i
            },
            showRechargePath(){
                this.popupVisible = !this.popupVisible
            }
        }
    }
</script>
<style lang='css' scoped>
    .mint-header{
        font-size: 0.35rem;
        height: 0.8rem;
        font-weight: bold;
        z-index: 5;
    }
    .recharge-box{
        height: calc(100vh - 0.8rem);
        padding: 0.8rem 0 0;
        overflow: scroll;
        position: relative;
        background: white;
        z-index: 4;
    }
    .btn-list{
        height: 2rem;
        margin: 0 0.2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: inherit;
    }
    .btn-list .mint-button{
        width: 24%;
        background: white;
        border: 1px solid #eee;
    }
    .btn-list .active{
        background: #1296db;
        color: white;
    }
    .recharge-path{
        padding: 0 0.2rem 0.2rem;
        display: flex;
        justify-content: space-between;
    }
    .recharge-path div{
        width: 31.7%;
        height: 1rem;
    }
    .recharge-path div img{
        width: 100%;
        height: 100%;
    }
    .btn-box{
        margin: 0 0.2rem;
    }
    .btn{
        width: 100%;
    }
    .qrcode{
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
    }
    .content{
        width: 80vw;
        height: 50vh;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background: white;
        text-align: center;
    }
    .img-box{
        width: 100%;
        height: 4rem;
    }
    .img-box img{
        width: 100%;
        height: 100%;
    }
    .content p{
        padding: 0.2rem;
        font-size: 0.28rem;
        color: red;
        line-height: 0.4rem;
    }
</style>