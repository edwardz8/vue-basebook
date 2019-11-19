<template>
  <div class="players">
    <BatterList></BatterList>
  </div>
</template>

<script>
import BatterList from "@/components/BatterList.vue";

export default {
  name: "players",
  components: {
    BatterList
  },
  props: {
    loading: Boolean,
    error: String
  }
};
</script>

<style scoped>
</style>
