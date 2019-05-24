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
        <div class="home-banner-right" v-if="isMounted">
          <stars></stars>
          <!-- <solar></solar> -->
          <!-- <particles></particles>        -->
        </div>
      </div>  
    </div>
    <!-- blog -->
    <div class="home-body" v-if="blogObj && blogObj.blogs">
      <div class="home-body-title">
        <h1 class="title-first-color">{{blogObj.name}}</h1>
        <h1 class="title-second-color"> / </h1>
        <h1 class="title-third-color">{{blogObj.englishName}}</h1>
      </div>
      <div class="home-body-content">
        <card class="box-right"
          :key="$index"
          v-for="(item, $index) in blogObj.blogs"
          v-if="$index < 2"
          @click="gotoBlogDetail(item)"
          :info="item">
        </card>
        <div class="home-body-content-global">
          <div class="global-total">{{blogObj.blogs.length}}</div>
          <div class="global-name">{{blogObj.typeName}}</div>
          <div class="global-btn" @click="route('blog')">
            <span>{{blogObj.btnName}}</span>
            <img  class="btn-img" :src="rightLightImg"/>
          </div>
        </div>      
      </div>  
    </div>
    <!-- project -->
    <div class="home-body" v-if="projectObj.isShow">
      <div class="home-body-title">
        <h1 class="title-first-color">{{projectObj.name}}</h1>
        <h1 class="title-second-color"> / </h1>
        <h1 class="title-third-color">{{projectObj.englishName}}</h1>
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
            <span class="title-first-color">{{ item.tag }}</span>
            <span class="title-third-color">{{ item.author }}</span>
            <span class="title-second-color">{{ item.date }}</span>
          </div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
        </div>         
      </div> 
    </div>
    <!-- team -->
    <div class="home-team">
      <div class="home-team-content">
        <div class="home-team-left" @click="route('about')">  
          <img  class="box-img" :src="teamObj.img"/>  
        </div>
        <div class="home-team-right">
           <div class="home-team-title">
            <h1 class="title-first-color">{{teamObj.name}}</h1>
            <h1 class="title-second-color"> / </h1>
            <h1 class="title-third-color">{{teamObj.englishName}}</h1>
          </div>
          <div class="home-team-desc">{{teamObj.description}}</div>
          <div class="home-team-btn" @click="route('recruit')">
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
  import { introduction, blogObj, projectObj, teamObj } from '@/constants/info'
  import { gotoBlogDetail } from '@/utils/tool-func'
  export default {
  data () {
    return {
      rightLightImg: rightLightImg,
      rightDarkImg: rightDarkImg,
      introduction: introduction,
      blogObj: blogObj,
      projectObj: projectObj,
      teamObj: teamObj,
      gotoBlogDetail: gotoBlogDetail,
      isMounted: false
    }
  },
  mounted () {
    // let jumbotron = new Jumbotron(this.$refs.el)
    // jumbotron.render()
    this.$nextTick(function(){
        this.isMounted = true
    })    
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
   },
   
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
    // display: flex
    // justify-content: space-between
    margin: 0 auto
    position: relative
  .home-banner-left
    position: absolute
    left: 30px
    > h1, h2, p
      margin: 0
      color: #ffffff
    > h1
      margin-top: 106px
    > h2
      margin: 24px 0
  .home-banner-right
    width: 100%
    height: 100%
    overflow: hidden
  
  .home-body
    margin:  60px auto 130px auto
    width: $pageWidth
    box-sizing: border-box
  .home-body-title
    text-align: center
    > h1
      margin: 0
      display: inline-block
  .home-body-content
    margin-top: 30px
    display: flex
  .box-right
    margin-right: 30px
  .box-left
    margin-left: 30px

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
      width: 750px
      height: 400px
      cursor: pointer
      > img
        width: 100%
        height: 100%
        object-fit: cover
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
