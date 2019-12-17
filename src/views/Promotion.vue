<template>
<div>
    <mt-header fixed title="促销精选"></mt-header>
    <div class='promotion'>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">选项一</mt-tab-item>
            <mt-tab-item id="2">选项二</mt-tab-item>
            <mt-tab-item id="3">选项三</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul class='tab_box'>
                    <li v-for="(item,i) in all" :key='i'>
                        <img src="" alt=""/>
                        <p class='name'>{{item.name}}</p>
                        <p class='price'>￥{{item.price}}</p>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul class='tab_box'>
                    <li v-for="(item,i) in boutique" :key='i'>
                        <img src="" alt=""/>
                        <p class='name'>{{item.name}}</p>
                        <p class='price'>￥{{item.price}}</p>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
                <ul class='tab_box'>
                    <li v-for="(item,i) in specialOffer" :key='i'>
                        <img src="" alt=""/>
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
    data(){
        return {
            selected: '1',
            all:[
                {id:'1',name:'精品单杯茶碗',src:'',price:'98'},
                {id:'2',name:'景德镇功夫茶具',src:'',price:'160'},
                {id:'3',name:'透明口红',src:'',price:'196'},
                {id:'4',name:'香奈儿新款丝绒',src:'',price:'319'},
                {id:'5',name:'小青柑红 普洱茶',src:'',price:'398'},
                {id:'6',name:'武夷山 小种红茶',src:'',price:'650'},
                {id:'7',name:'武夷山金骏眉 桐木关红茶',src:'',price:'489'},
                {id:'8',name:'八马茶叶 浓香型赛珍珠铁观音茶叶',src:'',price:'800'},
                {id:'9',name:'进口96度伏特加500ml',src:'',price:'568'},
                {id:'10',name:'进口拉菲500 ML',src:'',price:'925'},
                {id:'11',name:'进口波尔多红酒750ml',src:'',price:'1988'},
                {id:'12',name:'进口2003年拉菲 750ml',src:'',price:'3248'}
            ],
            boutique:[
                {id:'1',name:'精品单杯茶碗',src:'',price:'98'},
                {id:'2',name:'景德镇功夫茶具',src:'',price:'160'},
                {id:'9',name:'进口96度伏特加500ml',src:'',price:'568'},
                {id:'10',name:'进口拉菲500 ML',src:'',price:'925'},
                {id:'11',name:'进口波尔多红酒750ml',src:'',price:'1988'},
                {id:'12',name:'进口2003年拉菲 750ml',src:'',price:'3248'}
            ],
            specialOffer:[
                {id:'3',name:'透明口红',src:'',price:'196'},
                {id:'4',name:'香奈儿新款丝绒',src:'',price:'319'},
                {id:'5',name:'小青柑红 普洱茶',src:'',price:'398'},
                {id:'6',name:'武夷山 小种红茶',src:'',price:'650'},
                {id:'7',name:'武夷山金骏眉 桐木关红茶',src:'',price:'489'},
                {id:'8',name:'八马茶叶 浓香型赛珍珠铁观音茶叶',src:'',price:'800'}
            ]
        }
    }
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
    .tab_box{
        overflow: scroll;
        padding: 0.1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .tab_box li{
        width: 49%;
        height: 3.6rem;
        border: 1px solid #ddd;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 0.1rem;
    }
    .tab_box li .name{
        text-align: center;
        font-size: 0.26rem;
        border-bottom: 1px dashed #ddd;
        line-height: 0.5rem;
    }
    .tab_box li .price{
        color: red;
        text-align: center;
        font-size: 0.4rem;
        font-weight: bold;
        line-height: 0.6rem;
    }
</style>