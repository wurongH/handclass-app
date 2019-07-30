import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'

import coupon from './coupon'
import history from './history'
//搜索地址历史记录
import addressSearchList from './addressSearchList'

//选择地址信息
import selectAddressInfo from './selectAddressInfo'
Vue.use(Vuex);
export default new Vuex.Store({
  // plugins: [createPersistedState({
  //   paths: ['history', 'addressSearchList'],
  //   storage: window.localStorage,
  //   getState(){
  //
  //   },
  //   setState(key, state, storage){
  //     // console.log('key');
  //     // console.log(state);
  //   }
  // })],
  modules: {
    coupon,
    history,
    addressSearchList,
    selectAddressInfo
  }
})
