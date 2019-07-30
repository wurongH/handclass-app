const state = {
  count: 1,
  url: ''
};
export default{
  state,
  mutations:{
    SETCOUNT(state,num) {
      state.count = num;
    },
    SETURL(state,num) {
      state.url = num;
    },
  },
  actions:{
    setCount({ commit },opt) {
      commit('SETCOUNT',opt)
    },
    setUrl({ commit },opt) {
      commit('SETURL',opt)
    }
  },
  // getters:{
  //   getHistoryCount: state  => {
  //     return state.count;
  //   },
  // }
}
