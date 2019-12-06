<template>
  <div class="container">
    <p>Profile Page</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
import { db, user } from "../db";

export default {
  name: "Profile",
  data() {
    return {
      favorites: []
    };
  },
  computed: {
    // map this.user to this.$store.getters.user
    ...mapGetters({
      user: "user"
    })
  },
  mounted() {
    const user = firebase.auth().currentUser;
    // const name, email, photoUrl, uid, emailVerified;

    if (user != null) {
      name = user.displayName;
    }
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