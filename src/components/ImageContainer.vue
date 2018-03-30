<template>
  <img :src="src" @load="onload"/>
</template>
<script>
  export default {
    props: {
      src: String
    },
    data () {
      return {
        width: 0,
        height: 0,
        ratio: 1
      }
    },
    methods: {
      onload () {
        this.width = this.$el.width
        this.height = this.$el.height
        this.ratio = this.width / this.height
        this.$emit('load')
      }
    }
  }
</script>