<template>
  <div id="app">
    <div id="nav">
      <ul class="flex">
        <li class="flex-1 mr-2">
          <router-link
            to="/"
            class="text-center block border bg-gray-200 border-white rounded text-blue-500 hover:bg-green-300 py-2 px-4"
          >Basebook</router-link>
        </li>
        <li class="flex-1 mr-2">
          <router-link
            to="/login"
            class="text-center block border bg-gray-200 border-white rounded text-blue-500 hover:bg-green-300 py-2 px-4"
          >Login</router-link>
        </li>
        <li class="flex-1 mr-2">
          <router-link
            to="/register"
            class="text-center block border bg-gray-200 border-white rounded text-blue-500 hover:bg-green-300 py-2 px-4"
          >Register</router-link>
        </li>
        <li class="flex-1 mr-2">
          <router-link
            to="/players"
            class="text-center block border bg-gray-200 border-white rounded text-blue-500 hover:bg-green-300 py-2 px-4"
          >Players</router-link>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
