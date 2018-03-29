import Vue from 'vue'
import router from '@/router'
import App from './App.vue'

const removeLoading = () => {
  let loading = document.getElementById('loading')
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
