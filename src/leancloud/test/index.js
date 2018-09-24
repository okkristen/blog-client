import AV from '$api/leancloud-data.js'
const $api = {
  save(data) {
    // 声明一个 Todo 类型
    var Todo = AV.Object.extend('Todo')
    // 新建一个 Todo 对象
    var todo = new Todo()
    todo.set('title', '工程师周会')
    todo.set('content', '每周工程师会议，周一下午2点')
    todo.save().then(function (todo) {
      // 成功保存之后，执行其他逻辑.
      console.log('New object created with objectId: ' + todo.id)
    }, function (error) {
      // 异常处理
      console.error('Failed to create new object, with error message: ' + error.message)
    })
  }
}
export default $api
