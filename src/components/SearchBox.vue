<template>
  <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-password"
    >Search Player</label>
    <input
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      id="search"
      type="text"
      placeholder="Search"
    />
    <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
  </div>
</template>

<script>
export default {
  name: "SearchBox"
};
</script>

<style scoped>
</style>
