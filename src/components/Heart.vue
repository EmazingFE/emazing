<template>
  <canvas class="heart-c" @click.stop="handleClick"></canvas>
</template>
<script>
  import Heart from './widget/heart'
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
    },
    methods: {
      render () {
        let { fillColor, lineColor, fill } = this
        if (this.heart) {
          this.heart.draw({
            fillColor,
            lineColor,
            fill
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