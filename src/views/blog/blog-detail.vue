<template>
  <div class="page-body">
    <!-- <list-nav :navs="navs"></list-nav> -->
    <breadcrumb>
      <breadcrumb-item @click="route('home')">首页</breadcrumb-item>
      <breadcrumb-item @click="route('blog')">博客</breadcrumb-item>
      <breadcrumb-item>{{ blogInfo.title }}</breadcrumb-item>
    </breadcrumb>
    <div class="blog-title">
      {{ blogInfo.title }}
    </div>
    <div class="blog-info">  
      <div class="blog-info-left">
        <img class="blog-info-avatar" :src="blogInfo.avatar" />
      </div>
      <div class="blog-info-right">
        <div>
          <span class="blog-info-author">作者：{{ blogInfo.author }}</span>
          <span>发表于：{{ blogInfo.date }}</span> 
        </div>
        <div>
          <span>{{ blogInfo.tag }}</span> 
        </div>
      </div>  
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import listNav from '@/components/list-nav'
  import { getBlogDetail } from '@/utils/tool-func'

  export default {
    components: {
      listNav
    },
    data() {
      return {
        navs: [
          '全部文章(1)',
          '技术共享(1)',
        ]
      }
    },
    computed: {
      blogInfo () {
        return getBlogDetail()
      }
    },
    methods: {
      route (name) {
        this.$router.push({
          name
        })
      }
    }
  }  
</script>

<style lang="sass">
  .blog-container 
    .blog-item
      img
        @extend %border-radius
        width: 100%
      .category
        @extend %mtb2
      .date
        @extend %ml1, %black-invalid
      .title
        @extend %mtb3, %h4, %f-500
  .blog-detail
    width: $pageWidth
    height: 100%
  .blog-title
    font-size: 24px
    color: #303133
    letter-spacing: 0
    line-height: 36px
  .blog-info
    display: flex
    align-items: center
    position: relative
    padding: 26px 0
    margin-bottom: 26px
    border-bottom: 1px solid #E4E7ED
    img
      margin-right: 16px
      width: 50px
      height: 50px
      border-radius: 50px
  .blog-info-right
    line-height: 26px
  .blog-info-author
    font-weight: 500
    margin-right: 10px
</style>