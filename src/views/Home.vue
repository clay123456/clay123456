<template>
<div class='home'>
    <mt-header class='home_header' title="惠购">
        <router-link to="/" slot="left">
            <mt-button icon="back"/>
        </router-link>
        <mt-button icon="more" slot="right"/>
    </mt-header>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for='(banner,i) in bannerList' :key='i'>
            <img :src='banner.src' v-lazy="banner.src" alt=''/>
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
    <ul class='list_box'>
        <li v-for="(item,i) in shoppingList" :key='i'>
            <div class='left_img'>
                <img :src="item.src" alt="">
            </div>
            <div class='right_text'>
                <p class='description'>{{item.description}}</p>
                <div class='discount_box'>
                    <div class='discount'>{{item.discount}}</div>
                    <div class='discount_right'>
                        <p><span>券后&nbsp;</span>￥{{item.afterRoll}}</p>
                        <p>原价&nbsp;￥{{item.originalPrice}}</p>
                    </div>
                </div>
                <div class='business'>
                    <div>{{item.business}}</div>
                    <a :href='item.href'>进店 ></a>
                </div>
            </div>
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
            ],
            shoppingList:[
                {id:'1',description:'美之扣 切菜神器多功能切丁土豆丝切丝器刨丝器家用土豆片切片厨房擦丝器 灰色',src:require('../assets/home/goodsOne.jpg'),discount:'3元',afterRoll:'66.80',originalPrice:'69.80',business:'京东旗舰店',href:'https://item.jd.com/100003662355.html'},
                {id:'2',description:'美之扣 厨房刷锅神器 洗锅刷不粘油洗碗刷 长柄清洁刷子 多功能洗盘刷去污擦',src:require('../assets/home/goodsTwo.jpg'),discount:'3元',afterRoll:'36.00',originalPrice:'39.00',business:'京东旗舰店',href:'https://item.jd.com/8725596.html'}
            ]
        }
    },
    methods:{
       
    }
}
</script>
<style lang="css" scoped>
    .home{
        margin: 0.8rem 0 1rem;
        overflow: scroll;
    }
    .home_header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        height: 0.8rem;
        font-size: 0.35rem;
        font-weight: bold;
    }
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
    img[lazy=loading] {
        width: 100%;
        height: 100%;
    }
    .list_box{
        overflow: hidden;
        padding: 0 0.1rem;
    }
    .list_box li{
        height: 2.5rem;
        margin-bottom: 0.2rem;
    }
    .list_box li .left_img{
        float: left;
        width: 2.7rem;
        height: 100%;
    }
    .list_box li .left_img img{
        width: 100%;
        height: 100%;
    }
    .list_box li .right_text{
        float: right;
        width: 4.45rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .list_box li .right_text .description{
        height: 0.87rem;
        line-height: 0.435rem;
        font-size: 0.3rem;
        overflow:hidden;
        text-overflow:ellipsis;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        -webkit-line-clamp:2;
    }
    .discount_box{
        height: 1rem;
    }
    .discount_box .discount{
        width: 0.4rem;
        height: 100%;
        font-size: 0.3rem;
        line-height: 0.5rem;
        text-align: center;
        float: left;
        background: #26a2ff;
        color: white;
        margin-right: 0.15rem;
    }
    .discount_right{
        width: 3.9rem;
        height: 100%;
        float: left;
        font-size: 0.28rem;
    }
    .discount_right p{
        line-height: 0.5rem;
    }
    .discount_right p span{
        color: red;
    }
    .business{
        height: 0.5rem;
        display: flex;
        justify-content: space-between;
        color: #555;
        font-size: 0.28rem;
    }
    .business a{
        text-decoration: none;
    }
</style>