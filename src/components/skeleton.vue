<template>
    <van-skeleton title avatar :row="skeleton"/>
</template>
<script>
    export default {
        props:['skeleton'],
        data() {
            return {}
        }
    }
</script>