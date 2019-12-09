<template>
  <div class="container">
    <!-- profile card begin -->
    <div
      class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3 profile-card"
    >
      <img src="../assets/fenway.jpg" class="w-full" />
      <div class="flex justify-center -mt-8">
        <img
          src="../assets/ted-williams.jpg"
          width="80px"
          height="80px"
          class="rounded-full border-solid border-white border-2 -mt-3"
        />
      </div>
      <div class="text-center px-3 pb-6 pt-2">
        <h3 class="text-black text-sm bold font-sans">Ted Williams</h3>
        <p class="mt-2 font-sans font-light text-grey-dark">
          Basebook member since 2019
        </p>
      </div>
      <div class="flex justify-center pb-3 text-grey-dark">
        <div class="text-center mr-3 border-r pr-3">
          <h2>8</h2>
          <span>Favorites</span>
        </div>
        <div class="text-center">
          <h2>42</h2>
          <span>Friends</span>
        </div>
      </div>
    </div>
    <!-- profile card end -->
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "Profile",
  data() {
    return {
      favorites: []
    };
  },
  computed: {
    // ...mapGetters this.user to this.$store.getters.user
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
.profile-card {
  margin: auto;
  width: 50%;
}
</style>
