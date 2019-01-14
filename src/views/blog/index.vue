<template>
  <div class="page-body">
    <list-nav :navs="navs"></list-nav>
    <kw-row class="blog-container" gutter-x="30">
      <kw-col span="8" class="blog-item"
        v-for="(blog, $i) in blogs"
        :key="$i">
        <img :src="blog.img">
        <p class="category">
          <span>{{ blog.tag }}</span>
          <span class="date">{{ blog.date }}</span>
        </p>
        <p class="title">{{ blog.title }}</p>
        <p class="desc">{{ blog.description }}</p>
        <p class="author">
          <span>{{ blog.author }}</span>
          <span>{{ blog.views }}</span>
        </p>
      </kw-col>
    </kw-row>
  </div>
</template>

<script>
  import listNav from '@/components/list-nav'
  import blog1Img from '~/blog/blog1.png'

  export default {
    components: {
      listNav
    },
    data() {
      return {
        navs: [
          '全部文章(1)',
          '技术共享(1)',
        ],
        blogs: [
          {
            img: blog1Img,
            author: '王超楠',
            tag: '技术共享',
            date: '2018.01.02',
            views: 2353,
            title: '前端数据流管理方案',
            description: '我们在谈前端数据流管理之前，先来看一下组件化相关的概念，并以此为基础来讨论下基于Vue的开发过程中的数据流管理方案。我们在开发过程中，将后端返回的数据和控制UI状态的数据统称为state。现在我们知道，一个组件的state，有外部传入的，也有自身内部私有的。我们将围绕组件内部和外部state来探讨数据流管理方案。'
          },
          {
            img: blog1Img,
            author: '王超楠',
            tag: '技术共享',
            date: '2018.11.18',
            views: 2353,
            title: '前端数据流管理方案',
            description: 'G3D 是一款基于 WebGL 的 JavaScript 3D 渲染引擎，借助 GCanvas，G3D 可以运行在 Weex，ReactNative 等 hybrid 环境下。G3D 由淘宝…'
          },
        ]
      }
    },
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
</style>