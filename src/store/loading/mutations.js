import * as types from './mutation-types'

export default {
  //显示loading
  [types.SHOW] (state) {
    state.isShowLoading = true;
    state.fadeIn = true;
    state.fadeOut = false;
  },
  //隐藏loading
  [types.HIDE] (state) {
    state.fadeIn = false;
    state.fadeOut = true;
  },
  //隐藏loading
  [types.HIDE2] (state) {
    state.isShowLoading = false;
  },
};
