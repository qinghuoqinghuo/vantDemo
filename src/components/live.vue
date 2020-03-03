<template>
    <video-player class="vjs-custom-skin"
                  ref="videoPlayer"
                  :options="playerOptions"
                  :playsinline="true"
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

    export default {
        data() {
            return {
                // videojs options
                playerOptions: {
                    height: '210',
                    autoplay: true,
                    muted: true,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        // mp4
                        // src: "http://vjs.zencdn.net/v/oceans.mp4",
                        src: "https://om.tc.qq.com/f00332h2e8d.mp4?vkey=9575E2B545D22959F3E1E2A8F6BF13E6C73235DA0FB31C67BE6BAA4D3BF8CF459E1F8A96A8966AF0BE61CD35F2A89294F14984B2DCE7D5E71607524E54E211F8DFB0385E93C11C1C8D944185475C1C6F65C0945CA5C74641EC0ADEC8E443F39CA2DA808B9A1802D5F319B6DC0E3790F00DA5E6C7E5D44FF15BDE2FC59B2B15E0&key=XPRGjQvZiEq3FZi6C5b4JaPJYNS3QyusxndQdDqvXQzmrEs4OV9GK8yFKhJNLh7nNkdR3BoNvO1UWu0L79XUi9M6ruHhHRBseEliwDI1SPIztOoX8Pxr9exXDkEvdwIspiFY2SUFATkbRDH1SjsEy0thkmHyRF0i3Gd5taQb4bmOT80Vssv0&ocid=1804811530&h2tm=2020-03-03-17:21:43"
                    }],
                    // poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
                    poster: "https://img.save0758.com/upload/vod/20200221-1/92c2283200da4e7743db8748b7507f61.png"

                }
            }
        },
        mounted() {
            this.player.muted(false)
        },
        computed: {
            player() {
                return this.$refs.videoPlayer.player
            }
        },
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
        }
    }
</script>
