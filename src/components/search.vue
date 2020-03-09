<template>
    <van-search v-model="s" :placeholder="d" @search="onSearch"
                @cancel="onCancel"/>
</template>
<script>
    export default {
        props:['search','searchDefault'],
        data() {
            return {
                s:this.search,
                d:this.searchDefault
            }
        },
        methods:{
            onSearch(){
                let data={
                    action:'search',
                    value:this.s
                }
                this.$emit('data',data)
            },
            onCancel(){
                // this.$emit(data,this.search)
            }
        }
    }
</script>