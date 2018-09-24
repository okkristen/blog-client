/**
 * 根级别的mutaton
 */
import {
  SET_TYPE
} from '$mutations'

const mutations = {
  /**
   * 修改类型
   */
  [SET_TYPE] (state, type) {
    state.type = type
  }
}
export default mutations
