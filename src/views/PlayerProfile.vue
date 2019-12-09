<template>
  <div class="player-profile">player {{ player }}</div>
</template>

<script>
import BatterList from "@/components/BatterList.vue";
import PitcherList from "@/components/PitcherList.vue";
import batterProjections from "../../public/batters_2020.json";
import { mapActions, mapGetters } from "vuex";
import { db } from "../db";
import methods from "../methods";
import players from "@/api/players";

export default {
  name: "PlayerProfile",
  data() {
    return {
      batters: batterProjections,
      team: batterProjections.Team,
      player: this.$route.params.playerid
    };
  },
  components: {
    BatterList,
    PitcherList
  },
  computed: {
    ...mapGetters(["getCurrentBatter"])
  },
  methods: {
    ...methods
  }
};
</script>

<style scoped>
</style>
