### SRI是什么？

SRI是Subresource Integrity的缩写，一般按照字面意义翻译为：子资源完整性。详情请参考：<https://www.w3.org/TR/SRI/>

点击查看github的页面源码，可以看到这些代码：

```
<link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-77c3b874f32e71b14cded5a120f42f5c7288fa52e0a37f2d5919fbd8bcfca63c.css" integrity="sha256-d8O4dPMucbFM3tWhIPQvXHKI+lLgo38tWRn72Lz8pjw=" media="all" rel="stylesheet" />
<script async="async" crossorigin="anonymous" integrity="sha256-O0RXCN8H5xVoHnaRW5G3YbcevQUfBlFdDvDgom+xgG0=" src="https://assets-cdn.github.com/assets/github-3b445708df07e715681e76915b91b761b71ebd051f06515d0ef0e0a26fb1806d.js">
```

上面标签里都有intergrity属性，比如：`integrity="sha256-d8O4dPMucbFM3tWhIPQvXHKI+lLgo38tWRn72Lz8pjw="`。
这里的hash值是根据资源内容通过特定的签名算法（支持 sha256、sha384 和 sha512）生成的签名。

浏览器拿到资源内容以后，会根据integrity所指定的签名算法计算结果与integrity值进行对比。如果二者不一致，就不会执行这个资源，这个过程称为验签。（了解数字签名情查看[数字签名是什么](http://www.ruanyifeng.com/blog/2011/08/what_is_a_digital_signature.html)）

### SRI的用途

SRI可以确保页面引入资源的完整性，这样我们可以做到：

1. 确保安全：假如CDN服务被入侵，文件内容被写入恶意代码的时候，如果启用了SRI策略，有恶意代码的文件无法执行，防止XSS攻击。虽然https也可以确保传输过程中不被劫持并写入恶意代码，但是对于CDN服务被入侵时，https也无济于事。
2. 确保资源无脏数据：假如CDN在同步过程中有脏数据，JS代码与源站代码不一致，便不会运行。这样可以防止运行脏代码导致报错，检测到错误的同时可以向源站下载对应的正常代码。

### 1.通过SRI确保下载正确完整JS资源

传统的方法，是在JS正常运行的最后，加一个全局的变量来判断其是否正常运行。比如：

```
<script>
  function _loadScript(src) {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    document.querySelector('head').appendChild(script)
  }
</script>
  
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
<script>window.jQuery || _loadScript("./js/libs/jquery-1.5.1.min.js")</script>
```

但使用这种办法，在遇到有问题的JS资源执行过程中，会抛出异常。但是我们通过启用SRI策略就可以避免这种问题。

我们通过使用webpack的html-webpack-plugin和webpack-subresource-integrity两个插件，我们可以轻松地生成包含integrity属性script的index.html

```
var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var SriPlugin = require('webpack-subresource-integrity');
 
var webpackConfig = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    crossOriginLoading: 'anonymous',
    publicPath: '//www.cndjs.com/' //这里配置的是CDN地址，在下面通过script写入的方法去loadScript的时候，应该去掉该配置
  },
  module: {
    rules: [{
      test: /\.(css)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        }]
      })
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module.context.indexOf("node_modules") !== -1;
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:6].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/template.html',
      inject: false, //这里应该填false，手动插入script标签
      chunksSortMode: 'dependency'
    }),
    new SriPlugin({
      hashFuncNames: ['sha256'],
      enabled: true
    })
  ]
}
```

下面是template.html：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <% for (var css in htmlWebpackPlugin.files.css) { %>
  <link href="<%= htmlWebpackPlugin.files.css[css] %>" integrity="<%= htmlWebpackPlugin.files.cssIntegrity[css] %>" crossorigin="anonymous"
    rel="stylesheet">
  <% } %>
</head>
<body>
<% for (var chunk in htmlWebpackPlugin.files.js) { %>
  <script src="<%= htmlWebpackPlugin.files.js[chunk] %>" integrity="<%= htmlWebpackPlugin.files.jsIntegrity[chunk] %>"
    crossorigin="anonymous"></script>
  <% } %>
</body>
</html>
```

> 注意：SRI只是保证在验签失败的时候不执行对应的资源！而我们希望对应的资源加载不正确的时候去源站下载对应的代码。并且，我们还希望JS代码可以按照预期的加载顺序来执行（如果manifest.js加载失败，依赖它的vendor.js却加载成功了，vendor.js在执行的过程中就会报错）。

### 2.SRI检测到CDN资源不完整时，去下载源站代码

我们知道，通过script标签加载到的JS默认会严格按照标签顺序去执行的，但是通过createElement('script')并append到body中的JS资源，执行却是先下载完成先执行！

为了让代码可以按照顺序执行，我们必须要控制JS代码的加载顺序，保证在一个JS加载运行成功后再加载下一个，所以代码可以这么改：

```
<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
 
<body>
  <script>
    var CDN_URI = '//cdnjs.com/'
    var styles = {}
    <% for (var css in htmlWebpackPlugin.files.css) { %>
      styles["<%= htmlWebpackPlugin.files.css[css] %>"] = "<%= htmlWebpackPlugin.files.cssIntegrity[css] %>"
    <% } %>
  
    var chunks = {}
    <% for (var chunk in htmlWebpackPlugin.files.js) { %>
      chunks["<%= htmlWebpackPlugin.files.js[chunk] %>"] = "<%= htmlWebpackPlugin.files.jsIntegrity[chunk] %>"
    <% } %>
 
    Object.keys(styles).forEach(function (key) {
      _loadStyle(CDN_URI + key, styles[key])
        .catch(function () {
          return _loadStyle(key, styles[key])
        })
    })
 
    Object.keys(chunks).reduce(function (pre, cur) {
      return pre.then(function() {
        return _wrapLoadScript(cur)
      })
    }, Promise.resolve())
 
    function _wrapLoadScript(key) {
      return _loadScript(CDN_URI + key, chunks[key])
        .catch(function () {
          return _loadScript(key, chunks[key])
        })
    }
 
    function _loadScript(src, intergrity) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement('script')
        script.src = src
        script.onload = resolve
        script.onerror = reject
        if (intergrity) {
          script.intergrity = intergrity
          script.crossoirgin = 'anonymous'
        }
        document.querySelector('head').appendChild(script)
      })
    }
 
    function _loadStyle(href, intergrity) {
      return new Promise((resolve, reject) => {
        var link = document.createElement('link')
        link.rel = 'stylesheet'
        link.crossoirgin = 'anonymous'
        link.onload = resolve
        link.onerror = reject
        if (intergrity) {
          link.href = href
          link.intergrity = intergrity
        }
        document.querySelector('head').appendChild(link)
      })
    }
  </script>
