<template>
  <div class="mb-6 searchbox">
    <label
      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      for="grid-password"
      >Search By Team or Player</label
    >
    <input
      v-model="search"
      class="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-white"
      id="search"
      type="text"
    />
  </div>
</template>

<script>
export default {
  /* NOT USING COMPONENT */
  name: "SearchBox"
};
</script>

<style scoped></style>
