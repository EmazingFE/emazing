前端开发者一般很少能从一个更高的角度来看待通信这件事情，希望本文可以引领大家深入探究一下通信，并找到解决前端通信问题的通用思路

### 什么是通信？

要点：**1. 发送者和接收者 2. 传输媒介 3. 传输的数据 4. 传输格式（协议）**
目的：**1. 同步数据 2. 传递指令(执行的方法)**

浏览器向服务器发送一次 `GET` 请求，会将请求的数据同步给服务器，服务器会根据请求数据执行一些操作后，再决定将哪些数据同步给浏览器。这是为了在浏览器里同步服务器上的数据

遥控器与无人机通信，会将一些指令（本质就是无人机自身可以执行的方法）发送给无人机，无人机去执行，然后做出相应的动作。这是为了传递指令

[![shared-storage-communication](https://user-images.githubusercontent.com/4401831/31727812-3845d60a-b3f0-11e7-9889-e2c6525a0619.png)](https://user-images.githubusercontent.com/4401831/31727812-3845d60a-b3f0-11e7-9889-e2c6525a0619.png)

上图是通过shared-storage来实现通信的过程，如果两个页面同域名且端口号相同，他们可以访问相同的localStorage。如果Tab1想给Tab2发送数据产生通信，只要做到以下几点即可：

1. Tab1通过localStorage.setItem('_data1', data)来改变localStorage中_data1的值
2. Tab2监听storage事件，一旦localStorage事件发生变化，且变化是_data1，就读取_data1的最新值

上面的通信过程中，Tab1和Tab2分别是发送者和接收者，传输媒介是共享的localStorage，传输的格式可以在data中进行标准化

到目前为止，如果你在项目中遇到一个通信相关的问题，首先要想到发送者和接收者分别是什么，以及有哪些传输媒介可以实现通信

### 前端领域遇到的通信有哪些？

- 前端与后端之间的通信
- webview与移动客户端通信 ／ 前端与PC客户端通信
- 页面与iframe间的通信
- web workers 线程通信
- 路由间的通信
- 组件之间的通信
- 跨浏览器tab通信

常见的通信媒介

- xhr / fetch / websocket / SSE
- postMessage
- shared variable
- shared storage
- shared worker
- constructor assignment (props)
- EventEmitter

| 前端通信                                      | 使用的媒介                                   | 说明                                                         |
| --------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------ |
| 前端与后端之间的通信                          | xhr / fetch / websocket / SSE                | --                                                           |
| webview与移动客户端通信 ／ 前端与PC客户端通信 | shared variable                              | 共享的变量其实是方法，该方法是客户端的方法，在客户端里执行，但却是前端主动调用，通过参数传输数据 |
| 页面与iframe间的通信                          | postMessage                                  | --                                                           |
| web workers 线程通信                          | postMessage                                  | --                                                           |
| 路由间的通信                                  | shared storage                               | url里的query或者params本质是存在浏览器输入框里的共享存储     |
| 组件之间的通信                                | eventEmitter, constructor assignment (props) | vuex, redux都是使用观察者模式，和$emit并无实质区别。可以认为root component和子孙组件通过媒介store进行通信 |
| 跨浏览器tab通信                               | shared storage, shared worker                | --                                                           |

> 将vuex或redux中的store视为组件通信的媒介，也可以帮助我们思考何时该使用vuex或redux。store作为媒介使root component和子孙组件进行通信，目的是为了同步公共state给这些子孙组件。所以假如你的项目里没有大量公共state需要维护，使用vuex或者redux只会徒增项目的复杂度。另外一个需要思考的问题是，这些公共的state真的需要用vuex或者redux来维护么？

### 通信分类

One-Way communication （单向通信）

[![one-way_communication_model](https://user-images.githubusercontent.com/4401831/31715377-35b278b6-b3c9-11e7-98f1-1fa750e9f017.png)](https://user-images.githubusercontent.com/4401831/31715377-35b278b6-b3c9-11e7-98f1-1fa750e9f017.png)

Two-Way communication （双向通信）

[![img](https://user-images.githubusercontent.com/4401831/31715380-3b2cba86-b3c9-11e7-8806-a648b17b6e65.jpg)](https://user-images.githubusercontent.com/4401831/31715380-3b2cba86-b3c9-11e7-8806-a648b17b6e65.jpg)

单向通信比较简单，使用场景也相对少，所以接下来会重点讲一下项目中经常要用到的双向通信

双向通信一定有client和server，一次通信的sender就是client，receiver就是server

> 注：你能分别说明前端领域遇到的通信是单向通信还是双向通信，以及他们通信的目的么？

### 双向通信 (Two-Way communication)

前面着重讲了通信的两个要点：`发送者和接收者`、`传输媒介`。接下来将着重介绍以下传输的数据格式的重要性

[![two-way-communicte](https://user-images.githubusercontent.com/4401831/31754150-3f886288-b4c8-11e7-95b9-fe5df30aa499.png)](https://user-images.githubusercontent.com/4401831/31754150-3f886288-b4c8-11e7-95b9-fe5df30aa499.png)

上图是常见的一个双向通信的过程，通过上面已经掌握的知识，我们可以轻松地实现整个通信过程。但是有几个问题展现在眼前：

1. 应该知道一次返回是哪次请求结果，请求以及返回身份应该唯一
2. 一次请求的server端执行操作出错，返回的并不是预期的正常数据，client应该有能力知道返回是否异常
3. 发送请求传递的数据，应该遵循一定的格式标准，方便server端进行统一解析处理
4. 如果通信失败，或者耗时过长需要timeout机制，该怎么方便实现

解决以上问题，需要用到通信第三个要点：传输格式（协议）

```
/** request data packet */
{
  id: '910b56f8-622b-4cdd-9ab7-8dcd758dc2dc',
  type: 'request',
  method: 'method1',
  params: {}
}
/** response data packet */
{
  id: '910b56f8-622b-4cdd-9ab7-8dcd758dc2dc',
  type: 'response',
  result: null,
  error: {
    message: 'error message',
    code: 2
  }
}
```

我们来看一下是否可以解决上面提到过的问题：

1. 通过ID可以确认一次返回对应哪一次请求
2. server处理正常处理一次请求，返回的数据result为结果，error为null；如果server端执行出错，error为错误结果，result为null；这样返回的data packet中如果error不为null，就意味着server没有按照预期返回正常数据，应该异常处理
3. 请求传递的数据，需要server执行的方法为method，方法执行的参数在params里按照约定好的顺序传递，可以方便server统一解析处理
4. 通信失败或者时间过长，只需要client端自己 reject 一个异常的 response data packet 即可

恭喜，之前提出的问题，通过使用这种统一的数据格式就能得到完美解决

其实，这就是一个简单的RPC协议

[![screen shot 2017-10-19 at 12 19 21](https://user-images.githubusercontent.com/4401831/31754133-197c0ffe-b4c8-11e7-8259-3933eef033da.png)](https://user-images.githubusercontent.com/4401831/31754133-197c0ffe-b4c8-11e7-8259-3933eef033da.png)

### 远程过程调用 (Remote Procedure Call)

> Remote Procedure Call (RPC) is a protocol that one program can use to request a service from a program located in another computer on a network without having to understand the network's details. A procedure call is also sometimes known as a function call or a subroutine call.

这里RPC的定义强调了两个计算机通过网络通信实现相互调用彼此服务，对于前端来说除了和后端通信，其他的通信几乎都是在一个计算机里。所以我们可以认为这是比较狭义的定义，前端的世界里广义的RPC不限制发送者和接收者要在两台计算机里，也不限制传输媒介是网络，只要能按照约定的RPC数据格式实现双向通信即可

远程过程调用的几个要点

- 传输的数据格式要约定好
- server要提供一些服务方法
- client记录发送的请求，server返回时delete掉对应的请求记录
- 要有传输媒介

**下面我们以页面和iframe通信来看一下具体的通信实现，其中iframe为server，外壳页面为client**

1. 传输的数据格式

```
import uuid from './uuid-v4'

export class RequestPacket {
  constructor(method, params) {
    this.id = uuid()
    this.method = method
    this.params = params
    this.type = 'request'
  }
}

export class ResponsePacket {
  constructor(id, result, error) {
    this.id = id
    this.result = result
    this.error = error
    this.type = 'response'
  }
}
```

1. server要提供一些服务方法

```
/**
 * store datas by closure
 */
var _data = {
  token: '91349b0c45a99fc36cf2',
  num: 0
}
const $container = document.querySelector('#container')

/** server procedures  */
const procedures = {
  getToken(key) {
    return _data.token
  },
  setData(key, value) {
    _data[key] = value
    return 'set data success!'
  },
  addNum() {
    _data.num = _data.num + 1
    $container.innerHTML = `Current Number: ${_data.num}`
    return _data.num
  },
  reduceNum() {
    _data.num = _data.num - 1
    $container.innerHTML = `Current Number: ${_data.num}`
    return _data.num
  }
 }

export default procedures

/** ------------ RPC Class ------------------ **/

import { isObject, isArray } from './help'
import { ResponsePacket } from './packet'

export default class Rpc {
  constructor() {
    this.procedures = {}
  }

  add(key, cb) {
    this.procedures[key] = cb
  }

  call(packet) {
    const { method, params, id } = packet
    const _params = parse(params)
    const _method = this.procedures[method]
    return _method
      ? new ResponsePacket(id, _method(..._params), null)
      : new ResponsePacket(id, null, `Cannot find method ${method} in server procedures!`)
  }

}

function parse(params) {
  return isObject(params)
    ? Object.values(params)
    : isArray(params)
      ? params
      : [ params ]
}
```

1. client记录发送的请求，server返回时delete掉对应的请求记录

```
client process response
/**
 * iframe client
 */
import { RequestPacket } from '../utils/packet'
var _requests = {}
const iframeWindow = document.querySelector('#iframe').contentWindow

window.addEventListener('message', function (event) {
  const { result, error, id } = event.data
  if (error) {
    _requests[id].reject(error)
  } else {
    _requests[id].resolve(result)
  }
  delete _requests[id]
}, true)

export function sendRequest(method, params) {
  const packet = new RequestPacket(method, params)
  const { id } = packet
  return new Promise(function (resolve, reject) {
    iframeWindow.postMessage(packet, '*')
    _requests[id] = { resolve, reject }
  })
}

/** -----   client request action ----- */

import { sendRequest } from './client'

const $addControl = document.querySelector('#control > .add')
const $reduceControl = document.querySelector('#control > .reduce')

function init() {
  $addControl.addEventListener('click', function () {
    sendRequest('addNum').then(res => {
      console.info(res)
    })
  })

  $reduceControl.addEventListener('click', () => {
    sendRequest('reduceNum').then(res => {
      console.info(res)
    })
  })
}

/**
 * entry point
 */
init()
```

1. 要有传输媒介，就是通过postMessage

```
/**
 * iframe server
 */

import Rpc from '../utils/rpc'
import procedures from '../utils/procedures'

class Server extends Rpc {
  constructor() {
    super()
  }

  init(procedures) {
    Object.keys(procedures).forEach(key => {
      this.add(key, procedures[key])
    })

    window.addEventListener('message', event => {
      var packet = event.data
      event.source.postMessage(server.call(packet), event.origin)
    })
  }
}

export const server = new Server()
server.init(procedures)
```

这样就可以实现一次RPC双向通信了

上面的完整代码在[rpc-demo](https://github.com/rainjay/rpc-demo) 里，这里的例子包括h5与移动客户端通信原理、iframe与外壳通信原理和跨tab页面通信原理。如果觉得对你有帮助，star是对我的小小鼓励～

### 后端可扩展的跨语言服务

有一定规模的互联网公司内部肯定是针对不同的业务场景使用了不同的开发语言以及技术栈的。也不可避免会遇到要跨语言调用彼此服务这种需求。

[thrift](https://thrift.apache.org/)这类框架提供了解决方案，底层原理也是RPC。使用TCP协议进行通信，底层有约定好的数据格式

### 总结

单向通信：A: 你瞅啥 B: 溜
双向通信： A: 你瞅啥 B: 瞅你咋的