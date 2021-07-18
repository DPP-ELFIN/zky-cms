import Vue from 'vue'
import Vuex from 'vuex'
import num from './num.js'

Vue.use(Vuex)


let store = new Vuex.Store({
  state: {
    num: 0,
    token:false   //判断登录状态
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
})

export default store
