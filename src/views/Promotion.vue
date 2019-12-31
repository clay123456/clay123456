<template>
<div>
    <mt-header fixed title="促销精选"></mt-header>
    <div class='promotion'>
        <mt-navbar v-model="selected" class='tabs'>
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul class='tab_box'>
                    <li v-for="(item,i) in all" :key='i' @click="goToGoodsDetail(item)">
                        <p class='img'><img :src="item.src" alt=""/></p>
                        <p class='name'>{{item.name}}</p>
                        <p class='price'>￥{{item.price}}</p>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul class='tab_box'>
                    <li v-for="(item,i) in boutique" :key='i' @click="goToGoodsDetail(item)">
                        <p class='img'><img :src="item.src" alt=""/></p>
                        <p class='name'>{{item.name}}</p>
                        <p class='price'>￥{{item.price}}</p>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <ul class='tab_box'>
                    <li v-for="(item,i) in specialOffer" :key='i' @click="goToGoodsDetail(item)">
                        <p class='img'><img :src="item.src" alt=""/></p>
                        <p class='name'>{{item.name}}</p>
                        <p class='price'>￥{{item.price}}</p>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</div>
</template>
<script>
export default {
    name:'promotion',
    data(){
        return {
            selected: '1',
            all:[
                {id:'1',name:'精品单杯茶碗',src:require('../assets/promotion/teaCup.jpg'),price:'98',introduce:require('../assets/promotion/dbcw.jpg')},
                {id:'2',name:'景德镇功夫茶具',src:require('../assets/promotion/teaSet.jpg'),price:'160',introduce:require('../assets/promotion/gfcj.jpg')},
                {id:'3',name:'透明口红',src:require('../assets/promotion/lipstick.jpg'),price:'196',introduce:require('../assets/promotion/tmkh.jpg')},
                {id:'4',name:'香奈儿新款丝绒',src:require('../assets/promotion/chanel.jpg'),price:'319',introduce:require('../assets/promotion/xne.jpg')},
                {id:'5',name:'小青柑红 普洱茶',src:require('../assets/promotion/puerTea.jpg'),price:'398',introduce:require('../assets/promotion/xqj.jpg')},
                {id:'6',name:'武夷山 小种红茶',src:require('../assets/promotion/xaozhongRedTea.jpg'),price:'650',introduce:require('../assets/promotion/wysxzhc.jpg')},
                {id:'7',name:'武夷山金骏眉 桐木关红茶',src:require('../assets/promotion/tongmuTea.jpg'),price:'489',introduce:require('../assets/promotion/jjm.jpg')},
                {id:'8',name:'八马茶叶 浓香型赛珍珠铁观音茶叶',src:require('../assets/promotion/babaoTea.jpg'),price:'800',introduce:require('../assets/promotion/tgy.jpg')},
                {id:'9',name:'进口96度伏特加500ml',src:require('../assets/promotion/vodka.jpg'),price:'568',introduce:require('../assets/promotion/ftj.jpg')},
                {id:'10',name:'进口拉菲500 ML',src:require('../assets/promotion/lafete.jpg'),price:'925',introduce:require('../assets/promotion/smalllf.jpg')},
                {id:'11',name:'进口波尔多红酒750ml',src:require('../assets/promotion/boerduo.jpg'),price:'1988',introduce:require('../assets/promotion/bed.jpg')},
                {id:'12',name:'进口2003年拉菲 750ml',src:require('../assets/promotion/lateteRedWin.jpg'),price:'3248',introduce:require('../assets/promotion/biglf.jpg')}
            ],
            boutique:[
                {id:'1',name:'精品单杯茶碗',src:require('../assets/promotion/teaCup.jpg'),price:'98',introduce:require('../assets/promotion/dbcw.jpg')},
                {id:'2',name:'景德镇功夫茶具',src:require('../assets/promotion/teaSet.jpg'),price:'160',introduce:require('../assets/promotion/gfcj.jpg')},
                {id:'9',name:'进口96度伏特加500ml',src:require('../assets/promotion/vodka.jpg'),price:'568',introduce:require('../assets/promotion/ftj.jpg')},
                {id:'10',name:'进口拉菲500 ML',src:require('../assets/promotion/lafete.jpg'),price:'925',introduce:require('../assets/promotion/smalllf.jpg')},
                {id:'11',name:'进口波尔多红酒750ml',src:require('../assets/promotion/boerduo.jpg'),price:'1988',introduce:require('../assets/promotion/bed.jpg')},
                {id:'12',name:'进口2003年拉菲 750ml',src:require('../assets/promotion/lateteRedWin.jpg'),price:'3248',introduce:require('../assets/promotion/biglf.jpg')}
            ],
            specialOffer:[
                {id:'3',name:'透明口红',src:require('../assets/promotion/lipstick.jpg'),price:'196',introduce:require('../assets/promotion/tmkh.jpg')},
                {id:'4',name:'香奈儿新款丝绒',src:require('../assets/promotion/chanel.jpg'),price:'319',introduce:require('../assets/promotion/xne.jpg')},
                {id:'5',name:'小青柑红 普洱茶',src:require('../assets/promotion/puerTea.jpg'),price:'398',introduce:require('../assets/promotion/xqj.jpg')},
                {id:'6',name:'武夷山 小种红茶',src:require('../assets/promotion/xaozhongRedTea.jpg'),price:'650',introduce:require('../assets/promotion/wysxzhc.jpg')},
                {id:'7',name:'武夷山金骏眉 桐木关红茶',src:require('../assets/promotion/tongmuTea.jpg'),price:'489',introduce:require('../assets/promotion/jjm.jpg')},
                {id:'8',name:'八马茶叶 浓香型赛珍珠铁观音茶叶',src:require('../assets/promotion/babaoTea.jpg'),price:'800',introduce:require('../assets/promotion/tgy.jpg')}
            ]
        }
    },
    methods:{
        goToGoodsDetail(goods){
            this.$router.push({
                name:'goodsDetail',
                params:{goods}
            })
        }
    },
}
</script>
<style lang="css" scoped>
    .mint-header{
        font-size: 0.35rem;
        height: 0.8rem;
        font-weight: bold;
    }
    .promotion{
        margin: 0.8rem 0 1rem;
    }
    .tabs{
        position: sticky;
        top: 0.8rem;
        left: 0;
        width:100%;
        z-index: 3;
    }
    .tab_box{
        overflow: scroll;
        padding: 0.1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .tab_box li{
        width: 49%;
        height: 3.8rem;
        border: 1px solid #ddd;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 0.1rem;
    }
    .tab_box li .name{
        text-align: center;
        font-size: 0.26rem;
        border-bottom: 1px dashed #ddd;
        line-height: 0.35rem;
    }
    .tab_box li .price{
        color: red;
        text-align: center;
        font-size: 0.4rem;
        font-weight: bold;
        line-height: 0.45rem;
    }
    .tab_box li .img{
        width: 100%;
        height: 3rem;
    }
    .tab_box li img{
        width: 100%;
        height: 100%;
    }
</style>