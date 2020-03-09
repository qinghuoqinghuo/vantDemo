<template>
    <van-pagination
            v-model="page.currentPage"
            :total-items="page.total"
            :items-per-page="page.perPage"
            :show-page-size="page.showSize"
            force-ellipses
    />
</template>
<script>
    export default {
        props:['page'],
        data() {
            return {

            }
        }
    }
</script>