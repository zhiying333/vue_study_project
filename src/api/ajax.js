// 二次封装的axios

import axios from 'axios'
import qs from 'querystring'
import { Indicator, MessageBox } from 'mint-ui'
import router from '../router'

const instance = axios.create({
  // baseURL: 'http://localhost:4000', 跨域了
  baseURL: '/api', //让代理服务器发送请求
  timeout: 5000
})

//请求拦截器
instance.interceptors.request.use((config) => {
  //发送请求时，加载图标
  Indicator.open()

  const data = config.data
  if (data instanceof Object) {
    config.data = qs.stringify(data)
  }

  //请求头携带token
  const token = localStorage.getItem('token_key')
  if (config.headers.needToken) {
    if (token) {
      config.headers.authorization = token
    } else {
      throw '请先登录'
    }
  }
  
  return config
})

//响应拦截器
instance.interceptors.response.use((response) => {
  //响应后，关闭加载图标
  Indicator.close()
  return response.data
}, (error) => {
  //响应后，关闭加载图标
  Indicator.close()

  if (!error.response) {//请求未发出，错误
    MessageBox('提示', '请先登录')
    if (router.currentRoute.path !== '/login') {
      router.replace('/login')
    }
  } else {
    if (error.response.status === 401) {
      // MessageBox('提示', '请先登录/token过期，重新登录')
      if (router.currentRoute.path !== '/login') {
        router.replace('/login')
      }
    } else {
      MessageBox('请求出错', error.message)
    }
  }
  //统一处理异常
  return new Promise(() => {})
})

export default instance