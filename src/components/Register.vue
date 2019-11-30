<template>
  <div class="register-form-body mt-6">
    <div v-if="error">{{error}}</div>
    <form action="#" @submit.prevent="submit" class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="username"
          >Username</label>
        </div>
        <div class="md:w-2/3">
          <input
            v-model="form.username"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="username"
            type="username"
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
            v-model="form.email"
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
            v-model="form.password"
            class="bg-gray-400 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-300"
            id="password"
            type="password"
            name="password"
            placeholder="********"
          />
        </div>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            type="submit"
            class="shadow bg-green-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
          >Sign Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(_ => {
              this.$router.replace({ name: "Login" });
            });
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
