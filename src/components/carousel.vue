<template>
    <div>
        <van-tabs
                title-active-color="red"
                v-model="activeTabTop">
            <van-tab title="精选" name="a"></van-tab>
            <van-tab title="爱看" name="b"></van-tab>
            <van-tab title="战疫" name="c"></van-tab>
            <van-tab title="电视剧" name="d"></van-tab>
            <van-tab title="电影" name="e"></van-tab>
            <van-tab title="综艺" name="f"></van-tab>
        </van-tabs>
        <van-search v-model="search" :placeholder="searchDefault"/>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item,index) in imgData" :key="index">
                    <div class="navImg" :class="'navImg'+index"></div>
                </van-swipe-item>
            </van-swipe>
            <!--<swiper :options="swiperOptionSub">-->
                <!--<swiper-slide v-for="(item,index) in imgData" :key="index">-->
                    <!--<div class="navImg" :class="'navImg'+index"></div>-->
                <!--</swiper-slide>-->
                <!--<div class="swiper-pagination" slot="pagination"></div>-->
                <!--&lt;!&ndash;<div class="swiper-button-prev" slot="button-prev"></div>&ndash;&gt;-->
                <!--&lt;!&ndash;<div class="swiper-button-next" slot="button-next"></div>&ndash;&gt;-->
            <!--</swiper>-->
            <van-notice-bar :text="noticeBar" left-icon="volume-o"/>
            <van-skeleton title avatar :row="skeleton"/>
            <van-skeleton title avatar :row="skeleton"/>
            <van-skeleton title avatar :row="skeleton"/>
        </van-pull-refresh>
        <van-tabbar
                v-model="activeTabBottom"
                active-color="#07c160"
                inactive-color="#000"
        >
            <van-tabbar-item icon="home-o" :info="indexInfo" name="a">首页</van-tabbar-item>
            <van-tabbar-item icon="fire-o" name="b">小视频</van-tabbar-item>
            <van-tabbar-item icon="gem-o" name="c">vip会员</van-tabbar-item>
            <van-tabbar-item icon="gift-o" name="d">doki</van-tabbar-item>
            <van-tabbar-item icon="friends-o" name="e">个人中心</van-tabbar-item>
        </van-tabbar>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                refreshing: false,
                skeleton: 5,
                searchDefault: '安家张萌',
                searchDefaultArray: ['安家张萌', '吴奇隆电视剧', '孙俪罗晋cp', '侧方停车位技巧', '完美关系'],
                search: '',
                noticeBar: '38岁的孙俪主演的《安家》上线，用自信走出生活的泥潭。    多次获得“最有价值独立公关人”殊荣的公关业界高手卫哲，人脉强大手段百出，风采不凡情商高。而临危受命的公关新人江达琳上任总裁，天性耿直且嘴炮力Max，智商高实战强，是有潜力的行业清流。两人组成“公关合伙人”，与时间赛跑联手征战危机，揭开热点新闻背后。',
                activeTabTop: 'a',
                activeTabBottom: 'a',
                indexInfo: '',
                imgData: [{
                    title: '',
                    src: ''
                }, {
                    title: '',
                    src: ''
                }, {
                    title: '',
                    src: ''
                }]
            }
        },
        methods: {
            /**
             * 模拟下拉刷新数据
             * */
            onRefresh() {
                let self = this
                self.refreshing = true;
                // 两秒之后，更改内容，模拟实时刷新
                setTimeout(function () {
                    self.refreshing = false;
                    // 刷新之后搜索框默认文字
                    self.searchDefault = self.getDiffText(self.searchDefaultArray[parseInt(Math.random() * (self.searchDefaultArray.length))])
                    // 刷新之后提示消息
                    self.indexInfo = parseInt(Math.random() * 5) + 1;
                    // 刷新之后骨架图
                    self.skeleton = parseInt(Math.random() * 3) + 3;
                    // 刷新之后轮播图数组
                    let newImg = [];
                    for (let i = 0; i < parseInt(Math.random() * 3) + 2; i++) {
                        newImg.push({
                            title: '',
                            src: ''
                        })
                    }
                    self.imgData = newImg
                }, 2000)
            },
            /**
             * 每次从数组获取不同的值
             * */
            getDiffText(text) {
                let self = this
                if (text !== self.searchDefault) {
                    return text;
                }
                return self.getDiffText(self.searchDefaultArray[parseInt(Math.random() * (self.searchDefaultArray.length))])
            }
        }
    }
</script>

<style scoped>
    .my-swipe{
        height:30vh;
    }
    .navImg {
        width: 100%;
        height: 100%;
    }

    .navImg0 {
        background: url('../assets/img/1.png') center center no-repeat;
        background-size: cover;
    }

    .navImg1 {
        background: url('../assets/img/2.png') center center no-repeat;
        background-size: cover;
    }

    .navImg2 {
        background: url('../assets/img/3.png') center center no-repeat;
        background-size: cover;
    }

    .navImg3 {
        background: url('../assets/img/4.png') center center no-repeat;
        background-size: cover;
    }

    .navImg4 {
        background: url('../assets/img/5.png') center center no-repeat;
        background-size: cover;
    }
</style>