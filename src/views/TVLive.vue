<template>
    <div>
        <Navbar :title="title"></Navbar>
        <Live ref="videoPlayerParent"></Live>
        <div v-for="(item,index) in liveData" :key="index">
            <van-divider>{{item.name}}</van-divider>
            <van-button type="primary" style = "margin:15px 0 0 15px;" size="small" v-for="(k,j) in item.data" :key="j" @click="changeLiveParent(k)">
                {{k.name}}
            </van-button>
        </div>
        <div style="height:80px;"></div>
        <Tabbar :activeTabBottom="activeTabBottom" :indexInfo="indexInfo"></Tabbar>
    </div>

</template>
<script>
    import Live from '@/components/live.vue'
    import Tabbar from '@/components/tabbar.vue'
    import Navbar from '@/components/navbar.vue'
    import {getLiveSource} from '@/api/user'

    export default {
        created() {
            if (this.$router.currentRoute.query.title) {
                this.title = this.$router.currentRoute.query.title
            }
        },
        components: {
            Live,
            Tabbar,
            Navbar
        },
        data() {
            return {
                title: 'CCTV-6电影',
                activeTabBottom: 'c',
                indexInfo: 5,
                liveData: []
            }
        },
        mounted() {
            this.renderLiveData();
        },
        // computed: {
        //     player() {
        //         return this.$refs.videoPlayer.player
        //     }
        // },
        methods: {
            renderLiveData() {
                let self = this
                getLiveSource().then(data => {
                    self.liveData = data.data
                })
            },
            /**
             * 切换直播源
             * */
            changeLiveParent(item) {
                this.title = item.name
                // 通过父组件去调用子组件的changeLive方法,切换直播源
                this.$refs.videoPlayerParent.changeLive(item.url)
            }
        }
    }
</script>
<style>

</style>