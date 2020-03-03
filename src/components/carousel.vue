<template>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item,index) in imgData" :key="index" @click="clickSwipe">
            <div class="navImg" :class="'navImg'+index"></div>
        </van-swipe-item>
    </van-swipe>
</template>

<script>

    export default {
        props: ['imgData'],
        data() {
            return {}
        },
        methods: {
            clickSwipe() {
                this.$router.push({path:'/live'})
            }
        }
    }
</script>

<style scoped>
    .my-swipe {
        height: 30vh;
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