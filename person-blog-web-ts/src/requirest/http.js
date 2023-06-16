/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 * by 16 at 2023-06-01
 */

// 引入axios
import axios from 'axios';
// 引入qs模块，对数据进行序列化
import QS from 'qs';
// 引入storage模块，操作token
import { session } from '@/utils/storage.js'
// 引入message模块，toast提示
import { ElMessage } from 'element-plus';

// 环境的切换
const { baseUrl } = require('../config/env.' + process.env.NODE_ENV);
const service = axios.create({
  baseURL: baseUrl, // url = base api url + request url
  withCredentials: false, // send cookies when cross-domain requests
  timeout: 1000 * 12 // 请求超时
})


// 请求拦截器
service.interceptors.request.use(
  config => {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    const token = session.getSession('Token')
    token && (config.headers.Authorization = token)
    if (config.method.toUpperCase() === 'POST') {
      config.headers['Content-Type'] = 'application/json;charset=utf-8'
    }
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    // console.log(response)
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 500:
          ElMessage.error('网络错误，请稍后再试！')
          break
        case 404:
          ElMessage.error('网络错误，请稍后再试！')
          break
        default:
          ElMessage.error(error.response.data.message)
      }
      return Promise.reject(error.response)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {string} url {请求的url地址}
 * @param {object} params {请求时携带的参数}
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * psot 方法，对应的post请求 
 * @param {string} url {请求的url地址}
 * @param {object} params {请求时携带的参数}
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    service.post(url,
      QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * get 方法，对应get请求，直接在地址后面拼字符串的形式
 * @param {string} url {请求的url地址}
 * @param {string} params {请求时携带的参数}
 */
export function getDynamicynamic(url, params) {
  return new Promise((resolve, reject) => {
    const comleteUrl = `${url}/${params}`
    service.get(comleteUrl, {})
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
/**
 * post 方法，导出文件
 * @param {string} url {请求的url地址}
 * @param {string} params {请求时携带的参数}
 */
export function getFileUseBlobByPost(url, params = {}) {
  return new Promise((resolve, reject) => {
    service({
      method: 'post',
      url,
      data: params,
      responseType: 'blob'
    })
      .then(res => {
        resolve(res)
      }).catch(err => {
        reject(err.data)
      })
  })
}