<template>
  <div>
    <div class="emazing-header"
      :class="{'is-home': isIndexView}">
      <div class="header">
        <div class="header-left">
          <img :src="emazingLogo"/>
        </div>
        <div class="header-right">
          <div
            class="nav"
            role="nav"
            :class="{
              'active': isActiveRoute(module.route),
              'is-home': isIndexView
             }"
            @click="viewModule(module)"
            :key="idx"
            v-for="(module, idx) in modules">
            <span>{{ module.text }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="header-blank"
      :class="{'is-home': isIndexView}"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        emazingLogo: 'https://fuss10.elemecdn.com/f/c9/852ed58b43497f58aa60eee6f33dfpng.png',
        modules: [
          {
            text: '首页',
            route: 'index'
          },
          {
            text: '博客',
            route: 'blog'
          },
          {
            text: '项目',
            route: 'project'
          },
          {
            text: '团队生活',
            route: 'team'
          },
          {
            text: '关于',
            route: 'about'
          }
        ],
      }
    },
    computed: {
      isIndexView () {
        return this.$route.name === 'index'
      }
    },
    methods: {
      viewModule (module) {
        if (module.route) {
          this.route(module.route)
        }
      },
      route (name) {
        this.$router.push({
          name
        })
      },
      isActiveRoute (routeName) {
        const matchedRoutes = this.$route.matched
        let hasMatched = false

        matchedRoutes.forEach(mr => {
          if (!hasMatched) {
            hasMatched = mr.name === routeName
          }
        })
        return hasMatched
      },
    }
  }
</script>

<style lang="sass">
  .emazing-header
    @extend .shadow-bottom, .h4, .f-500
    position: fixed
    top: 0
    left: 0
    z-index: 1
    width: 100%
    height: $headerHeight
    background: #FFF
    &.is-home
      background: rgb(42, 52, 73)
      color: #FFF
      box-shadow: none

  .header-blank
    height: $headerHeight
    &.is-home
      background-color: $homeBackgroudColor
  .header
    width: $pageWidth
    height: 100%
    box-sizing: border-box
    padding-bottom: 30px
    padding-top: 30px
    display: flex
    justify-content: space-between
    align-items: center
    margin: 0 auto

  .header-left
    img
      width: 130px
      margin-right: 14px
      vertical-align: middle

  .nav
    display: inline-flex
    text-transform: uppercase
    cursor: pointer
    position: relative
    transition: opacity .4s ease
    &:after
      content: ''
      position: absolute
      bottom: -14px
      left: 50%
      right: 50%
      height: 36px
      border-bottom: 4px solid #1989fa
      opacity: 0
      transition: all .4s ease
    &.active,
    &:hover
      opacity: 1
      &:after
        left: 0
        right: 0
        opacity: 1
    &:not(:last-of-type)
      margin-right: 40px
</style>