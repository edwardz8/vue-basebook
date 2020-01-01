<template>
  <div class="container mx-auto py-2">
    <!-- SearchBox -->

    <!-- Pitcher Grid List -->
    <div class="grid-row mt-4">
      <div
        class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
        v-for="pitcher in pitchers"
        :key="pitcher.playerid"
      >
        <div class="clearfix sm:flex sm:items-center px-12 py-4 hover:bg-gray-300">
          <p
            class="logo xl:float-left lg:float-left xl:mr-4 lg:mr-4 md:mr-4 md:my-2 xl:my-2 lg:my-2"
          >
            <i :class="matchTeamLogo(pitcher.Team)"></i>
          </p>
          <div class="text-center sm:text-left sm:flex-grow">
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
      pitchers: db.collection("pitchers").orderBy("Name")
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