</body>
</html>
```

> 以上方案可以完整解决CDN资源不完整问题，但有一个致命的问题：JS资源运行完一个才能去下载下一个，而不是并发下载，首页渲染时间会受到严重影响！

所以，在CDN能够保证百分之99.99不出问题的时候，我们可以不使用以上方法。但是，我们依旧可以做一些事情，比如: 接入报错监控系统, 在极少部分用户下载到CDN资源有问题，不能正常运行时，可以将script加载的error信息抛出，比如可以对1中的template.html进行如下修改：

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <% for (var css in htmlWebpackPlugin.files.css) { %>
  <link href="<%= htmlWebpackPlugin.files.css[css] %>" integrity="<%= htmlWebpackPlugin.files.cssIntegrity[css] %>" crossorigin="anonymous"
    rel="stylesheet">
  <% } %>
</head>
<body>
<% for (var chunk in htmlWebpackPlugin.files.js) { %>
  <script src="<%= htmlWebpackPlugin.files.js[chunk] %>"
    integrity="<%= htmlWebpackPlugin.files.jsIntegrity[chunk] %>"
    crossorigin="anonymous"
    onerror="throw 'SRI ERROR'"> // 这里抛出的error信息‘SRI ERROR'会被perf的全局window.addEventListener('error', callback)检测到并统计在God中
  </script>
<% } %>
</body>
</html>
```

