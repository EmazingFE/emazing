<template>
  <div class="fun-body flex align-center justify-center">
    <img :src="continueImg" id="continue-img" draggable=false>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        continueImg: require('static/continue.png')
      }
    }
  }
</script>

<style lang="sass">
  #continue-img
    max-width: 5rem
    min-width: 2rem
    width: 100%
</style>