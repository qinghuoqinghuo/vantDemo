<template>
    <van-grid :column-num="columnNum" :gutter="gutter">
        <van-grid-item v-for="(item,index) in gridData" :key="index" :icon="showIcon(item.icon)" :text="showIcon(item.text)" @click="clickGrid(item)">
            <van-image v-if="item.src&&!item.icon" :src="item.src" />
            <p v-if="item.title" class="gridTitle">{{item.title}}</p>
            <p v-if="item.subTitle" class="gridSubTitle">{{item.subTitle}}</p>
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
                this.$router.push({path:'/live',query:{'title':item.title}})
            },
            showIcon(icon){
                if(icon){
                    return icon
                }
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