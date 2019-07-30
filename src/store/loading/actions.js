import * as types from './mutation-types'
export default {
  show({ commit }) {
    commit(types.SHOW);
  },
  hide({ commit }) {
    setTimeout(() => {
      commit(types.HIDE2)
    },1000)
    commit(types.HIDE)
  }
};
