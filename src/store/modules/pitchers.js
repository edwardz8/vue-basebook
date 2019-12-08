import players from "@/api/players"

export default {
    state: {
        pitchers: []
    },

    getters: {
        availablePitchers(state, getters) {
            return state.pitchers
        },

        pitcherIsPresent() {
            return (pitcher) => {
                return pitcher.pitchers > 0
            }
        }
    },

    mutations: {
        // mutations are responsible for state changes
        setPitchers(state, pitchers) {
            state.pitchers = pitchers
        },
    },

    actions: {
        // actions are responsible for when mutations are fired
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
    }
}