<template>
  <div class="account-form mt-6">
    <!-- Login Form -->
    <form @submit.prevent="loginUser" class="w-full max-w-md">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="email"
          >Username</label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model.trim="name"
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
      </div>
      <div class="flex md:items-center lg:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            type="login"
            class="shadow bg-green-500 hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4"
          >Login</button>
        </div>
      </div>
      <div class="options">
        <router-link to="/register" class="register text-blue-500">Create Account</router-link>
      </div>
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
      name: "",
      password: ""
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        name: this.name,
        password: this.password
      };
      this.login(user)
        .then(res => {
          if (res.data.success) {
            this.$router.push("profile");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
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
