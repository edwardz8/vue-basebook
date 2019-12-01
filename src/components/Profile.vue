<template>
  <div class="container">Profile Page</div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  name: "Profile",
  computed: {
    // map this.user to this.$store.getters.user
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  width: 50%;
}
.grid {
  display: flex;
  justify-content: space-between;
}
</style>