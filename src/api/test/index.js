import CommonApi from 'api/common.js'
// const url = 'base/account'
const api = {
  findOne (data) {
    console.log('发送')
    return CommonApi.post('areaExamine/findAll', data)
  }
}
export default api
