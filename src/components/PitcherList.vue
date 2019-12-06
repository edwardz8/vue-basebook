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
        @keyup.native="getFilteredData"
        class="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-white"
        type="text"
      />
    </div>

    <!-- Pitcher Grid List -->
    <div class="grid-row">
      <div
        class="border m-4 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
        v-for="player in filteredData"
        :key="player.playerid"
      >
        <div class="sm:flex sm:items-center px-6 py-4">
          <p class="logo">
            <i :class="matchTeamLogo(player.Team)"></i>
          </p>
          <div class="ml-5 text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="font-sans text-xl leading-tight mb-2">{{ player.Name }}</p>
              <p
                class="font-sans text-sm leading-tight mb-2"
              >Wins: {{ player.W }} - Losses: {{ player.L }}</p>
              <p class="font-sans text-sm leading-tight mb-2">ERA: {{ player.ERA }}</p>
              <p class="font-sans text-sm leading-tight text-grey-dark">{{ player.Team }}</p>
            </div>
            <div class="sm:flex sm:items-center flex-wrap">
              <button
                class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:bg-blue hover:text-white"
              >Favorite</button>
              <button
                class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white"
              >Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import pitcherProjections from "../../public/pitchers_2020.json";
import methods from "../methods";
import { db } from "../db";

export default {
  name: "PitcherList",
  props: {
    loading: Boolean
  },
  data() {
    return {
      search: "",
      pitchers: pitcherProjections,
      team: pitcherProjections.Team,
      favorites: []
    };
  },
  computed: {
    filteredData() {
      if (this.search) {
        return this.pitchers.filter(p => {
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
        return this.pitchers;
      }
    }
  },
  methods: {
    ...methods
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
