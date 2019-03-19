<template>
  <div class="page-body">
    <list-nav :navs="navs" @click="changeNav"></list-nav>
    <kw-row class="blog-container" gutter-x="30" content-wrap>
      <kw-col span="8" class="blog-item"
        v-for="(blog, $i) in blogs"
        :key="$i"
        v-show="!activeTab || activeTab.indexOf(blog.tag) !== -1">
        <card :info="blog" @click="gotoBlogDetail(blog)"></card>
      </kw-col>
    </kw-row>
  </div>
</template>

<script>
  import listNav from '@/components/list-nav'
  import { blogs } from '@/constants/docs'
  import { gotoBlogDetail } from '@/utils/tool-func'

  export default {
    components: {
      listNav
    },
    data() {
      return {
        navs: [],
        blogs: blogs,
        gotoBlogDetail: gotoBlogDetail,
        activeTab: null
      }
    },
    created () {
      this.generateNav()
    },
    methods: {
      route (name) {
        this.$router.push({
          name
        })
      },
      generateNav () {
        if (blogs) {
          this.navs.push('全部文章(' + blogs.length + ')')
          let navContainer = {}
          blogs.forEach(blog => {
            navContainer[blog.tag] = navContainer[blog.tag] || []
            navContainer[blog.tag].push(blog)
          })         

          let navName = Object.keys(navContainer)
          navName.forEach(nameItem => {
            this.navs.push(nameItem + '(' + navContainer[nameItem].length + ')')
          })
        }  
      },
      changeNav (tab) {
        this.activeTab = tab.indexOf('全部文章') !== -1 ? null : tab
      }
    }
  }  
</script>

<style lang="sass">
  .blog-container 
    .blog-item
      margin-bottom: 50px !important
</style>