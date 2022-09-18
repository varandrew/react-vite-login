import axios, { AxiosRequestConfig, Canceler } from 'axios'
import configs from './config'
import { toast } from 'react-toastify'
import { showHttpStatus } from 'utils'

// 取消重复请求
const pending: Array<{
  url: string
  cancel: Canceler
}> = []
const cancelToken = axios.CancelToken
const removePending = (config: AxiosRequestConfig) => {
  pending.forEach((p, i) => {
    if (p.url === `${config.url}&request_type=${config.method}`) {
      p.cancel()
      pending.splice(i, 1)
    }
  })
}

const service = axios.create(configs)

// 添加请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const payload = { ...config }
    const token = window.localStorage.getItem('token')
    removePending(config)
    // eslint-disable-next-line new-cap
    payload.cancelToken = new cancelToken((c) => {
      pending.push({
        url: `${config.url}&request_type=${config.method}`,
        cancel: c
      })
    })
    if (token) payload.headers!.Authorization = `Bearer ${token}`
    return payload
  },
  (e) => {
    // return Promise.reject(e)
    // 错误抛到业务代码
    const error = { ...e }
    error.data = Object.create(null)
    error.data.msg = '服务器异常，请联系管理员！'
    return Promise.resolve(error)
  }
)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  (response) => {
    const { status } = response
    removePending(response.config)
    if (status < 200 || status >= 300) {
      // 处理http错误，抛到业务代码
      const msg = showHttpStatus(status)
      toast.error(msg)
      if (typeof response.data === 'string') {
        response.data = { msg }
      } else {
        response.data.msg = msg
      }
    }
    return response
  },
  (e) => {
    // 错误抛到业务代码
    const error = { ...e }
    error.data = Object.create(null)
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    toast.error(error.data.msg)
    return Promise.resolve(error)
  }
)

export default service
