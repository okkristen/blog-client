import AV from '$api/leancloud-data.js'
var listData = [
  {
    author: {
      nickname: ''
    },
    commentCounts: 0,
    createDate: '2018.02.01 14:47',
    id: 10,
    summary: `public void setXxxList(List<Xxx> xxxList) {
      if (this.xxxList != null && this.xxxList != xxxList) {
          this.xxxList.clear();
         if (this.xxxList != null) { 
         this.xxxList.addAll(xxxList);
        }
      } else {
        this.xxxList = xxxList;
      }
}`,
    tags: [{ tagname: 'java' }],
    title: 'JPA 级联更新去孤子',
    viewCounts: 4,
    weight: 0
  }
]
const $api = {
  save (data) {
    console.log('listData', listData)
    var Article = AV.Object.extend('Article')
    // 新建一个 Article 对象
    var article = new Article()
    let saveData = listData[0]
    article.set('author', saveData.author)
    article.set('commentCounts', saveData.commentCounts)
    article.set('createDate', saveData.createDate)
    article.set('summary', saveData.summary)
    article.set('tags', saveData.tags)
    article.set('title', saveData.title)
    article.set('viewCounts', saveData.viewCounts)
    article.set('weight', saveData.weight)
    return article.save()
  },
  findOne (id) {
    let objectId = id || '5ba7641c67f356005e16be93'
    var query = new AV.Query('Article')
    return query.get(objectId)
  },
  findPage () {
    var ArticleQurey = new AV.Query('Article')
    // 等于equalTo
    // 不等于notEqualTo
    // 大于greaterThan
    // 大于等于greaterThanOrEqualTo
    // 小于lessThan
    // 小于等于lessThanOrEqualTo
    // limit限制返回结果数
    // skip跳过N条结果
    // descending/ascending(参数)
    // addAscending/addDescending 多条件查询
    return ArticleQurey.find()
  },
  update (data) {
    let objectId = data.id || '5ba7641c67f356005e16be93'
    // 第一个参数是 className，第二个参数是 objectId
    var article = AV.Object.createWithoutData('Article', objectId)
    // 修改属性
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key]
        if (element) {
          article.set(key, element)
        }
      }
    }
    // 保存到云端
    return article.save()
  },
  delete (id) {
    let objectId = id || '5ba773094773f7005e99cc41'
    var todo = AV.Object.createWithoutData('Article', objectId)
    return todo.destroy()
  }
}
export default $api
