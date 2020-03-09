<template>
    <div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="shopCarList" :ref="item.container" v-for="(item,index) in shopCarData" :key="index">
                <!--商店名称信息-->
                <van-sticky :container="item.container">
                    <div class="shop-row shop-info">
                        <div class="shop-check">
                            <van-checkbox v-model="item.checked" checked-color="#ED1C24"
                                          @click="checkAll(item)"></van-checkbox>
                        </div>
                        <div class="shop-name">{{item.shopname}}</div>
                        <div class="shop-title-right">
                            <van-icon name="info-o"></van-icon>
                            需要支付运费
                            <van-tag mark type="warning">优惠券</van-tag>
                        </div>
                    </div>
                </van-sticky>
                <!--商店旗下商品信息-->
                <van-checkbox-group v-model="item.result" :ref="item.checkboxGroup" @change="changeCheck(item)">
                    <div class="shop-row" v-for="(k,j) in item.shopdetails" :key="j">
                        <div class="shop-check">
                            <van-checkbox :name="k.checkedName"
                                          checked-color="#ED1C24"
                                          >
                            </van-checkbox>
                        </div>
                        <div class="shop-img">
                            <van-image :src="k.img"/>
                        </div>
                        <div class="shop-detail-info">
                            <div class="van-multi-ellipsis--l2">
                                <van-tag round type="danger">京东超市</van-tag>
                                {{k.title}}
                            </div>
                            <van-tag plain type="primary">{{k.tag}}</van-tag>
                            <div class="shop-row">
                                <div class="shop-price">
                                    <span>￥</span><span>{{k.price}}</span><span>.00</span>
                                </div>
                                <div class="shop-stepper">
                                    <van-stepper v-model="k.num" min="1" max="200" integer/>
                                </div>
                            </div>

                        </div>
                    </div>
                </van-checkbox-group>
            </div>
            <van-submit-bar
                    :price="allPrice"
                    style="position: fixed;bottom:50px;"
                    button-text="去结算"
            >
                <van-checkbox v-model="checkedAll" @click="clickAll">全选</van-checkbox>
            </van-submit-bar>
        </van-pull-refresh>
        <div style="height:50px;"></div>
        <Tabbar :activeTabBottom="activeTabBottom" :indexInfo="indexInfo"></Tabbar>
    </div>

