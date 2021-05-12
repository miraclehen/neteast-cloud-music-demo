import { getDailyRecommendSongs } from '../../utils/api'
import store from '..'

export default {
  namespaced: true,
  state: {
    recommendSongs: null
  },
  mutations: {
    setRecommendSongs: (state, payload) => {
      state.recommendSongs = payload
    }
  },
  actions: {
    fetchRecommendSongs: async state => {
      try {
        const songs = await getDailyRecommendSongs()
        store.commit('recommend/setRecommendSongs', songs)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    getRecommendSongs: state => {
      return state.recommendSongs
    }
  }
}
