<template>
    <div>
        <Navbar :title="title"></Navbar>
        <Live ref="videoPlayerParent" :poster="poster"></Live>
        <van-button type="primary" style="margin:15px 0 0 15px;" size="small" v-for="(item,index) in liveData"
                    :key="index" @click="changeLiveParent(item)">
            {{index}}
        </van-button>
        <div style="height:80px;"></div>
        <Tabbar :activeTabBottom="activeTabBottom" :indexInfo="indexInfo"></Tabbar>
    </div>

</template>
<script>
    import Live from '@/components/live.vue'
    import Tabbar from '@/components/tabbar.vue'
    import Navbar from '@/components/navbar.vue'
    import {getVideoDetail} from '@/api/user'

    export default {
        data() {
            return {
                title: 'CCTV-6电影',
                activeTabBottom: 'b',
                indexInfo: 5,
                liveData: {},
                poster: ''
            }
        },
        created() {
            if (this.$router.currentRoute.query.vid) {
                this.vid = this.$router.currentRoute.query.vid
            }
        },
        components: {
            Live,
            Tabbar,
            Navbar
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
                let params = {
                    vid: self.vid
                }
                getVideoDetail(params).then(data => {
                    self.title = data.data.name;
                    self.poster = data.data.pic;
                    self.liveData = data.data.playUrl
                })
            },
            /**
             * 切换直播源
             * */
            changeLiveParent(item) {
                // 通过父组件去调用子组件的changeLive方法,切换直播源
                this.$refs.videoPlayerParent.changeLive(item)
            }
        }
    }
</script>
<style>

</style>