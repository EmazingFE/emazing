<template>
  <div class="emazing-card" @click="handleClick">
    <img class="card-img" :src="info.img"/>
    <div class="card-info">
      <div class="card-tag">
        <span class="title-first-color">{{ info.tag }}</span>
        <span class="title-third-color">{{ info.author }}</span>
        <span class="title-second-color">{{ info.date }}</span>
      </div>
      <h2>{{ info.title }}</h2>
      <p>{{ info.description }}</p> 
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      info: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleClick (e) {
        if (!this.current) {
          this.$emit('click', e)
        }
      }
    }
  }
</script>

<style lang="sass">
  .emazing-card
    width: 360px
    cursor: pointer
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05)
    &:hover
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    > img
      width: 360px
      height: 260px
      border-radius: 4px
      box-shadow: 0 2px 20px 0 #f5f7fa
    > h2
      font-size: 20px
      color: #303133
    > p
      font-size: 16px
      color: #909399
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 3
      overflow: hidden
    .card-info
      padding: 5px 30px
    .card-tag
      margin-top: 30px
      > span
        margin-right: 10px
</style>