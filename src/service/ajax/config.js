/**
 * axios自定义配置
 */
import config from '$config'
import router from './../../router'
import { FastJsonResolver } from 'utils/FastJsonResolver'
import { Message } from 'element-ui'
/**
 * 处理正常返回AjaxResult时的统一结果处理
 * @method handleRequest
 * @param  {[type]}      result 返回结果对象
 */
function handleResult (result, router) {
  if (result && result['type']) {
    switch (result['type']) {
      case 'SUCCESS':
        if (result['code']) {
          handleSuccessCode(result.code, router)
        }
        if (result['message']) {
          Message.success(result.message)
        }
        break
      case 'ERROR':
        if (result['code']) {
          handleErrorCode(result.code, router)
          Message.warning(result.message)
        }
        break
    }
  }
}
/**
 * 处理成功代码
 * @method handleSuccessCode
 * @param  {String}          code   [description]
 */
function handleSuccessCode (code, router) {
  switch (code) {
    case 'ACCOUNT_LOGOUT':
      router.push('/login')
      break
  }
}
/**
 * 处理错误代码
 * @method handleErrorCode
 * @param  {String}          code MessageCode
 * @return {[type]}               [description]
 */
function handleErrorCode (code, router) {
  switch (code) {
    case 'PAGE_NOT_FOUND':
      break
    case 'ACCOUNT_NO_LOGIN':
      router.push('/login')
      break
  }
}
export default {
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: config.baseURL,
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理
    data = data || {}
    return JSON.stringify(data)
    // return data
  }],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [function (data) {
    if (typeof data === 'object') {
      if (JSON.stringify(data).indexOf('$ref') > -1) {
        new FastJsonResolver(data).resolve()
      }
      handleResult(data, router)
    }
    console.log('测试机哦')
    return JSON.parse(data)
  }],
  // `headers` 是即将被发送的自定义请求头
  headers: {
    // 'Content-Type': 'application/json'
    // 'X-Authorization': ''
  },
  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  // params: {
  //   ID: 12345
  // },
  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer: function(params) {
  //   return Qs.stringify(params, {arrayFormat: 'brackets'})
  // },
  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  // data: {
  // },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 0,
  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  // adapter: function (config) {
  //   /* ... */
  // },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  // auth: {
  //   username: 'janedoe',
  //   password: 's00pers3cret'
  // },

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // 默认的

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // `onUploadProgress` 允许为上传处理进度事件
  // onUploadProgress: function (progressEvent) {
  // },

  // `onDownloadProgress` 允许为下载处理进度事件
  // onDownloadProgress: function (progressEvent) {
  // },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  // maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
  validateStatus: function (status) {
    return status >= 200 && status < 300 // 默认的
  }
}
