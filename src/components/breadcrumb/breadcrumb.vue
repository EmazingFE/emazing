<template>
  <div class="emazing-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'breadcrumb',
    data () {
      return {
        children: []
      }
    },
    methods: {
      addChild (child) {
        let index = this.children.indexOf(child)
        if (index !== -1) {
          this.children.splice(index, 1)
        }
        this.children.push(child)
      }
    },
  }
</script>
<style lang="sass" scoped>
.emazing-breadcrumb
  display: flex
  align-items: center
  position: relative
  margin: 63px 0
</style>
