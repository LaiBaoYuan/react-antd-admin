import axios from 'axios'
const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API, // api的base_url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 15000 // 请求超时时间
})

export default {

  get(url, params) {
      return Axios.get(url, { params: params })
  },

  post(url, data, config) {
      return Axios.post(url, data, config || {})
  },

  put(url, data, config) {
      return Axios.put(url, data, config || {})
  },

  delete(url, params) {
      return Axios.delete(url, { params: params })
  }
}
