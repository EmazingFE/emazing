import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home'
import Recruit from '@/views/Recruit'
import Activity from '@/views/Activity'

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
    name: 'home',
    component: Home
  },
  {
    path: '/recruit',
    name: 'recruit',
    component: Recruit
  },
  {
    path: '/activity',
    name: 'activity',
    component: Activity
  }
]

export default new VueRouter({
  routes,
  mode: 'hash',
  scrollBehavior
})
