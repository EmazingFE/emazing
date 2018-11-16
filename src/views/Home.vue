<template>
  <div class="emazing-home">
    <!-- banner -->
    <div class="home-banner">
      <div class="home-banner-content">
        <div class="home-banner-left">
          <h1>{{ introduction.title }}</h1>
          <h2>{{ introduction.subtitle }}</h2>
          <p>{{ introduction.description }}</p>
        </div>
        <div class="home-banner-right">       
        </div>
      </div>  
    </div>
    <!-- blog -->
    <div class="home-body">
      <div class="home-body-title">
        <h1 class="title-first">{{blogObj.name}}</h1>
        <h1 class="title-second"> / </h1>
        <h1 class="title-third">{{blogObj.englishName}}</h1>
      </div>
      <div class="home-body-content">
        <div class="home-body-content-box box-right"
             :key="$index"
             v-for="(item, $index) in blogObj.blogs">
          <img  class="box-img" :src="item.img"/>
          <div class="box-tag">
            <span class="title-first">{{ item.tag }}</span>
            <span class="title-third">{{ item.author }}</span>
            <span class="title-second">{{ item.date }}</span>
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>
        <div class="home-body-content-global">
          <div class="global-total">{{blogObj.total}}</div>
          <div class="global-name">{{blogObj.typeName}}</div>
          <div class="global-btn">
            <span>{{blogObj.btnName}}</span>
            <img  class="btn-img" :src="rightLightImg"/>
          </div>
        </div>      
      </div>  
    </div>
    <!-- project -->
    <div class="home-body">
      <div class="home-body-title">
        <h1 class="title-first">{{projectObj.name}}</h1>
        <h1 class="title-second"> / </h1>
        <h1 class="title-third">{{projectObj.englishName}}</h1>
      </div>
      <div class="home-body-content">
        <div class="home-body-content-global">
          <div class="global-total">{{projectObj.total}}</div>
          <div class="global-name">{{projectObj.typeName}}</div>
          <div class="global-btn">
            <span>{{projectObj.btnName}}</span>
            <img  class="btn-img" :src="rightLightImg"/>
          </div>
        </div>
        <div class="home-body-content-box box-left"
             :key="$index"
             v-for="(item, $index) in projectObj.blogs">
          <img  class="box-img" :src="item.img"/>
          <div class="box-tag">
            <span class="title-first">{{ item.tag }}</span>
            <span class="title-third">{{ item.author }}</span>
            <span class="title-second">{{ item.date }}</span>
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>         
      </div> 
    </div>
    <!-- team -->
    <div class="home-team">
      <div class="home-team-content">
        <div class="home-team-left">  
          <img  class="box-img" :src="teamObj.img"/>  
        </div>
        <div class="home-team-right">
           <div class="home-team-title">
            <h1 class="title-first">{{teamObj.name}}</h1>
            <h1 class="title-second"> / </h1>
            <h1 class="title-third">{{teamObj.englishName}}</h1>
          </div>
          <div class="home-team-desc">{{teamObj.description}}</div>
          <div class="home-team-btn">
            <span>{{teamObj.btnName}}</span>
            <img  class="btn-img" :src="rightDarkImg"/>
          </div>
        </div> 
      </div> 
    </div>

   </div>
 </template>
 <script>
  import rightLightImg from '~/icon/arrow-right-light.svg'
  import rightDarkImg from '~/icon/arrow-right-dark.svg'
  import blog1Img from '~/blog/blog1.png'
  import team1Img from '~/team/team1.jpg'
  export default {
    data () {
      return {
        rightLightImg: rightLightImg,
        rightDarkImg: rightDarkImg,
        blog1Img: blog1Img,
        team1Img: team1Img, 
        introduction: {
          title: '饿了么中后台前端团队',
          subtitle: 'Emazing FE',
          description: 'Self-improving happily every day!'
        },
        blogObj: {
          name: '博客',
          englishName: 'Blog',
          typeName: '文章',
          btnName: '全部文章',
          total: 136,
          blogs: [
            {
              img: blog1Img,
              author: '王超楠',
              tag: '技术共享',
              date: '2018.01.02',
              title: '前端数据流管理方案',
              description: '我们在谈前端数据流管理之前，先来看一下组件化相关的概念，并以此为基础来讨论下基于Vue的开发过程中的数据流管理方案。我们在开发过程中，将后端返回的数据和控制UI状态的数据统称为state。现在我们知道，一个组件的state，有外部传入的，也有自身内部私有的。我们将围绕组件内部和外部state来探讨数据流管理方案。'
            },
            {
              img: blog1Img,
              author: '王超楠',
              tag: '技术共享',
              date: '2018.11.18',
              title: '前端数据流管理方案',
              description: 'G3D 是一款基于 WebGL 的 JavaScript 3D 渲染引擎，借助 GCanvas，G3D 可以运行在 Weex，ReactNative 等 hybrid 环境下。G3D 由淘宝…'
            },
          ]
        },
        projectObj: {
          name: '项目',
          englishName: 'Project',
          typeName: '项目',
          btnName: '全部项目',
          total: 82,
          blogs: [
            {
              img: blog1Img,
              author: '王超楠',
              tag: '技术共享',
              date: '2018.01.02',
              title: '前端数据流管理方案',
              description: '我们在谈前端数据流管理之前，先来看一下组件化相关的概念，并以此为基础来讨论下基于Vue的开发过程中的数据流管理方案。我们在开发过程中，将后端返回的数据和控制UI状态的数据统称为state。现在我们知道，一个组件的state，有外部传入的，也有自身内部私有的。我们将围绕组件内部和外部state来探讨数据流管理方案。'
            },
            {
              img: blog1Img,
              author: '王超楠',
              tag: '技术共享',
              date: '2018.11.18',
              title: '前端数据流管理方案',
              description: 'G3D 是一款基于 WebGL 的 JavaScript 3D 渲染引擎，借助 GCanvas，G3D 可以运行在 Weex，ReactNative 等 hybrid 环境下。G3D 由淘宝…'
            },
          ]
        },
        teamObj: {
          name: '团队',
          englishName: 'Team',
          img: team1Img,
          btnName: '加入我们',
          description: '我们是饿了么中后台前端开发团队（Emazing FE ），承担着饿了么中后台前端基础设施、数十个业务产品的研发。我们有着前沿的技术选型，欢快的工作氛围，多元的团队建设，饱足的成长食粮。在这里有一群年轻有趣的小伙伴，加入我们一起工作一起玩。Self-improving happily every day!Challenge complicated business, design awesome architecture!'
        }
      }
    },
    mounted () {
      // let jumbotron = new Jumbotron(this.$refs.el)
      // jumbotron.render()
    },
    methods: {
      viewModule (module) {
        if (module.route) {
          this.route(module.route)
        }
        if (module.link) {
          this.goto(module.link)
        }
      },
      route (name) {
        this.$router.push({
          name
        })
      },
      goto (url) {
        let a = document.createElement('a')
        a.setAttribute('href', url)
        a.setAttribute('target', '_blank')
        a.click()
       }
     }
   }
 </script>
