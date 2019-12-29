<template>
<div>
    <div class='register'>
        <router-link to='/'><div class='close'></div></router-link>
        <mt-field label="用户名：" v-model="username" placeholder='请输入用户名'></mt-field>
        <mt-field label="手机号：" v-model="phone" placeholder='请输入手机号'></mt-field>
        <mt-field label="密码：" v-model="password" placeholder='请输入密码'></mt-field>
        <mt-field label="确认密码：" v-model="confirmPwd" placeholder='请确认密码'></mt-field>
        <mt-button type="danger">立即注册</mt-button>
        <div class='bottom'>
            <router-link to='/login'>立即登录</router-link>
            <a>在线客服</a>
        </div>
    </div>
</div>
</template>
<script>
    export default {
        name:'register',
        data(){
            return {
                username: '',
                phone: '',
                password: '',
                confirmPwd: '',
            }
        },
        methods:{
            
        }
    }
</script>
<style lang='css' scoped>
    .register{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 0.8rem;
        background: url('../assets/registerBg.jpg') center center no-repeat;
        background-size: 100% 100%;
        height: 100vh;
        position: relative;
        z-index: 4;
    }
    .close{
        position: absolute;
        right: 0.6rem;
        top: 0.6rem;
        width: 0.7rem;
        height: 0.7rem;
        background: url('../assets/user/close.png') center center no-repeat;
        background-size: 100% 100%;
    }
    .mint-cell.mint-field{
        margin: 0.15rem 0;
        border-radius: 5px;
    }
    .bottom{
        display: flex;
        justify-content: space-between;
        line-height: 1rem;
        font-size: 0.3rem;
    }
    .bottom a{
        text-decoration: none;
        color: #b90000;
    }
</style>