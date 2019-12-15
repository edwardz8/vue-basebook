<template>
  <div id="app">
    <Navbar />
    <br />
    <div class="container">
      <Errors v-if="error" :msg="error" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import firebase from "firebase";
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";

export default {
  components: {
    Navbar,
    Errors
  },
  computed: {
    ...mapGetters(["error"])
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
</style>
