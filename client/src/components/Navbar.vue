<template>
  <div id="nav">
    <ul class="flex">
      <li class="flex-1 mr-2">
        <router-link
          to="/"
          class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
        >
          Basebook
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="flex-1 mr-2">
        <router-link
          to="/players"
          class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
        >Players</router-link>
      </li>
      <li class="flex-1 mr-2">
        <router-link
          to="/profile"
          class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
        >Profile</router-link>
      </li>
      <li class="flex-1 mr-2" v-if="!user.loggedIn">
        <router-link
          to="/"
          class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
        >Login</router-link>
      </li>
      <li class="flex-1 mr-2" v-if="!user.loggedIn">
        <router-link
          to="/register"
          class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
        >Register</router-link>
      </li>
      <li class="flex-1 mr-2" v-if="user.loggedIn">
        <a
          @click.prevent="signOut"
          class="text-center block border bg-gray-300 border-gray rounded text-blue-500 hover:bg-green-300 py-2 px-4"
        >Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase/app";

export default {
  computed: {
    ...mapGetters({ user: "user" })
  },
  methods: {
    // ...mapActions(["logout"]),
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style lang="scss">
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