// 具体封装
import axios from 'axios'
import router from '../router/index'
import store from '../store/index'
import { Toast } from 'vant'
import config_ from './config'
import QS from 'qs'

// 提示弹出层
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
  console.log(response)
  let status = response.status
  let res = response.data
  switch (status) {
    // 未登录状态
    case 405:
      toLogin()
      break
    // 登录过期
    case 403:
      tip('登录过期，请重新登录')
      localStorage.removeItem('token')
      store.commit('loginSuccess', null)
      setTimeout(() =>{
        toLogin()
      },1000)
      break
    case 404:
      tip('请求资源不存在')
      break
    default:
      console.log(res.message)
  }
}

// 创建axios实例
let instance = axios.create({
  timeout: config_.timeout
})

instance.defaults.baseURL = config_.devHost
instance.defaults.headers.post['Content-Type'] = config_.content_type
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

const DEFAULT_DATA = config_.default_data
const Request = {
  get(url, data, options){
    let params = {...DEFAULT_DATA, ...data}
    return instance.get(`${url}?${QS.stringify(params)}`, {options})
  },
  post(url, data, options) {
    instance.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';
    return instance.post(url, {...DEFAULT_DATA, ...data}, {options})
  }
}
export default Request