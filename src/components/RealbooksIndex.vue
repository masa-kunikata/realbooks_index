<script setup lang="ts">
import type { Ref } from "vue"
import { ref, computed, watch } from "vue"
import { usePdfUrlsStore } from "@/stores/pdfUrls"
import type { PdfUrls } from "@/stores/pdfUrls"
import type { AllIndexes } from "@/stores/realbooksIndexes"

import { useRealbooksIndexesStore } from "@/stores/realbooksIndexes"
const pdfUrlsStore = usePdfUrlsStore()
const realbooksIndexesStore = useRealbooksIndexesStore()

const hitList: Ref<AllIndexes> = ref({})

const pdfUrls = computed(() => (pdfUrlsStore.pdfUrls))
const allIndexes = computed(() => (realbooksIndexesStore.allIndexes))

const query = computed({
  get() { return realbooksIndexesStore.query },
  set(newValue: string) { realbooksIndexesStore.query = newValue }
})

watch(
  () => (query.value),
  (newQuery) => { search(newQuery) },
  { immediate: true }
)
watch(
  () => (allIndexes.value),
  () => { search(query.value) },
  { immediate: true }
)

const search = (query: string) => {
  if (!query) {
    hitList.value = {};
    return
  }
  if (!allIndexes.value) return

  const exactMatch = allIndexes.value[query];
  if (exactMatch) {
    hitList.value = { [query]: exactMatch }
    return;
  }

  const keys = Object.keys(allIndexes.value)
  const hitKeys = keys.filter(key => {
    return -1 < key.toLowerCase().indexOf(query.toLowerCase());
  })
  if (0 < hitKeys.length) {
    const newHitList: AllIndexes = {}
    for (const key of hitKeys) {
      newHitList[key] = allIndexes.value[key]
    }
    hitList.value = newHitList;
    return;
  }

  hitList.value = {}
}
</script>

<template>
  <div>
    <v-text-field label="Search" hide-details="auto" v-model="query" />
    <ul>
      <li v-for="(pages, tuneName) in hitList" :key="tuneName">
        {{ tuneName }}
        <ul>
          <li v-for="page in pages" :key="`${page[':book']}_${page[':page']}`">
            <span v-if="pdfUrls[page[':book'] as keyof PdfUrls]">
              <a :href="pdfUrls[page[':book'] as keyof PdfUrls] + `#page=${page[':pdf_page']}`">
                {{ page[':book'] }} / {{ page[':page'] }}
              </a>
            </span>
            <span v-else>
              {{ page[':book'] }} / {{ page[':page'] }}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

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