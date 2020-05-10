<template>
  <div>
    <v-text-field label="Tune name"  hide-details="auto" v-model="query" />
    <ul>
      <li v-for="(pages, tuneName) in hitList" :key="tuneName">
        {{tuneName}}
        <ul>
          <li v-for="page in pages" :key="page[':book'] + '_' + page[':page']">
            <span v-if="pdfUrls[page[':book']]">
              <a :href="pdfUrls[page[':book']] + `#page=${page[':page']}`"> {{page[':book']}} / {{page[':page']}}</a>
            </span>
            <span v-else>
              {{page[':book']}} / {{page[':page']}}
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RealbooksIndex',
  data() {
    return {
      hitList: {},
    }
  },
  computed: {
    allIndexes(){
      return this.$store.getters['allIndexes'];
    },
    query: {
      get(){
        return this.$store.getters['query']
      },
      set(value){
        this.$store.dispatch('putQuery', value)
      }
    },
    pdfUrls(){
      return this.$store.getters['pdfUrls'];
    },
  },
  watch: {
    query:{
      handler(val) {
        this.search(val)
      },
      immediate: true,
    },
    allIndexes:{
      handler() {
        this.search(this.query)
      },
      immediate: true,
    },
  },
  methods: {
    search(query) {
      if(!query){
        this.hitList = {};
        return
      }
      const exactMatch = this.allIndexes[query];
      if (exactMatch) {
        const hitList = {}
        hitList[query] = exactMatch
        this.hitList = hitList;
        return;
      }

      const keys = Object.keys(this.allIndexes)
      const hitKeys = keys.filter(key => {
        return -1 < key.toLowerCase().indexOf(query.toLowerCase());
      })
      if(0 < hitKeys.length) {
        const hitList = {}
        for(const key of hitKeys) {
          hitList[key] = this.allIndexes[key]
        }
        this.hitList = hitList;
        return;
      }

      this.hitList = {}
    }
  },
}


</script>

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
