<template>
    <video-player class="vjs-custom-skin"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="false"
                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ended="onPlayerEnded($event)"
                  @loadeddata="onPlayerLoadeddata($event)"
                  @waiting="onPlayerWaiting($event)"
                  @playing="onPlayerPlaying($event)"
                  @timeupdate="onPlayerTimeupdate($event)"
                  @canplay="onPlayerCanplay($event)"
                  @canplaythrough="onPlayerCanplaythrough($event)"
                  @ready="playerReadied"
                  @statechanged="playerStateChanged($event)">
    </video-player>
</template>

<script>
    import videojs from 'video.js'
    import 'videojs-contrib-hls'
    export default {
        props: ['poster'],
        data() {
            return {
                // videojs options
                playerOptions: {
                    width:'100vw',
                    height: '30vh',
                    autoplay: true,
                    muted: false,
                    loop:true,
                    // preload:'auto',
                    // aspectRatio:'16:9',
                    fluid:true,//流体大小，自适应比例
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "application/x-mpegURL",
                        src: 'https://ivi.bupt.bt3.eyunzhu.com/hls/cctv6.m3u8',
                    }],
                    poster: this.poster,
                    notSupportedMessage:'此视频暂无法播放,请稍后再试',
                    // controlBar:{
                    //     timeDivider:true,
                    //     durationDisplay:true,
                    //     remainingTimeDisplay:true, // 是否显示剩余时间
                    //     fullscreenToggle:true,// 全屏按钮
                    // }

                }
            }
        },
        mounted() {
            // this.player.muted(false)
        },
        // computed: {
        //     player() {
        //         return this.$refs.videoPlayer.player
        //     }
        // },
        methods: {
            // listen event
            onPlayerPlay(player) {
                // console.log('player play!', player)
            },
            onPlayerPause(player) {
                // console.log('player pause!', player)
            },
            onPlayerEnded(player) {
                // console.log('player ended!', player)
            },
            onPlayerLoadeddata(player) {
                // console.log('player Loadeddata!', player)
            },
            onPlayerWaiting(player) {
                // console.log('player Waiting!', player)
            },
            onPlayerPlaying(player) {
                // console.log('player Playing!', player)
            },
            onPlayerTimeupdate(player) {
                // console.log('player Timeupdate!', player.currentTime())
            },
            onPlayerCanplay(player) {
                // console.log('player Canplay!', player)
            },
            onPlayerCanplaythrough(player) {
                // console.log('player Canplaythrough!', player)
            },
            // or listen state event
            playerStateChanged(playerCurrentState) {
                // console.log('player current update state', playerCurrentState)
            },
            // player is ready
            playerReadied(player) {
                const track = new videojs.AudioTrack({
                    id: 'my-spanish-audio-track',
                    kind: 'translation',
                    label: 'Spanish',
                    language: 'es'
                })
                player.audioTracks().addTrack(track)
                // Get the current player's AudioTrackList object.
                const audioTrackList = player.audioTracks()
                // Listen to the "change" event.
                audioTrackList.addEventListener('change', function () {
                    // Log the currently enabled AudioTrack label.
                    for (let i = 0; i < audioTrackList.length; i++) {
                        const track = audioTrackList[i]
                        if (track.enabled) {
                            videojs.log(track.label)
                            return
                        }
                    }
                })
            },
            // 切换直播源
            changeLive(src){
                const myPlayer = this.$refs.videoPlayer.player;
                myPlayer.reset();
                this.playerOptions.sources[0].src = src
            }
        }
    }
</script>
