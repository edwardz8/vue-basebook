<template>
  <div class="container">
    <div class="flex md:flex-row-reverse flex-wrap layout">
      <!-- profile card -->
      <div class="w-full md:w-1/4 card">
        <div
          class="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3 profile-card"
        >
          <img src="../assets/fenway.jpg" class="w-full" />
          <div class="flex justify-center -mt-8">
            <img
              src="../assets/ted-williams.jpg"
              class="rounded-full border-solid border-white border-2 -mt-3"
            />
          </div>
          <div class="text-center px-3 pb-6 pt-2">
            <h3 class="text-black text-sm bold font-sans">
              {{ user.data.name }}
            </h3>
            <p class="mt-2 font-sans font-light text-grey-dark">
              {{ user.data.email }}
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
      </div>
      <!-- profile card end -->

      <!-- Favorites -->
      <div class="w-full md:w-3/4">
        <div class="favorites-grid">
          <div
            class="border m-4 rounded-lg bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden"
            v-for="(fav, index) in getFavoriteBatters"
            :key="index"
          >
            <div class="sm:flex sm:items-center px-6 py-4">
              <p class="logo">
                <i :class="matchTeamLogo(fav.Team)"></i>
              </p>
              <div class="ml-5 text-center sm:text-left sm:flex-grow">
                <div class="mb-4">
                  <p class="font-sans text-xl leading-tight mb-2">
                    {{ fav.Name }}
                  </p>
                  <p class="font-sans text-sm leading-tight mb-2">
                    WAR: {{ fav.WAR }} - AVG: {{ fav.AVG }}
                  </p>
                  <p class="font-sans text-sm leading-tight text-grey-dark">
                    {{ fav.Team }}
                  </p>
                </div>
                <div class="sm:flex sm:items-center flex-wrap">
                  <button
                    @click="remove(index)"
                    class="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:text-black"
                  >
                    Untrack
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import batterProjections from "../../public/batters_2020.json";
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase/app";
import methods from "../methods";

export default {
  name: "Profile",
  data() {
    return {
      team: batterProjections.Team
    };
  },
  computed: {
    ...mapGetters({ user: "user" }),
    ...mapGetters(["getFavoriteBatters"])
  },
  methods: {
    ...methods,
    ...mapActions(["addBatterToFavorites", "currentBatter", "removeBatter"]),
    remove(index) {
      this.removeBatter(index);
    }
  },
  created() {
    // this.getProfile();
  }
};
</script>

<style scoped>
.logo {
  font-size: 5rem;
}

@media only screen and (max-width: 400px) {
  .profile-card {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}
</style>
