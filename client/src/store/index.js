import Vue from 'vue';
import Vuex from 'vuex';
import batterProjections from '../../public/batters_2020.json'
import pitcherProjections from '../../public/pitchers_2020.json'
import axios from 'axios';
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    batters: batterProjections,
    pitchers: pitcherProjections,
    favoriteBatters: [],
    favoritePitchers: [],
    currentBatter: {},
    currentPitcher: {},
    comments: [],
    search: '',
    user: {},
    status: '',
    error: null
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authState: state => state.status,
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
      state.token = token
      state.user = user
      state.status = 'success'
      state.error = null
    },
    auth_error(state, err) {
      state.error = err.response.data.msg
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
    async login({
      commit
    }, user) {
      commit('auth_request');
      try {
        let res = await axios.post('/api/users/login', user)
        if (res.data.success) {
          const token = res.data.token;
          const user = res.data.user;
          // Store the token into the localstorage
          localStorage.setItem('token', token);
          // Set the axios defaults
          axios.defaults.headers.common['Authorization'] = token;
          commit('auth_success', token, user);
        }
        return res;
      } catch (err) {
        commit('auth_error', err);
      }
    },
    // Register User
    async register({
      commit
    }, userData) {
      try {
        commit('register_request');
        let res = await axios.post('/api/users/register', userData);
        if (res.data.success !== undefined) {
          commit('register_success');
        }
        return res;
      } catch (err) {
        commit('register_error', err)
      }
    },
    // Get the user Profile
    async getProfile({
      commit
    }) {
      commit('profile_request');
      let res = await axios.get('/api/users/profile')
      commit('user_profile', res.data.user)
      return res;
    },
    // Logout the user
    async logout({
      commit
    }) {
      await localStorage.removeItem('token');
      commit('logout');
      delete axios.defaults.headers.common['Authorization'];
      router.push('/login');
      return
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