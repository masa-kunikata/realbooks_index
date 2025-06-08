<template>
  <n-layout id="app" style="height: 100vh;">
    <n-layout-sider collapse-mode="width" :collapsed-width="64" :width="200">
      <n-menu :options="items" :value="current" @update:value="onSelect" />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>
        <span class="title">Realbooks index</span>
      </n-layout-header>
      <n-layout-content>
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useRealbooksIndexesStore } from '@/stores/realbooksIndexes'

const router = useRouter()
const route = useRoute()
const current = ref(route.path)

const items = [
  { label: 'Search', key: '/' },
  { label: 'Setting', key: '/setting' },
  { label: 'About', key: '/about' },
]

function onSelect(key: string) {
  current.value = key
  router.push(key)
}

const realbooksIndexesStore = useRealbooksIndexesStore()
realbooksIndexesStore.doLoad()
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  background-color: #f7f2ca;
}
.title {
  margin-left: 1rem;
}
</style>
