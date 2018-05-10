<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
  import checkEgg from '@/utils/egg'
  export default {
    mounted() {
      checkEgg().catch(() => {
        this.$router.push('/welcome')
      })
    }
  }
</script>
<style lang="sass">
  
  .fun-body
    padding: 20px
    height: 100vh
    overflow: auto
    box-sizing: border-box
    p
      margin: 0
</style>