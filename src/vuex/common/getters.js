/**
 * 根级别的getter
 */
import {
  GET_TYPE
} from '$getters'

const getters = {
  [GET_TYPE] (state) {
    return state.type
  }
}
export default getters
