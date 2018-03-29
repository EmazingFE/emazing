<template>
  <div id="app">
    <div
      :class="{'mini': scrolled}"
      class="app-header">
      <ul class="navbar">
        <li
          :key="nav.path"
          :class="{'active': nav.active}"
          @click="viewModule(nav)"
          class="navbar-item"
          v-for="nav in navs">
          {{ nav.name }}
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        navs: [
          {
            path: 'home',
            name: '团队介绍',
            active: false
          },
          {
            path: 'recruit',
            name: '招聘',
            active: false
          },
          {
            path: 'activity',
            name: '活动',
            active: false
          }
        ],
        scrollTop: 0
      }
    },
    created () {
      this.syncRoute()
    },
    mounted () {
      this.startListening()
    },
    beforeDestroyed () {
      this.stopListening()
    },
    computed: {
      scrolled () {
        return !!this.scrollTop
      }
    },
    methods: {
      onscroll (e) {
        let elm = document.documentElement
        this.scrollTop = elm.scrollTop
      },
      startListening () {
        window.addEventListener('scroll', this.onscroll, false)
      },
      stopListening () {
        window.removeEventListener('scroll', this.onscroll, false)
      },
      syncRoute () {
        this.navs.forEach(nav => {
          nav.active = this.$route.name === nav.path
        })
      },
      viewModule (nav) {
        this.$router.push({
          name: nav.path
        })
      }
    },
    watch: {
      $route () {
        this.syncRoute()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import './styles/var.styl'

  ul, ol {
    list-style none
    margin 0
    padding 0
  }

  .app-header {
    position fixed
    top 0
    left 0
    right 0
    display block
    height 80px
    transition height .4s ease
    text-align center
    border-bottom 1px solid $border-color
    background-color $white-color
    z-index 10
    &.mini {
      height 60px
    }
  }

  .navbar {
    display flex
    align-items center
    justify-content center
    height 100%
    &:after {
      content ' '
      clear both
    }
  }

  .navbar-item {
    padding 6px 15px
    &.active {
      color $primary-color
    }
  }

  #app {
    width 100%
    padding-top 60px
  }
</style>