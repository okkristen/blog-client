import CommonApi from 'api/common.js'
const api = {
  findPage (pageConfig) {
    console.log('发送')
    return CommonApi.post('articles', pageConfig)
  }
}
export default api
