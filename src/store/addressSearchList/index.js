const state = {
  list: []
};
export default{
  state,
  mutations:{
    SET_ADDRESS_SEARCH(state, opt) {
      state.list = opt;
    },
    REMOVE_ADDRESS_SEARCH(state, opt) {
      state.list = opt;
    },
  },
  actions:{
    setAddressSearch({ commit },opt) {
      commit('SET_ADDRESS_SEARCH',opt)
    },
    removeAddressSearch({ commit },opt) {
      commit('REMOVE_ADDRESS_SEARCH',opt)
    }
  },
}
