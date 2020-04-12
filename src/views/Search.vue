<template>
  <div class="home">
    <RealbooksIndex />
  </div>
</template>

<script>
// @ is an alias to /src
import RealbooksIndex from '@/components/RealbooksIndex.vue'

export default {
  name: 'Search',
  components: {
    RealbooksIndex
  }
}
</script>
