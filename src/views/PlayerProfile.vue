<template>
  <div class="player-profile">player {{ player }}</div>
</template>

<script>
import BatterList from "@/components/BatterList.vue";
import PitcherList from "@/components/PitcherList.vue";
import batterProjections from "../../public/batters_2020.json";
import methods from "../methods";

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
  methods: {
    ...methods
  }
};
</script>

<style scoped>
</style>
