<template>
  <div class="players">
    <div class="inline-flex">
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
    PitcherList
  }
};
</script>

<style scoped>
</style>
