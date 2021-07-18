export default {
  state: {
    num: 0,
    token:false
  },
  getters: {
    getNum(state) {
      return state.num
    }
  },
  mutations: {
    addNum(state, num) {
      state.num += num
    },
    changeNum(state, num) {
      state.num = num
    }
  },
  actions: {
    addNum({ commit }, num) {
     commit('addNum',num)
    },
    changeNum({ commit }, num) {
      commit('changeNum',num)
    }
  }
}
