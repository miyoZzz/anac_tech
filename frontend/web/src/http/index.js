// 具体封装
import axios from 'axios'
import router from '../router/index'
import store from '../store/index'
import { Toast } from 'vant'
import config_ from './config'
import QS from 'qs'

// // 提示弹出层
const tip = msg => {
  Toast({
    message: msg,
    duration: 1000,
    forbidClick: true
  })
}

// 跳转登录
const toLogin = () => {
  router.replace({
    path: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

// 请求失败时的处理
const errorHandle = (response) => {
  let status = response.status
  let res = response.data
  switch (status) {
    // 未登录状态
    case 405:
      toLogin()
      break;
    // 登录过期
    case 403:
      tip('登录过期，请重新登录')
      localStorage.removeItem('token')
      store.commit('loginSuccess', null)
      setTimeout(() =>{
        toLogin()
      },1000)
      break;
    case 404:
      tip('请求资源不存在')
      break;
    default:
      console.log(res.message)
  }
}

// 创建axios实例
const headers = {
  'Authorization': localStorage.getItem('token') || '',
  'Content-Type': 'application/json;charset=utf-8'
}
let instance = axios.create({
  timeout: config_.timeout,
  baseURL: config_.devHost,
  headers: headers
})
// axios.create({
//   baseURL: 'https://some-domain.com/api/',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
// });

instance.defaults.baseURL = config_.devHost
axios.defaults.baseURL = config_.devHost
// instance.defaults.headers.Authorization = localStorage.getItem('token') || '';
// console.log(instance)

// instance.defaults.headers.post['Content-Type'] = config_.content_type
// instance.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';
// instance.headers.
// 请求拦截
instance.interceptors.request.use(
  config => {
    const token = store.state.token
    token && (config.headers.Authorization = token)
    return config
  },
  error => Promise.error(error)
)
// 响应拦截
instance.interceptors.response.use(
  // res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  res => Promise.resolve(res),
  error => {
    const { response } = error
    if (response) {
      errorHandle(response)
      return Promise.reject(response)
    } else {
      // 处理断网
      if (!window.navigator.onLine) {
        store.commit('changeNetwork', false)
      } else {
        return Promise.reject(error)
      }
    }
  }
)

const DEFAULT_DATA = config_.DEFAULT_DATA
const Request = {
  get(url, data){
    let params = {...DEFAULT_DATA, ...data}
    return instance.get(`${url}?${QS.stringify(params)}`)
  },
  post(url, data) {
    return instance.post(url, JSON.stringify({...DEFAULT_DATA, ...data}))
  }
}
export default Request