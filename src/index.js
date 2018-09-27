import Vue from 'vue'
import router from '@/router'

import 'vue-awesome/icons/heart'
import 'vue-awesome/icons/heart-o'
import Icon from 'vue-awesome/components/Icon'

import App from './App.vue'

Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  router
})
