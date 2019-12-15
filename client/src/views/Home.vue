<template>
  <div class="landing">
    <div class="flex mt-24 ml-24">
      <div class="text-left">
        <div
          class="uppercase tracking-wide text-md text-green-600 font-semibold"
        >Welcome to Basebook</div>
        <p
          class="block mt-1 text-lg leading-tight font-semibold text-gray-900"
        >Sharing your love for the game has never been better.</p>
        <img class="float-left ml-4 my-2 h-32 md:w-64" src="../assets/stadium-trees-phone.png" />
      </div>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
export default {
  name: "home",
  components: {
    Login,
    Register
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
