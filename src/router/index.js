import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home'
import Blog from '@/views/blog'
import BlogDetail from '@/views/blog/blog-detail'
import About from '@/views/about'
import Recruit from '@/views/recruit'
// docs about blog
import docsRoutes from '@/router/docs'

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
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/blog/detail',
    name: 'blog-detail',
    component: BlogDetail,
    children: docsRoutes
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
  {
    path: '/recruit',
    name: 'recruit',
    component: Recruit
  }
]

export default new VueRouter({
  routes,
  mode: 'hash',
  scrollBehavior
})
