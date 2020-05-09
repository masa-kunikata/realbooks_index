<template>
  <v-app>
    <v-content>
      <router-view/>
    </v-content>
    <div id="nav">
      <v-btn to="/">Search</v-btn>
      <v-btn to="/about">About</v-btn>
    </div>
  </v-app>
</template>

<style lang="scss">
$realbook-color: #f7f2ca;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: $realbook-color;
  padding: 10px;
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
