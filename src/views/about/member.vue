<template>
  <div class="member-item">
    <div class="avatar">{{ member.name[0] }}</div>
      <div class="member-info">
        <div class="h5 mt1 mb3">{{ member.name }}</div>
        <div class="mb3">{{ member.position }}</div>
        <div class="member-desc">{{ member.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      member: Object,
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
      @extend .flex, .mb4
      width: 350px
      .avatar
        @extend .flex, .align-center, .justify-center ,.mr4, .border-radius
        width: 130px
        height: 130px
        background: #1989fa
        font-size: 54px
        color: #FFF
      .member-desc
        @extend .black-assist
        font-size: 12px
</style>