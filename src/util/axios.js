import axios from 'axios'
import { getToken } from '@/util/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_url, // api的base_url
  timeout: 30000 // 请求超时时间
})

// request拦截器
// let loadingInstance
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    const token = getToken()
    if (token === null || token === '') {
      // delete config.headers.Authorization
    } else {
      config.headers['Authorization'] = token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    let res
    if (response.data.errorCode === '200') {
      res = response.data.resultData
    } else {
      return Promise.reject(response.data)
    }
    return res
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
