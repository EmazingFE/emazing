<template>
  <div
    @mouseleave="onmouseleave"
    @mouseover="onmouseover"
    :class="{'hover': hover}"
    class="member">
    <image-container
      :src="memberNormalPhoto"
      ref="normalPhoto"
      class="member-photo"></image-container>
    <div class="member-hover-layer">
      <image-container
        :src="memberHoverPhoto"
        class="member-hover-photo"></image-container>
      <div
        :class="{'fill': love}"
        @click="toggleLove"
        class="member-love">
        <icon :name="heartIconName"></icon>
      </div>
    </div>
  </div>
</template>
<script>
  import ImageContainer from './ImageContainer.vue'
  import Heart from './Heart.vue'

  export default {
    components: {
      Heart,
      ImageContainer
    },
    props: {
      data: {
        type: Object,
        default: true
      }
    },
    data () {
      return {
        love: false,
        hover: false
      }
    },
    mounted () {
      this.love = !!this.memberLove
    },
    computed: {
      member () {
        return this.data || {}
      },
      memberName () {
        return this.member.name
      },
      memberDirectory () {
        return this.member.directory
      },
      memberLove () {
        return this.member.love
      },
      memberNormalPhoto () {
        return require(`static/${this.memberDirectory}/normal.jpg`)
      },
      memberHoverPhoto () {
        return require(`static/${this.memberDirectory}/hover.jpg`)
      },
      width () {
        return this.$el.clientWidth
      },
      heartIconName () {
        return this.love ? 'heart' : 'heart-o'
      }
    },
    methods: {
      toggleLove () {
        console.info(123)
        this.love = !this.love
      },
      onmouseover () {
        this.hover = true
      },
      onmouseleave () {
        this.hover = false
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../styles/var.styl'

  .member {
    width 100%
    position relative
    overflow hidden

    &.hover {
      .member-hover-layer {
        opacity 1
      }
    }
  }

  .member-hover-layer {
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    opacity  0
    background-color rgba(0, 0, 0, 0.6)
    transition all .5s ease
    display flex
    align-items center
    justify-content center
  }

  .member-photo {
    width 100%
    display block
    transition all .5s ease
  }

  .member-hover-photo {
    position absolute
    top 0
    left 0
    right 0
    width 100%
  }

  .member-footer {
    transition height .4s ease
    height 0
    overflow hidden
  }

  .member-love {
    position absolute
    right 10px
    bottom 10px
    width 20px
    height 20px
    color white
    cursor pointer
    &.fill {
      color red
    }
    svg {
      width 100%
      height 100%
    }
  }

</style>