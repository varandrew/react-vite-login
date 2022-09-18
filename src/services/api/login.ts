import { AxiosRequestConfig } from 'axios'
import request from 'services/request'

export const fetcher = (config: AxiosRequestConfig) =>
  request(config).then((res) => res.data)

export const loginPayload = {
  url: 'login.php?phase=1',
  method: 'post'
}

export const userLogin = async (payload: {
  username: string
  password: string
}) => {
  return fetcher(Object.assign({}, loginPayload, { data: payload }))
}

export const tfaPayload = {
  url: 'login.php?phase=2',
  method: 'post'
}

export const tfaAuth = async (payload: { tfa: string }) => {
  return fetcher(Object.assign({}, tfaPayload, { data: payload }))
}
