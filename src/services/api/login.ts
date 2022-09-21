import qs from 'qs'
import { AxiosRequestConfig } from 'axios'
import request from 'services/request'

const FormUrlencodedHeader = {
  'content-type': 'application/x-www-form-urlencoded'
}

export const fetcher = (config: AxiosRequestConfig) =>
  request(config).then((res) => res.data)

export const loginPayload = {
  url: 'login.php?phase=1',
  headers: FormUrlencodedHeader,
  method: 'post'
}

export const userLogin = async (payload: {
  username: string
  password: string
}) => {
  return fetcher(
    Object.assign({}, loginPayload, { data: qs.stringify(payload) })
  )
}

export const tfaPayload = {
  url: 'login.php?phase=2',
  method: 'post',
  headers: FormUrlencodedHeader
}

export const tfaAuth = async (payload: { tfa: string }) => {
  return fetcher(Object.assign({}, tfaPayload, { data: qs.stringify(payload) }))
}
