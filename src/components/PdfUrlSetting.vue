<script setup lang="ts">
import { computed } from "vue"

import type { PdfUrls } from "@/stores/pdfUrls"

import { usePdfUrlsStore } from "@/stores/pdfUrls"

const pdfUrlsStore = usePdfUrlsStore()
const pdfUrls = computed({
  get() {
    return pdfUrlsStore.pdfUrls
  },
  set(newValue) {
    pdfUrlsStore.putPdfUrls(newValue)
  },
})
</script>
  
<template>
  <div>
    <h3>pdf url setting</h3><br />
    <ul>
      <li v-for="([bookTitle, url]) in Object.entries(pdfUrls)" :key="bookTitle">
        <v-text-field :label="bookTitle" hide-details="auto" :value="url" v-model="pdfUrls[bookTitle as keyof PdfUrls]" />
      </li>
    </ul>
  </div>
</template>
  

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  // list-style-type: none;
  padding: 10px;
}

li {
  // display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>