<style lang="sass" rel="stylesheet/sass" scoped>
  .emazing-home
    width: 100%
  .home-banner
    width: 100%
    height: 500px
    background-color: $homeBackgroudColor
  .home-banner-content
    width: $pageWidth
    height: 100%
    box-sizing: border-box
    display: flex
    justify-content: space-between
    margin: 0 auto
  .home-banner-left
    > h1, h2, p
      margin: 0
      color: #ffffff
    > h1
      margin-top: 106px
    > h2
      margin: 24px 0
  
  .home-body
    margin:  60px auto 130px auto
    width: $pageWidth
    box-sizing: border-box
  .home-body-title
    text-align: center
    > h1
      margin: 0
      display: inline-block
  .title-first
    color: #303133
  .title-second
    color: #c0c4cc
  .title-third
    color: #909399
  .home-body-content
    margin-top: 30px
    display: flex
  .box-right
    margin-right: 30px
  .box-left
    margin-left: 30px
  .home-body-content-box
    width: 360px
    cursor: pointer
    &:hover
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05)
    > img
      width: 360px
      height: 260px
      border-radius: 4px
      box-shadow: 0 20px 20px 0 #f5f7fa
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
    .box-tag
      margin-top: 30px
      > span
        margin-right: 10px

  .home-body-content-global
    width: 360px
    height: 440px
    color: #ffffff
    font-weight: 500
    border-radius: 4px
    background-color: #1989fa
    text-align: center
    cursor: pointer
    &:hover
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05)
    .global-total
      margin-top: 100px
      font-size: 64px
    .global-name
      font-size: 20px
    .global-btn
      margin: 50px auto 0 auto
      width: 119px
      height: 40px
      border-radius: 4px
      border: solid 2px #ffffff
      font-size: 14px
      line-height: 40px
      cursor: pointer
      &:hover
        background-color: #7cb6ff
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
    .btn-img
      margin-top: -5px
      vertical-align: middle

  .home-team
    width: 100%
    display: inline-block
    background-color: #f8f8f8
    .home-team-content
      width: $pageWidth
      margin:  100px auto
      display: flex
    .home-team-left
      > img
        width: 750px
        height: 400px
    .home-team-right 
      margin-left: 30px
      width: 360px
      height: 400px
      color: #909399
      text-align: left
      .home-team-title
        text-align: left
        > h1
          margin: 0
          display: inline-block
      .home-team-desc
        margin: 40px 0 52px 0
        font-size: 16px
        color: #909399
      .home-team-btn
        width: 119px
        height: 40px
        border-radius: 4px
        border: solid 2px #303133
        font-size: 14px
        color: #303133
        text-align: center
        line-height: 40px
        cursor: pointer
        &:hover
          background-color: #f0f2f5
          box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
      .btn-img
        margin-top: -5px
        vertical-align: middle
</style>
