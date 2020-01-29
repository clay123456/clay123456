<template>
<div>
    <mt-header fixed title="风云榜">
        <router-link to="" slot="left">
            <mt-button icon="back" @click="goBack()"></mt-button>
        </router-link>
    </mt-header>
    <div class='content'>
        <ul class='title'>
            <li>时间</li>
            <li>期号</li>
            <li>开奖号码</li>
            <li>平台</li>
        </ul>
        <ul class='title data'>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
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
        height: 100%;
        line-height: 0.6rem;
        font-size: 0.26rem;
        font-weight: 100;
    }
    .title li:first-child{
        flex: 1;
    }
    .title li:nth-child(2){
        flex: 1;
    }
    .title li:nth-child(3){
        flex: 0.7;
    }
    .title li:nth-child(4){
        flex: 0.6;
    }
    .data{
        background: white;
        color: #666;
        height: 0.5rem;
        overflow: scroll;
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