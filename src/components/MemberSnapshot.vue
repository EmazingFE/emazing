<template>
  <div class="member">
    <img :src="memberPhoto" class="member-photo"/>
    <div class="member-hover-layer">
      <p class="member-name">{{ memberName }}</p>
      <heart
        @click="toggleLove"
        class="member-love"
        :fill="love"></heart>
    </div>
  </div>
</template>
<script>
  import Heart from './Heart.vue'

  export default {
    components: {
      Heart
    },
    props: {
      data: {
        type: Object,
        default: true
      }
    },
    data () {
      return {
        love: false
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
      memberPhoto () {
        return this.member.photo
      },
      memberLove () {
        return this.member.love
      }
    },
    methods: {
      toggleLove () {
        this.love = !this.love
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
    &:hover {
      .member-hover-layer {
        opacity 1
      }
      .member-photo {
        transform scale(1.4)
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
    transition transform .5s ease
  }

  .member-name {
    color $white-color
    font-size 18px
    letter-spacing 2px

    &::selection {
      background none
    }
  }

  .member-love {
    position absolute
    bottom 10px
    right 10px
  }
</style>