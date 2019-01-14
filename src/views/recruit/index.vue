<template>
  <div class="page-body">
    <list-nav :navs="navs"></list-nav>
    <div class="main-container">
      <div class="job-container">
        <div class="job-wrapper"
          v-for="(job, $i) in jobs"
          :key="$i">
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
  import listNav from '@/components/list-nav'
  export default {
    components: {
      listNav
    },
    data() {
      return {
        navs: [
          '全部职位',
          // '前端开发专家',
          '资深前端工程师',
          // '高级前端工程师',
        ],
        activeTab: '全部职位',
        jobs: [
          {
            name: '资深前端工程师',
            details: [
              {
                title: '部门',
                desc: '前端开发组'
              },
              {
                title: '城市',
                desc: '上海'
              },
              {
                title: '人数',
                desc: '2 人'
              },
              {
                title: '工作年限',
                desc: '3-5 年'
              },
              {
                title: '侧重',
                desc: '基础开发'
              },
              {
                title: '发布时间',
                desc: '2018-12-21'
              },
            ],
            responsibilitys: [
              '负责饿了么B端前端相关基础设施建设，参与到组件库和其他面向开发/设计者的产品研发中',
              '积极协助业务开发小伙伴解决技术问题，提高开发效率，改进历史项目',
              '推动必要的新技术的落地，组织好团队的技术发展和成长',
            ],
            requests: [
              '三年以上的前端开发经验，熟练掌握前端必要的领域知识',
              '熟悉各种场景下的web业务特点，能抽象出合理的业务模型；对平面设计有一定的理解，关注用户体验',
              '英语水平良好，有良好的沟通、学习能力和解决问题的能力',
              '熟悉前端主流框架、构建方式，对工具集和前端工程化有足够理解',
              '关注web开发技术的各个领域，能理解各种技术和工具的能力和边界',
              '能对已有系统进行合理的补全和规划；能思考怎样帮助团队成员提高开发和维护效率',
            ]
          },
          {
            name: '资深前端工程师',
            details: [
              {
                title: '部门',
                desc: '前端开发组'
              },
              {
                title: '城市',
                desc: '上海'
              },
              {
                title: '人数',
                desc: '2 人'
              },
              {
                title: '工作年限',
                desc: '3-5 年'
              },
              {
                title: '侧重',
                desc: '业务开发'
              },
              {
                title: '发布时间',
                desc: '2018-12-21'
              },
            ],
            responsibilitys: [
              '负责饿了么B端相关业务开发，善于理解需求，保障功能稳定',
              '对复杂业务能拆解分析，能独立思考技术方案，能抽象出合理的组件或其他工具',
              '参与前端新技术的调研和实践，参与B端基础建设，帮助提升团队开发效率和能力',
            ],
            requests: [
              '能承担B端复杂的业务开发，和后端一起实现合理的业务模型；能和设计师一起改进页面，提升用户体验',
              '三年以上的前端开发经验，熟练掌握前端必要的领域知识',
              '熟悉前端主流框架、构建方式，对工具集和前端工程化有足够理解',
              '关注web开发技术的发展，能适时推进技术改进；了解web开发其他领域者更好',
              '英语水平良好，有良好的沟通、学习和解决问题的能力',
              '能高效组织团队承担完整的前端业务；善于思考总结，帮助团队成长',
            ]
          },
        ],
      }
    },
  }  
</script>

<style lang="sass" scoped>
  .page-body
    @extend %h6
  
  .main-container
    @extend %flex
    margin: 60px 0
  .job-wrapper
    @extend %flex-1, %pr4
    &+.job-wrapper
      margin-top: 80px
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