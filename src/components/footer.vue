<template>
  <!-- footer -->
  <div class="emazing-footer">
    <div class="emazing-footer-content">Copyright © 2018 Emazing. All Rights Reserved.</div>
  </div>
</template>

<script>
</script>

<style lang="sass" scoped>
  @import '../styles/var'
  .emazing-footer 
    width: 100%
    height: $footerHeight
    box-sizing: border-box
    background-color: $backgroudColor
    box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.03)
  .emazing-footer-content 
    width: $pageWidth
    height: 100%
    margin: 0 auto
    padding: 50px 0
    box-sizing: border-box
    font-size: 18px
    color: $lightGrayColor
</style>
