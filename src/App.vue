<template>
  <div id="app">
    <div id="nav" v-if="user.loggedIn">
      <ul class="flex">
        <li class="flex-1 mr-2">
          <router-link
            to="/players"
            class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
          >Players</router-link>
        </li>
        <li class="flex-1 mr-2">
          <a
            @click.prevent="signOut"
            class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
          >Sign Out</a>
        </li>
      </ul>
    </div>

    <div id="nav" v-else>
      <ul class="flex">
        <li class="flex-1 mr-2">
          <router-link
            to="/"
            class="text-center block border bg-gray-300 border-gray rounded text-green-500 hover:bg-green-300 py-2 px-4"
          >Login</router-link>
        </li>
        <li class="flex-1 mr-2">
          <router-link
            to="/players"
            class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
          >Players</router-link>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
  computed: {
    // map this.user to this.$store.getters.user
    ...mapGetters({
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "home" });
        });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #f1f1f1;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
