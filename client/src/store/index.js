import Vue from 'vue';
import Vuex from 'vuex';
import {
  axios
} from '@/plugins/axios';

const axiosPlugin = store => {
  store.$axios = axios
}

const db = require('../db')

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [axiosPlugin],
  state: {
    user: {
      loggedIn: Boolean
    },
    currentUser: null,
    status: '',
    // batter & pitcher data
    batters: [],
    pitchers: [],
    favorites: [],
    currentBatter: {},
    currentPitcher: {},
    // comments
    comments: null,
    // search
    search: '',
    error: null
  },
  getters: {
    // users
    user: state => state.user,
    authStatus: state => state.status,
    error: state => state.error,
    // batters & pitchers
    getBatters: state => state.batters,
    getPitchers: state => state.pitchers,
    getCurrentBatter: state => state.currentBatter,
    getCurrentPitcher: state => state.currentPitcher,
    getFavorites: state => state.favorites,
    // comments
    getComments: state => state.comments,
  },
  mutations: {
    // mutations are responsible for state changes
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    setUser(state, val) {
      state.user = val;
    },
    SET_PITCHERS(state, val) {
      state.pitchers = val
    },
    SET_BATTERS(state, val) {
      state.batters = val
    },
    ADD_PITCHER_TO_FAVORITES(state, pitcher) {
      state.favorites.push(pitcher);
    },
    ADD_BATTER_TO_FAVORITES(state, batter) {
      state.favorites.push(batter);
    },
    REMOVE_FROM_FAVORITES(state, index) {
      state.favorites.splice(index, 1);
    },
    CURRENT_PITCHER(state, pitcher) {
      state.currentPitcher = pitcher;
    },
    CURRENT_BATTER(state, batter) {
      state.currentBatter = batter;
    },
    SET_COMMENTS: state => {
      let comments = []

      db.commentsCollection.orderBy('created_at').onSnapshot((snapshot) => {
        comments = []
        snapshot.forEach((doc) => {
          comments.push({
            id: doc.id,
            message: doc.data().message
          })
        })
        state.comments = comments
      })
    },
  },
  actions: {
    // actions are responsible for when mutations are fired
    addPitcherToFavorites: (context, pitcher) => {
      context.commit('ADD_PITCHER_TO_FAVORITES', pitcher, pitcher.playerid);
    },
    addBatterToFavorites: (context, batter) => {
      context.commit('ADD_BATTER_TO_FAVORITES', batter, batter.playerid);
    },
    currentPitcher: (context, pitcher) => {
      context.commit('CURRENT_PITCHER', pitcher, pitcher.playerid);
    },
    currentBatter: (context, batter) => {
      context.commit('CURRENT_BATTER', batter, batter.playerid);
    },
    remove: (context, index) => {
      context.commit('REMOVE_FROM_FAVORITES', index);
    },
    // comments
    setComments: context => {
      context.commit('SET_COMMENTS')
    },
    // get user
    fetchUser({
      commit
    }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("setUser", {
          displayName: user.displayName,
          email: user.email,
          uid: user.uid,
          photoUrl: user.photoUrl
        });
      } else {
        commit("setUser", null);
      }
    }
  },
});