<template>
    <div id="video"></div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted(){
            let videoObject = {
                // width: 1015, // 宽度，也可以支持百分比(不过父元素宽度要有)
                // height: 574, // 高度，也可以支持百分比
                container: "#video", //“#”代表容器的ID，“.”或“”代表容器的class
                variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
                autoplay: true, //自动播放
                live: true,
                video: 'https://ivi.bupt.bt3.eyunzhu.com/hls/cctv6.m3u8' //视频地址(必填)
            }
            new ckplayer(videoObject);
        }
    }
</script>
<style>
    #video {
        width:100vw;
        height:20vh;
    }
</style>