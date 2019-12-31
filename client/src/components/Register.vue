<template>
  <div class="register-form mt-6">
    <div v-if="error">{{ error }}</div>
    <form action="#" @submit.prevent="submit" class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="name"
            >Username</label
          >
        </div>
        <div class="md:w-2/3">
          <input
            v-model="registerForm.name"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="name"
            type="text"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="email"
            >Email</label
          >
        </div>
        <div class="md:w-2/3">
          <input
            v-model="registerForm.email"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="email"
            type="email"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="password"
            >Password</label
          >
        </div>
        <div class="md:w-2/3">
          <input
            v-model="registerForm.password"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="password"
            type="password"
            name="password"
            placeholder="********"
          />
        </div>
      </div>
      <div class="flex md:items-center lg:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            type="submit"
            class="shadow bg-green-500 hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div class="options">
        <router-link to="/" class="register text-blue-500"
          >Back to Login</router-link
        >
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    // ...mapActions(["register"]),
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.registerForm.email,
          this.registerForm.password
        )
        .then(data => {
          data.user
            .updateProfile({
              name: this.registerForm.name
            })
            .then(data => {
              this.$router.replace({ name: "home" });
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

<style scoped lang="scss"></style>
