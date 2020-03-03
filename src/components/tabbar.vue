<template>
    <van-tabbar
            v-model="activeTab"
            active-color="#07c160"
            inactive-color="#000"
    >
        <van-tabbar-item icon="home-o" :info="info" name="a" to="/">首页</van-tabbar-item>
        <van-tabbar-item icon="fire-o" name="b" to="/live">直播</van-tabbar-item>
        <van-tabbar-item icon="gem-o" name="c">vip会员</van-tabbar-item>
        <van-tabbar-item icon="gift-o" name="d">doki</van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="e" to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
</template>
<script>
    export default {
        props: ['activeTabBottom', 'indexInfo'],
        data() {
            return {
                activeTab:this.activeTabBottom,
                info:this.indexInfo
            }
        }
    }
</script>