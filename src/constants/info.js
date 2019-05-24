import blog1Img from '~/blog/blog1.png'
import { blogs } from '@/constants/docs'

export const introduction = {
  title: '饿了么 B 端前端团队',
  subtitle: 'Emazing FE',
  description: 'Self-improving happily every day!'
}

export const blogObj = {
  name: '博客',
  englishName: 'Blog',
  typeName: '文章',
  btnName: '全部文章',
  blogs: blogs
}

export const projectObj = {
  isShow: false,
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
}

export const teamObj = {
  name: '团队',
  englishName: 'Team',
  img: 'https://fuss10.elemecdn.com/8/9a/9d167efcdc8a531853473aef2ddadjpeg.jpeg',
  btnName: '加入我们',
  description: '我们是饿了么 B 端前端开发团队（Emazing FE），承担着饿了么 B 端前端基础设施、数十个业务产品的研发。我们有着前沿的技术选型，欢快的工作氛围，多元的团队建设，饱足的成长食粮。在这里有一群年轻有趣的小伙伴，加入我们一起工作一起玩。Self-improving happily every day!Challenge complicated business, design awesome architecture!'
}

