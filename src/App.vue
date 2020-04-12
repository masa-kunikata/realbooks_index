<template>
  <div id="app">
    <router-view/>
    <hr />
    <div id="nav">
      <router-link to="/">Search</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<style lang="scss">
$realbook-color: #f7f2ca;

body {
  background-color: $realbook-color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 10px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
