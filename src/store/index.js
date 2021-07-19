import { createStore } from 'vuex'
import client from '@/api/api.js'
import { setToken, removeToken } from '@/util/auth'
export default createStore({
  state: {
    token: '',
    userInfo: {},
    gameInfo: {}
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
    SET_GAMEINFO: (state, gameInfo) => {
      state.gameInfo = gameInfo
    }
  },
  actions: {
    // user login
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        client
          .login(userInfo)
          .then((response) => {
            console.log('store login', response)
            commit('SET_TOKEN', response)
            setToken(response)
            resolve(response)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    // get user info
    getInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        client
          .userinfo()
          .then((response) => {
            console.log('userinfo', response)
            commit('SET_USERINFO', response)
            resolve(response)
          })
          .catch((error) => {
            removeToken()
            reject(error)
          })
      })
    },

    // user logout
    logout({ commit, state, dispatch }) {
      return new Promise((resolve, reject) => {
        client
          .logout(state.token)
          .then(() => {
            commit('SET_TOKEN', '')
            commit('SET_USERINFO', {})
            removeToken()
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    getGameInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        client
          .getGameInfo()
          .then((res) => {
            commit('SET_GAMEINFO', res)
            resolve()
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    // remove token
    resetToken({ commit }) {
      return new Promise((resolve) => {
        commit('SET_TOKEN', '')
        commit('SET_USERINFO', {})
        removeToken()
        resolve()
      })
    }
  },
  modules: {},
  getters: {
    userInfo(state) {
      return state.userInfo
    },
    gameInfo(state) {
      return state.gameInfo
    },
    isLogin(state) {
      return Object.keys(state.userInfo).length > 0
    }
  }
})
