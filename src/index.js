import Vue from 'vue'
import anime from 'animejs'

import 'vue-awesome/icons/heart'
import 'vue-awesome/icons/heart-o'
import Icon from 'vue-awesome/components/Icon'
import welcome from './components/welcome'
import AppHeader from './components/header'
import AppFooter from './components/footer'
import Stars from './components/stars'
import Breadcrumb from './components/breadcrumb/breadcrumb'
import BreadcrumbItem from './components/breadcrumb/breadcrumb-item'
import Card from './components/card'

import '@napos/vue-kiwi'
import '@napos/vue-kiwi/src/styles/index.sass'
import router from '@/router'
import App from './App.vue'
import '@/styles/app.sass'
import 'highlight.js/styles/default.css'

// let Three = require('three')
// window.THREE = Three
// if (window.THREE.OrbitControls === undefined) {
// 	let OrbitControls = require('three-orbit-controls')(THREE)
// 	// console.error(2,require('three-orbit-controls')(THREE))
// 	window.THREE.OrbitControls = OrbitControls
// }

Vue.component('icon', Icon)
Vue.component('welcome', welcome)
Vue.component('AppHeader', AppHeader)
Vue.component('AppFooter', AppFooter)
Vue.component('Stars', Stars)
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('BreadcrumbItem', BreadcrumbItem)
Vue.component('Card', Card)

window.anime = anime

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  router
})
