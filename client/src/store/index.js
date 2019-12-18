import Vue from 'vue';
import Vuex from 'vuex';
import batterProjections from '../../public/batters_2020.json'
import pitcherProjections from '../../public/pitchers_2020.json'
import {
  axios
} from '@/plugins/axios';
import router from '../router/index'

/* 
headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token"
  }
*/

const axiosPlugin = store => {
  store.$axios = axios
}

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [axiosPlugin],
  state: {
    // login
    token: localStorage.getItem('token') || '',
    user: {},
    status: '',
    // batter & pitcher data
    batters: batterProjections,
    pitchers: pitcherProjections,
    favoriteBatters: [],
    favoritePitchers: [],
    currentBatter: {},
    currentPitcher: {},
    // comments
    comments: [],
    // search
    search: '',
    error: null
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    // authState: state => state.status,
    user: state => state.user,
    error: state => state.error,
    // batters
    getBatters: state => state.batters,
    getFavoriteBatters: state => state.favoriteBatters,
    getCurrentBatter: state => state.currentBatter,
    // pitchers
    getPitchers: state => state.pitchers,
    getFavoritePitchers: state => state.favoritePitchers,
    getCurrentPitcher: state => state.currentPitcher,
    // comments
    getComments: state => state.comments,
  },
  mutations: {
    // mutations are responsible for state changes
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    ADD_BATTER_TO_FAVORITES(state, batter) {
      state.favoriteBatters.push(batter);
    },
    REMOVE_BATTER_FROM_FAVORITES(state, index) {
      state.favoriteBatters.splice(index, 1);
    },
    CURRENT_BATTER(state, batter) {
      state.currentBatter = batter;
    },
    // PITCHERS
    ADD_PITCHER_TO_FAVORITES(state, pitcher) {
      state.favoritePitchers.push(pitcher);
    },
    REMOVE_PITCHER_FROM_FAVORITES(state, index) {
      state.favoritePitchers.splice(index, 1);
    },
    CURRENT_PITCHER(state, pitcher) {
      state.currentPitcher = pitcher;
    },
    ADD_COMMENT(state, comment) {
      state.comments = comment;
    },
    auth_request(state) {
      state.error = null
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'success'
      state.token = token
      state.user = user
      state.error = null
    },
    auth_error(state, err) {
      state.status = 'err'
    },
    register_request(state) {
      state.error = null
      state.status = 'loading'
    },
    register_success(state) {
      state.error = null
      state.status = 'success'
    },
    register_error(state, err) {
      state.error = err.response.data.msg
    },
    logout(state) {
      state.error = null
      state.status = ''
      state.token = ''
      state.user = ''
    },
    profile_request(state) {
      state.status = 'loading'
    },
    user_profile(state, user) {
      state.user = user
    }
  },
  actions: {
    // actions are responsible for when mutations are fired
    // Login Action
    login({
      commit
    }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        this.axios({
            url: 'http://localhost:3000/login',
            data: user,
            method: 'POST'
          })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            this.axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    // Register User
    register({
      commit
    }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
            url: 'http://localhost:3000/register',
            data: user,
            method: 'POST'
          })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    // Get the user Profile
    getProfile({
      commit
    }) {
      commit('profile_request');
      let res = this.axios.get('/api/users/profile')
      commit('user_profile', res.data.user)
      return res;
    },
    // Logout the user
    logout({
      commit
    }) {
      return new Promise((resolve, reject) => {
        localStorage.removeItem('token');
        commit('logout')
        delete this.axios.defaults.headers.common['Authorization'];
        resolve
      })
    },
    // batters
    addBatterToFavorites: (context, batter) => {
      context.commit('ADD_BATTER_TO_FAVORITES', batter, batter.playerid);
    },
    removeBatter: (context, index) => {
      context.commit('REMOVE_BATTER_FROM_FAVORITES', index);
    },
    currentBatter: (context, batter) => {
      context.commit('CURRENT_BATTER', batter, batter.playerid);
    },
    // pitchers
    addPitcherToFavorites: (context, pitcher) => {
      context.commit('ADD_PITCHER_TO_FAVORITES', pitcher, pitcher.playerid);
    },
    removePitcher: (context, index) => {
      context.commit('REMOVE_PITCHER_FROM_FAVORITES', index);
    },
    currentPitcher: (context, pitcher) => {
      context.commit('CURRENT_PITCHER', pitcher.playerid);
    },
    // comments
    addComment: (context, comment) => {
      context.commit('ADD_COMMENT', comment, comment.id)
    }
  },
});