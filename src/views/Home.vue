<template>
<div>
    <mt-header title="logo部分">
        <router-link to="/" slot="left">
            <mt-button icon="back"/>
        </router-link>
        <mt-button icon="more" slot="right"/>
    </mt-header>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for='(banner,i) in bannerList' :key='i'>
            <img :src='banner.src' alt=''/>
        </mt-swipe-item>
    </mt-swipe>
    <ul class='link_list'>
        <li v-for='(item,i) in linkList' :key='i'>
            <a :href="item.link">
                <div class='img_box'><img :src='item.src' alt=""></div>
                <div>{{item.name}}</div>
            </a>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    name:'Home',
    components:{

    },
    data(){
        return {
            bannerList:[
                {id:'1',src:require('../assets/home/yongjin.png')},
                {id:'2',src:require('../assets/home/jifenhuangou.png')},
                {id:'3',src:require('../assets/home/dacuciao.png')},
                {id:'4',src:require('../assets/home/yongjindan.png')},
                {id:'4',src:require('../assets/home/kuanghuangou.png')}
            ],
            linkList:[
                {id:'1',src:require('../assets/home/pinduoduo.png'),name:'拼多多',link:'https://m.pinduoduo.com/home/'},
                {id:'2',src:require('../assets/home/jingdong.png'),name:'京东',link:'https://m.jd.com/'},
                {id:'3',src:require('../assets/home/tianmao.png'),name:'天猫',link:'https://www.tmall.com/?from=m'},
                {id:'4',src:require('../assets/home/juhuasuan.png'),name:'聚划算',link:'https://m.juhuasuan.com/'},
                {id:'5',src:require('../assets/home/tqg.png'),name:'淘抢购',link:'https://h5.m.taobao.com/'},
                {id:'6',src:require('../assets/home/miandan.png'),name:'免单中心',link:'https://h5.m.taobao.com/'},
                {id:'7',src:require('../assets/home/rexiao.png'),name:'热销榜',link:'https://m.pinduoduo.com/home/'},
                {id:'8',src:require('../assets/home/tianmaokhj.png'),name:'天猫狂欢节',link:'https://www.tmall.com/?from=m'},
                {id:'9',src:require('../assets/home/pinduoduo.png'),name:'9.9秒杀',link:'http://jkj.juanpi.com/'},
                {id:'10',src:require('../assets/home/kefu.png'),name:'联系客服',link:''}
            ]
        }
    },
    methods:{
       
    }
}
</script>
<style lang="css" scoped>
    .mint-swipe{
        height: 3.2rem;
    }
    .mint-swipe img{
        width: 100%;
        height: 100%;
    }
    .link_list{
        display: flex;
        margin: 0.1rem;
        flex-wrap: wrap;
    }
    .link_list li{
        width: 20%;
        height: auto;
        list-style: none;
        padding: 0.1rem 0;
    }
    .img_box{
        overflow: hidden;
        text-align: center;
    }
    .link_list li div{
        text-align: center;
    }
    .link_list li .img_box img{
        width: 50px;
        height: 50px;
    }
    .link_list li a{
        text-decoration: none;
        color: #222;
    }
</style>