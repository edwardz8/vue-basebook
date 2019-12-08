import Vue from 'vue';
import Vuex from 'vuex';
import batterProjections from '../../public/batters_2020.json'
/* import pitchers from './modules/pitchers'
import favorites from './modules/favorites' */
import players from '../api/players'

Vue.use(Vuex);

export default new Vuex.Store({
  /*  modules: {
     batters,
     pitchers,
     favorites
   }, */
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
    batters: batterProjections,
    favoriteBatters: []
  },
  getters: {
    user(state) {
      return state.user;
    },
    batters(state) {
      return state.batters;
    },
    /* favoriteBatters(state, getters) {
      return state.batters.map(favBatter => {
        const batter = state.batters.favorites.find(batter => batter.playerid === favBatter.playerid)
        return {
          playerid: batter.playerid,
          name: batter.Name,
          team: batter.Team
        }
      })
    } */
  },
  mutations: {
    // mutations are responsible for state changes
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    setBatters(state, batters) {
      Vue.set(state, 'batters', batters);
    },
    addBatter(state, batter) {
      Vue.set(state.batters, 'Name', batter.Name);
      Vue.set(state.batters, 'Team', batter.Team);
      Vue.set(state.batters, 'playerid', batter.playerid);
      state.batters.unshift(state.favoriteBatters);
    },
  },
  actions: {
    // actions are responsible for when mutations are fired
    fetchUser({
      commit
    }, user) {
      commit('SET_LOGGED_IN', user !== null);
      if (user) {
        commit('SET_USER', {
          userName: user.userName,
          email: user.email
        });
      } else {
        commit('SET_USER', null);
      }
    },
    /* fetchBatters({
      commit
    }) {
      return new Promise((resolve, reject) => {
        // make the call and call setBatters mutation
        players.getBatters(batters => {
          commit('setBatters', batters)
          resolve()
        })
      })
    }, */
    addBatter(context, batter) {
      context.commit('addBatter', batter)
    },
    fetchPitchers({
      commit
    }) {
      return new Promise((resolve, reject) => {
        // make the call and call setBatters mutation
        players.getPitchers(pitchers => {
          commit('setPitchers', pitchers)
          resolve()
        })
      })
    },
  },
  modules: {}
});

export const namespaced = true