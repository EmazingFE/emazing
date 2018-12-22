<template>
  <div class="h6">
    <div class="job-tabs">
      <div class="job"
        v-for="item in tabs"
        :class="{'active': isActive(item)}"
        @click="changeActive(item)"
        :key="item">
        {{ item }}  
      </div>
    </div>
    <div class="job-container">
      <div class="job-wrapper">
        <p class="job-name">{{ job.name }}</p>
        <div class="job-detail"
          v-for="detail in job.details">
          <p>
            <span class="detail-title">{{ detail.title }}:</span>
            <span class="detail-desc">{{ detail.desc }}</span>
          </p>
        </div>
        <div class="job-desc">
          <div class="detail-title">岗位职责</div>
          <div class="detail-desc">
            <ul>
              <li v-for="item in job.responsibilitys">{{ item }}</li>
            </ul>
          </div>
        </div>
        <div class="job-desc">
          <div class="detail-title">岗位要求</div>
          <div class="detail-desc">
            <ul>
              <li v-for="item in job.requests">{{ item }}</li>
            </ul>
          </div>
        </div>
        <!-- <div class="job-desc">
          <kw-button type="primary">申请职位</kw-button>
        </div> -->
      </div>
      <div class="connect-wrapper">
        <p class="how-to-apply">如何应聘?</p>
        <p>我们的办公地点在上海，希望加入我们的话，可以通过以下四种方式联系我们，我们期待着一起快乐成长！</p>
        <div>
          <p>1. 直接将简历发往饿了么 B 端前端开发团队招聘邮箱：</p>
          <kw-link type="primary"
            href="mailto:keyuan.qin@ele.me">keyuan.qin@ele.me</kw-link>
        </div>
        <div>
          <p>2. 参加饿了么校园招聘：</p>
          <kw-link type="primary"
            target="_blank"
            href="https://campus.ele.me">https://campus.ele.me</kw-link>
        </div>
        <div>
          <p>3. 参加饿了么社会招聘：</p>
          <kw-link type="primary"
            target="_blank"
            href="https://jobs.ele.me">https://jobs.ele.me</kw-link>
        </div>
        <div>
          <p>4. 通过饿了么在职员工内推。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          '全部职位',
          // '前端开发专家',
          '资深前端工程师',
          // '高级前端工程师',
        ],
        activeTab: '全部职位',
        job: {
          name: '资深前端工程师',
          details: [
            {
              title: '部门',
              desc: '前端开发组'
            },
            {
              title: '类别',
              desc: '产研类'
            },
            {
              title: '城市',
              desc: '上海'
            },
            {
              title: '人数',
              desc: '1 人'
            },
            {
              title: '工作年限',
              desc: '5-8 年'
            },
            {
              title: '发布时间',
              desc: '2018-12-21'
            },
          ],
          responsibilitys: [
            '负责饿了么中后台相关业务的研发，性能分析与优化，保证系统稳定运行',
            '负责前端界面的构建，各类交互设计与实现',
            '持续关注 Web 开发技术的发展，掌握新技术的核心点，从中挑选适合我们自己的新技术',
          ],
          requests: [
            '熟悉 W3C 标准，精通 HTML、CSS，精通 JavaScript',
            '对用户体验、交互操作流程、及用户需求有深入理解',
            '计算机或相关专毕业，3 年以上前端开发经验',
            '对前端主流框架，包括 Vue，React，Angular 等有深刻理解',
            '熟练掌握 gulp，webpack 等构建工具，对于前端工程化有一定深入的研究',
            '具有良好的沟通能力，有较强的独立工作能力和解决问题的能力',
            '英语水平良好，能熟练阅读英文技术文档',
          ]
        },
      }
    },
    methods: {
      isActive(tab) {
        return tab === this.activeTab
      },
      changeActive(tab) {
        this.activeTab = tab
      }
    }
  }  
</script>

<style lang="sass" scoped>
  .h6
    @extend %h6
  
  .job-tabs
    @extend %flex, %bg-minor
    margin: 30px 0 60px
    padding: 30px 40px
    .job
      margin-right: 100px
      cursor: pointer
      &.active
        @extend %blue-primary, %f-500
  .job-container
    @extend %flex
    margin-bottom: 120px
  .job-wrapper
    @extend %flex-1
    .job-detail
      p
        @extend %mt0, %mb2
  .detail-title
    @extend %f-500
    display: inline-block
    width: 85px
  .detail-desc
    @extend %black-minor
    li 
      @extend %mb1
  .job-name
    @extend %h4, %f-500, %mt0, %mb7

  .connect-wrapper
    @extend %border-left, %pl8
    width: 300px
    p
      @extend %mb0
    .how-to-apply
      @extend %h4, %mt0, %mb7
  .job-desc
    @extend %mt8
    .detail-title
      @extend %mb2
    .detail-desc li:before 
      @extend %mr2
      content: '•'
</style>