import Vue from 'vue'
import anime from 'animejs'

import 'vue-awesome/icons/heart'
import 'vue-awesome/icons/heart-o'
import Icon from 'vue-awesome/components/Icon'

import '@napos/vue-kiwi'
import '@napos/vue-kiwi/src/styles/index.sass'
import router from '@/router'

import App from './App.vue'

import '@/styles/app.sass'

Vue.component('icon', Icon)

window.anime = anime

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  router
})
