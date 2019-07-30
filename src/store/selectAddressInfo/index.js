const state = {
  data: []
};
export default{
  state,
  mutations: {
    SET_SELECT_ADDRESS_INFO(state, opt) {
      state.data = opt;
    },
    REMOVE_SELECT_ADDRESS_INFO(state, opt) {
      state.data = opt;
    },
  },
  actions:{
    setSelectAddressInfo({ commit },opt) {
      commit('SET_SELECT_ADDRESS_INFO',opt)
    },
    removeSelectAddressInfo({ commit },opt) {
      commit('REMOVE_SELECT_ADDRESS_INFO',opt)
    }
  },
}
