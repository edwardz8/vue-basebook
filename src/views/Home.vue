<template>
  <div id="app">
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
    <div v-else></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Register from "@/components/Register.vue";

export default {
  name: "home",
  components: {
    Register
  },
  props: {
    loading: Boolean,
    error: String,
    user: {}
  }
};
</script>
