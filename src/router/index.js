import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home'
import About from '@/views/about'

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
  {
    path: '/blog',
    name: 'blog',
    component: Home
  },
  {
    path: '/project',
    name: 'project',
    component: Home
  },
  {
    path: '/team',
    name: 'team',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
]

export default new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior
})
