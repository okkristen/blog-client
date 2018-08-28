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
        nickname: '史明辉'
    },
    commentCounts: 0,
    createDate: '2018.02.01 14:47',
    id: 10,
    summary: '本节将介绍如何在项目中使用 Element。',
    tags: [{ tagname: 'vue' }],
    title: 'Element相关',
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
