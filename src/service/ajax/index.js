/**
 * Ajax请求处理
 */
import axios from 'axios'
import config from './config.js'
// import CommonUtils from 'utils/CommonUtils'
const ajax = axios.create(config)

export default {
  get (url, param) {
    return new Promise((resolve, reject) => {
      ajax.get(url, {
        params: param
      }).then((result) => {
        // if (typeof result.data === 'string') {
        //   result.data = CommonUtils.parse(result.data)
        // }
        resolve(result.data)
      }, (err) => {
        console.error(err)
        reject(err)
      })
    })
  },
  post (url, param) {
    return new Promise((resolve, reject) => {
      ajax.post(url, param).then((result) => {
        // if (typeof result.data === 'string') {
        //   result.data = CommonUtils.parse(result.data)
        // }
        resolve(result.data)
      }, (err) => {
        console.error(err)
        reject(err)
      })
    })
  }
}
