<script setup lang="ts">
import { computed } from "vue"

import type { PdfUrls } from "@/stores/pdfUrls"

import { usePdfUrlsStore } from "@/stores/pdfUrls"

const pdfUrlsStore = usePdfUrlsStore()
const pdfMd5s: PdfUrls = {
  Colorado: '12ef10cda7ab46ac1a84d793108383b3',
  EvansBk: '35ee372dc69c227891be1f6a4d90d8a4',
  JazzFake: 'd2c54773325dde3a46c549b9312b7424',
  JazzLTD: '7e29eaff0b8ffba90d917a1ceda03c17',
  Library: '095ac3fad6c78d02bac4d41814215789',
  NewReal1: 'f39cb8e38a1addfeb25e4226c84152c1',
  NewReal2: '9b5c0c691ea9ff5042ba35e0faa8d00e',
  NewReal3: '0f08a1a51f6a8ae03ef3459a8ad51192',
  Realbk1: '9e45daf97a633ec5a03861a2037385a8',
  Realbk2: 'd4ba42b65df5100e889104658b2d20a1',
  Realbk3: 'ec2661678adfe2d233e3614bdda087f8',
  TheBook: 'fd96c95fdef40003180d68334b6605fb',
}
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

        MD5: {{ pdfMd5s[bookTitle as keyof PdfUrls] }}
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