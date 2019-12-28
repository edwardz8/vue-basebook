<template>
  <div class="container mx-auto py-2">
    <!-- SearchBox -->
    <div class="searchbox">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-password"
      >Search By Team or Player</label>
      <input
        v-model="search"
        class="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-white"
        type="text"
      />
    </div>

    <!-- Pitcher Grid List -->
    <div class="grid-row">
      <div
        class="border m-4 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
        v-for="pitcher in pitchers"
        :key="pitcher.playerid"
      >
        <div class="sm:flex sm:items-center px-6 py-4">
          <p class="logo">
            <i :class="matchTeamLogo(pitcher.Team)"></i>
          </p>
          <div class="ml-5 text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="font-sans text-xl leading-tight mb-2">{{ pitcher.Name }}</p>
              <p
                class="font-sans text-sm leading-tight mb-2"
              >Wins: {{ pitcher.W }} - Losses: {{ pitcher.L }}</p>
              <p class="font-sans text-sm leading-tight mb-2">ERA: {{ pitcher.ERA }}</p>
              <p class="font-sans text-sm leading-tight text-grey-dark">{{ pitcher.Team }}</p>
            </div>
            <div class="sm:flex sm:items-center flex-wrap">
              <button
                @click="addPitcherToFavorites(pitcher)"
                class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:text-black"
              >Track</button>
              <router-link to="/pitcher">
                <button
                  @click="viewCurrentPitcher(pitcher)"
                  class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:text-black"
                >Stats</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pitcherProjections from "../../public/pitchers_2020.json";
import { mapActions, mapGetters } from "vuex";
import { db } from "../db";
import methods from "../methods";

export default {
  name: "PitcherList",
  data() {
    return {
      search: "",
      team: pitcherProjections.Team,
      pitchers: []
    };
  },
  computed: {
    ...mapGetters(["getPitchers", "getCurrentPitcher", "getFavorites"])
    /* filtered() {
      return this.getPitchers.filter(p => {
        return this.search
          .toLowerCase()
          .split(" ")
          .every(
            v =>
              p.Name.toLowerCase().includes(v) ||
              p.Team.toLowerCase().includes(v)
          );
      });
    } */
  },
  methods: {
    ...methods,
    ...mapActions(["addPitcherToFavorites", "currentPitcher", "removePitcher"]),
    viewCurrentPitcher(pitcher) {
      this.currentPitcher(pitcher);
    },
    remove(index) {
      this.removePitcher(index);
    }
  },
  firestore() {
    return {
      pitchers: db.collection("pitchers")
    };
  }
};
</script>

<style scoped lang="scss">
.container {
  max-width: 1330px;
  margin: 0 auto;
}
.searchbox {
  margin: auto;
  width: 50%;
  margin-top: 2rem;
}
.grid-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.logo {
  font-size: 5rem;
}
</style>
