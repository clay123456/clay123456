<template>
<div>
    <div class='user_center'>
        <p>尊敬的 </p>
        <p>余额 </p>
        <p>积分 </p>
        <p>信用分 </p>
        <div class='recharge'>
            <router-link to="/recharge"><div class='recharge-left'><span>充值</span></div></router-link>
            <router-link to="/returnGoods"><div class='recharge-right'><span>提现</span></div></router-link>
        </div>
    </div>
    <ul class='list'>
        <li v-for="(item,i) in userList" :key="i">
            <router-link :to="item.link">
                <div>
                    <img :src="item.src" alt=""/>
                    <span>{{item.title}}</span>
                </div>
            </router-link>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    data(){
        return {
            userList:[
                {title:'换购记录',src:require('../assets/user/repurchase-record.png'),link:'/exchangeRecord'},
                {title:'修改密码',src:require('../assets/user/setting-password.png'),link:'/changePassword'},
                {title:'我的退货',src:require('../assets/user/user-return-goods.png'),link:'/myReturn'},
                {title:'风云榜',src:require('../assets/user/ranking-list.png'),link:'/billboard'},
                {title:'在线客服',src:require('../assets/user/online-service.jpg'),link:'/onlineService'},
                {title:'退出登录',src:require('../assets/user/logout.png'),link:''}
            ],
        }
    }
}
</script>
<style lang="css">
    .user_center{
        height: 2.8rem;
        background: url('../assets/user/user_bg.jpg') center center no-repeat;
        background-size: 100% 100%;
        padding: 0.5rem 0.3rem 0.3rem;
        color: white;
        font-weight: bold;
        font-size: 0.3rem;
        position: relative;
    }
    .user_center p{
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .recharge{
        width: 90%;
        height: 1.2rem;
        position: absolute;
        bottom: -0.6rem;
        left: 5%;
        background: white;
        border-radius: 10px;
    }
    .recharge-left,.recharge-right{
        width: 50%;
        height: 1.2rem;
        border: 1px solid #ddd;
        display: inline-block;
        border-radius: 10px 0 0 10px;
        box-sizing: border-box;
        text-align: center;
        color: black;
        line-height: 1.2rem;
    }
    .recharge-right{
        border-radius: 0 10px 10px 0;
    }
    .recharge span{
        padding-left: 0.4rem;
    }
    .recharge-left span{
        background: url('../assets/user/recharge.png') 0 center no-repeat;
        background-size: 32%;
    }
    .recharge-right span{
        background: url('../assets/user/return-goods.png') 0 center no-repeat;
        background-size: 32%;
    }
    .list{
        padding-top: 0.7rem;
        overflow: hidden;
    }
    .list li{
        border-bottom: 1px solid #ddd;
        height: 0.6rem;
        line-height: 0.7rem;
        padding: 0.1rem 0.15rem;
        overflow: hidden;
    }
    .list li a{
        width: 100%;
        height: 100%;
    }
    .list li a div{
        width: 100%;
        height: 100%;
    }
    .list li img{
        width: 0.4rem;
        height: auto;
        float: left;
        margin-top: 0.15rem;
    }
    .list li span{
        float: left;
        margin-left: 0.15rem;
        font-size: 0.3rem;
        color: #1b1b1b;
    }
</style>