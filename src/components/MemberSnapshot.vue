<template>
  <div class="member">
    <img :src="memberPhoto" class="member-photo"/>
    <div class="member-hover-layer">
      <p class="member-name">{{ memberName }}</p>

    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: true
      }
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
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../styles/var.styl'

  .member {
    width 100%
    position relative
    &:hover {
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
    cursor pointer
    display flex
    align-items center
    justify-content center
  }

  .member-photo {
    width 100%
    display block
  }

  .member-name {
    color $white-color
    font-size 18px
    letter-spacing 2px
  }
</style>