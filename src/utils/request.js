import axios from 'axios'
import {Notify} from 'vant'
// import store from '@/store'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
})

// request interceptor
// service.interceptors.request.use(
//   config => {
//     debugger
//     // // do something before request is sent
//     //
//     // if (store.getters.token) {
//     //   // let each request carry token
//     //   // ['X-Token'] is a custom headers key
//     //   // please modify it according to the actual situation
//     //   config.headers['X-Token'] = getToken()
//     // }
//     // return config
//   },
//   error => {
//     debugger
//     // do something with request error
//     console.log(error) // for debug
//     return Promise.reject(error)
//   }
// )

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data
        return res
    },
    error => {
        console.log('err' + error)
        Notify({type: 'danger', message: '接口请求失败'});
        return Promise.reject(error)
    }
)

export default service
