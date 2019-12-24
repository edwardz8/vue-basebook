<template>
  <div class="login-token mt-6">
    <h1>Logging in...</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  mounted() {
    const { token } = this.$route.params;
    if (token) {
      this.login(token);
      this.$router.push("/players");
    } else {
      this.$router.push("/");
    }
  },
  methods: mapActions(["login"])
};
</script>

<style scoped lang="scss">
</style>
