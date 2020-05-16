<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      color="amber lighten-4"
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="item.to"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="amber"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon
        class="mx-4"
        large
      >
        mdi-music-clef-bass
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Realbooks index</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container>
        <v-row>
          <v-col>
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'mdi-magnify', text: 'Search', to: '/' },
        { icon: 'mdi-cog', text: 'Setting', to: '/setting' },
        { icon: 'mdi-information-outline', text: 'About', to: '/about' },
      ],
    }),
  }
</script>


<style lang="scss">
$realbook-color: #f7f2ca;

#app {
  color: #2c3e50;
  background-color: $realbook-color;

  // background-color: var(--v-primary-base);
  // //color="amber lighten-5"
}
</style>
