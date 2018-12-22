<template>
  <div class="member-item">
    <div class="avatar">
      <img :src="avatar" v-if="member.avatar">
      <span v-else>{{ member.name[0] }}</span>
    </div>
      <div class="member-info">
        <div class="h5 mt1 mb3">{{ member.name }}</div>
        <div class="mb2 flex flex-wrap">
          <span v-for="tag in member.tags"
            class="tag"
            :style="style">{{ tag }}</span>
        </div>
        <div class="member-desc">{{ member.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      member: Object,
      color: String
    },
    computed: {
      avatar() {
        return `${this.member.avatar}?imageView2/2/w/500`
      },
      style() {
        return `border-color: ${this.color}; color: ${this.color}`          
      }
    },
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="sass" scoped>
  .member-item
    @extend %flex, %mb4
    width: 350px
    .tag
      @extend %mr1, %mb1, %ptb0, %plr1, %border-round, %border-radius
      line-height: 20px
    .avatar
      @extend %flex, %align-center, %justify-center, %mr4, %border-round, %border-radius-circle, %blue-primary
      // background: #1989fa
      flex-shrink: 0
      width: 130px
      height: 130px
      font-size: 54px
      overflow: hidden
      img
        width: 100%
        height: 100%
        object-fit: cover
    .member-desc
      @extend %black-minor
  .fade-in-right
    animation: fadeInRight 5s
  @-webkit-keyframes fadeInRight
    0%
      transform: translateX(150px)
    100%
      transform: translateX(0)
  @keyframes fadeInRight
    0%
      transform: translateX(150px)
    100%
      transform: translateX(0)
  

</style>