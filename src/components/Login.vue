<template>
  <div class="account-form mt-6" :class="{ 'signup-form': !showLoginForm && !showForgotPassword }">
    <!-- Login Form -->
    <form v-if="showLoginForm" @submit.prevent="login" class="w-full max-w-md">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="email"
          >Email</label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model.trim="loginForm.email"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="email"
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
            v-model.trim="loginForm.password"
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
        <!-- <a @click="togglePasswordReset" class="register text-orange-500">Retrieve Password</a> -->
        <a @click="toggleForm" class="register text-blue-500">Create Account</a>
      </div>
    </form>

    <!-- REGISTER FORM -->
    <form
      @submit.prevent="register"
      v-if="!showLoginForm && !showForgotPassword"
      class="w-full max-w-md"
    >
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="name"
          >Username</label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model.trim="registerForm.name"
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
          >Email</label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model.trim="registerForm.email"
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
          >Password</label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model.trim="registerForm.password"
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
            type="register"
            class="shadow bg-green-500 hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4"
          >Sign Up</button>
        </div>
      </div>
      <div class="options">
        <a @click="toggleForm" class="register text-blue-500">Back to Log In</a>
      </div>
    </form>

    <!-- FORGOT PASSWORD FORM -->
    <!-- <form @submit.prevent="register" v-if="showForgotPassword" class="w-full max-w-md">
      <div v-if="!passwordResetSuccess">
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="email"
            >Email</label>
          </div>
          <div class="md:w-2/3">
            <input
              v-model.trim="passwordForm.email"
              class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
              id="email"
              type="email"
            />
          </div>
        </div>

        <div class="flex md:items-center lg:items-center">
          <div class="md:w-1/3"></div>
          <div class="md:w-2/3">
            <button
              class="shadow bg-green-500 hover:bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mb-4"
            >Reset</button>
          </div>
        </div>
        <div class="options">
          <a @click="toggleForm" class="register text-blue-500">Back to Log In</a>
        </div>
      </div>
    </form>-->
  </div>
</template>

<script>
import firebase from "firebase";
// const firebase = require("../firebaseConfig");

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: "",
        password: ""
      },
      registerForm: {
        name: "",
        email: "",
        password: ""
      },
      passwordForm: {
        email: ""
      },
      errorMsg: "",
      showLoginForm: true,
      showForgotPassword: false,
      passwordResetSuccess: false,
      performingRequest: false
    };
  },
  methods: {
    login() {
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
    },
    register() {
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
            .then(_ => {
              this.$router.replace({ name: "Players" });
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    },
    toggleForm() {
      (this.errorMsg = ""), (this.showLoginForm = !this.showLoginForm);
    },
    togglePasswordReset() {
      if (this.showForgotPassword) {
        this.showLoginForm = true;
        this.showForgotPassword = false;
        this.passwordResetSuccess = false;
      } else {
        this.showLoginForm = false;
        this.showForgotPassword = true;
      }
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
