<template>
  <canvas class="heart-c" @click.stop="handleClick"></canvas>
</template>
<script>
  import Heart from './widget/heart'
  import { on, off } from '@/utils/dom'
  export default {
    props: {
      fillColor: {
        type: String,
        default: 'red'
      },
      lineColor: {
        type: String,
        default: 'white'
      },
      fill: Boolean
    },
    mounted () {
      this.heart = new Heart(this.$el)
      this.render()
      // add listener
      on(window)('resize', this.render)
    },
    beforeDestroyed () {
      off(window)('resize', this.render)
    },
    methods: {
      getScale () {
//        let documentWidth = document.documentElement.clientWidth
        return 1
      },
      render () {
        let { fillColor, lineColor, fill } = this
        let scale = this.getScale()
        if (this.heart) {
          this.heart.draw({
            fillColor,
            lineColor,
            fill,
            scale
          })
        }
      },
      handleClick (e) {
        this.$emit('click', e)
      }
    },
    watch: {
      fill () {
        this.render()
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .heart-c {
    width 40px
    height 40px
    cursor pointer
  }
</style>