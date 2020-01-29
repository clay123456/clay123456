<template>
<div>
    <mt-header fixed title="换购记录">
        <router-link to="" slot="left">
            <mt-button icon="back" @click="goBack()"></mt-button>
        </router-link>
    </mt-header>
    <div class='content'>
        <ul class='title'>
            <li>换购时间</li>
            <li>订单数量</li>
            <li>商品名称</li>
            <li>状态</li>
        </ul>
        <ul class='title data'>
            <li>4</li>
            <li>3</li>
            <li>2</li>
            <li>1</li>
        </ul>
        <ul class='no-data'>
            <li>暂无数据</li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name:'exchangeRecord',
    data(){
        return {

        }
    },
    methods:{
        goBack(){
            window.history.go(-1)
        }
    }
}
</script>
<style lang="css">
    .mint-header.is-fixed{
        font-size: 0.35rem;
        height: 0.8rem;
        font-weight: bold;
        z-index: 5;
    }
    .content{
        height: calc(100vh - 0.8rem);
        padding-top: 0.8rem;
        overflow: scroll;
        position: relative;
        background: white;
        z-index: 4;
    }
    .title{
        height: 0.6rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #bbb;
    }
    .title li{
        flex: 1;
        height: 100%;
        line-height: 0.6rem;
        font-size: 0.26rem;
        font-weight: 100;
    }
    .data{
        background: white;
        color: #666;
        height: 0.5rem;
    }
    .data li{
        height: 0.5rem;
        line-height: 0.5rem;
        width: 25%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .no-data{
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        font-size: 0.5rem;
        font-weight: bold;
    }
</style>    