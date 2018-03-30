<template>
  <div class="water-fall">
    <div
      :key="$column"
      :style="{'width': listWidth}"
      v-for="(column, $column) in waterfallList"
      class="water-fall-list">
      <member-snap-shot
        :key="$row"
        :data="item"
        v-for="(item, $row) in column"></member-snap-shot>
    </div>
  </div>
</template>
<script>
  import MemberSnapShot from './MemberSnapshot.vue'
  export default {
    components: {
      MemberSnapShot
    },
    props: {
      list: Array
    },
    data () {
      return {
        columns: 4
      }
    },
    created () {
      this.updateColumns()
    },
    computed: {
      waterfallList () {
        let fallList = Array.from({length: this.columns}, v => []);
        (this.list || []).forEach((item, index) => {
          fallList[index % this.columns]['push'](item)
        })
        return fallList
      },
      listWidth () {
        return (100 / this.columns) + '%'
      }
    },
    methods: {
      updateColumns () {
        let documentWidth = document.documentElement.clientWidth
        if (documentWidth <= 375) {
          this.columns = 2
        } else if (documentWidth <= 1024) {
          this.columns = 3
        } else {
          this.columns = 4
        }
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .water-fall {
    margin-top 40px
    &:after {
      content ''
      clear both
    }
  }
  .water-fall-list {
    float left
  }

</style>