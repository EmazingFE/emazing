webpackJsonp([0],{"08FI":function(e,t){},"5AqT":function(e,t){},"6ulf":function(e,t){},"8NYj":function(e,t){},"9A5r":function(e,t){throw new Error('Module build failed: ModuleBuildError: Module build failed: \n    \x3c!-- <div id="particles-container">\n                       ^\n      Invalid CSS after \'..."../styles/app"\': expected 1 selector or at-rule, was "{"\n      in /Users/ppyylee/Workspace/emazing/src/components/particles.vue (line 3, column 25)\n    at runLoaders (/Users/ppyylee/Workspace/emazing/node_modules/webpack/lib/NormalModule.js:195:19)\n    at /Users/ppyylee/Workspace/emazing/node_modules/loader-runner/lib/LoaderRunner.js:364:11\n    at /Users/ppyylee/Workspace/emazing/node_modules/loader-runner/lib/LoaderRunner.js:230:18\n    at context.callback (/Users/ppyylee/Workspace/emazing/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (/Users/ppyylee/Workspace/emazing/node_modules/sass-loader/lib/loader.js:76:13)\n    at Object.done [as callback] (/Users/ppyylee/Workspace/emazing/node_modules/neo-async/async.js:7921:18)\n    at options.error (/Users/ppyylee/Workspace/emazing/node_modules/node-sass/lib/index.js:294:32)')},D4uH:function(e,t,a){"use strict";var s={},i={name:"icon",props:{name:{type:String,validator:function(e){return e?e in s||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?s[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,a=e.height;return Math.max(t,a)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,a,s){var i="fa-"+(n++).toString(16);return t[s]=i,' id="'+i+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,a,s,i){var n=a||i;return n&&t[n]?"#"+t[n]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,a=0;this.$children.forEach(function(e){t=Math.max(t,e.width),a=Math.max(a,e.height)}),this.childrenWidth=t,this.childrenHeight=a,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(a-e.height)/2})}},register:function(e){for(var t in e){var a=e[t];a.paths||(a.paths=[]),a.d&&a.paths.push({d:a.d}),a.polygons||(a.polygons=[]),a.points&&a.polygons.push({points:a.points}),s[t]=a}},icons:s},n=870711;var c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,s){return a("path",e._b({key:"path-"+s},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,s){return a("polygon",e._b({key:"polygon-"+s},"polygon",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.raw?[a("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var o=a("VU/8")(i,c,!1,function(e){a("5AqT")},null,null);t.a=o.exports},M93x:function(e,t,a){"use strict";var s=a("xJD8"),i=a.n(s),n=a("fNti");var c=function(e){a("W44g")},o=a("VU/8")(i.a,n.a,!1,c,null,null);t.default=o.exports},TXVI:function(e,t){},TgUF:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiMzQjQ5NUIiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTIuOCAxMS4zMTNoMTIuNDhsLTQuMjQgNC4zMDZhLjc5NC43OTQgMCAwIDAgMCAxLjEzN2MuMzIuMzI1LjguMzI1IDEuMTIgMGw1LjYtNS42ODdhLjc5NC43OTQgMCAwIDAgMC0xLjEzOGwtNS42LTUuNjg3QS44NTcuODU3IDAgMCAwIDExLjYgNGMtLjI0IDAtLjQuMDgxLS41Ni4yNDRhLjc5NC43OTQgMCAwIDAgMCAxLjEzN2w0LjI0IDQuMzA2SDIuOGMtLjQ4IDAtLjguMzI1LS44LjgxMyAwIC40ODguNC44MTMuOC44MTN6Ii8+Cjwvc3ZnPgo="},W44g:function(e,t){},XCQl:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj4KICAgIDxwYXRoIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIgZD0iTTE1LjAxOCAxMS4wMUw5LjU1IDE2LjI1bC42NjcuNzVMMTcgMTAuNSAxMC4yMTcgNGwtLjY2Ny43NSA1LjQ2OCA1LjI0SDN2MS4wMmgxMi4wMTh6Ii8+Cjwvc3ZnPgo="},ce18:function(e,t){},dD3h:function(e,t,a){"use strict";var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"emazing-footer"},[t("div",{staticClass:"emazing-footer-content"},[this._v("Copyright © 2018 Emazing. All Rights Reserved.")])])}]};t.a=s},fNti:function(e,t,a){"use strict";var s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-header"),this._v(" "),t("router-view"),this._v(" "),t("app-footer")],1)},staticRenderFns:[]};t.a=s},ghEC:function(e,t){},icFP:function(e,t,a){e.exports=a.p+"static/img/blog1.2bd0dcc.png"},kP4r:function(e,t){},lRwf:function(e,t){e.exports=Vue},lVK7:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("lRwf"),i=a.n(s),n=a("pRNm"),c=a.n(n),o=a("XCQl"),r=a.n(o),l=a("TgUF"),d=a.n(l),m=a("icFP"),p=a.n(m),u={data:function(){return{rightLightImg:r.a,rightDarkImg:d.a,blog1Img:p.a,introduction:{title:"饿了么中后台前端团队",subtitle:"Emazing FE",description:"Self-improving happily every day!"},blogObj:{name:"博客",englishName:"Blog",typeName:"文章",btnName:"全部文章",total:136,blogs:[{img:p.a,author:"王超楠",tag:"技术共享",date:"2018.01.02",title:"前端数据流管理方案",description:"我们在谈前端数据流管理之前，先来看一下组件化相关的概念，并以此为基础来讨论下基于Vue的开发过程中的数据流管理方案。我们在开发过程中，将后端返回的数据和控制UI状态的数据统称为state。现在我们知道，一个组件的state，有外部传入的，也有自身内部私有的。我们将围绕组件内部和外部state来探讨数据流管理方案。"},{img:p.a,author:"王超楠",tag:"技术共享",date:"2018.11.18",title:"前端数据流管理方案",description:"G3D 是一款基于 WebGL 的 JavaScript 3D 渲染引擎，借助 GCanvas，G3D 可以运行在 Weex，ReactNative 等 hybrid 环境下。G3D 由淘宝…"}]},projectObj:{name:"项目",englishName:"Project",typeName:"项目",btnName:"全部项目",total:82,blogs:[{img:p.a,author:"王超楠",tag:"技术共享",date:"2018.01.02",title:"前端数据流管理方案",description:"我们在谈前端数据流管理之前，先来看一下组件化相关的概念，并以此为基础来讨论下基于Vue的开发过程中的数据流管理方案。我们在开发过程中，将后端返回的数据和控制UI状态的数据统称为state。现在我们知道，一个组件的state，有外部传入的，也有自身内部私有的。我们将围绕组件内部和外部state来探讨数据流管理方案。"},{img:p.a,author:"王超楠",tag:"技术共享",date:"2018.11.18",title:"前端数据流管理方案",description:"G3D 是一款基于 WebGL 的 JavaScript 3D 渲染引擎，借助 GCanvas，G3D 可以运行在 Weex，ReactNative 等 hybrid 环境下。G3D 由淘宝…"}]},teamObj:{name:"团队",englishName:"Team",img:"https://fuss10.elemecdn.com/8/9a/9d167efcdc8a531853473aef2ddadjpeg.jpeg",btnName:"加入我们",description:"我们是饿了么中后台前端开发团队（Emazing FE ），承担着饿了么中后台前端基础设施、数十个业务产品的研发。我们有着前沿的技术选型，欢快的工作氛围，多元的团队建设，饱足的成长食粮。在这里有一群年轻有趣的小伙伴，加入我们一起工作一起玩。Self-improving happily every day!Challenge complicated business, design awesome architecture!"}}},mounted:function(){},methods:{viewModule:function(e){e.route&&this.route(e.route),e.link&&this.goto(e.link)},route:function(e){this.$router.push({name:e})},goto:function(e){var t=document.createElement("a");t.setAttribute("href",e),t.setAttribute("target","_blank"),t.click()}}},g={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"emazing-home"},[a("div",{staticClass:"home-banner"},[a("div",{staticClass:"home-banner-content"},[a("div",{staticClass:"home-banner-left"},[a("h1",[e._v(e._s(e.introduction.title))]),e._v(" "),a("h2",[e._v(e._s(e.introduction.subtitle))]),e._v(" "),a("p",[e._v(e._s(e.introduction.description))])]),e._v(" "),a("div",{staticClass:"home-banner-right"},[a("particles")],1)])]),e._v(" "),a("div",{staticClass:"home-body"},[a("div",{staticClass:"home-body-title"},[a("h1",{staticClass:"title-first"},[e._v(e._s(e.blogObj.name))]),e._v(" "),a("h1",{staticClass:"title-second"},[e._v(" / ")]),e._v(" "),a("h1",{staticClass:"title-third"},[e._v(e._s(e.blogObj.englishName))])]),e._v(" "),a("div",{staticClass:"home-body-content"},[e._l(e.blogObj.blogs,function(t,s){return a("div",{key:s,staticClass:"home-body-content-box box-right"},[a("img",{staticClass:"box-img",attrs:{src:t.img}}),e._v(" "),a("div",{staticClass:"box-tag"},[a("span",{staticClass:"title-first"},[e._v(e._s(t.tag))]),e._v(" "),a("span",{staticClass:"title-third"},[e._v(e._s(t.author))]),e._v(" "),a("span",{staticClass:"title-second"},[e._v(e._s(t.date))])]),e._v(" "),a("h2",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.description))])])}),e._v(" "),a("div",{staticClass:"home-body-content-global"},[a("div",{staticClass:"global-total"},[e._v(e._s(e.blogObj.total))]),e._v(" "),a("div",{staticClass:"global-name"},[e._v(e._s(e.blogObj.typeName))]),e._v(" "),a("div",{staticClass:"global-btn"},[a("span",[e._v(e._s(e.blogObj.btnName))]),e._v(" "),a("img",{staticClass:"btn-img",attrs:{src:e.rightLightImg}})])])],2)]),e._v(" "),a("div",{staticClass:"home-body"},[a("div",{staticClass:"home-body-title"},[a("h1",{staticClass:"title-first"},[e._v(e._s(e.projectObj.name))]),e._v(" "),a("h1",{staticClass:"title-second"},[e._v(" / ")]),e._v(" "),a("h1",{staticClass:"title-third"},[e._v(e._s(e.projectObj.englishName))])]),e._v(" "),a("div",{staticClass:"home-body-content"},[a("div",{staticClass:"home-body-content-global"},[a("div",{staticClass:"global-total"},[e._v(e._s(e.projectObj.total))]),e._v(" "),a("div",{staticClass:"global-name"},[e._v(e._s(e.projectObj.typeName))]),e._v(" "),a("div",{staticClass:"global-btn"},[a("span",[e._v(e._s(e.projectObj.btnName))]),e._v(" "),a("img",{staticClass:"btn-img",attrs:{src:e.rightLightImg}})])]),e._v(" "),e._l(e.projectObj.blogs,function(t,s){return a("div",{key:s,staticClass:"home-body-content-box box-left"},[a("img",{staticClass:"box-img",attrs:{src:t.img}}),e._v(" "),a("div",{staticClass:"box-tag"},[a("span",{staticClass:"title-first"},[e._v(e._s(t.tag))]),e._v(" "),a("span",{staticClass:"title-third"},[e._v(e._s(t.author))]),e._v(" "),a("span",{staticClass:"title-second"},[e._v(e._s(t.date))])]),e._v(" "),a("h2",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.description))])])})],2)]),e._v(" "),a("div",{staticClass:"home-team"},[a("div",{staticClass:"home-team-content"},[a("div",{staticClass:"home-team-left"},[a("img",{staticClass:"box-img",attrs:{src:e.teamObj.img}})]),e._v(" "),a("div",{staticClass:"home-team-right"},[a("div",{staticClass:"home-team-title"},[a("h1",{staticClass:"title-first"},[e._v(e._s(e.teamObj.name))]),e._v(" "),a("h1",{staticClass:"title-second"},[e._v(" / ")]),e._v(" "),a("h1",{staticClass:"title-third"},[e._v(e._s(e.teamObj.englishName))])]),e._v(" "),a("div",{staticClass:"home-team-desc"},[e._v(e._s(e.teamObj.description))]),e._v(" "),a("div",{staticClass:"home-team-btn"},[a("span",[e._v(e._s(e.teamObj.btnName))]),e._v(" "),a("img",{staticClass:"btn-img",attrs:{src:e.rightDarkImg}})])])])])])},staticRenderFns:[]};var v=a("VU/8")(u,g,!1,function(e){a("TXVI")},"data-v-674a47a4",null).exports,f={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  blog\n")])},staticRenderFns:[]};var h=a("VU/8")({},f,!1,function(e){a("kP4r")},null,null).exports,b={props:{member:Object,color:String},computed:{avatar:function(){return this.member.avatar+"?imageView2/2/w/500"},style:function(){return"border-color: "+this.color+"; color: "+this.color}},data:function(){return{}},methods:{}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"member-item"},[a("div",{staticClass:"avatar"},[e.member.avatar?a("img",{attrs:{src:e.avatar}}):a("span",[e._v(e._s(e.member.name[0]))])]),e._v(" "),a("div",{staticClass:"member-info"},[a("div",{staticClass:"h5 mt1 mb3"},[e._v(e._s(e.member.name))]),e._v(" "),a("div",{staticClass:"mb2 flex flex-wrap"},e._l(e.member.tags,function(t){return a("span",{staticClass:"tag",style:e.style},[e._v(e._s(t))])})),e._v(" "),a("div",{staticClass:"member-desc"},[e._v(e._s(e.member.desc))])])])},staticRenderFns:[]};var j=a("VU/8")(b,_,!1,function(e){a("ghEC")},"data-v-a8b1d9f0",null).exports,C=[{name:"仲强",tags:["游戏","旅游","写作","……"],desc:"不到黄河心不死，且单身待解救的攻城狮",avatar:"https://fuss10.elemecdn.com/f/96/063b10a5421a933e03160efed5189jpeg.jpeg"},{name:"卢锋",tags:["BB党"],desc:"我就是海上漂着的钢铁巨兽",avatar:"https://fuss10.elemecdn.com/7/6c/18eb085090e996fafcbf73138829cjpeg.jpeg"},{name:"熊国胜",tags:["爱运动","爱吃鸡","爱程序"],desc:"爱江山更爱美人",avatar:"https://fuss10.elemecdn.com/f/46/ab57247386317e8149a97c7ec073ejpeg.jpeg"},{name:"何新远",tags:["克己","守心","变好"],desc:"老实人你走开",avatar:"https://fuss10.elemecdn.com/b/a5/e102f940f3843eed693a2babd21d9jpeg.jpeg"},{name:"毛强强",tags:["80后","没钱花","啃泡面"],desc:"内心是个暖暖的智障的萌萌的撒娇的比卡丘 ",avatar:"https://fuss10.elemecdn.com/e/61/efdd437fb7f106ea5797d94c85c9fjpeg.jpeg"},{name:"光强",tags:["吃完就躺"],desc:"love&peace",avatar:"https://fuss10.elemecdn.com/4/8b/a693fd0b4a61bb7fbec2bb07b2b66jpeg.jpeg"},{name:"王可心",tags:["吃货"],desc:"会变瘦的",avatar:"https://fuss10.elemecdn.com/4/37/34f154c1082d2f448a96a906cad58jpeg.jpeg"},{name:"覃柯源",tags:["肥宅我还减个屁","吃鸡"],desc:"我只是想吃一把鸡再睡，怎么就天亮了_(:ᗤ」ㄥ)_ ",avatar:"https://fuss10.elemecdn.com/2/7c/92fd798138c66ace02c04b4287cdajpeg.jpeg"},{name:"付超",tags:["烧胎一族"],desc:"像我这样的只有我一个",avatar:"https://fuss10.elemecdn.com/a/27/0ca45bf6cdd415b6eb080c38e6b33jpeg.jpeg"},{name:"邵忆乐",tags:["全主机制霸","小人物"],desc:"羡慕上下左右都比我会生活，我是老年人(逃...",avatar:"https://fuss10.elemecdn.com/0/14/04f364a737cacc1eeb6767cf6c637jpeg.jpeg"},{name:"毛柳柳",tags:["日常宅"],desc:"还好还好～",avatar:"https://fuss10.elemecdn.com/8/4d/284cf45114472e8ed9f514b47f0fajpeg.jpeg"},{name:"徐昊",tags:["装机党","假性手残"],desc:"来来来，你操作个，我看看！^_^",avatar:"https://fuss10.elemecdn.com/6/4d/be393209c21cd70b1234f1f354aafjpeg.jpeg"},{name:"杨骁伟",tags:["任天堂死忠","桌游爱好者"],desc:"一只安静的小羊",avatar:"https://fuss10.elemecdn.com/a/00/c72384177f86827b44d80f8907fbbjpeg.jpeg"},{name:"刘洋",tags:["故作思索"],desc:"喜欢运动做饭的小青年",avatar:"https://fuss10.elemecdn.com/0/d3/5d719d6cdb703c3c23f7a5a53c31cjpeg.jpeg"},{name:"陈婉玉",tags:["好奇星人","究极吃货"],desc:"穿山甲到底说了什么",avatar:"https://fuss10.elemecdn.com/5/da/9437201965ac5b2b7de882c1636d0jpeg.jpeg"},{name:"任海静",tags:["猫奴","喂蚊子","日拱一卒"],desc:"想养一只皮卡丘的烂仔==",avatar:"https://fuss10.elemecdn.com/1/46/0afe327d4a1f3e57eb4de0b8f6bfdjpeg.jpeg"},{name:"刘依琪",tags:["强迫症","细节控"],desc:"没有镜头的摄影师",avatar:"https://fuss10.elemecdn.com/c/34/a3ebd298376ce08c687ce9a7f3037jpeg.jpeg"},{name:"高辉",tags:["没有标签"],desc:"null == undefined",avatar:"https://fuss10.elemecdn.com/c/a3/001260e550796e59123c985c538c3png.png"},{name:"李元元",tags:["二次元"],desc:"今天也要加油喵～(๑•̀ㅁ•́ฅ✧",avatar:"https://fuss10.elemecdn.com/8/91/17fd964f62a0e8dbcbd77e3485802jpeg.jpeg"},{name:"任军庆",tags:["外表低调"],desc:"如果有一天~~~~，我很有钱",avatar:"https://fuss10.elemecdn.com/4/7d/6714082686ccc9ddef69c5a9d7e25jpeg.jpeg"},{name:"张闯",tags:["话癌晚期","垃圾手游肝帝","程序员界的健身嘴强王者"],desc:"孤独患者和话痨的完美矛盾结合体",avatar:"https://fuss10.elemecdn.com/a/82/7c331aaaee8a44a94f1981bda0ccfjpeg.jpeg"},{name:"雷小龙",tags:["运动","不常跑马"],desc:"你们都不知道的烟火",avatar:"https://fuss10.elemecdn.com/4/73/5900750acbaf92d2dc6eb9db9165djpeg.jpeg"},{name:"巫荣",tags:["电影控","爱怼人"],desc:"污污污",avatar:"https://fuss10.elemecdn.com/0/45/a0396fc7662b5e3cab5e4a0bd1de5png.png"},{name:"李璇",tags:["吃","吃","吃"],desc:"除了怂几乎没什么缺点",avatar:"https://fuss10.elemecdn.com/0/45/a0396fc7662b5e3cab5e4a0bd1de5png.png"},{name:"方松",tags:["主机党","猫奴"],desc:"不说了，铲屎去了",avatar:"https://fuss10.elemecdn.com/f/1f/373f3db01a6bbec9f42e3b229ad51jpeg.jpeg"},{name:"李晓倩",tags:["下月光"],desc:"一不小心就下月光了",avatar:"https://fuss10.elemecdn.com/8/c4/a906041fc0568fc61a55f92cf82f3png.png"},{name:"闫海瑞",tags:["隐居青年","宵夜党"],desc:"今天也要加油鸭🦆",avatar:"https://fuss10.elemecdn.com/2/5a/f879177dfc516b45659b68427a33apng.png"},{name:"魏巍",tags:["游戏","动漫"],desc:"有点强迫症的匡威粉。",avatar:"https://fuss10.elemecdn.com/2/41/99d69f034bce8b5be7a2fb85e5f64jpeg.jpeg"},{name:"张丽晶",tags:["B站","玩乐"],desc:"对不了解的东西都感兴趣",avatar:"https://fuss10.elemecdn.com/9/f8/b10d2560e529527ba81139e8c5099jpeg.jpeg"},{name:"邵丁丁",tags:["King Of Fight"],desc:"让你们半管血",avatar:"https://fuss10.elemecdn.com/9/3c/5a75f742b1d28a7d412b9a3f72464jpeg.jpeg"},{name:"周凯丽",tags:["日剧迷","旅游"],desc:"吃饭 睡觉 看剧",avatar:"https://fuss10.elemecdn.com/6/89/a6f855cac34d40fb874a963918ce3jpeg.jpeg"},{name:"王超楠",tags:["摄影大佬","器材党"],desc:"这家伙很懒, 什么都没写...",avatar:"https://fuss10.elemecdn.com/f/07/2fcdeb637ace4d565d9f8439eedcejpeg.jpeg"}];C.sort(function(){return Math.random()-.5});var y=C,I={components:{memberItem:j},data:function(){return{memberList:y,keywords:[{title:{CN:"愿景",EN:"Vision"},desc:"Self-improving happily everyday!"},{title:{CN:"使命",EN:"Mission"},desc:"Challenge complicated business, design awesome architecture!"},{title:{CN:"文化",EN:"Culture"},desc:"激情 · 驱动 · 挑战"}],teamImage1:"https://fuss10.elemecdn.com/8/9a/9d167efcdc8a531853473aef2ddadjpeg.jpeg?imageView2/2/w/1500",teamImage2:"https://fuss10.elemecdn.com/7/6f/3e0ca04e5c2ac530f4d8c57d7df6fjpeg.jpeg",teamImage3:"https://fuss10.elemecdn.com/c/bb/01abb47f77622edb738f6ced0839ejpeg.jpeg",teamImage4:"https://fuss10.elemecdn.com/1/82/d6501425cfb6f17a393f4993932b6jpeg.jpeg",teamImage5:"https://fuss10.elemecdn.com/9/e9/a16f75ad03113c54975218d005d88jpeg.jpeg",emazingImage:"https://fuss10.elemecdn.com/7/97/8d581f257d886c522d394a842a351jpeg.jpeg",logo:"https://fuss10.elemecdn.com/4/80/62848476e2f6ca4cf2049dd479637png.png",colorList:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ff9b3b","#ffc107","#ff9800","#ff0722","#795548","#9e9e9e","#607d8b"]}},methods:{randomColor:function(){var e=this.colorList.length,t=parseInt(Math.random()*e);return this.colorList[t]}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-body"},[a("p",{staticClass:"title"},[e._v("我们是怎样的团队？")]),e._v(" "),e._m(0),e._v(" "),a("div",{staticClass:"about-keywords"},e._l(e.keywords,function(t,s){return a("div",{key:s,staticClass:"flex-1 pr4"},[a("p",{staticClass:"keywords-title en"},[e._v(e._s(t.title.EN))]),e._v(" "),a("p",{staticClass:"keywords-title cn"},[e._v(e._s(t.title.CN))]),e._v(" "),a("p",{staticClass:"keywords-desc"},[e._v(e._s(t.desc))])])})),e._v(" "),a("div",{staticClass:"about-container"},[a("p",{staticClass:"title"},[e._v("Emazing 的我们")]),e._v(" "),a("div",{staticClass:"about-us-image"},[a("img",{attrs:{src:e.teamImage1}}),e._v(" "),e._m(1)]),e._v(" "),a("div",{staticClass:"member-list"},e._l(e.memberList,function(t,s){return a("member-item",{key:s,attrs:{member:t,color:e.randomColor()}})}))]),e._v(" "),a("div",{staticClass:"about-container"},[a("p",{staticClass:"title"},[e._v("Emazing 的环境")]),e._v(" "),a("kw-row",{staticClass:"env-image-container",attrs:{gutter:"30","content-wrap":""}},[a("kw-col",{staticClass:"image-wrapper",attrs:{span:"16"}},[a("img",{attrs:{src:e.emazingImage}})]),e._v(" "),a("kw-col",{staticClass:"image-wrapper",attrs:{span:"8"}},[a("img",{attrs:{src:e.teamImage5}})]),e._v(" "),a("kw-col",{staticClass:"image-wrapper",attrs:{span:"8"}},[a("img",{attrs:{src:e.teamImage2}})]),e._v(" "),a("kw-col",{staticClass:"image-wrapper",attrs:{span:"8"}},[a("img",{attrs:{src:e.teamImage3}})]),e._v(" "),a("kw-col",{staticClass:"image-wrapper",attrs:{span:"8"}},[a("img",{attrs:{src:e.teamImage4}})])],1),e._v(" "),e._m(2)],1),e._v(" "),a("div",{staticClass:"about-footer"},[a("p",{staticClass:"title"},[e._v("联系我们")]),e._v(" "),a("div",{staticClass:"conect-us-wrapper"},[a("div",[a("div",{staticClass:"conect-us"},[a("img",{attrs:{src:e.logo}})]),e._v(" "),a("p",{staticClass:"email"},[e._v("keyuan.qin@ele.me")])])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"about-desc"},[t("p",[this._v("我们是饿了么中后台前端开发团队（Emazing FE ），承担着饿了么中后台前端基础设施、数十个业务产品的研发。我们有着前沿的技术选型，欢快的工作氛围，多元的团队建设，饱足的成长食粮。在这里有一群年轻有趣的小伙伴，加入我们一起工作一起玩。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"join-us flex justify-center"},[t("span",[this._v("加入我们")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about-desc"},[a("p",[e._v("在这里，公司楼下便是商场，方便你逛吃逛吃团建聚餐；公司楼下便是地铁站，再也不用担心出站后的炎炎烈日狂风暴雨；公司内部的办公设施和各种福利也定会让你满意。")]),e._v(" "),a("p",[e._v("在这里，你可以加入若干兴趣小组：健身、约饭、K歌、桌游、电竞、厨师...除了这些，我们还有一年一次的大团建，国内国外随便选，还有若干不定期小团建，工作之余，一起嗨皮。")]),e._v(" "),a("p",[e._v("在这里，你可以听到大牛分享，不仅仅只有技术，还有生活。定期的技术分享和非技术分享，你总会认识有趣的人、有趣的技术、有趣的事。")]),e._v(" "),a("p",[e._v("在这里，你可以选择最前沿的技术选型，参与到前后端中间件、各种各样的轮子、贴合业务的组件库...的开发。所有你想做的，都可以尝试。")]),e._v(" "),a("p",[e._v("在这里，你不仅仅是工程师，扁平化的管理，你可以拥有足够大的空间，成为你想成为的人，做想做的事。")])])}]};var x=a("VU/8")(I,w,!1,function(e){a("xNbL")},"data-v-583f0a6d",null).exports;i.a.use(c.a);var M=[{path:"/",name:"index",component:v},{path:"/blog",name:"blog",component:h},{path:"/project",name:"project",component:v},{path:"/team",name:"team",component:v},{path:"/about",name:"about",component:x}],N=new c.a({routes:M,mode:"hash",scrollBehavior:function(){return{x:0,y:0}}}),z=(a("H7zp"),a("LcEa"),a("689D"),a("08FI"),a("D4uH")),k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"emazing-header",class:{"is-home":e.isIndexView}},[a("div",{staticClass:"header"},[a("div",{staticClass:"header-left"},[a("img",{attrs:{src:e.emazingLogo}})]),e._v(" "),a("div",{staticClass:"header-right"},e._l(e.modules,function(t,s){return a("div",{key:s,staticClass:"nav",class:{active:e.isActiveRoute(t.route),"is-home":e.isIndexView},attrs:{role:"nav"},on:{click:function(a){e.viewModule(t)}}},[a("span",[e._v(e._s(t.text))])])}))])]),e._v(" "),a("div",{staticClass:"header-blank",class:{"is-home":e.isIndexView}})])},staticRenderFns:[]};var D=a("VU/8")({data:function(){return{emazingLogo:"https://fuss10.elemecdn.com/f/c9/852ed58b43497f58aa60eee6f33dfpng.png",modules:[{text:"首页",route:"index"},{text:"博客",route:"blog"},{text:"项目",route:"project"},{text:"团队生活",route:"team"},{text:"关于",route:"about"}]}},computed:{isIndexView:function(){return"index"===this.$route.name}},methods:{viewModule:function(e){e.route&&this.route(e.route)},route:function(e){this.$router.push({name:e})},isActiveRoute:function(e){var t=!1;return this.$route.matched.forEach(function(a){t||(t=a.name===e)}),t}}},k,!1,function(e){a("8NYj")},null,null).exports,L=a("mzkE"),E={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]};var A=a("VU/8")({data:function(){return{}},mounted:function(){},methods:{}},E,!1,function(e){a("9A5r")},null,null).exports,S=a("M93x");i.a.component("icon",z.a),i.a.component("AppHeader",D),i.a.component("AppFooter",L.default),i.a.component("Particles",A),new i.a({el:"#app",components:{App:S.default},template:"<App />",router:N})},mzkE:function(e,t,a){"use strict";var s=a("ce18"),i=a.n(s),n=a("dD3h");var c=function(e){a("6ulf")},o=a("VU/8")(i.a,n.a,!1,c,"data-v-20c8c5a0",null);t.default=o.exports},pRNm:function(e,t){e.exports=VueRouter},xJD8:function(e,t){},xNbL:function(e,t){}},["lVK7"]);
//# sourceMappingURL=app.2a473d5efee85be228a4.js.map