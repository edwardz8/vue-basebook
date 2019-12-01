<template>
  <div class="players">
        <h1 class="font-mono text-lg text-gray-800 text-center">2020 Steamer Projections</h1>

    <div class="inline-flex mt-4">
      <button
        @click="current = 'BatterList'"
        class="bg-gray-300 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded-l"
      >Batters</button>

      <button
        @click="current = 'PitcherList'"
        class="bg-gray-300 hover:bg-green-300 text-gray-800 font-bold py-2 px-4 rounded-r"
      >Pitchers</button>
    </div>

    <component :is="current"></component>
  </div>
</template>

<script>
import BatterList from "@/components/BatterList.vue";
import PitcherList from "@/components/PitcherList.vue";

export default {
  name: "players",
  data() {
    return {
      current: "BatterList"
    };
  },
  components: {
    BatterList,
    PitcherList,
  }
};
</script>

<style scoped>
</style>
