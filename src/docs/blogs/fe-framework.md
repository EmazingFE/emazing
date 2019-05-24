本文浅谈一下前端技术的发展背后的动机、解决问题的思路和借鉴的一些思想等，更适合有使用过 React 或 Vue 等现代前端框架的开发者阅读。如果你没接触过这些技术，本文也可以帮你扩展一下视野，提升思维高度

> 抽象，本质上是一种泛化与概括的思维方式

科学的发展其实就是人类不断尝试抽象和解释世界的过程。基于已有的现象或数据去努力发现共性、规律，抽象出一个模型或者公式（定律定理），然后再验证是否可以解释所有满足条件的现象。一个正确的科研成果基本都是在一定前提下可以被重复验证和解释一类现象的，该成果进而可以被加以利用到实际生产活动当中，促进生产效率提升和社会的发展

在计算机科学中，抽象与分层是一种降低计算机系统复杂度的基本思想和有效方法。分层是建立在抽象的基础上，分散关注、松散耦合、逻辑复用，在此基础上可以产生行业标准的定义

自从 Ajax 出现以来，前端终于可以自成体系的独立开发部署了。前端通过 Ajax 请求获取到数据后，可以有能力自行维护数据，并通过 DOM 操作来展示数据。处理用户操作所触发的 DOM 事件，对数据进行一定处理后与服务器进行同步，同时更新局部内容或借助前端路由进行页面跳转，而不用刷新页面。自此前端有能力跟后端完全分离，也就是我们常说的 SPA

