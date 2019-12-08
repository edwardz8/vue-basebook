import players from "@/api/players"

const state = {
    pitchers: [],
    batters: [],
    favorites: [],
    favoritesStatus: null
}

const getters = {
    favoritePitchers(state, getters, rootState, rootGetters) {
        return state.pithers.map(favPitcher => {
            const pitcher = rootState.pitchers.favorites.find(pitcher => pitcher.playerid === favPitcher.playerid)
            return {
                playerid: pitcher.playerid,
                name: pitcher.Name,
                team: pitcher.Team
            }
        })
    },
    favoriteBatters(state, getters, rootState, rootGetters) {
        return state.batters.map(favBatter => {
            const batter = rootState.batters.favorites.find(batter => batter.playerid === favBatter.playerid)
            return {
                playerid: batter.playerid,
                name: batter.Name,
                team: batter.Team
            }
        })
    }
}

const mutations = {
    // mutations are responsible for state changes
    pushPitcherToFavorites(state, playerid) {
        state.favorites.push({
            playerid: playerid,
        })
    },
    pushBatterToFavorites(state, playerid) {
        state.favorites.push({
            playerid: playerid,
        })
    },
    emptyFavorites(state) {
        state.favorites = []
    }
}

const actions = {
    // actions are responsible for when mutations are fired
    addPitcherToFavorites({
        state,
        getters,
        commit,
        rootState,
        rootGetters
    }, pitcher) {
        if (rootGetters['pitchers/pitcherIsPresent'](pitcher)) {
            const favPitcher = state.favorites.find(fav => fav.playerid === pitcher.playerid)
            if (!favPitcher) {
                commit('pushPitcherToFavorites', pitcher.playerid)
            }
        }
    },
    addBatterToFavorites({
        state,
        getters,
        commit,
        rootState,
        rootGetters
    }, batter) {
        if (rootGetters['batters/batterIsPresent'](batter)) {
            const favBatter = state.favorites.find(fav => fav.playerid === batter.playerid)
            if (!favBatter) {
                commit('pushBatterToFavorites', batter.playerid)
            }
        }
    },
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}