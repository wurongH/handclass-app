const state = {
  IsDiscountFullGift: false,
  IsDiscountFullSubtract: false,
  IsDiscountInLimitedTime: false,
  OrderMoney: 0
};
export default{
  state,
  mutations:{
    SET_COUPON(state,opt) {
      state.IsDiscountFullGift = opt.IsDiscountFullGift;
      state.IsDiscountFullSubtract = opt.IsDiscountFullSubtract;
      state.IsDiscountInLimitedTime = opt.IsDiscountInLimitedTime;
      state.OrderMoney = opt.OrderMoney;
    },
  },
  actions:{
    setCoupon({ commit },opt) {
      commit('SET_COUPON',opt)
    }
  },
}
