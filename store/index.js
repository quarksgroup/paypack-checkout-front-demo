export const state = () => ({
  buynow: {},
})

export const getters = {
  buynow(state) {
    return state.buynow
  },
}

export const mutations = {
  SET_BUY_NOW(state, buynow) {
    state.buynow = buynow
  },
}

export const actions = {
  setBuyNowData(vuexContext, buynow) {
    vuexContext.commit('SET_BUY_NOW', buynow)
  },
}
