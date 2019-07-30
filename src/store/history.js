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

// const state = {
//   start: 0,
//   end: 0
// };
// export default{
//   state,
//   mutations:{
//     SETSTART(state,num) {
//       state.start = num;
//     },
//     SETEND(state,num) {
//       state.end = num;
//     },
//   },
//   actions:{
//     setStart({ commit },opt) {
//       commit('SETSTART',opt)
//     },
//     setEnd({ commit },opt) {
//       commit('SETEND',opt)
//     }
//   },
//   getters:{
//     getStart: state  => {
//       return state.start;
//     },
//     getEnd: state  => {
//       return state.end;
//     },
//   }
// }
