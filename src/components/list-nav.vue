<template>
  <div class="nav-wrapper">
    <div class="nav-item"
      v-for="item in navs"
      :class="{'active': isActive(item)}"
      @click="changeActive(item)"
      :key="item">
      {{ item }}  
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      navs: Array,
    },
    data() {
      return {
        activeTab: null
      }
    },
    created() {
      this.activeTab = this.navs[0]
    },
    methods: {
      isActive(tab) {
        return tab === this.activeTab
      },
      changeActive(tab) {
        this.activeTab = tab
        this.$emit('click', tab)
      }
    }
  }
</script>
<style lang="sass">
  .nav-wrapper
    @extend %flex, %bg-minor, %h6, %f-500
    margin: 30px 0
    padding: 30px 40px
    .nav-item
      margin-right: 100px
      cursor: pointer
      &.active
        @extend %blue-primary
</style>