import config from '$config'
// 存储服务
var AV = require('leancloud-storage')
AV.init({
  appId: config.appId,
  appKey: config.appKey
})
// var { Query, User } = AV
// console.log('Query, User', Query, User)
// 实时消息服务
// var { Realtime, TextMessage } = require('leancloud-realtime')
// console.log('Realtime, TextMessage', Realtime, TextMessage)
// var TestObject = AV.Object.extend('TestObject')
// var testObject = new TestObject()
// testObject.save({
//   words: 'Hello World!',
//   test: '测试'
// }).then(function (object) {
//   alert('LeanCloud Rocks!')
// })
export default AV
