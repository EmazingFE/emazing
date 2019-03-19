import Vue from 'vue'
import anime from 'animejs'

import 'vue-awesome/icons/heart'
import 'vue-awesome/icons/heart-o'
import Icon from 'vue-awesome/components/Icon'
import welcome from './components/welcome'
import AppHeader from './components/header'
import AppFooter from './components/footer'
import Particles from './components/particles'
import Breadcrumb from './components/breadcrumb/breadcrumb'
import BreadcrumbItem from './components/breadcrumb/breadcrumb-item'
import Card from './components/card'

import '@napos/vue-kiwi'
import '@napos/vue-kiwi/src/styles/index.sass'
import router from '@/router'

import App from './App.vue'

import '@/styles/app.sass'

Vue.component('icon', Icon)
Vue.component('welcome', welcome)
Vue.component('AppHeader', AppHeader)
Vue.component('AppFooter', AppFooter)
Vue.component('Particles', Particles)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component('Card', Card)

window.anime = anime

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  router
})
