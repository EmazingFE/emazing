import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home'

Vue.use(VueRouter)

const scrollBehavior = () => {
  return {
    x: 0,
    y: 0
  }
}

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  },
]

export default new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior
})