</template>
<script>
    import Tabbar from '@/components/tabbar.vue'
    import mac from '@/assets/img/mac.jpg'
    import huawei from '@/assets/img/huawei.jpg'
    import huawei2 from '@/assets/img/huawei2.jpg'
    import huawei3 from '@/assets/img/huawei3.jpg'
    import huawei4 from '@/assets/img/huawei4.jpg'
    import shoes from '@/assets/img/shoes.jpg'
    import furniture from '@/assets/img/furniture.jpg'

    export default {
        data() {
            return {
                allPrice: 0,
                checkedAll: false,
                isLoading: false,
                activeTabBottom: 'd',
                indexInfo: 2,
                shopCarData: [{
                    container: 'container',
                    checkboxGroup: 'checkboxGroup',
                    checked: false,
                    result: [],
                    shopname: 'JD 京东自营',
                    shopdetails: [{
                        img: mac,
                        title: 'Apple 2019新品 MacBook Pro 16【带触控栏】九代六核i7 16G 512G 深空灰 Radeon Pro 5300M显卡 笔记本电脑 轻薄本 MVVJ2CH/A',
                        tag: '【热销】16英寸 九代i7 16+512灰',
                        price: 18999,
                        num: 1,
                        checkedName: 'a'
                    }]
                }, {
                    container: 'container2',
                    checkboxGroup: 'checkboxGroup2',
                    checked: false,
                    result: [],
                    shopname: '华为官方旗舰店',
                    shopdetails: [{
                        img: huawei,
                        title: '华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片屏内指纹 8GB+128GB极光色全网通版双4G手机',
                        tag: '【爆款】8GB+512GB',
                        price: 4488,
                        num: 1,
                        checkedName: 'a'
                    }, {
                        img: huawei2,
                        title: '新款Huawei/华为折叠手机mate XS 5G版大屏双屏全面屏双面屏官方旗舰店对折手机可折叠屏 Mate X折叠【深圳2天左右发货】',
                        tag: '【新品】8GB+512GB',
                        price: 39999,
                        num: 1,
                        checkedName: 'b'
                    }, {
                        img: huawei3,
                        title: '华为(HUAWEI)MateBook 13 第三方Linux版 全面屏轻薄性能笔记本电脑 (i7-8565U 8+512GB 2K 独显)银',
                        tag: '13英寸i7+8+512G【3月5日仅售￥5509】',
                        price: 5509,
                        num: 1,
                        checkedName: 'c'
                    }, {
                        img: huawei4,
                        title: '华为（ HUAWEI）无线耳机 真无线蓝牙耳机 双耳立体声 半入耳 通话降噪 FreeBuds3 陶瓷白',
                        tag: '【麒麟A1芯片|智慧降噪|无线快充】',
                        price: 1199,
                        num: 1,
                        checkedName: 'd'
                    }, {
                        img: shoes,
                        title: '阿迪达斯（ADIDAS） 男女通用 Yeezy 500 Soft Vision 运动鞋 紫色 UK12',
                        tag: '【新品】运动休闲鞋 低帮 通用',
                        price: 9700,
                        num: 1,
                        checkedName: 'e'
                    }, {
                        img: furniture,
                        title: '诗帝格（SHIDIGE）沙发 免洗科技布艺沙发 大户型U型贵妃组合实木框架现代简约客厅家具 标准版【进口松/海绵座包】绒布-备注颜色 三人位+脚踏2.1米',
                        tag: '标准版【进口松/海绵座包】绒布-备注颜色',
                        price: 1980,
                        num: 1,
                        checkedName: 'f'
                    }, {
                        img: huawei,
                        title: '华为 HUAWEI P30 Pro 超感光徕卡四摄10倍混合变焦麒麟980芯片屏内指纹 8GB+128GB极光色全网通版双4G手机',
                        tag: '【爆款】8GB+512GB',
                        price: 4488,
                        num: 1,
                        checkedName: 'g'
                    }, {
                        img: huawei2,
                        title: '新款Huawei/华为折叠手机mate XS 5G版大屏双屏全面屏双面屏官方旗舰店对折手机可折叠屏 Mate X折叠【深圳2天左右发货】',
                        tag: '【新品】8GB+512GB',
                        price: 39999,
                        num: 1,
                        checkedName: 'h'
                    }, {
                        img: huawei3,
                        title: '华为(HUAWEI)MateBook 13 第三方Linux版 全面屏轻薄性能笔记本电脑 (i7-8565U 8+512GB 2K 独显)银',
                        tag: '13英寸i7+8+512G【3月5日仅售￥5509】',
                        price: 5509,
                        num: 1,
                        checkedName: 'i'
                    }, {
                        img: huawei4,
                        title: '华为（ HUAWEI）无线耳机 真无线蓝牙耳机 双耳立体声 半入耳 通话降噪 FreeBuds3 陶瓷白',
                        tag: '【麒麟A1芯片|智慧降噪|无线快充】',
                        price: 1199,
                        num: 1,
                        checkedName: 'j'
                    }, {
                        img: shoes,
                        title: '阿迪达斯（ADIDAS） 男女通用 Yeezy 500 Soft Vision 运动鞋 紫色 UK12',
                        tag: '【新品】运动休闲鞋 低帮 通用',
                        price: 9700,
                        num: 1,
                        checkedName: 'k'
                    }, {
                        img: furniture,
                        title: '诗帝格（SHIDIGE）沙发 免洗科技布艺沙发 大户型U型贵妃组合实木框架现代简约客厅家具 标准版【进口松/海绵座包】绒布-备注颜色 三人位+脚踏2.1米',
                        tag: '标准版【进口松/海绵座包】绒布-备注颜色',
                        price: 1980,
                        num: 1,
                        checkedName: 'l'
                    }]
                }]
            }
        },
        components: {
            Tabbar
        },
        mounted() {
        },
        methods: {
            onRefresh() {
                setTimeout(() => {
                    this.isLoading = false;
                }, 1000);
            },
            /**
             * 点击单个商店的父复选框,去修改复选框组的值,使用click
             * */
            checkAll(item) {
                // 直接使用逻辑代码修改样式,取消了使用默认的样式方法
                if(item.checked==false) {
                    item.checked = true
                    item.result = item.shopdetails.map(k=>k.checkedName)
                }else {
                    item.checked = false
                    item.result = []
                }
            },
            /**
             * 监听单个商店复选框组改变,去更改父复选框全选/取消全选,使用change
             * */
            changeCheck(item) {
                // 根据复选框组的数量,判断父商店是否选中
                if(item.result.length===item.shopdetails.length){
                    item.checked = true

                }else {
                    item.checked = false
                }
                // 判断最下面的全选是否选中
                let selectAll = true
                this.shopCarData.forEach(item=>{
                    if(!item.checked){ //只要有一个父全选未选中,就是未选中
                        selectAll = false
                    }
                })
                // 如果selectAll为true,就是已经都选中了
                if(selectAll) {
                    this.checkedAll = true
                }else {
                    this.checkedAll = false
                }
            },
            /**
             * 监听最下面的全选按钮,使用click
             * */
            clickAll() {
                if(!this.checkedAll){
                    this.shopCarData.forEach(item=>{
                        item.checked = true
                        item.result = item.shopdetails.map(k=>k.checkedName)
                    })
                }else {
                    this.shopCarData.forEach(item=>{
                        item.checked = false
                        item.result = []
                    })
                }
            },
            /**
             * 更改数字为钱币格式
             * */
            toMoney(num) {

                num = num.toFixed(2);

                num = parseFloat(num);

                num = num.toLocaleString();

                return num;//返回的是字符串23,245.12保留2位小数

            }
        },
        watch: {
            shopCarData: {
                handler: function (a, b) {
                    // this.shopCarData = a;
                    let priceCount = 0;
                    a.forEach(item => {
                        if (item.result.length != 0) {
                            item.result.forEach(j => {
                                item.shopdetails.forEach(k => {
                                    if (j == k.checkedName) {
                                        priceCount += parseInt(k.price * k.num)
                                    }
                                })
                            })
                        }
                    })
                    this.allPrice = priceCount * 100
                },
                deep: true
            }
        }
    }

</script>
<style>
    .shopCarList {

    }

    .shop-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .shop-info {
        background: #fff;
    }

    .shop-check {
        display: flex;
        width: 10vw;
        justify-content: center;
        align-items: center;
    }

    .shop-name {
        display: flex;
        width: 40vw;
        justify-content: flex-start;
        align-items: center;
    }

    .shop-img {
        width: 30vw;
    }

    .shop-title-right {
        display: flex;
        width: 50vw;
        justify-content: flex-end;
        align-items: center;
    }

    .shop-price {
        width: 30vw;
        color: #ee0a24;
        font-family: "PingFang SC", "Helvetica Neue", "Hiragino Sans GB", "Segoe UI", "Microsoft YaHei", "微软雅黑", sans-serif;
    }

    .shop-stepper {
        width: 30vw;
    }

    .shop-detail-info {
        width: 60vw;
    }
</style>