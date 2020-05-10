# realbooks_index

https://masa-kunikata.github.io/realbooks_index/#/


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


//TODO setting md5 - pdf filename
```

const store = new Vuex.Store({
  state: ～,
  getters: ～,
  mutations: {
    save(state) {
      // Json文字列に変換しLocalStorageへ保存
      localStorage.setItem('store'), JSON.stringify(state))
    },
    load(state) {
      if (localStorage.getItem('store')) {
        // LocalStorageから取得したJson文字列をパース
        const store = JSON.parse(localStorage.getItem('store'))
        // stateを置き換えます。
        this.replaceState(Object.assign(state, store))

        // ※ ちなみに以下はNGです。stateプロパティは読み取り専用なので。
        // this.state = store
      }
    }
  },
  actions: {
    doSave({commit}) {
      commit('save')
    },
    doLoad({commit}) {
      commit('load')
    }
  }
})
```