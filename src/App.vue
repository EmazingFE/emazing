<template>
  <div id="app">
    <welcome class="welcome" @removeWelcome="removeWelcome" v-if="welcomeShow"></welcome>
 	  <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script>

  export default {
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