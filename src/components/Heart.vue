<template>
  <canvas class="heart-c"></canvas>
</template>
<script>
  export default {
    props: {
      color: {
        type: String,
        default: ''
      },
      fill: Boolean
    },
    data () {
      return {
        width: 0,
        height: 0
      }
    },
    mounted () {
      this.antiTooth(2)
      this.render()
    },
    computed: {
      canvas () {
        return this.$el
      }
    },
    methods: {
      getStyle (dom, attr) {
        let value = null
        if (dom.currentStyle) {
          value = dom.currentStyle[attr]
        } else {
          value = document.defaultView.getComputedStyle(dom, null)[attr]
        }
        return value
      },
      // 抗锯齿
      antiTooth (ratio) {
        this.width = parseFloat(getStyle(this.canvas, 'width'))
        this.height = parseFloat(getStyle(this.canvas, 'height'))

        this.canvas.style.width = this.width + 'px'
        this.canvas.style.height = this.height + 'px'
        this.canvas.height = 2 * this.height * ratio
        this.canvas.width = 2 * this.width * ratio

        this.ctx.scale(ratio * 2, ratio * 2)
      },
      render () {
        let ctx = this.canvas.getContext('2d')

      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .heart-c
    width 20px
    height 20px
</style>