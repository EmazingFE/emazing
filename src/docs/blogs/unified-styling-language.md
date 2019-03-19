本文翻译自 [Mark Dalgleish ](https://medium.com/@markdalgleish)的文章 [A Unified Styling Language](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)

Mark Dalgleish 在CSSconf EU 2017的演讲视频地址 [Mark Dalgleish: A Unified Styling Language](https://www.youtube.com/watch?v=X_uTCnaRe94)

PPT地址 [Presentation-a-unified-styling-language](https://markdalgleish.github.io/presentation-a-unified-styling-language/)

> Mark Dalgleish的这篇文章将作为2017年最重要的前端发展文章之一

上文评论引用自 [CSS-Tricks](https://css-tricks.com/unified-styling-language/)

------

在过去几年我们看到了主要来自 [React](https://facebook.github.io/react/) 社区的 [CSS-in-JS](https://github.com/MicheleBertoli/css-in-js) 的兴起，但这并不是没有争议的。很多人，尤其是那些已经精通CSS的人，对此持怀疑态度

> ”为什么有人想要在JS中写CSS?“
> “这绝B是个可怕的想法”
> “这些人肯定没真正学会CSS”

如果这是你的第一反应，请阅读下去。我们来看看为什么在JavaScript中写CSS并不是一个可怕的想法，以及我认为你应该长期关注这个快速发展的领域的理由

[![1-ipu5grtzr21supitfvgxaw](https://user-images.githubusercontent.com/4401831/29860784-c02695a0-8d99-11e7-882c-b1b613c5dde4.png)](https://user-images.githubusercontent.com/4401831/29860784-c02695a0-8d99-11e7-882c-b1b613c5dde4.png)

## 相互误解的社区

React社区经常被CSS社区误解，反之亦然。这对于我来说挺有意思的，因为我同时混迹于这两个社区！

我在九十年代后期开始学习HTML，并从基于表格布局的黑暗时代就开始专职于CSS。受 [CSS禅意花园](http://www.csszengarden.com/) 启发，我热衷于将现有代码迁移为 [语义化HTML](https://en.wikipedia.org/wiki/Semantic_HTML) 与层叠样式表分离。不久我开始痴迷于关注分离，在服务器渲染出来的页面中使用 [非侵入式JavaScript](https://www.w3.org/wiki/The_principles_of_unobtrusive_JavaScript) 同客户端交互。我们成为第一代前端开发人员，并活跃于一个关注于这些实践的小社区，努力尊重每一个浏览器平台

在这种关注于web的背景下，你可能认为我会强烈反对React这种似乎违背我们所密切坚持的原则的 [HTML-in-JS模型](https://facebook.github.io/react/docs/jsx-in-depth.html)。但实际上恰恰相反的是，在我的经验里，React的组件化模型及其服务端渲染的能力，终于为我们提供了一个构建大型复杂单页应用的方法。在某种程度上，React仍然可以让我们为用户提供快速、可访问且渐进增强的产品。我们甚至在旗舰产品 [SEEK](https://www.seek.com.au/) 这个单页React应用中利用这种能力，当JavaScript被禁用时，其核心搜索流依旧可以正常工作——通过在服务器端运行相同的JavaScript实现优雅降级

所以，请考虑将这篇文章作为两个社区之间相互示好橄榄枝。让我们一起努力理解这次CSS-in-JS运动的实质所在。也许它并未在你产品开发所计划使用的技术范围内，也许它对于你来说并不是最有说服力的——但至少它是值得你去思考的

## 为什么要 CSS-in-JS ?

如果你熟悉我最近所做的有关React和[CSS Modules](https://github.com/css-modules/css-modules) 的工作，你会惊讶地发现我是捍卫CSS-in-JS的
[![img](https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png)](https://raw.githubusercontent.com/css-modules/logos/master/css-modules-logo.png)

终究，CSS Modules通常被那些需要局部作用域样式，但不希望为CSS-in-JS买单的开发者所选择使用。事实上，我甚至在自己的工作中都不使用CSS-in-JS

尽管如此，我依然时刻敏锐地注意着CSS-in-JS社区，对他们不断产出的创新保持密切关注。不仅如此，我认为这些应该同样被更多CSS社区所关注

但是为什么呢？

为了更清楚地了解人们选择将CSS写在JavaScript中的原因，我们将重点关注这种方式所带来的实际性的好处

我把这些好处分为五个主要方面：

1. 拥有作用域的样式 (Scoped Styles)
2. 抽取关键CSS (Critical CSS)
3. 更智能的优化 (Smarter optimisations)
4. 打包管理 (Package management)
5. 非浏览器样式 (Non-browser styling)

让我们做进一步的了解，仔细地看看CSS-in-JS在这些方面到底带来了什么

## 1. 拥有作用域的样式（Scoped Styles）

众所周知，在大规模项目中高效地构建CSS是极其困难的。当加入一个需要长期维护的项目时，你通常会发现CSS是项目中最难弄清楚的部分

为了解决这个问题，CSS社区已经投入了巨大努力。通过采用一些诸如[Nicole Sullivan](https://twitter.com/stubbornella)所提出的[OOCSS](https://github.com/stubbornella/oocss/wiki)，或[Jonathan Snook](https://twitter.com/snookca)所提出的[SMACSS](https://smacss.com/)等方法论来提高样式的可维护性。但是目前就流行程度而言，最佳的选择毫无争辩是[Yandex](https://github.com/yandex)所提出的[BEM](http://getbem.com/)，或者称为`Block Element Modifier`

从根本上来说，BEM（纯粹应用于CSS）只是一个命名规范，选择将样式限制在`.Block_emelent--modifier`模式的class之后。在任何给定的BEM风格的代码库中，开发人员必须始终遵守BEM的规则。当被严格遵循的时候，BEM的工作效果很好。可是，为什么要将作用域这种基础的东西留给纯粹的命名规范呢？

无论是否明确表示过，大多数CSS-in-JS库都与BEM努力将样式独立作用于单个UI元素的思路相符，只不过是以完全不同的方式实现而已

那么在实际代码中是什么样子呢？当使用 [Sunil Pai](https://twitter.com/threepointone) 的 [glamor](https://github.com/threepointone/glamor) 时大概长这样：

```
import { css } from 'glamor'
const title = css({
  fontSize: '1.8em',
  fontFamily: 'Comic Sans MS',
  color: 'blue'
})
console.log(title)
// → 'css-1pyvz'
```

你会发现在这段代码中找不到CSS类，样式不再是对系统其他地方定义的class的硬编码引用。取而代之的是，class及样式是由工具库自动生成的。我们不必再担心选择器会在全局作用域里发生冲突，这意味着我们无需再手动为class添加前缀

此选择器的作用域与周围代码的作用域规则一致。如果你想将此规则适用于应用的其他部分，你需要将其转换为JavaScript模块，并在任何需要使用的地方引入。就长期保持代码可维护性而言，这是及其强大的，因为你可以确保任何给定的样式源代码可以轻松地像JS代码一样被追踪到(译注：原文是can be easily traced like any other code，对于前端来说就是JS)

**从仅仅靠约定的方式向默认强制局部作用域样式转变，我们已经提升了样式的基础能力。BEM是默认被具备的能力，而不是被选择性使用的（原文：BEM is baked in, not opt-in.）**

——

在我继续之前，我想澄清至关重要的一点

**这是生成真正的CSS，而不是生成内联样式**

大多数早期的CSS-in-JS库将样式直接内联到每个元素中。但这种设计最致命的缺陷是：`style`属性并不能胜任所有CSS的功能。取而代之的是，绝大多数新的CSS-in-JS库关注于动态样式表，在运行时从一个全局的样式集中插入和删除样式规则

举个例子，让我们看一看由[Oleg Slobodskoi](https://twitter.com/oleg008)提供的[JSS](https://github.com/cssinjs/jss)，它是最早生成真正CSS的CSS-in-JS库之一
[![img](https://user-images.githubusercontent.com/4401831/29881462-27635b66-8ddd-11e7-8849-891797439c29.png)](https://user-images.githubusercontent.com/4401831/29881462-27635b66-8ddd-11e7-8849-891797439c29.png)

使用JSS时，你可以使用标准的CSS特性，比如hover和媒体查询，它们会直接映射成为等效的CSS规则

```
const styles = {
  button: {
    padding: '10px',
    '&:hover': {
      background: 'blue'
    }
  },
  '@media (min-width: 1024px)': {
    button: {
      padding: '20px'
    }
  }
}
```

将这些样式插入document后，会自动生成可用的class

```
const { classes } = jss.createStyleSheet(styles).attach()
```

不管你是使用一个完整的框架，还是简单粗暴地使用innerHTML，当用JavaScript生成HTML时，都可以使用这些生成的class代替硬编码的类名。

```
document.body.innerHTML = `
  <h1 class="${classes.heading}">Hello World!</h1>
`
```

但用单独用这种方式管理样式所带来的好处有限 —— 它通常要与某种组件库搭配使用。因此，可以很容易找到适用于目前最流行的库的绑定方案。例如，在[react-jss](https://github.com/cssinjs/react-jss)的帮助下JSS可以轻松绑定到React组件。在为每个组件注入一小套样式集的同时，还为你管理全局生命周期

```
import injectSheet from 'react-jss'
const Button = ({ classes, children }) => (
  <button className={classes.button}>
    <span className={classes.label}>
      {children}
    </span>
  </button>
)
export default injectSheet(styles)(Button)
```

通过将样式集中在组件周围，并在代码层面上将它们紧密地结合在一起，我们有效地得到了合乎BEM逻辑的结果。但如此也以至CSS-in-JS社区许多人觉得提取，命名和重用组件的重要性在所有绑定样式的样板中都被丢失了

[Glen Maddern](https://twitter.com/glenmaddern) 和 [Max Stoiber](https://twitter.com/mxstbr) 的 [styled-components](https://github.com/styled-components/styled-components) 提出了一个全新的解决问题的思路

[![img](https://user-images.githubusercontent.com/4401831/29886502-da90dbfa-8dec-11e7-8bcf-4813287be66c.png)](https://user-images.githubusercontent.com/4401831/29886502-da90dbfa-8dec-11e7-8bcf-4813287be66c.png)

我们不在创建样式然后再手动地绑定到组件，而是被强制直接创建组件：

```
import styled from 'styled-components'

const Title = styled.h1`
  font-family: Comic Sans MS;
  color: blue;
`
```

在应用这些样式的时候，我们并不将class添加在一个现有的元素上，而是简单地渲染这些被生成的组件

```
<Title>Hello World!</Title>
```

`styled-components`通过标记模版字符串来使用传统的CSS语法，但有人更喜欢通过数据结构。一个值得注意的选择是来自 [PayPal](https://github.com/paypal) 的 [Kent C. Dodds](https://twitter.com/kentcdodds) 所提供的 [glamorous](https://github.com/paypal/glamorous)

[![img](https://user-images.githubusercontent.com/4401831/29903564-170f7d44-8e37-11e7-88c4-fe839d79917f.png)](https://user-images.githubusercontent.com/4401831/29903564-170f7d44-8e37-11e7-88c4-fe839d79917f.png)

`Glamorous`提供了同`styled-components`类似的component-first API，但选择使用对象来代替字符串。这样就无需在库中引入一个CSS解析器，从而减少的库大小并提升性能。

```
import glamorous from 'glamorous'

const Title = glamorous.h1({
  fontFamily: 'Comic Sans MS',
  color: 'blue'
})
```

不管你使用哪种语法来描述样式，样式不再仅仅作用域于某个组件，它已经成为组件不可分割的一部分。
当使用像 React 这样的库时，组件是基本的构建块，而现在我们的样式也成为了其架构的核心构建者之一。既然我们将应用程序中的所有内容都描述为组件，那么样式也可以

——

对于BEM的经验丰富的开发者来说，我们给系统所带来的改变就其意义性而言，似乎是相对较小的改进。 而事实上，CSS Modules可以让你在不丢失所熟悉的CSS工具生态的前提下获得这些提升，这也是很多项目坚持使用CSS Modules的原因。人们可以在其所熟悉的编写常规CSS方式下，解决编写大规模CSS所遇到的问题。

然而，当我们开始在这些基本概念之上进行构建时，事情开始变得更有趣。

## 2. 抽取关键CSS (Critical CSS)

最近在document的头部添加内联关键样式成为一种最佳实践，只提供当前页面渲染所需要的样式，从而可以降低首屏渲染时间。这与我们通常的加载样式的方式形成鲜明的对比，之前我们会强制浏览器在开始渲染之前下载应用的所有视觉样式

虽然像 [Addy Osmani](https://twitter.com/addyosmani) 所提供的 [critical](https://github.com/addyosmani/critical) 这类工具可以帮助用于提取关键CSS，但它们并没有解决关键CSS难以维护和自动化的事实。这只是一个可选择用来做性能优化的奇技淫巧，所以大多数项目似乎放弃了这一步。

相比之下，CSS-in-JS 讲诉了一个完全不同的故事

在开发服务器端渲染的应用时，提取关键CSS将不仅仅是优化，而是服务器端CSS-in-JS的首要工作

例如，当使用 [Khan Academy](https://github.com/Khan) 开发的 [Aphrodite](https://github.com/Khan/aphrodite) 时，可以在某个渲染中将生成的class内联到元素中，同时通过使用其CSS函数追踪这次渲染中使用了哪些样式

```
import { StyleSheet, css } from 'aphrodite'
const styles = StyleSheet.create({
  title: { ... }
})
const Heading = ({ children }) => (
  <h1 className={css(styles.heading)}>{ children }</h1>
)

```

即使所有的样式都定义在JavaScript里，你也可以轻松地将当前页所需要的所有样式提取出来并生成一个静态的CSS字符串，在服务端渲染的时候插入到document的头部

```
import { StyleSheetServer } from 'aphrodite';

const { html, css } = StyleSheetServer.renderStatic(() => {
  return ReactDOMServer.renderToString(<App/>);
});

```

现在你可以这样子渲染关键CSS块：

```
const criticalCSS = `
  <style data-aphrodite>
    ${css.content}
  </style>
`;

```

如果你研究过React的服务端渲染模型，你可能会发现这是你非常熟悉的一种模式。在React中，你的组件是在JavaScript中定义‘模版标签’的，但却可以在服务端渲染成为常规的HTML字符串

**如果你时刻使用渐进增强的方式构建应用，尽管整个项目可能全部是用JavaScript写的，客户端也可能不需要JavaScript**

不管怎样，对于客户端运行的代码而言，其打包后都包含启动单页应用所需要的代码。这些代码可以让页面瞬间活起来，浏览器中的渲染也是从这里开始

由于服务器端渲染HTML和CSS是同时进行的，正如我们在前面例子例看到的一样，诸如Aphrodite这样的库常常会帮助我们将生成关键CSS和服务器端渲染生成HTML的过程简化为一个简单的调用。现在，我们可以以类似的方式将React组件渲染成静态HTML

```
const appHtml = `
  <div id="root">
    ${html}
  </div>
`

```

通过在服务器端使用CSS-in-JS，我们的单页应用不仅可以在没有JavaScript的情况下继续工作，还有可能渲染的更快

**正如有作用域的CSS选择器一样，渲染关键CSS这个最佳实践现在也是被默认具备的能力了，而不是被选择性使用的**

## 3. 更智能的优化

我们最近看到了构建CSS新的方式的出现，比如来自于[yahoo](https://github.com/yahoo) 团队的[Atomic CSS](https://acss.io/) 和 [Adam Morse](https://twitter.com/mrmrs_) 的 [Tachyons](http://tachyons.io/)。它们更推荐使用一些短小而又功能单一的class来代替平时被使用的语义化class。
比如，当你使用Atomic CSS时，你会使用像调用函数一样来运用class。这些‘函数’将来会被用于生成合适的样式

```
<div class="Bgc(#0280ae.5) C(#fff) P(20px)">
  Atomic CSS
</div>

```

这种做法的目标是通过最大化地提高class的复用性，以及有效地将class像内联样式一样对待，来保证打包出来的CSS尽可能地精简。这么做能使文件大小减少，这很容易理解。但其带来的影响对于你的代码库和团队成员来说似乎是微乎其微的。不过这些包含了对CSS和HTML的更改的优化，由于其自身性质，成就了一个更具意义的架构

正如我们已经介绍过的那样，当使用CSS-in-JS或CSS Modules时，你不需要在HTML中使用硬编码编写的class，而是使用一些库或者构建工具自动生成的JavaScript值的动态引用

我们不再这样写样式:

```
<aside className="sidebar" />

```

而是这样

```
<aside className={styles.sidebar} />

```

这个变化看起来也许没什么，但这却是我们在如何管理HTML标签与样式之间关系上的具有纪念意义的改变。通过给予CSS工具修改样式和最终应用到元素上的class的能力，我们为CSS解锁了一个全新的用于优化的class

我们可以看一下上面的例子，‘styles.sidebar’ 可以被估认为是一个字符串，但是没有什么限制它只能是一个单独的class。 我们都知道，它可以轻松地成为一个包含了十几个class的字符串

```
<aside className={styles.sidebar} />
// Could easily resolve to this:
<aside className={'class1 class2 class3 class4'} />

```

如果我们能够优化样式，为每一套样式生成多个class，我们就做一些真正有趣的事情

关于这种方式我最喜欢的例子是 [Ryan Tsao](https://twitter.com/rtsao) 的 [Styletron](https://github.com/rtsao/styletron)
[![img](https://camo.githubusercontent.com/12ff38603f3a65f358d3d79806fca96cfa3fcc7b/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a3778786236464f6d636d50436e514e72467935706a672e706e67)](https://camo.githubusercontent.com/12ff38603f3a65f358d3d79806fca96cfa3fcc7b/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a3778786236464f6d636d50436e514e72467935706a672e706e67)

就像CSS-in-JS和CSS Modules 自动添加BEM风格的类名前缀一样，StyleTron 对Atomic CSS做了同样的事情

StyleTron的核心API集中在一个单独的任务上——为每个由属性，值和媒介查询组成的样式定义单独的CSS规则，然后返回一个自动生成的class

```
import styletron from 'styletron';
styletron.injectDeclaration({
  prop: 'color',
  val: 'red',
  media: '(min-width: 800px)'
});
// → 'a'

```

当然，Styletron提供了更高级的API，比如它的injectStyle函数可以允许同时定义多个规则

```
import { injectStyle } from 'styletron-utils';
injectStyle(styletron, {
  color: 'red',
  display: 'inline-block'
});
// → 'a d'
injectStyle(styletron, {
  color: 'red',
  fontSize: '1.6em'
});
// → 'a e'
```

请注意一下上面生成的两组类名之间的共性

**通过放弃对class本身的低级控制，只定义所需要的样式，就可以让工具库帮我们生成最佳的原子class集**

[![img](https://camo.githubusercontent.com/a529f2bb2c3ea2630f2bd10f98ac7b6236f221eb/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a705758723141367568694f6b5948717766424d7457672e706e67)](https://camo.githubusercontent.com/a529f2bb2c3ea2630f2bd10f98ac7b6236f221eb/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a705758723141367568694f6b5948717766424d7457672e706e67)

像找出最高效的办法将样式拆分为可重复利用的class这种优化，在以前通常需要手动来完成，而现在已经可以被完全自动完成。在这里你可能开始注意到这种趋势了。原子CSS是默认被具备的能力，而不是被选择性使用的

## 4. 打包管理

在我们深入专研这一点之前，先停下来思考一个看似简单的问题

我们如何相互分享CSS?

我们已经从手动下载CSS文件转变为通过像 [Bower](https://bower.io/) 这种专门的包管理工具。而现在幸亏有 [Browserify](http://browserify.org/) 和 [webpack](https://webpack.js.org/) 这类工具，我们也可以通过npm。尽管一些工具已经可以自动地引入外部依赖包里的CSS，前端社区大多数还是习惯于手动处理依赖关系

不管使用哪种方式，你得清楚一件事情：CSS的依赖并不擅长于依赖其他CSS

正如很多人已经想到的，我们已经见证了Bower和npm对JavaScript模块产生的相似效果

Bower并未要求任何特别的模块格式，而发布到npm中的的模块都使用CommonJS格式。这对发布到每个平台上的包数量产生了巨大的影响

npm更合适小型而复杂的嵌套树依赖，而Bower则吸引了大型而独立的依赖，其中可能只有两三个，当然，也可能外加一些插件。因为使用Bower时你的依赖没有一个模块系统做支撑，每个包都不能轻松地利用自己的依赖关系，所以到整合这一步基本上都是开发者的手动操作了。

因此，随着时间的推移，npm上的包数量呈指数型增长，而Bower的却仅相当于线性增长。虽然这个差距可能是由各种各样的原因导致的，但很公平地说，这些原因都与每个平台是否允许包在运行时相互依赖的方式有关

[![img](https://camo.githubusercontent.com/a239e64360a5c6d40803c7fcdf023b2d116ea082/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a4c547273494953505635714b2d7141514b6165494e412e706e67)](https://camo.githubusercontent.com/a239e64360a5c6d40803c7fcdf023b2d116ea082/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a4c547273494953505635714b2d7141514b6165494e412e706e67)

不幸的是，对于CSS社区来说这一切看起来都太像了。相比于npm上JavaScript包的激增，我们只看到了CSS独立包相对缓慢的增长

如果我们也想实现 npm 的指数增长呢？如果我们想要能够依赖于拥有不同大小的层次结构的复杂包，而不是专注于大型而全面的框架呢？为了做到这些，我们不仅需要一个包管理器来完成任务，还需要一个合适的模块格式

这意味着我们需要一个为CSS专门设计的包管理器么？为Sass或Less这样的预处理器？

真正有意思的是，我们已经通过HTML进行了类似的实现。如果你就如何相互共享HTML提出类似的问题，你会马上发现我们几乎没有共享过纯HTML——我们共享的是HTML-in-JS

我们通过[jQuery插件](https://plugins.jquery.com/)，[Angular指令](http://ngmodules.org/)和[React组件](https://react.parts/web)来实现。我们的大组件是由一些独立发布在npm上，包含自己HTML的小组件组成的。原生HTML格式也许没有这种能力，但是当原生HTML被嵌入在一个功能齐全的编程语言里后，我们就能够轻易地突破这个限制

假如像HTML一样，我们分享CSS的同时，也分享其通过JavaScript产生的逻辑？假如我们不再使用
[mixins](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#mixins)，而是使用返回对象或者字符串的函数？假如我们不再[扩展](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend)class，而是简单地通过[Object.assign](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)来合并对象，或者使用新的对象[展开](https://github.com/tc39/proposal-object-rest-spread)操作符呢？

```
const styles = {
  ...rules,
  ...moreRules,
  fontFamily: 'Comic Sans MS',
  color: 'blue'
}

```

一旦我们开始通过这种方式编写样式代码，我们可以像应用中的任何其他代码一样撰写和分享样式，使用相同的模式工具、基础设施和生态系统。

一个可以说明你如何从中受益的极好例子是用诸如 [Max Stoiber](https://twitter.com/mxstbr)、[Nik Graf](https://twitter.com/nikgraf)和[Brian Hough](https://twitter.com/b_hough)所提供的[Polished](https://github.com/styled-components/polished)一类的库

[![img](https://camo.githubusercontent.com/f336c798f2f3484de9427221e12a6ac2f858331d/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a66637a66334f576d6d4b426b46677455715a6e7132672e706e67)](https://camo.githubusercontent.com/f336c798f2f3484de9427221e12a6ac2f858331d/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a66637a66334f576d6d4b426b46677455715a6e7132672e706e67)

Polished其实就是CSS-in-JS中的[lodash](https://lodash.com/)。它提供了一套完整的mixins，颜色函数，一些速写方法等，可以让那些来自[Sass](http://sass-lang.com/)一类语言的开发者熟练地在JavaScript中编写样式。而现在关键区别在于，这种代码可以复用，测试和共享，也能够使用完整的JavaScript包生态系统

那么当开始考虑CSS如何实现与整个npm相同级别的开源活动和用一些小的可复用的开源包组合大型样式集合时？令人感到奇怪的是，我们最终可能通过将CSS嵌入到JavaScript中，并完全拥抱JavaScript模块来实现一切

## 5. 非浏览器样式 (Non-browser styling)

到目前为止本文已经覆盖了所有要点，虽然在 JavaScript 中编写 CSS 会更方便，但是常规的 CSS 也可以实现这些功能。这就是我把最有意思和面向未来的一点留到现在的原因。虽然这一点并未在如今的CSS-in-JS 社区中发挥巨大的作用，但它可能会成为未来设计领域发展的基石。它不仅会影响开发人员，也会影响设计师，并从根本上改变这两个领域相互沟通的方式。

为了帮助理解，我们先来了解一下React

React模型是用组件作为渲染最终输出的中间层，在浏览器中工作时，React构建复杂的虚拟DOM树，而不是直接改变DOM元素

有趣的是，渲染为真实DOM并不是 React 库的核心部分，而是由 react-dom 提供的

虽然 React 起初是为 DOM 设计的，并且大部分情况下还是在DOM环境中使用，但是这种模式也允许 React 通过引入新的渲染方式来轻松地应对不同环境

JSX 不仅适用于虚拟 DOM，也适用于任何其他虚拟视图

这就是 [React Native](https://facebook.github.io/react-native) 的工作原理，通过编写与native应用对应的渲染虚拟组件来构写真实的native应用。比如**div** 和 **span**会被替代为**View** 和 **Text**

从 CSS 的角度来看，React Native 最有趣的莫过于它拥有自己特有的 [StyleSheet API](https://facebook.github.io/react-native/docs/stylesheet.html)：

```
 var styles = StyleSheet.create({
   container: {
     borderRadius: 4,
     borderWidth: 0.5,
     borderColor: '#d6d7da',
   },
   title: {
     fontSize: 19,
     fontWeight: 'bold',
   },
   activeTitle: {
     color: 'red',
  }
})
```

这里你能看到一组熟悉的样式集，包括颜色，字体以及边框的样式

这些规则相当简单，而且很容易就能映射到其他UI环境里。但是更有意思的是native的布局

```
var styles = StyleSheet.create({
  container: {
    display: 'flex'
  }
})
```

尽管在浏览器环境之外，**React Native 有自己 native 版 flexbox 的实现**

这个实现最初是以一个名为 [css-layout](https://www.npmjs.com/package/css-layout) 的 JavaScript 模块发布的，用 JavaScript 重新实现了 flexbox（支持一套全面而又适当的测试）。为了更好的可移植性，这个模块现在已经迁移到 C 语言。

鉴于该项目的适用范围和重要性，它被赋予了更重要的自主品牌 [Yoga](https://facebook.github.io/yoga)

[![img](https://camo.githubusercontent.com/3dab16f72dee4a8a643777bce15bfc89644cc351/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a6d765f68486d624f675537534f643574324a325132672e706e67)](https://camo.githubusercontent.com/3dab16f72dee4a8a643777bce15bfc89644cc351/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a6d765f68486d624f675537534f643574324a325132672e706e67)

尽管 Yoga 是为了把 CSS 概念移植到非浏览器环境，但仅通过专注于一些 CSS 特性的子集，它已经统治了一些潜在的无法管理的领域

> "Yoga 专注于创建一个富有表现力的布局库，而不是去实现完整的 CSS"

这些权衡可能看起来有些限制，但是当您查看CSS架构的历史时会明显地发现，**工作中大规模地使用CSS其实就是合理地采用其语言子集**

在 Yoga 的情况里他们避免了级联，这么做有利于样式的作用域，并将他们的布局引擎完全集中在flexbox上。虽然这样会去掉很多功能，但它也为嵌入式样式的跨平台组件解锁了一个惊人的机会，我们已经看到了一些试图利用这个特性且引人注目的开源项目

[Nicolas Gallagher](https://twitter.com/necolas) 开发的 [React Native for Web](https://github.com/necolas/react-native-web) 旨在成为 react-native 的一个替代品。当使用 webpack 这类打包工具时，可以利用 alias 轻松地替换第三方库

```
module: {
  alias: {
    'react-native': 'react-native-web'
  }
}

```

使用 React Native for Web 可以使 React Native 组件在浏览器环境中使用，包括 [React Native StyleSheet API](https://facebook.github.io/react-native/docs/stylesheet.html) 的浏览器端口

类似的，[Leland Richardson](https://twitter.com/intelligibabble) 开发的 [react-primitives](https://github.com/lelandrichardson/react-primitives) 也提供了一套跨平台的基础组件集合，它可以抽象出目标平台的实现细节，为跨平台组件创建可行的基础标准

甚至 [微软](https://github.com/Microsoft) 也着手推出了 [ReactXP](https://microsoft.github.io/reactxp)，它旨在简化跨 web 和 native 的工作流，同时也有自己的[跨平台样式实现](https://microsoft.github.io/reactxp/docs/styles.html)。

—

即使你不编写 native 应用程序，你也需要注意很重要的一点：拥有一个真正的跨平台的组件抽象，能够让我们适应几乎无限制的环境，甚至有时会以你从未预想过的方式

最令我感到震撼的例子是 [Airbnb](https://github.com/airbnb) 的 [Jon Gold](https://twitter.com/jongold) 开发的 [react-sketchapp](http://airbnb.io/react-sketchapp)。

[![img](https://camo.githubusercontent.com/0c98b2e64e916078716f65756cd54e83810a50f8/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a7166736b49684841577059776652354c7a305f6349412e706e67)](https://camo.githubusercontent.com/0c98b2e64e916078716f65756cd54e83810a50f8/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a7166736b49684841577059776652354c7a305f6349412e706e67)

我们当中很多人都花费了许多时间去尝试标准化设计语言，尽可能的限制系统中的重复数量。不幸的是，
不管我们如何希望遵循单一来源这个真理，我们似乎只能期待将来源减少为两个 —— **开发者的动态样式和设计师的静态样式**。虽然这已经确定比我们历史上使用的好了很多，但是它仍然需要我们手工的将样式从 [Sketch](https://www.sketchapp.com/) 这样的设计工具同步到代码里。这也是 react-sketchapp 要解决的问题

感谢 Sketch 的 [JavaScript API](http://developer.sketchapp.com/reference/api)，以及 React 可以连接到不同渲染引擎能力，react-sketchapp 让我们可以利用跨平台的 React 组件并将其渲染到Sketch文档中

[![img](https://camo.githubusercontent.com/96a1a8454aa06648cb1e06ac2163fa32433e2839/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a76324c314442384f53333847536379425246443868512e706e67)](https://camo.githubusercontent.com/96a1a8454aa06648cb1e06ac2163fa32433e2839/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f313630302f312a76324c314442384f53333847536379425246443868512e706e67)

不用说，这可能极大地撼动开发人员和设计师的合作方式。现在不管使用工具的是开发者还是设计师，在对设计进行迭代时引用相同的组件时，都可以指向相同的实现。

通过 [symbols in Sketch](https://www.sketchapp.com/learn/documentation/symbols)和 [components in React](https://facebook.github.io/react/docs/components-and-props.html)，我们的行业从本质上开始趋于融合为同一个抽象，通过分享相同的工具为我们能够更紧密地工作提供了契机

------

这么多新的尝试都来自 React 及其周边的社区，这并不是巧合

在组件架构中，将一个组件的许多关注点集中在一个位置成为重中之重。这当然包括它的局部作用域样式，甚至通过 [Relay](https://facebook.github.io/relay) 和 [Apollo](http://dev.apollodata.com/) 这两个库，我们能够延伸到像数据获取这样更复杂的领域。结果是释放了巨大的潜力，而我们现在所了解的，只是冰山一角

这对我们在应用中如处理样式以及架构中的其他所有部分都产生了积极的影响

通过将我们的模型与用单一语言编写的组件统一起来，我们有可能不仅从从技术层面，而且从功能层面更好地实现关注分离。以组件为单元将一切作用域化，并使用这些组件来扩展已具备可维护性的系统，使用前所未有的方式进行优化，团队交接工作变得更加容易，还可以用小的开源构建区块来构建大型应用。最重要的是，我们能在不破坏渐进增强，不违背在对待 web 平台时大家所严格遵循的原则的基础上实现这一切

最重要的是，我对使用单一语言编写的组件组成了一种新的，统一的造型语言的基础的潜力而感到兴奋—— 一个前所未有的方式整合了前端社区

------

在SEEK上，我们通过在组件模型上构建自己的动态样式指南来努力利用这些特性。在这个指南中语义化、交互和视觉风格都统一在单独的抽象里。这构成了一个被开发和设计师共享的通用的设计语言

构建一个页面应该尽可能的将有自己原则的组件拼装在一起一样简单，这可以确保我们的工作保持风格一致，并且允许我们在产品上线很久后能够去升级我们的设计语言。

```
import {
  PageBlock,
  Card,
  Text
} from 'seek-style-guide/react'
const App = () => (
  <PageBlock>
    <Card>
      <Text heading>Hello World!</Text>
    </Card>
  </PageBlock>
)

```

but it’s quite possible that a compelling reason to switch could arise sooner than we think.

尽管我们的样式指南是用 React、webpack 和 CSS Modules 构建的，但该架构能恰好地反映使用 CSS-in-JS 构建的任何系统都会遇到的一切。技术选型可能有不同，但是核心理念是一样的。

然而，这些技术选型可能需要在未来以一种意想不到的方式进行转变，这就是为什么关注这个领域对于组件生态系统的持续发展是至关重要的。我们可能不会现在使用 CSS-in-JS，但是极有可能出现一个让我们使用的令人信服的理由的速度比我们预想的还要快

------

CSS-in-JS 在短时间里已经有了出人意料的发展，但要注意的是，在宏观层面这只是一个开端而已。

仍旧有很大的改进空间，创新也从未停止。不断涌现的新库在解决目前还未解决的问题并提升开发者的体验 —— 比如性能的提升、在构建时提取静态 CSS、支持 CSS 变量以及降低了前端开发人员的入门门槛。

这就是CSS社区的所在之处。尽管我们的工作流程都进行了很大的改动，**但这些都没有改变您仍然需要了解CSS的事实**

我们可能使用不同的语法来表达，也可能以不同的方式构建我们的应用，但是 CSS 的基本构建块不会改变。同样，我们行业向组件架构的转变是不可避免的，通过这种方式重新构思前端开发的意愿只会越来越强烈。我们非常需要共同合作以确保我们的解决方案可以广泛适用于各种背景的开发者，无论是专注于设计或专注于工程的，或者两者皆是的

虽然我们有时似乎有点不同，但是 CSS 和 JS 社区对于改进前端，更认真地对待 Web 平台以及改进我们下一代 web 开发流程都有很大的热情。社区的潜力是巨大的，虽然迄今为止我们已经解决了大量的问题，但仍然有很多工作还没有完成

------

在这一点上，你仍然可能不确信，那完全没关系。现在发现CSS-in-JS对你的工作不合适是完全合理的，但我希望这是出于正确的原因，而不是仅仅对语法的表面反对

无论如何，这种编写样式的方式在未来几年可能会越来越流行，并且值得关注的是这种方法继续以如此迅速的速度发展。我衷心希望你可以加入我们，无论是通过贡献代码还是**简单地积极参与我们的对话讨论**，都能使下一代 CSS 工具更有效地服务于所有前端开发人员。或者至少我希望我已经让你更加了解了为什么人们对这一块如此饱含激情，或者，至少了解为什么这不是一个愚蠢的点子。

------

这篇文章是我在德国柏林参加 CSSconf EU 2017 做相同主题演讲时写的，并且现在可以在 [YouTube](https://www.youtube.com/watch?v=X_uTCnaRe94) 上看到相关视频。