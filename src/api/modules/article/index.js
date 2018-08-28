import CommonApi from 'api/common.js'
const api = {
  findPage (pageConfig) {
    return CommonApi.post('articles/findPage', pageConfig)
  }
}
export default api
