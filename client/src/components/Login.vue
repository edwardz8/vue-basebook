<template>
  <div class="account-form mt-8">
    <div v-if="error">{{ error }}</div>
    <!-- Login Form -->
    <form @submit.prevent="submit" class="w-full">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="email"
          >Email</label>
        </div>
        <div class="w-full">
          <input
            v-model="loginForm.email"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="email"
            type="email"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6 md:w-full sm:w-full">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="password"
          >Password</label>
        </div>
        <div class="w-full">
          <input
            v-model.trim="loginForm.password"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="password"
            type="password"
            name="password"
            placeholder="********"
          />
        </div>
      </div>
      <div class="flex">
        <button
          type="submit"
          class="md:w-2/3 shadow bg-green-500 hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4"
        >Login to Basebook</button>
        <router-link to="/register" class="register ml-4 text-blue-700">Create Account</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    ...mapActions(["login"]),
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.loginForm.email,
          this.loginForm.password
        )
        .then(data => {
          this.$router.replace({ name: "Players" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
