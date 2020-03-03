<template>
    <van-tabs
            title-active-color="red"
            v-model="activeTab">
        <van-tab title="精选" name="a"></van-tab>
        <van-tab title="爱看" name="b"></van-tab>
        <van-tab title="战疫" name="c"></van-tab>
        <van-tab title="电视剧" name="d"></van-tab>
        <van-tab title="电影" name="e"></van-tab>
        <van-tab title="综艺" name="f"></van-tab>
    </van-tabs>
</template>
<script>
    export default {
        props: ['activeTabTop'],
        data() {
            return {
                activeTab:this.activeTabTop
            }
        },
        methods: {
            // onClick(name, title) {
            //     let self = this;
            //     self.$emit('data', name);
            // }
        }
    }
</script>