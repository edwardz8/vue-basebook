import Vue from 'vue';
import Vuex from 'vuex';
import batterProjections from '../../public/batters_2020.json'
import pitcherProjections from '../../public/pitchers_2020.json'
import {
  axios
} from '@/plugins/axios';

const axiosPlugin = store => {
  store.$axios = axios
}

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [axiosPlugin],
  state: {
    // login
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
  },
  actions: {
    // actions are responsible for when mutations are fired
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