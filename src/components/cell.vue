<template>
    <van-cell :title="title" icon="medal-o" is-link :to="to">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <van-icon
                slot="right-icon"
                name="arrow"
                style="line-height: inherit;"
        />
    </van-cell>
</template>
<script>
    export default {
        props:['title','to'],
        data() {
            return {

            }
        }
    }

</script>