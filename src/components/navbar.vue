<template>
    <van-nav-bar
            :title="title"
            left-text="返回"
            right-text=""
            left-arrow
            @click-left="onClickLeft"
    />
</template>
<script>
    export default {
        props:['title'],
        data() {
            return {}
        },
        methods: {
            onClickLeft() {
                this.$router.back(-1)
            },
            onClickRight() {

            }
        }
    }

</script>