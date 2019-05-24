<template>
  <div
    :class="{ 'is-current': current }"
    class="emazing-breadcrumb-item"
    @click="handleClick">
    <span class="emazing-breadcrumb-text">
      <slot></slot>
    </span>
    <span class="emazing-breadcrumb-separator-line" v-if="!current"> / </span>
  </div>
</template>

<script>

  export default {
    name: 'BreadcrumbItem',
    computed: {
      breadcrumbList () {
        return this.$parent.children
      },
      index () {
        return this.breadcrumbList.indexOf(this)
      },
      current () {
      	return this.index === this.breadcrumbList.length - 1
      }
    },
    created () {
      this.$parent.addChild(this)
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

<style lang="sass" scoped>
.emazing-breadcrumb-item
  cursor: pointer
  color: #303133
  font-size: 16px
  &.is-current
    cursor: initial
    .emazing-breadcrumb-text
      font-weight: normal
      color: #1989FA    

.emazing-breadcrumb-text
  font-weight: 500

.emazing-breadcrumb-separator-line
  margin: 0 10px

</style>
