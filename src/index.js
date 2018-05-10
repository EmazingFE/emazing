import Vue from 'vue'
import router from '@/router'

import 'vue-awesome/icons/heart'
import 'vue-awesome/icons/heart-o'
import Icon from 'vue-awesome/components/Icon'

import App from './App.vue'

import './styles/global.sass'

Vue.component('icon', Icon)

const removeLoading = () => {
  let loading = document.getElementById('loading-wrapper')
  if (loading) {
    loading.parentNode.removeChild(loading)
  }
}

// remove loading
removeLoading()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
  router
})
