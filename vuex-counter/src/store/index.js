import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter
    }
  },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter += randomNumber
    },
    decreaseCounter(state, randomNumber) {
      state.counter -= randomNumber
    },
    setColorCode(state, newColor) {
      state.colorCode = newColor
    }
  },
  actions: {
    async increaseCounter({ commit }) {
      axios
        .get(
          'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
        )
        .then((res) => commit('increaseCounter', res.data))
    },
    async decreaseCounter({ commit }) {
      axios
        .get(
          'https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new'
        )
        .then((res) => commit('decreaseCounter', res.data))
    },
    setColorCode({commit}, newColor) {
      commit('setColorCode', newColor)
    }
  },
  modules: {},
})
