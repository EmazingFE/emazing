<template>
  <div class="home">
    <div class="home-parallax">
      <div class="home-parallax-content">
        <h1>Emazing</h1>
      </div>
      <parallax :speed-factor="0.6">
        <img :src="cityAsset" alt="very cool bg" />
      </parallax>
    </div>
    <water-fall :list="members"></water-fall>
  </div>
</template>
<script>
  import Parallax from 'vue-parallaxy'
  import WaterFall from '@/components/WaterFall.vue'
  import Members from '@/members.json'

  import City from 'static/city.jpg'

  export default {
    components: {
      Parallax,
      WaterFall
    },
    data () {
      return {
        cityAsset: City,
        members: Members
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../styles/var.styl"

  .home-parallax {
    height 360px
    width 100%
    overflow hidden
    position relative

    .home-parallax-content {
      position absolute
      top: 50%
      left 50%
      transform translate(-50%, -50%)
      color $white-color

      h1 {
        margin 0
      }
    }
  }

  .introduction {
    color $white-color
    font-size 24px
  }

</style>