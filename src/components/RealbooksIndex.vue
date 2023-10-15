<script setup lang="ts">
import { ref, computed, watch } from "vue"
import { usePdfUrlsStore } from "@/stores/pdfUrls"
import { useRealbooksIndexesStore } from "@/stores/realbooksIndexes"
const pdfUrlsStore = usePdfUrlsStore()
const realbooksIndexesStore = useRealbooksIndexesStore()

const hitList = ref({})

const pdfUrls = computed(() => (pdfUrlsStore.pdfUrls))
const allIndexes = computed(() => (realbooksIndexesStore.allIndexes))

const query = computed({
  get() { return realbooksIndexesStore.query  },
  set(newValue: string) {    realbooksIndexesStore.query = newValue  }
})


watch(
  () => (query.value),
  (newQuery) => {search(newQuery)  },
  { immediate: true }
)
watch(
  () => (allIndexes.value),
  () => {search(query.value)  },
  { immediate: true }
)


const search = (query: string) => {
      if(!query){
        hitList.value = {};
        return
      }
      const exactMatch = allIndexes.value[query];
      if (exactMatch) {
        hitList.value = { [query]: exactMatch }
        return;
      }

      const keys = Object.keys(allIndexes.value)
      const hitKeys = keys.filter(key => {
        return -1 < key.toLowerCase().indexOf(query.toLowerCase());
      })
      if(0 < hitKeys.length) {
        const newHitList: {[key: string]: string} = {}
        for(const key of hitKeys) {
          newHitList[key] = allIndexes.value[key]
        }
        hitList.value = newHitList;
        return;
      }

      hitList.value = {}
    }
  }


</script>



<template>
  <div>
    <v-text-field label="Search" hide-details="auto" v-model="query" />
    <ul>
      <li v-for="(pages, tuneName) in hitList" :key="tuneName">
        {{ tuneName }}
        <ul>
          <li v-for="page in pages" :key="`${page[':book']}_${page[':page']}`"
            :set="disp = `${page[':book']} / ${page[':page']}`">
            <span v-if="pdfUrls[page[':book']]">
              <a :href="pdfUrls[page[':book']] + `#page=${page[':pdf_page']}`">{{ disp }}</a>
            </span>
            <span v-else>
              {{ disp }}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
  