<template>
  <div class="container mx-auto py-2">
    <!-- Favorite -->
    <div>
      <div
        v-for="(fav, index) in favoriteBatters"
        :key="`fav.playerid-${index}`"
      >
        {{ fav.playerid }}
      </div>
    </div>

    <!-- SearchBox -->
    <div class="searchbox">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-password"
        >Search By Team or Player</label
      >
      <input
        v-model="search"
        @keyup.native="getFilteredData"
        class="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-white"
        type="text"
      />
    </div>

    <!-- Batter Grid List -->
    <div class="grid-row">
      <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" />
      <div
        class="border m-4 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
        v-for="player in batters"
        :key="player.playerid"
      >
        <!-- <router-link
          :to="{
            name: 'PlayerProfile',
            params: { playerid: batters.playerid }
          }"
        > -->
        <div class="sm:flex sm:items-center px-6 py-4">
          <p class="logo">
            <i :class="matchTeamLogo(player.Team)"></i>
          </p>
          <div class="ml-5 text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="font-sans text-xl leading-tight mb-2">
                {{ player.Name }}
              </p>
              <p class="font-sans text-sm leading-tight mb-2">
                WAR: {{ player.WAR }} - AVG: {{ player.AVG }}
              </p>
              <p class="font-sans text-sm leading-tight text-grey-dark">
                {{ player.Team }}
              </p>
            </div>
            <div class="sm:flex sm:items-center flex-wrap">
              <button
                @click="addBatter(batters)"
                class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:text-black"
              >
                Track
              </button>
              <button
                class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:text-black"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import batterProjections from "../../public/batters_2020.json";
import { mapState, mapActions, mapGetters } from "vuex";
import { db } from "../db";
import methods from "../methods";
import players from "@/api/players";

export default {
  name: "BatterList",
  props: {
    player: { type: Object }
  },
  data() {
    return {
      search: "",
      batters: batterProjections,
      team: batterProjections.Team,
      loading: false,
      // batters: [],
      favoriteBatters: []
    };
  },
  computed: {
    /* filteredData() {
      if (this.search) {
        return this.batters.filter(p => {
          return this.search
            .toLowerCase()
            .split(" ")
            .every(
              v =>
                p.Name.toLowerCase().includes(v) ||
                p.Team.toLowerCase().includes(v)
            );
        });
      } else {
        return this.batters;
      }
    }, */
  },
  methods: {
    ...methods,
    addBatter(Name, Team, playerid) {
      this.$store.dispatch("addBatter", {
        Name: Name,
        Team: Team,
        playerid
      });
    }
    //...mapActions(["addBatter"])
    /* addBatterToFavorites() {
      this.$store.dispatch("addBatter", null, { root: true });
    } */
  }
  /* created() {
    this.loading = true;
    players.getBatters(batters => {
      this.batters = batters;
      this.loading = false;
    });
    // this.$store.dispatch("fetchBatters");
  } */
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
