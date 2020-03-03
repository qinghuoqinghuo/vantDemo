<template>
    <van-search v-model="search" :placeholder="searchDefault"/>
</template>
<script>
    export default {
        props:['search','searchDefault'],
        data() {
            return {}
        }
    }
</script>