import Vue from 'vue'
import VueRouter from 'vue-router'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/setting',
    name: 'Setting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  base: process.env.VUE_APP_PUBLIC_PATH,
  routes
})

export default router
