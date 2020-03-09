<template>
    <van-grid :column-num="columnNum" :gutter="gutter">
        <van-grid-item v-for="(item,index) in gridData" :key="index" @click="clickGrid(item)">
            <van-image v-if="item.pic" :src="item.pic" width="40vw" height="30vh"/>
            <p v-if="item.name" class="gridTitle">{{item.name}}</p>
            <p v-if="item.label" class="gridSubTitle">{{item.label}}{{item.type}}</p>
        </van-grid-item>
    </van-grid>
</template>
<script>
    export default {
        props: ['gridData','columnNum','gutter'],
        data() {
            return {}
        },
        methods:{
            clickGrid(item){
                this.$router.push({path:'/details',query:{'vid':item.vid}})
            }
        }
    }

</script>
<style>
    .gridTitle {
        font-size: 3vw;
        margin-top:1vw;
        margin-bottom: 0;
        font-weight:600;
        text-align: left;
        width:90%;
    }

    .gridSubTitle {
        width:90%;
        font-size: 2.5vw;
        text-align: left;
        margin-top:1vw;
        margin-bottom:0;
    }
</style>