上面的代码，前提是要接入一个报错监控系统。这样如果CDN资源有问题，错误信息为SRI ERROR会统计在里。你可以通过IP来判断哪个地区的CDN节点有脏数据，然后让运维帮忙清理一下对应的节点即可！
这样就不至于某个CDN节点有问题，自己还完全不知道！直到客服反馈客户端白屏问题，通过远程协助各种倒腾一番才搞清楚！

总结：虽然2中的方法可以最大限度地保证系统的稳定性，但是这是以牺牲页面渲染性能为代价的。在CDN资源基本百分之99.99不出问题的情况下，不建议使用2里的办法（但也应该懂得思路）。建议使用God来做统计和预警，万一发生大规模CDN脏数据的情况，可以及时发现问题，及时解决！

### 3. 使用`<link rel="preload">` 来并发预加载资源，提高性能

2中的问题，我们可以通过preload资源来解决（会有兼容性问题），具体实现如下：

```
<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
 
<body>
  <script>
    var CDN_URI = '//cdnjs.com/'
    var styles = {}
    <% for (var css in htmlWebpackPlugin.files.css) { %>
      styles["<%= htmlWebpackPlugin.files.css[css] %>"] = "<%= htmlWebpackPlugin.files.cssIntegrity[css] %>"
    <% } %>
  
    var chunks = {}
    <% for (var chunk in htmlWebpackPlugin.files.js) { %>
      chunks["<%= htmlWebpackPlugin.files.js[chunk] %>"] = "<%= htmlWebpackPlugin.files.jsIntegrity[chunk] %>"
    <% } %>
 
    Object.keys(styles).forEach(key => {
      _loadStyle(CDN_URI + key, styles[key])
        .catch(function () {
          return _loadStyle(key, styles[key])
        })
    })
   
    var preloadUrls = Object.keys(chunks).map(key => _wrapPreload(key))
 
    Promise.all(preloadUrls).then(urls => {
      urls.forEach(function(url) {
        _loadScript(url)
      })
    })
 
    function _wrapPreload(key) {
      return _preLoad(CDN_URI + key, chunks[key])
        .catch(link => {
          link.href = key
          return key
        })
    }
 
    function _loadScript(src) {
      var script = document.createElement('script')
      script.src = src
      script.async = false
      document.querySelector('head').appendChild(script)
    }
 
    function _loadStyle(href, intergrity) {
      return new Promise((resolve, reject) => {
        var link = document.createElement('link')
        link.rel = 'stylesheet'
        link.crossoirgin = 'anonymous'
        link.onload = resolve
        link.onerror = reject
        if (intergrity) {
          link.href = href
          link.intergrity = intergrity
        }
        document.querySelector('head').appendChild(link)
      })
    }
 
    function _preLoad(href, intergrity) {
      return new Promise(function (resolve, reject) {
        var link = document.createElement('link')
        link.href = href
        link.rel = 'preload'
        link.as = 'script'
        link.onload = resolve.bind(undefined, href)
        link.onerror = reject.bind(undefined, link)
        if (intergrity) {
          link.setAttribute('intergrity', intergrity)
          link.setAttribute('crossoirgin', 'anoymous')
        }
        document.querySelector('head').appendChild(link)
      })
    }
  </script>
</body>
</html>
```

> 如果没有兼容问题，3已经是我们想要的完美解决方案了

补充：上面script里都加了crossorigin="anonymous"这个属性，具体原因可以自行查阅资料！
代码参考：<https://github.com/rainjay/subResource-intergrity>

参考资料：
[Subresource Integrity](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource_Integrity)
[CORS settings attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes)
[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
[webpack-subresource-integrity](https://www.npmjs.com/package/webpack-subresource-integrity)
<http://caniuse.com/#search=Subresource%20Integrity>