import Vue from 'vue';
import Vuex from 'vuex';
/* import * as types from './mutation-types'
import mutations from './mutations';
import actions from './actions';
import getters from './getters'; */

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    added: [],
    user: {
      loggedIn: false,
      data: null,
      favorites: []
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    allBatterCards: state => state.batterProjections,
    allPitcherCards: state => state.pitcherProjections,
    getNumberOfBatterCards: state => (state.allBatterCards) ? state.allBatterCards.length : 0,
    getNumberOfPitcherCards: state => (state.allPitcherCards) ? state.allPitcherCards.length : 0,
    favorites: state => {
      return state.added.map(({
        playerid,
        quantity
      }) => {
        const batterCard = state.allBatterCards.find(p => p.playerid === playerid)
        const pitcherCard = state.allPitcherCards.find(p => p.playerid === playerid)

        return {
          batterName: batterCard.Name,
          batterTeam: batterCard.Team,
          pitcherName: pitcherCard.Name,
          pitcherTeam: pitcherCard.Team,
        }
      })
    },
    batterCards: state => {
      return state.batterProjections
    },
    pitcherCards: state => {
      return state.pitcherProjections
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.date = data;
    },
    ADD_PITCHER_CARD(state, {
      playerid
    }) {
      const record = state.added.find(p => p.playerid === playerid)

      if (!record) {
        state.added.push({
          playerid,
          quantity: 1
        })
      } else {
        record.quantity++
      }
    },
    ADD_BATTER_CARD(state, {
      playerid
    }) {
      const record = state.added.find(p => p.playerid === playerid)

      if (!record) {
        state.added.push({
          playerid,
          quantity: 1
        })
      } else {
        record.quantity++
      }
    },
  },
  actions: {
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
    addPitcherCard({
      commit
    }, pitcherCard) {
      commit(ADD_PITCHER_CARD, {
        playerid: pitcherCard.playerid
      })
    },
    addBatterCard({
      commit
    }, batterCard) {
      commit(ADD_BATTER_CARD, {
        playerid: batterCard.playerid
      })
    },
  },
  modules: {}
});