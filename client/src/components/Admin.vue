<template>
  <div class="admin mt-6">
    <h1>Admin Page</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  async mounted() {
    const admin = this.isAdmin();
    if (!admin) {
      this.$router.push("/players");
    }
  },
  methods: mapActions(["isAdmin"])
};
</script>

<style scoped lang="scss">
</style>