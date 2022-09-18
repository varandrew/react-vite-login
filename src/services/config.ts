import { AxiosRequestConfig } from 'axios'

export const NoConsole = false

const baseURL =
  import.meta.env.MODE === 'development'
    ? `http://${window.location.host}/api`
    : import.meta.env.VITE_BASE_URL

const axiosConfig: AxiosRequestConfig = {
  baseURL: baseURL,
  // 请求后的数据处理
  // 超时设置
  timeout: 30000,
  // 跨域是否带Token
  withCredentials: true,
  responseType: 'json',
  // xsrf 设置
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  // 最多转发数，用于node.js
  maxRedirects: 5,
  // 最大响应数据大小
  maxContentLength: 2000,
  // 自定义错误状态码范围
  validateStatus() {
    // 使用async-await，处理reject情况较为繁琐，所以全部返回resolve，在业务代码中处理异常
    return true
    // return status >= 200 && status < 300
  }
}

export default axiosConfig
