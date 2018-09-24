//  异步
/**
 * 根级别的action
 * @type {Object}
 */
// import ajax from '$ajax'
// import Vue from 'vue'
import {
} from '$actions'
import {
} from '$mutations'

// [IS_LOGIN]({ commit, state }) {
//   return new Promise((resolve, reject) => {
//     if (state.status.online) {
//       resolve()
//     } else {
//       ajax.get('/api/getUserinfo').then((res) => {
//         if (res.type === 'SUCCESS') {
//           commit(CHANGE_ONLINE_STATUS, true)
//           commit(SET_USERINFO, res.data)
//           resolve()
//         } else {
//           reject(new Error('尚未登录或登录失效'))
//         }
//       }, () => {
//         commit(CHANGE_ONLINE_STATUS, false)
//         reject(new Error('尚未登录或登录失效'))
//       })
//     }
//   })
// },
const actions = {
}
export default actions
