<template>
  <div class="container mx-auto py-2">
    <!-- SearchBox -->
    <!--  <div class="searchbox">
      <label
        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        for="grid-password"
      >Search By Team or Player</label>
      <input
        v-model="search"
        class="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-white"
        type="text"
      />
    </div>-->

    <!-- Batter Grid List -->
    <div class="grid-row mt-4">
      <div
        class="border m-6 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
        v-for="batter in batters"
        :key="batter.playerid"
      >
        <div class="clearfix sm:flex sm:items-center px-12 py-4 hover:bg-gray-300">
          <p
            class="logo xl:float-left lg:float-left xl:mr-4 lg:mr-4 md:mr-4 md:my-2 xl:my-2 lg:my-2"
          >
            <i :class="matchTeamLogo(batter.Team)"></i>
          </p>
          <div class="text-center sm:text-left sm:flex-grow">
            <div class="mb-4">
              <p class="font-sans text-xl leading-tight mb-2">{{ batter.Name }}</p>
              <p class="font-sans text-sm leading-tight text-grey-dark mb-2">{{ batter.Team }}</p>
              <p
                class="font-sans text-sm leading-tight"
              >WAR: {{ batter.WAR }} - AVG: {{ batter.AVG }}</p>
            </div>
            <div class="sm:flex sm:items-center flex-wrap">
              <button
                @click="addBatterToFavorites(batter)"
                class="text-xs font-semibold rounded-full px-4 py-1 mx-3 leading-normal bg-white border border-blue text-blue hover:text-black"
              >Track</button>
              <router-link to="/batter">
                <button
                  @click="viewCurrentBatter(batter)"
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
import batterProjections from "../../public/batters_2020.json";
import { mapActions, mapGetters } from "vuex";
import methods from "../methods";
import { db } from "../db";

export default {
  name: "BatterList",
  data() {
    return {
      search: "",
      team: batterProjections.Team,
      batters: []
    };
  },
  computed: {
    ...mapGetters(["getBatters", "getCurrentBatter", "getFavorites", "user"])
    /* searchList() {
      return db.collection("batters").filter(p => {
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
    ...mapActions(["addBatterToFavorites", "currentBatter", "removeBatter"]),
    viewCurrentBatter(batter) {
      this.currentBatter(batter);
    },
    remove(index) {
      this.removeBatter(index);
    }
  },
  firestore() {
    return {
      batters: db.collection("batters").orderBy("Name")
    };
  }
};
</script>

<style scoped lang="scss">
.container {
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
