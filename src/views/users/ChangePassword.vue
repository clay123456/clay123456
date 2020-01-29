<template>
<div>
    <mt-header fixed title="修改密码">
        <router-link to="" slot="left">
            <mt-button icon="back" @click="goBack()"></mt-button>
        </router-link>
    </mt-header>
    <div class='content'>
        <mt-field label="旧密码：" type="password" v-model="oldPassword" placeholder='请输入旧密码'></mt-field>
        <mt-field label="新密码：" type="password" v-model="newPassword" placeholder='请输入新密码'></mt-field>
        <mt-field label="确认密码：" type="password" v-model="confirmPwd" placeholder='请确认新密码'></mt-field>
        <mt-button class='bottom' type='primary' size='large' @click="fixPassword()">确认</mt-button>
    </div>
</div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
    name:'changePassword',
    data(){
        return {
            oldPassword:'',
            newPassword:'',
            confirmPwd:'',
            message:'',
        }
    },
    methods:{
        goBack(){
            window.history.go(-1)
        },
        fixPassword(){
            if(!this.oldPassword){
                this.message = '旧密码不能为空'
                Toast({
                    message: this.message,
                    position: 'middle',
                });
                return
            }
            if(this.oldPassword.length<6||this.oldPassword.length>18){
                this.message = '旧密码长度应大于6位并小于18位'
                Toast({
                    message: this.message,
                    position: 'middle',
                });
                return
            }
            if(!this.newPassword){
                this.message = '新密码不能为空'
                Toast({
                    message: this.message,
                    position: 'middle',
                });
                return
            }
            if(this.newPassword.length<6||this.newPassword.length>18){
                this.message = '新密码长度应大于6位并小于18位'
                Toast({
                    message: this.message,
                    position: 'middle',
                });
                return
            }
            if(!this.confirmPwd){
                this.message = '确认密码不能为空'
                Toast({
                    message: this.message,
                    position: 'middle',
                });
                return
            }
            if(this.confirmPwd.length<6||this.confirmPwd.length>18){
                this.message = '确认密码长度应大于6位并小于18位'
                Toast({
                    message: this.message,
                    position: 'middle',
                });
                return
            }
            if(this.newPassword!==this.confirmPwd){
                this.message = '两次密码输入不一致'
                Toast({
                    message: this.message,
                    position: 'middle',
                });
                return
            }
            //验证完毕 发送成功的ajax请求
            Toast({
                message: '密码修改成功',
                iconClass: 'icon icon-success',
                position: 'middle',
            });
        }
    }
}
</script>
<style lang="css" scoped>
    .mint-header.is-fixed{
        font-size: 0.35rem;
        height: 0.8rem;
        font-weight: bold;
        z-index: 5;
    }
    .content{
        height: calc(100vh - 0.8rem);
        padding: 0.8rem 0.2rem 0;
        overflow: scroll;
        position: relative;
        background: white;
        z-index: 4;
    }
    .bottom{
        margin-top: 0.2rem;
    }
</style>    