[![前后端分离](https://user-images.githubusercontent.com/4401831/50513371-5f500380-0ad2-11e9-83e3-38d50c2aebdb.jpg)](https://user-images.githubusercontent.com/4401831/50513371-5f500380-0ad2-11e9-83e3-38d50c2aebdb.jpg)

概括来说，前端在此阶段主要做的事情有这些：

- 控制页面渲染
  - 编写模板和样式
  - 通过 DOM 操作渲染初始数据
  - 处理 DOM 事件控制组件样式
  - 数据变更后通过 DOM 操作更新局部页面内容
- 维护本地内存中的数据
  - 发送请求与服务器同步数据
  - 数据加工适配和校验
  - 更新用户操作时相对应的数据

这些事情同时做起来是非常繁琐的，而我们所要开发的系统却越来越复杂，导致这种开发模式变得越加困难。拥有所有底层能力，意味着前端开发者写代码时可以为所欲为。而前端入门门槛低，开发者的水平参差不齐，这给系统的稳定性和可维护性带来了巨大挑战。同时，需求与生产力越发的不匹配，变革的诉求越来越强

前端技术在 2010 年前后发展迅猛，2013 年 React.js 诞生提出了基于单向数据流的 Flux 架构后，前端技术大方向基本定型，基本可以产生行业标准了。接下来的技术发展基本是在原有方向上不断的优化和完善，提升性能，改善开发体验。

现代前端框架的发展过程本质还是抽象与分层的基本思想的落地：有一些重复或相似的工作是可以抽象出来做针对性处理的，最好能够让我们可以不再操心。就像 Java 的 Garbage Collection 一样，GC 关注于内存回收并不断完善和提升性能，开发者不用再关注内存管理这一层，同时也能降低内存泄露风险。抽象来说，前端所做的事情有两个，而现代前端框架技术也是围绕这两点不断进化的：

1. 将数据和变化后的数据渲染成UI，保持同步
2. 维护本地数据并和服务器数据保持同步

**现代前端框架将页面渲染的能力抽象和封装出来**

如今前端新人已经很少接触 DOM 编程了，甚至对浏览器原生事件的了解都不够深入。这是因为现代框架将页面渲染能力抽象和封装起来，开发者只需要按照文档配置好模板即可，现代框架会自行将初始数据渲染成页面。如果数据有变更，现代框架也提供能力渲染页面保持与数据的同步：React 用户只需调用 setState 方法，而 Vue 和 Angular 的用户什么都不用做，框架内部机制可以检测到变更而自动更新页面

将页面渲染能力封装出来以后，就可以关注于这一块不断进行优化。一方面提升性能：虚拟 DOM 和 DIFF 算法尝试最大程度降低 DOM 操作从而提升渲染性能。另一方面改善开发体验：组件化思想基于此得到广泛认可和并不断发展，如今 React 提出的 Hooks 概念也是努力将管理状态（数据）的组件与实现渲染逻辑的组件分开，降低嵌套组件的复杂度并提升复用性，也提供了更人性化的 API

如今一个前端新人可以快速上手并基于开源组件库低成本开发出一定功能的系统，都是得益于现代前端框架对页面渲染能力的封装

**现代前端框架提供了可选的状态（数据）管理能力**

之所以说是可选的，是因为你可能并不需要！这取决于你所面对系统的复杂度和现代框架所提供的状态管理能力所带来的优缺点。那么现代前端框架状态管理能力的设计借鉴了哪些思想呢？我们先来看看状态机

状态机模型可以描述一切运转中的事物。拿宇宙来说，如果我们有一个可以记录宇宙所有状态的相机，那么按下一次快门所记录的就是宇宙的一个 State，下一刻就是一个 Transition，宇宙的运转就是一个无限状态机，除非哪一刻宇宙毁灭了：

[![宇宙无限状态机](https://user-images.githubusercontent.com/4401831/50536901-7d7e3800-0b94-11e9-83c6-1e08c126c857.jpg)](https://user-images.githubusercontent.com/4401831/50536901-7d7e3800-0b94-11e9-83c6-1e08c126c857.jpg)

一个 SPA 也可以用状态机模型来描述：State 代表了当前 SPA 本地内存中的数据 (由于页面渲染能力已经被抽象和封装了，这里不再关注数据所单向映射的 UI ) ，而网络事件、浏览器事件、setTimeout 等和他们触发的对本地内存中数据的更改可以抽象为 Transition

[![spa](https://user-images.githubusercontent.com/4401831/50578843-20c39b80-0e7a-11e9-80c6-960fdc7a0d97.jpg)](https://user-images.githubusercontent.com/4401831/50578843-20c39b80-0e7a-11e9-80c6-960fdc7a0d97.jpg)

现代前端框架提供的状态管理能力其实是一个更关注“操作”的状态机模型，但是实现的手段借鉴了 Event Sourcing 和 CQRS 。首先介绍一下Event Sourcing ，两个要点：

1. 关注每一次引发 Transition 的 Event，并做持久化
2. State 是只读的，每一次 Transition 后都基于变更生成一个新的 State ，并与引发的 Event 做映射后做持久化（Immutable Data）

[![event sourcing](https://user-images.githubusercontent.com/4401831/50582921-fb965380-0ea0-11e9-8dcb-ad14be9346a2.jpg)](https://user-images.githubusercontent.com/4401831/50582921-fb965380-0ea0-11e9-8dcb-ad14be9346a2.jpg)

这种 Event First（Event-Driven vs Data-Driven） 的思想好处很多，对于前端而言最大的益处是 Snapshoot 的能力，Event 描述了 SPA 内所发生的一切事情，在目前越来越复杂的系统中遇到问题时可以溯源，重现错误，准确发现 **State 在什么时候，是由于什么原因，如何变化的**，方便 debug 。同时，Event first 还给予我们很大的想象空间：如果有一个事件标准体系被前端和各种其他系统（比如 Log, Metric, BDI）实现了呢？是不是可以丰富数据采集，有利于大数据分析呢？

而CQRS又是什么呢？ Command Query Responsibility Segregation，命令查询职责分离，一种读写分离的模式。以 Redux 为例：

[![redux](https://user-images.githubusercontent.com/4401831/50586478-90567c80-0eb4-11e9-8dd0-afdfa96f0b0f.jpg)](https://user-images.githubusercontent.com/4401831/50586478-90567c80-0eb4-11e9-8dd0-afdfa96f0b0f.jpg)

- **Commands:** 不返回任何结果，但更改一个对象或整个系统的状态。在上图中指 dispatch 一个 action 而调用的 reducer 对 store 的处理产生一个新的 store
- **Query :** 返回结果但不会改变对象的状态，在上图中指 subscribe store 以及注册的 listener 里调用 getState 方法

拿 Redux 的示例 [Shopping Cart Example](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart) 来说明一下，这里只分析 Add to cart 一个 action，详细代码请到 sandbox 里查阅：

[![shopping cart](https://user-images.githubusercontent.com/4401831/51031035-45381a00-15d6-11e9-899b-600e14e0f289.png)](https://user-images.githubusercontent.com/4401831/51031035-45381a00-15d6-11e9-899b-600e14e0f289.png)

当用户点击 Add to cart 按钮时，对应 action 会 dispatch ADD_TO_CART，触发 Products 和 Cart 里对应的 reducer 去更改 state，即 command，操作过程是将 Products 里对应 product 的库存减 1，Cart 里对应 product 数量加 1

```
// products reducer
// products 里对应 product 存货数量减 1
const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    default:
      return state
  }
}

// cart reducer
// 如果 cart 里没有对应的 product，添加新的 product
const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

// cart 里对应的 product 数量加 1
const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    default:
      return state
  }
}
```

reducer 更改了 Store 里对应 state 后，会触发变更通知 view 去获取最新 state 并重新渲染，即 query

```
const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export const getTotal = state =>
  getAddedIds(state)
    .reduce((total, id) =>
      total + getProduct(state, id).price * getQuantity(state, id),
      0
    )
    .toFixed(2)

export const getCartProducts = state =>
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
```

这样最新的商品列表、购物车商品列表和总价都会渲染刷新。此购物车例子比较简单，再复杂点可以减少购物车商品数量，购物车某个商品全选等，而我们只需要编写对应的 action 和 reducer 即可。从这个例子可以看出，对于前端而言，命令和查询职责分离所带来的优点主要有：

1. 逻辑更加清晰，能够看到哪些行为或者操作导致了 state 的变化
2. 处理状态的方法更加原子化，提高复用性
3. 提供了一个标准的管理状态的模式，保证代码输出风格的一致性
4. 可扩展性强，合理添加 action 和对应的 reducer 即可
5. 关注于状态管理后，可以做针对性的优化，提高性能
6. 完美结合Eventing Source模式，可以记录下所有的事件，必要时用来对系统进行回退或者重放
7. 为不同层级的组件提供良好的获取共享 State 的能力

但是这些优点是需要付出代价的：**你需要写更多的代码，对于简单系统而言会降低开发效率！**，所以要根据系统复杂度酌情选择使用。另外，嵌套层级深的组件之间获取共享 State 也有其他方案可选

总结：现代前端框架技术的发展正是抽象和分层思想的实践。将前端问题分为数据状态管理和与数据状态保持同步的页面渲染能力封装。关注分离、松散耦合便可以分别针对性的优化，改善开发体验。封装好解决方案后，前端开发者就可以忽略其底层实现细节，把精力放在业务逻辑上

**资料参考**

- [Introduction to CQRS](https://www.codeproject.com/Articles/555855/Introduction-to-CQRS)