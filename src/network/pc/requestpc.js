import axios from "axios";
import qs from "qs";

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.withCredentials = true// 允许跨域设置，不然可能因为拿不到cookie而报错
// // 允许跨域
// axios.defaults.headers.post["Access-Control-Allow-Origin-Type"] = "*";

export function request(config) {
  //1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://localhost:8080',
  })
  // 2.axios的拦截器
/*请求拦截*/
axios.interceptors.request.use(
  config => {
    if (config.meth === 'post' && !(config.data instanceof FormData)) {
      config.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      config.data = qs.stringify(config.data, { arrayFormat: 'repeat' }) /*这里是，后端要求传数组的时候做的设置，以前出过错*/
    }
    return config
  }, error => {
    return Promise.reject(error)
  }
)
/* 响应拦截 */
axios.interceptors.response.use(
  res => {
   /*可在这里根据返回的状态码做一些拦截操作*/
    return res
  }, err => {
    return Promise.resolve(err)
  }
)
  //3.发送真正的网络请求
  return  instance(config)
}
