/**
 * 区级河长考核信息 mock数据
 */
/* eslint-disable */
var Mock = require('mockjs')
import util from 'utils/utils'
// 模拟数据
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
Mock.mock('/articles/findPage', (options) => {
    console.log('option', options)
  return util.resultData(listData)
})
// Mock.mock('/areaExamine/findOne', (options) => {
//     let result = listData.filter(item => {
//         if (item.id.toString() === options.body['id'] + '') {
//             return item
//         }
//     })
//     if (result.length > 0) {
//         return result[0].state === 'B' ? { ...scoreData, ...result[0] } : result[0]
//     }
//     return null
// })
