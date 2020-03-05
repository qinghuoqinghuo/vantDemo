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

Vue.use(VueVideoPlayer)
Vue.use(Vant)
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
