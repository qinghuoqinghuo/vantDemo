<template>
    <div>
        <van-pull-refresh v-model="refresh" @refresh="onRefresh">
            <van-row>
                <van-col span="3">
                    <van-image
                            round
                            width="2.6rem"
                            height="2.6rem"
                            :src="photo"
                    />
                </van-col>
                <van-col span="21">
                    <van-cell title="青火+" center style="height:2.6rem;">
                        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
                        <van-icon
                                slot="right-icon"
                                name="search"
                                style="line-height: inherit;"
                        />
                    </van-cell>
                </van-col>
            </van-row>
            <Grid :gridData="gridData" :columnNum="4" :gutter="10"></Grid>
            <!-- 优惠券单元格 -->
            <van-coupon-cell
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    @click="showList = true"
            />
            <Cell :title="title2"></Cell>
            <Grid :gridData="gridData2" :columnNum="4" :gutter="10"></Grid>
            <Cell :title="title3"></Cell>
            <Grid :gridData="gridData3" :columnNum="4" :gutter="10"></Grid>
            <Cell :title="title4"></Cell>
            <Grid :gridData="gridData4" :columnNum="4" :gutter="10"></Grid>

            <!-- 优惠券列表 -->
            <van-popup
                    v-if="showList"
                    round
                    position="bottom"
                    style="height: 90%; padding-top: 4px;"
            >
                <van-coupon-list
                        :coupons="coupons"
                        :chosen-coupon="chosenCoupon"
                        :disabled-coupons="disabledCoupons"
                        @change="onChange"
                        @exchange="onExchange"
                />
            </van-popup>
        </van-pull-refresh>
        <Tabbar :activeTabBottom="activeTabBottom" :indexInfo="indexInfo"></Tabbar>
    </div>

</template>
<script>

    import Grid from '@/components/grid.vue'
    import Tabbar from '@/components/tabbar.vue'
    import Cell from '@/components/cell.vue'
    import photo from '@/assets/img/user.png'

    const coupon = {
        available: 1,
        condition: '无使用门槛\n最多优惠12元',
        reason: '',
        value: 150,
        name: '优惠券名称',
        startAt: 1489104000,
        endAt: 1514592000,
        valueDesc: '1.5',
        unitDesc: '元'
    };
    export default {
        name: 'live',
        data() {
            return {
                refresh: false,
                showList: false,
                photo: photo,
                title2: '视频功能',
                title3: '免流量,看视频',
                title4: '限时推广',
                activeTabBottom: 'e',
                indexInfo: 5,
                chosenCoupon: -1,
                coupons: [coupon],
                disabledCoupons: [coupon],
                gridData: [{
                    title: 'VIP会员',
                    subTitle: '2020-07-29'
                }, {
                    title: '我的钻石',
                    subTitle: '立即充值'
                }, {
                    title: 'VIP待领取',
                    subTitle: '@你 领28天'
                }, {
                    title: '我的积分',
                    subTitle: '免费兑换好礼'
                }],
                gridData2: [{
                    icon: 'hot-o',
                    text: '关注'
                }, {
                    icon: 'video-o',
                    text: '电视助手'
                }, {
                    icon: 'shop-collect-o',
                    text: '明星装扮'
                }, {
                    icon: 'smile-comment-o',
                    text: 'Siri捷径'
                }],
                gridData3: [{
                    icon: 'gift-o',
                    text: '腾讯网卡'
                }, {
                    icon: 'gem-o',
                    text: '急速5G'
                }, {
                    icon: 'flower-o',
                    text: '移动花卡'
                }, {
                    icon: 'star-o',
                    text: '电信畅想卡'
                }, {
                    icon: 'bar-chart-o',
                    text: '免费WIFI'
                }, {
                    icon: 'logistics',
                    text: '移动免流'
                }],
                gridData4: [{
                    icon: 'envelop-o',
                    text: '领28天VIP'
                }, {
                    icon: 'tv-o',
                    text: '免费看电视'
                }, {
                    icon: 'balance-o',
                    text: '招行送会员'
                }, {
                    icon: 'certificate',
                    text: '平安送会员'
                }, {
                    icon: 'scan',
                    text: '公众号领VIP'
                }, {
                    icon: 'logistics',
                    text: '积分商城'
                }, {
                    icon: 'description',
                    text: '积分公益捐'
                }, {
                    icon: 'debit-pay',
                    text: '我的电影票'
                }, {
                    icon: 'balance-pay',
                    text: '小鹅花钱'
                }, {
                    icon: 'cashier-o',
                    text: '腾讯会议'
                },]
            }
        },
        components: {
            Tabbar,
            Grid,
            Cell
        },
        methods: {
            onChange(index) {
                this.showList = false;
                this.chosenCoupon = index;
            },
            onExchange(code) {
                this.coupons.push(coupon);
            },
            onRefresh(){
                let self = this
                self.refresh = true
                setTimeout(function(){
                    self.refresh = false
                },2000)
            }
        }
    }
</script>