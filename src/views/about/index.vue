<template>
  <div class="body-page">
    <p class="title">我们是怎样的团队？</p>
    <div class="about-desc">
      <p>我们是饿了么中后台前端开发团队（Emazing FE ），承担着饿了么中后台前端基础设施、数十个业务产品的研发。我们有着前沿的技术选型，欢快的工作氛围，多元的团队建设，饱足的成长食粮。在这里有一群年轻有趣的小伙伴，加入我们一起工作一起玩。</p>
    </div>
    <div class="about-keywords">
      <div class="flex-1 pr4"
        v-for="(keyword, $i) in keywords"
        :key="$i">
          <p class="keywords-title en">{{ keyword.title.EN }}</p>
          <p class="keywords-title cn">{{ keyword.title.CN }}</p>
          <p class="keywords-desc">{{ keyword.desc }}</p>
        </div>
    </div>
    <div class="about-container">
      <p class="title">Emazing 的我们</p>
      <div class="about-us-image">
        <img :src="teamImage1">
        <div class="join-us flex justify-center">
          <span>加入我们</span>
        </div>
      </div>
      <div class="member-list">
        <member-item v-for="(member, $i) in memberList"
          :member="member"
          :key="$i"></member-item>
      </div>
    </div>
    <div class="about-container">
      <p class="title">Emazing 的环境</p>
      <kw-row class="env-image-container" gutter="30" content-wrap>
        <kw-col span="16" class="image-wrapper">
          <img :src="emazingImage">
        </kw-col>
        <kw-col span="8" class="image-wrapper">
          <img :src="teamImage5">
        </kw-col>
        <kw-col span="8" class="image-wrapper">
          <img :src="teamImage2">
        </kw-col>
        <kw-col span="8" class="image-wrapper">
          <img :src="teamImage3">
        </kw-col>
        <kw-col span="8" class="image-wrapper">
          <img :src="teamImage4">
        </kw-col>
      </kw-row>
      <div class="about-desc">
        <p>在这里，公司楼下便是商场，方便你逛吃逛吃团建聚餐；公司楼下便是地铁站，再也不用担心出站后的炎炎烈日狂风暴雨；公司内部的办公设施和各种福利也定会让你满意。</p>
        <p>在这里，你可以加入若干兴趣小组：健身、约饭、K歌、桌游、电竞、厨师...除了这些，我们还有一年一次的大团建，国内国外随便选，还有若干不定期小团建，工作之余，一起嗨皮。</p>
        <p>在这里，你可以听到大牛分享，不仅仅只有技术，还有生活。定期的技术分享和非技术分享，你总会认识有趣的人、有趣的技术、有趣的事。</p>
        <p>在这里，你可以选择最前沿的技术选型，参与到前后端中间件、各种各样的轮子、贴合业务的组件库...的开发。所有你想做的，都可以尝试。</p>
        <p>在这里，你不仅仅是工程师，扁平化的管理，你可以拥有足够大的空间，成为你想成为的人，做想做的事。</p>
      </div>
    </div>
    <div class="about-footer">
      <p class="title">联系我们</p>
      <div class="conect-us-wrapper">
        <div>
          <div class="conect-us">
            <img :src="logo">
          </div>
          <p class="email">emazing@ele.me</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import memberItem from './member'

  export default {
    components: {
      memberItem
    },
    data() {
      return {
        keywords: [
          {
            title: {
              CN: '愿景',
              EN: 'Vision'
            },
            desc: 'Self-improving happily everyday!'
          },
          {
            title: {
              CN: '使命',
              EN: 'Mission'
            },
            desc: 'Challenge complicated business, design awesome architecture!'
          },
          {
            title: {
              CN: '文化',
              EN: 'Culture'
            },
            desc: '激情 · 驱动 · 挑战'
          },
        ],
        memberList: [
          {
            name: '覃柯源',
            position: '高级前端工程师',
            desc: '专注前端技术30年, 业精于勤, 始于初心'
          },
          {
            name: '李元元',
            position: '高级前端工程师',
            desc: '前端部门颜值担当, 技术与颜值双双在线'
          },
          {
            name: '李晓倩',
            position: '前端工程师',
            desc: '前端部门颜值担当, 技术与颜值双双在线'
          },
          {
            name: '付超',
            position: '高级前端工程师',
            desc: '前端部门颜值担当, 技术与颜值双双在线'
          },
          {
            name: '高辉',
            position: '高级前端工程师',
            desc: '前端部门颜值担当, 技术与颜值双双在线'
          },
          {
            name: '刘依琪',
            position: '前端工程师',
            desc: '前端部门颜值担当, 技术与颜值双双在线'
          },
          {
            name: '雷小龙',
            position: '前端工程师',
            desc: '前端部门颜值担当, 技术与颜值双双在线'
          },
        ],
        teamImage1: require('~/team/team1.jpg'),
        teamImage2: require('~/team/team2.jpg'),
        teamImage3: require('~/team/team3.jpg'),
        teamImage4: require('~/team/team4.jpg'),
        teamImage5: require('~/team/team5.jpg'),
        emazingImage: require('~/team/emazing.jpg'),
        logo: require('~/logo-emazing-white.png'),
      }
    },
    methods: {
    }
  }
</script>

<style lang="sass" scoped>
  .title
    @extend .text-center, .h2
    margin: 40px auto
  .about-desc
    @extend .pt5, .pb10
    margin: 0 auto
    width: 750px
    p
      @extend .h6
  .about-keywords
    @extend .flex, .ptb8, .border-top, .border-bottom
    .keywords-title
      @extend .mtb0
      &.en
        @extend .mb4, .lh1, .f-500
        font-size: 64px
      &.cn
        @extend .h1, .lh1
    .keywords-desc
      @extend .black-assist, .mtb3
  .about-container
    padding-top: 120px
    .about-us-image
      @extend .border-radius
      position: relative
      height: 400px
      overflow: hidden
      img
        position: absolute
        left: 0
        top: -170px
        width: 100%
        transform: scale(1.1)
      .join-us
        position: absolute
        bottom: 60px
        width: 100%
        > span
          @extend .ptb2, .plr4, .border-radius, .h5, .f-500, .cursor
          background: rgba(0, 0, 0, 0.6)
          color: #FFF
          border: 1px solid #FFF
          &:hover
            background: rgba(0, 0, 0, 0.8)
    .member-list
      @extend .flex, .flex-wrap, .space-between, .mt8
      
  .image-wrapper
    height: 260px
    overflow: hidden
    img
      @extend .border-radius
      width: 100%
      height: 100%
  .about-footer
    background: $background
    padding: 60px 0 100px
    .conect-us-wrapper
      @extend .flex, .align-center, .justify-center, .border-radius, .shadow-bottom
      margin: 0 auto
      background: #FFF
      width: 360px
      height: 360px
      .conect-us
        @extend .flex, .align-center, .justify-center, .shadow-bottom
        background: #1989fa
        margin: 0 auto
        width: 166px
        height: 166px
        border-radius: 50%
        img
          width: 75%
      .email
        @extend .mt4, .text-center, .h5, .black-assist
</style>