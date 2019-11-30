<template>
  <div class="container mx-auto py-2">
    <h1 class="font-mono text-lg text-gray-800 text-center">2020 Steamer Pitcher Projections</h1>

    <div class="flex mb-4">
      <div class="flex-1 bg-gray-500 h-3"></div>
    </div>

    <div class="grid-row">
      <div
        class="border m-4 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
        v-for="player in playerJson"
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

export default {
  name: "PitcherList",
  props: {
    loading: Boolean
  },
  data() {
    return {
      playerJson: pitcherProjections,
      team: pitcherProjections.Team
    };
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
.grid-row {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.logo {
  font-size: 5rem;
}
</style>
