import{_ as e,c as l,o as i,d as a}from"./app-B8oYO7Rg.js";const n={},s=a('<h2 id="ecma2023特性" tabindex="-1"><a class="header-anchor" href="#ecma2023特性"><span>ecma2023特性</span></a></h2><ul><li>Array find from last</li><li>Daniel Rosenwasser</li><li>Hashbang Grammar</li><li>Symbols as WeakMap keys</li></ul><h2 id="js中的数据类型" tabindex="-1"><a class="header-anchor" href="#js中的数据类型"><span>js中的数据类型</span></a></h2><ul><li>Null： &quot;object&quot;</li><li>Undefined： &quot;undefined&quot;</li><li>Boolean： &quot;boolean&quot;</li><li>Number： &quot;number&quot;</li><li>BigInt： &quot;bigint&quot;</li><li>String： &quot;string&quot;</li><li>Symbol： &quot;symbol&quot;</li><li>function(){}： &quot;function&quot;</li></ul><h2 id="操作符的优先级" tabindex="-1"><a class="header-anchor" href="#操作符的优先级"><span>操作符的优先级</span></a></h2><p>|| &lt; &amp;&amp;</p><h2 id="什么是原型" tabindex="-1"><a class="header-anchor" href="#什么是原型"><span>什么是原型</span></a></h2><ul><li><code>构造函数的prototype</code>指向的一个对象，也叫原型对象</li></ul><h2 id="什么是原型链" tabindex="-1"><a class="header-anchor" href="#什么是原型链"><span>什么是原型链</span></a></h2><ul><li>原型对象也会指向自己的原型对象，一层一层向上指向形成的链路</li></ul><h2 id="如何创建一个没有原型的对象" tabindex="-1"><a class="header-anchor" href="#如何创建一个没有原型的对象"><span>如何创建一个没有原型的对象</span></a></h2><ul><li>Object.create(null)</li></ul><h2 id="什么是闭包函数" tabindex="-1"><a class="header-anchor" href="#什么是闭包函数"><span>什么是闭包函数</span></a></h2><ul><li>能够外部作用域的函数，叫做闭包函数</li></ul><h2 id="一个-promise-实例有哪些状态" tabindex="-1"><a class="header-anchor" href="#一个-promise-实例有哪些状态"><span>一个 Promise 实例有哪些状态？</span></a></h2><ol><li>resolved</li><li>pending</li><li>rejected</li></ol><h2 id="promise-中异常处理方式" tabindex="-1"><a class="header-anchor" href="#promise-中异常处理方式"><span>Promise 中异常处理方式</span></a></h2><ul><li>new Promise().catch()</li><li>new Promise((reslove,reject)=&gt;{},(err)=&gt;{})</li><li>async awiat，使用 try{}catch(e){}finally{}</li></ul><h2 id="catch方法后的then方法还会执行吗" tabindex="-1"><a class="header-anchor" href="#catch方法后的then方法还会执行吗"><span><code>catch</code>方法后的<code>then</code>方法还会执行吗</span></a></h2><ul><li>会执行</li></ul><h2 id="什么是浅拷贝和深拷贝" tabindex="-1"><a class="header-anchor" href="#什么是浅拷贝和深拷贝"><span>什么是浅拷贝和深拷贝</span></a></h2><ul><li>浅拷贝：引用拷贝</li><li>深拷贝： 值拷贝</li></ul><h2 id="什么是跨域" tabindex="-1"><a class="header-anchor" href="#什么是跨域"><span>什么是跨域</span></a></h2><p>浏览器的同源策略，同源是指&quot;协议+域名+端口&quot;三者相同</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><ul><li>代理</li><li>cors</li><li>jsonp</li></ul><h2 id="快速排序" tabindex="-1"><a class="header-anchor" href="#快速排序"><span>快速排序</span></a></h2><ul><li>选取一个中间数，将数组根据中间数分为两组，进行递归。</li></ul><h2 id="ts相对js的优点" tabindex="-1"><a class="header-anchor" href="#ts相对js的优点"><span>Ts相对Js的优点</span></a></h2><ol><li>类型安全</li><li>代码重构</li><li>代码导航</li><li>代码文档</li><li>......</li></ol><h2 id="如果你使用的一个依赖包没有类型声明怎么办" tabindex="-1"><a class="header-anchor" href="#如果你使用的一个依赖包没有类型声明怎么办"><span>如果你使用的一个依赖包没有类型声明怎么办</span></a></h2><ul><li>下载第三方的类型定义包</li><li>自己写声明文件，如何写</li></ul><h2 id="获取数组第一个元素的类型" tabindex="-1"><a class="header-anchor" href="#获取数组第一个元素的类型"><span>获取数组第一个元素的类型</span></a></h2><ul><li><code>declare type FirstArray&lt;T extends any[]&gt; = T extends [] ? never : T[0];</code></li></ul><h2 id="浏览器的事件轮询机制" tabindex="-1"><a class="header-anchor" href="#浏览器的事件轮询机制"><span>浏览器的事件轮询机制</span></a></h2><h2 id="node的事件轮询机制" tabindex="-1"><a class="header-anchor" href="#node的事件轮询机制"><span>node的事件轮询机制</span></a></h2><h2 id="你理解的前端标准化" tabindex="-1"><a class="header-anchor" href="#你理解的前端标准化"><span>你理解的前端标准化</span></a></h2><h2 id="你一般是如何做技术选项的" tabindex="-1"><a class="header-anchor" href="#你一般是如何做技术选项的"><span>你一般是如何做技术选项的</span></a></h2><h2 id="脚手架能力有哪些" tabindex="-1"><a class="header-anchor" href="#脚手架能力有哪些"><span>脚手架能力有哪些</span></a></h2><h2 id="兼容性处理的经验" tabindex="-1"><a class="header-anchor" href="#兼容性处理的经验"><span>兼容性处理的经验</span></a></h2>',40),t=[s];function h(r,c){return i(),l("div",null,t)}const o=e(n,[["render",h],["__file","question3.html.vue"]]),u=JSON.parse('{"path":"/interview/question/question3.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"ecma2023特性","slug":"ecma2023特性","link":"#ecma2023特性","children":[]},{"level":2,"title":"js中的数据类型","slug":"js中的数据类型","link":"#js中的数据类型","children":[]},{"level":2,"title":"操作符的优先级","slug":"操作符的优先级","link":"#操作符的优先级","children":[]},{"level":2,"title":"什么是原型","slug":"什么是原型","link":"#什么是原型","children":[]},{"level":2,"title":"什么是原型链","slug":"什么是原型链","link":"#什么是原型链","children":[]},{"level":2,"title":"如何创建一个没有原型的对象","slug":"如何创建一个没有原型的对象","link":"#如何创建一个没有原型的对象","children":[]},{"level":2,"title":"什么是闭包函数","slug":"什么是闭包函数","link":"#什么是闭包函数","children":[]},{"level":2,"title":"一个 Promise 实例有哪些状态？","slug":"一个-promise-实例有哪些状态","link":"#一个-promise-实例有哪些状态","children":[]},{"level":2,"title":"Promise 中异常处理方式","slug":"promise-中异常处理方式","link":"#promise-中异常处理方式","children":[]},{"level":2,"title":"catch方法后的then方法还会执行吗","slug":"catch方法后的then方法还会执行吗","link":"#catch方法后的then方法还会执行吗","children":[]},{"level":2,"title":"什么是浅拷贝和深拷贝","slug":"什么是浅拷贝和深拷贝","link":"#什么是浅拷贝和深拷贝","children":[]},{"level":2,"title":"什么是跨域","slug":"什么是跨域","link":"#什么是跨域","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"快速排序","slug":"快速排序","link":"#快速排序","children":[]},{"level":2,"title":"Ts相对Js的优点","slug":"ts相对js的优点","link":"#ts相对js的优点","children":[]},{"level":2,"title":"如果你使用的一个依赖包没有类型声明怎么办","slug":"如果你使用的一个依赖包没有类型声明怎么办","link":"#如果你使用的一个依赖包没有类型声明怎么办","children":[]},{"level":2,"title":"获取数组第一个元素的类型","slug":"获取数组第一个元素的类型","link":"#获取数组第一个元素的类型","children":[]},{"level":2,"title":"浏览器的事件轮询机制","slug":"浏览器的事件轮询机制","link":"#浏览器的事件轮询机制","children":[]},{"level":2,"title":"node的事件轮询机制","slug":"node的事件轮询机制","link":"#node的事件轮询机制","children":[]},{"level":2,"title":"你理解的前端标准化","slug":"你理解的前端标准化","link":"#你理解的前端标准化","children":[]},{"level":2,"title":"你一般是如何做技术选项的","slug":"你一般是如何做技术选项的","link":"#你一般是如何做技术选项的","children":[]},{"level":2,"title":"脚手架能力有哪些","slug":"脚手架能力有哪些","link":"#脚手架能力有哪些","children":[]},{"level":2,"title":"兼容性处理的经验","slug":"兼容性处理的经验","link":"#兼容性处理的经验","children":[]}],"git":{"updatedTime":1719922188000,"contributors":[{"name":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":1}]},"filePathRelative":"interview/question/question3.md"}');export{o as comp,u as data};