<template>
    <div>
        <Tab :activeTabTop="activeTabTop"></Tab>
        <Search :search="search" :searchDefault="searchDefault" @data="searchWord"></Search>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <Carousel :imgData="imgData" v-if="!loading"></Carousel>
            <Noticebar :noticeBar="noticeBar" v-if="!loading"></Noticebar>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Skeleton :skeleton="skeleton" v-if="loading"></Skeleton>
            <Cell v-if="!loading" :title="title" :to="to"></Cell>
            <Grid v-if="!loading" :gridData="gridData" :columnNum="2" :gutter="4"></Grid>
            <!--<Cell v-if="!loading" :title="title2" :to="to2"></Cell>-->
            <!--<Grid v-if="!loading" :gridData="gridData2" :columnNum="2" :gutter="4"></Grid>-->
        </van-pull-refresh>
        <Pagination :page="page"></Pagination>
        <div style="height:80px;"></div>
        <Tabbar :activeTabBottom="activeTabBottom" :indexInfo="indexInfo"></Tabbar>
    </div>
</template>
<script>
    import Tab from '@/components/tab.vue'
    import Search from '@/components/search.vue'
    import Carousel from '@/components/carousel.vue'
    import Noticebar from '@/components/noticebar.vue'
    import Skeleton from '@/components/skeleton.vue'
    import Tabbar from '@/components/tabbar.vue'
    import Grid from '@/components/grid2.vue'
    import Cell from '@/components/cell.vue'
    import Pagination from '@/components/pagination.vue'
    import pic1 from '@/assets/img/1.jpg'
    import pic2 from '@/assets/img/2.jpg'
    import pic3 from '@/assets/img/3.jpg'
    import pic4 from '@/assets/img/4.jpg'
    import pic5 from '@/assets/img/5.jpg'
    import pic6 from '@/assets/img/6.jpg'
    import pic7 from '@/assets/img/7.jpg'
    import pic8 from '@/assets/img/8.jpg'
    import pic9 from '@/assets/img/9.jpg'
    import pic10 from '@/assets/img/10.jpg'
    import pic11 from '@/assets/img/11.jpg'
    import pic12 from '@/assets/img/12.jpg'
    import {getVideoList} from '@/api/user'

    export default {
        data() {
            return {
                title: '重磅热播',
                to: 'live',
                title2: '热门综艺',
                to2: 'live',
                loading: false,
                refreshing: false,
                search: '',
                searchDefault: '安家张萌',
                searchDefaultArray: ['安家张萌', '吴奇隆电视剧', '孙俪罗晋cp', '侧方停车位技巧', '完美关系'],
                activeTabTop: 'a',
                activeTabBottom: 'a',
                noticeBar: '38岁的孙俪主演的《安家》上线，用自信走出生活的泥潭。    多次获得“最有价值独立公关人”殊荣的公关业界高手卫哲，人脉强大手段百出，风采不凡情商高。而临危受命的公关新人江达琳上任总裁，天性耿直且嘴炮力Max，智商高实战强，是有潜力的行业清流。两人组成“公关合伙人”，与时间赛跑联手征战危机，揭开热点新闻背后。',
                gridData: [
                //     {
                //     src: pic10,
                //     title: '欢乐喜剧人•太逗了',
                //     subTitle: '二龙湖浩哥模拟郭德纲撩妹'
                // }
                ],
                page: {
                    currentPage: 1,
                    total: 500,
                    perPage: 10,
                    showSize: 3
                },
                indexInfo: 5,
                imgData: [{
                    title: '',
                    src: ''
                }, {
                    title: '',
                    src: ''
                }, {
                    title: '',
                    src: ''
                }],
                skeleton: 5,
            }
        },
        components: {
            Tab,
            Search,
            Carousel,
            Noticebar,
            Skeleton,
            Tabbar,
            Grid,
            Cell,
            Pagination
        },
        mounted() {
            this.renderVideoList()
        },
        methods: {
            searchWord(data){
                let self = this
                if(data.action=='search'){
                    self.search = data.value;
                    self.page.currentPage = 1;
                    self.renderVideoList()
                }
            },
            renderVideoList() {
                let self = this
                let params = {
                    kw: self.search,
                    per_page: self.page.perPage,
                    page: self.page.currentPage
                }
                getVideoList(params).then(data => {
                    self.page.total = data.data.total
                    self.gridData = data.data.data
                })
            },
            /**
             * 获取点击tab之后的值
             * */
            getTab(value) {
                let self = this
                self.activeTabTop = value
            },
            /**
             * 模拟下拉刷新数据
             * */
            onRefresh() {
                let self = this
                self.refreshing = true;
                self.loading = true;
                // 两秒之后，更改内容，模拟实时刷新
                setTimeout(function () {
                    self.refreshing = false;
                    self.loading = false;
                    // 刷新之后搜索框默认文字
                    self.searchDefault = self.getDiffText(self.searchDefaultArray[parseInt(Math.random() * (self.searchDefaultArray.length))]);
                    self.page.currentPage++
                    self.renderVideoList()
                }, 1000)
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
