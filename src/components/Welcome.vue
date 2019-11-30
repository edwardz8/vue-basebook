<template>
  <div class="container">
    <div class="clearfix mt-24">
      <img class="float-right ml-4 my-2 h-32 md:w-64" src="../assets/stadium-trees-phone.png" />
      <div class="text-left">
        <div
          class="uppercase tracking-wide text-md text-green-600 font-semibold"
        >Welcome to the Basebook</div>
        <p
          class="block mt-1 text-lg leading-tight font-semibold text-gray-900"
        >Sharing your love for the game has never been better.</p>
        <div class="flex-grow mt-4">
          <router-link
            to="/login"
            class="shadow bg-green-400 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-4"
          >Login</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchBox"
};
</script>

<style scoped>
.container {
  margin: auto;
  width: 50%;
}
.grid {
  display: flex;
  justify-content: space-between;
}
</style>
