/**
 * 区级河长考核信息 mock数据
 */
/* eslint-disable */
var Mock = require('mockjs')
import util from 'utils/utils'
// 模拟数据
var listData = [
    {
        id: 1,
        riverName: '唐周巷浜',
        username: '张三',
        unit: '区发改局',
        state: 'B' 
    },
    {
        id: 2,
        riverName: '五浜口',
        username: '赵四',
        unit: '区环保局',
        state: 'A'
    },
    {
        id: 3,
        riverName: '北兴唐河',
        username: '王五',
        unit: '区环保局',
        state: 'A'
    }
]
const scoreData = {
    id: null,
    riverName: null,
    username: null,
    unit: null,
    scoreList: [
        {
            depart: '区环保局',
            score: [
                {
                    title: '断面水质',
                    value: 20,
                    scoreOptions: [30, 25, 20, 15, 0],
                    hint: '达到Ⅲ类以上（含Ⅲ类）水体的，得30分；未达到Ⅲ类水体，但与上年度相比，主要污染物指数好转的得25分；无变化的得20分；变差控制在一倍以内的得15分，变差超过一倍的不得分。'
                },
                {
                    title: '企业排放',
                    value: 5,
                    scoreOptions: [5, 0],
                    hint: '加强沿河企业污染治理，100%完成排污口封堵及接管限排、点源治理等工作。发现一处工业污水乱排放口并在限期内未整改到位的全扣。'
                }
            ]
        },
        {
            depart: '区综合行政执法局区',
            score: [
                {
                    title: '河道保洁',
                    value: 9,
                    scoreOptions: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                    hint: '河道打捞物应按照环卫体系要求，做到河面无漂浮物；河岸无岸脚垃圾；堆放在河岸的水面清除物每天及时清运到位。发现河面有1平方米以下成堆漂浮物的，每处扣1分；发现河面有3平方米以上成堆漂浮物的，每处扣3分；发现动物尸体的，每处扣2分；发现河岸有岸脚垃圾每处扣1分。'
                },
                {
                    title: '河岸环境',
                    value: 10,
                    scoreOptions: [10, 8, 6, 4, 2, 0],
                    hint: '河道及周边无乱搭乱建、乱堆乱放、乱涂写乱张贴乱牵挂等现象，发现一处扣2分。沿河违章建筑全面拆除到位，发现一处未查处扣2分。沿河两岸10米内环境整洁，无垃圾堆放点及其它脏乱现象，发现一处扣2分。加强畜禽养殖场整治和取缔，主要河道两岸各200米、其它河道两岸各100米内应无养殖点/场，如有反复，全扣。'
                }
            ]
        },
        {
            depart: '区住建局',
            score: [
                {
                    title: '控源截污',
                    value: 10,
                    scoreOptions: [10, 8, 6, 4, 2, 1],
                    hint: '摸清河道两侧各类污染源情况，监督指导有关部门做好沿河两侧排水达标区建设。加强沿河排水行为的日常监管，防止污水流入河道。发现污水排放口未督促区级以上环保部门/区排水处在规定时间内按要求整改到位的，每次扣2分。未完成年度确定建设目标任务的按比例扣分。'
                }
            ]
        },
        {
            depart: '区河长办',
            score: [
                {
                    title: '一河一档、<br/>一河一策',
                    value: 8,
                    scoreOptions: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
                    hint: '区级河长制河道“一河一档”工作台帐资料齐全，摸清河道两侧各类污染源情况，研究制定河道水环境治理措施，形成“一河一策”。台帐资料不齐全的每缺一项扣2分。落实河长巡查制度，区级及以上每季度不少一次、街道级及以下每月不少于一次，并做好记录。少一次扣1分。'
                },
                {
                    title: '河长制公示牌',
                    value: 4,
                    scoreOptions: [5, 4, 3, 2, 1, 0],
                    hint: '无河长牌不得分；标牌内容必须标明：河道名称，河道基本情况，河道位置图，河长姓名，保洁员，监督电话，管理目标等，缺一项扣1分，电话无人接听或打不通扣2分。'
                },
                {
                    title: '协调处理',
                    value: 5,
                    scoreOptions: [5, 4, 3, 2, 1, 0],
                    hint: '考核标准：<br/>加强河道驳岸、栏杆、河岸绿化、防汛（调水）泵站以及生态治理装置等设施的管理保护，确保河道设施完好无损。（5分）<br/><br/>考核方法：<br/>每发现一处扣1分'
                }
            ]
        },
        {
            depart: '区监察局',
            score: [
                {
                    title: '效能督查',
                    value: 5,
                    scoreOptions: [5, 3, 1],
                    hint: '考核标准：<br/>协调解决实际困难及问题。对12345平台及有关部门反映的问题立即落实整改，在限期内整改完毕，并以图片加文字形式回复。（5分）<br/><br/>考核方法：<br/>未在限期内整改到位的按0.5分/个扣分，两个周期内未整改到位的扣1分，以此类推。同一问题连续出现两次或以上的扣1分。'
                },
                {
                    title: '效能问责',
                    value: 3,
                    scoreOptions: [5, 4, 3, 2, 1, 0],
                    hint: '考核标准：<br/>积极配合做好河道整治工作，至少配合实施1条生态修复治理河道；根据区河长办每年任务要求，完成亮点示范河道的创建，确立排查水质水环境问题河道并开展全年跟踪，跟踪整改情况每季度上报区河长办。（20分）<br/><br/>考核方法：<br/>积极配合河道整治工程施工建设，协调解决地方相应问题，完不成的全扣。未完成亮点、水质水环境问题河道任务的扣5分。'
                }
            ]
        },
        {
            depart: '附加分（非必填）',
            score: [
                {
                    title: '争先创优',
                    value: 5,
                    hint: '考核标准：<br/>每多创建一条生态修复科技治理河道并实现水质达标的，加5分。'
                },
                {
                    title: '水质创优',
                    value: 5,
                    scoreOptions: [5, 0],
                    hint: '考核标准：<br/>河道管理工作得到市级以上媒体宣传表扬或被市以上表彰的，加5分。'
                }
            ]
        }
    ]
}
Mock.mock('/areaExamine/findAll', (options) => {
    console.log('option', options)
    return util.resultData(scoreData)
})
Mock.mock('/areaExamine/findOne', (options) => {
  let result = listData.filter(item => {
    if (item.id.toString() === options.body['id'] + '') {
        return item
    }
  })
  if (result.length > 0) {
    return result[0].state === 'B' ? { ...scoreData, ...result[0] } : result[0]
  }
  return null
})
