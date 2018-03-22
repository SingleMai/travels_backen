import * as types from './mutation-types'

const mutations = {
  [types.SET_SHOW_BAR] (state, boolean) {
    state.showBar = boolean
  },
  [types.SET_MY_INFO] (state, obj) {
    state.myInfo = obj
  }
}

export default mutations
