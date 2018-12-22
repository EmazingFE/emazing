<template>
  <div id="app">
    <welcome class="welcome" @removeWelcome="removeWelcome" v-if="welcomeShow"></welcome>
 	  <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>
  import welcome from './components/welcome'
  import AppHeader from './components/header'
  import AppFooter from './components/footer'

  export default {
    components: {
      welcome,
      AppHeader,
      AppFooter
    },
    data() {
      return {
        welcomeShow: true
      }
    },
    methods: {
      removeWelcome() {
        this.welcomeShow = false
      }
    }
  }
</script>

<style lang="sass" scoped>
</style>