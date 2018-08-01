/**
 * 通用请求操作API
 */
import ajax from '$ajax'
// import config from '$config'
const prefix = '/'
const CommonApi = {
  // save (url, data) {
  //   return ajax.post(prefix + url + '/save', data)
  // },
  // delete (url, data) {
  //   if (typeof data === 'string') {
  //     data = [data]
  //   }
  //   return ajax.post(prefix + url + '/delete', data)
  // },
  // update (url, data) {
  //   return ajax.post(prefix + url + '/update', data)
  // },
  // findAll (url, data) {
  //   // return $.getJSON(prefix + url + '/findAll', data)
  //   if (!data) {
  //     data = {}
  //   }
  //   return ajax.post(prefix + url + '/findAll', data)
  // },
  // findPage (url, pageConfig) {
  //   // return $.getJSON(prefix + url + '/findPage', pageConfig)
  //   return ajax.post(prefix + url + '/findPage', pageConfig)
  // },
  // findOne (url, data) {
  //   // return $.getJSON(prefix + url + '/findOne', data)
  //   if (!data) {
  //     data = {}
  //   }
  //   return ajax.get(prefix + url + '/findOne', data)
  // },
  // // 自定义GET请求，URL除了前缀需要完全自定义
  get (url, data) {
    return ajax.get(prefix + url, data)
  },
  // 自定义POST请求，URL除了前缀需要完全自定义
  post (url, data) {
    return ajax.post(prefix + url, data)
  }
  // postForm (url, data) {
  //   return ajax.post(prefix + url, data)
  // },
  // /**
  //  * 获取通用参数
  //  * [{type: '', param: {}}]
  //  */
  // getParams (params) {
  //   return ajax.post(prefix + 'getParams', params instanceof String
  //     ? [{type: params}]
  //     : params instanceof Object ? [params] : params)
  // },
  // exportExcel (url, pageConfig) {
  //   if (pageConfig != null) {
  //     let downUrl = config.baseURL + prefix + url + '/exportExcel?' + pageConfig
  //     return CommonUtils.download(downUrl)
  //   }
  // },
  // exportExcelReport (url, pageConfig) {
  //   if (pageConfig != null) {
  //     let downUrl = config.baseURL + prefix + url + '/exportExcelReport?' + pageConfig
  //     return CommonUtils.download(downUrl)
  //   }
  // }
}
export default CommonApi
