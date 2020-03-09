import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
// require styles
import 'vant/lib/index.css';
import VueVideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css')

require('vue-video-player/src/custom-theme.css')

require('@/static/ckplayer/ckplayer/ckplayer.js')

import moment from 'moment'

Vue.prototype.$moment = moment
Vue.use(VueVideoPlayer)
Vue.use(Vant)
router.beforeEach((to, from, next) => {
    if (to.path.startsWith('/login')) {
        next()
    } else {
        // let user = window.localStorage.getItem('login');
        let user = store.state.loginSuccess
        if (!user) {
            next({
                path: '/login'
            })
        } else {
            next()
        }
    }

})


Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')