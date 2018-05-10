<template>
  <div class="home">
    <div class="home-parallax">
      <div class="home-parallax-content">
        <h1>Emazing FE</h1>
        <p>Professional and Effective</p>
        <p>Rough but Optimistic</p>
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
    height 100vh
    width 100%
    overflow hidden
    position relative
    text-align center

    .home-parallax-content {
      position absolute
      width 100%
      top: 50%
      left 50%
      transform translate(-50%, -50%)
      color $white-color

      h1 {
        font-size 60px
        margin 0
      }
      p {
        font-size 40px
      }
    }
  }

  .introduction {
    color $white-color
    font-size 24px
  }

</style>