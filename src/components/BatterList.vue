<template>
  <div class="container mx-auto py-2">

    <!-- SearchBox -->
    <div class="searchbox">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-password"
    >Search By Team or Player</label>
    <input v-model="search" @keyup.native="getFilteredData"
    class="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-white"
      type="text"
    />
  </div>

<!-- Batter Grid List -->
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
              >WAR: {{ player.WAR }} - AVG: {{ player.AVG }}</p>
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
import batterProjections from "../../public/steamerprojections_2020.json";

export default {
  name: "BatterList",
  props: {
    loading: Boolean
  },
  data() {
    return {
      search: '',
      battersList: batterProjections,
      team: batterProjections.Team
    };
  },
  computed: {
    filteredData() {
      if (this.search) {
          return this.battersList.filter((p) => {
            return this.search.toLowerCase().split(' ').every(v => p.Name.toLowerCase().includes(v) || p.Team.toLowerCase().includes(v));
          })
      } else {
        return this.battersList
      }
    },
  },
  methods: {
    matchTeamLogo(team) {
      switch (team) {
        case "Braves":
          return "bbclub-ATL ATL";
          break;
        case "Astros":
          return "bbclub-HOU";
          break;
        case "Red Sox":
          return "bbclub-BOS BOS";
          break;
        case "Indians":
          return "bbclub-CLE CLE";
          break;
        case "Brewers":
          return "bbclub-MIL MIL";
          break;
        case "Yankees":
          return "bbclub-NYY NYY";
          break;
        case "Rays":
          return "bbclub-TB TB";
          break;
        case "Orioles":
          return "bbclub-BAL BAL";
          break;
        case "Blue Jays":
          return "bbclub-TOR TOR";
          break;
        case "Tigers":
          return "bbclub-DET DET";
          break;
        case "Royals":
          return "bbclub-KC KC";
          break;
        case "Twins":
          return "bbclub-MIN MIN";
          break;
        case "White Sox":
          return "bbclub-CWS CWS";
          break;
        case "Athletics":
          return "bbclub-OAK OAK";
          break;
        case "Rangers":
          return "bbclub-TEX TEX";
          break;
        case "Angels":
          return "bbclub-LAA LAA";
          break;
        case "Mariners":
          return "bbclub-SEA SEA";
          break;
        case "Nationals":
          return "bbclub-WSH WSH";
          break;
        case "Phillies":
          return "bbclub-PHI PHI";
          break;
        case "Mets":
          return "bbclub-NYM NYM";
          break;
        case "Marlins":
          return "bbclub-MIA MIA";
          break;
        case "Pirates":
          return "bbclub-PIT PIT";
          break;
        case "Cardinals":
          return "bbclub-STL STL";
          break;
        case "Reds":
          return "bbclub-CIN CIN";
          break;
        case "Cubs":
          return "bbclub-CHC CHC";
          break;
        case "Dodgers":
          return "bbclub-LAD LAD";
          break;
        case "Diamondbacks":
          return "bbclub-ARI ARI";
          break;
        case "Rockies":
          return "bbclub-COL COL";
          break;
        case "Giants":
          return "bbclub-SF SF";
          break;
        case "Padres":
          return "bbclub-SD SD";
          break;
        default:
          return "bbclub-mlb";
      }
    }
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
