<template>
  <div class="landing">
    <div v-if="loading">LOADING...</div>
    <div v-else-if="error">{{error}}</div>
    <div v-else-if="user">
      <h2>{{user.displayName}}&nbsp;&nbsp;{{user.email}}</h2>
      <h4>
        <button @click="logout()">LOGOUT</button>
      </h4>
      <hr />
      <br />
    </div>
    <div v-else>
      <Welcome></Welcome>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Register from "@/components/Register.vue";
import Welcome from "@/components/Welcome.vue";

export default {
  name: "home",
  components: {
    Welcome
  },
  props: {
    loading: Boolean,
    error: String,
    user: {}
  }
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100vh;
}
</style>
