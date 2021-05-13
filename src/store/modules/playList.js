import { getHignQualityPlaylist } from '../../utils/api'

import store from '..'

export default {
  namespaced: true,
  state: {
    hignQualityPlaylist: null
  },
  mutations: {
    setHignQualityPlaylist: (state, payload) => {
      state.hignQualityPlaylist = payload
    }
  },
  actions: {
    fetchHignQualityPlaylist: async state => {
      try {
        const playList = await getHignQualityPlaylist()
        store.commit('playList/setHignQualityPlaylist', playList)
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    hignQualityPlaylist: state => {
      return state.hignQualityPlaylist
    }
  }
}
