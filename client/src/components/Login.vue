<template>
  <div class="account-form mt-6">
    <!-- Login Form -->
    <form class="w-full max-w-md">
      <!-- <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="email"
          >Email</label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="email"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="email"
            type="email"
          />
        </div>
      </div>-->
      <!-- <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="password"
          >Password</label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model.trim="password"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="password"
            type="password"
            name="password"
            placeholder="********"
          />
        </div>
      </div>-->
      <div class="flex md:items-center lg:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <a
            :href="getLoginUrl"
            role="button"
            class="shadow bg-green-500 hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4"
          >Login</a>
        </div>
      </div>
      <!-- <div class="options">
        <router-link to="/register" class="register text-blue-500">Create Account</router-link>
      </div>-->
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    getLoginUrl() {
      if (window.location.hostname === "localhost") {
        return "http://localhost:3000/auth/google";
      }
    }
  },
  methods: {
    // ...mapActions(["login"]),
  }
};
</script>

<style scoped lang="scss">
.account-form {
  margin: auto;
  width: 50%;
}
.register {
  margin-left: 9rem;
}
.options {
  display: flex;
  flex-direction: column;
}
</style>
