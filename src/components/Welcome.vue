<template>
  <div class="flex mt-24 ml-24">
    <div class="text-left">
      <div class="uppercase tracking-wide text-md text-green-600 font-semibold">Welcome to Basebook</div>
      <p
        class="block mt-1 text-lg leading-tight font-semibold text-gray-900"
      >Sharing your love for the game has never been better.</p>
      <img class="float-left ml-4 my-2 h-32 md:w-64" src="../assets/stadium-trees-phone.png" />
    </div>
    <Login></Login>
  </div>
</template>

<script>
import Login from "./Login";
export default {
  name: "Welcome",
  components: {
    Login
  }
};
</script>

<style scoped>
</style>
