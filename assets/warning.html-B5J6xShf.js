import{_ as a,c as l,e as n,o as i}from"./app-XEG1kVcG.js";const t={};function r(s,e){return i(),l("div",null,e[0]||(e[0]=[n('<h2 id="vue-界面绑定的响应式数据-时更新时不更新问题" tabindex="-1"><a class="header-anchor" href="#vue-界面绑定的响应式数据-时更新时不更新问题"><span>vue 界面绑定的响应式数据，时更新时不更新问题?</span></a></h2><ul><li>可能是绑定的响应式对象的属性没有提前定义，实在后面动态添加的，导致没有响应式效果。</li></ul><h2 id="开发环境和生产环境有差异" tabindex="-1"><a class="header-anchor" href="#开发环境和生产环境有差异"><span>开发环境和生产环境有差异？</span></a></h2><ul><li>首先确认生产环境是否存在新增功能的代码，查看源代码，虽然是编译压缩后的代码，但终归是全部的客户端代码，是可以找到的</li></ul><h2 id="在模板中触发响应式数据的更新" tabindex="-1"><a class="header-anchor" href="#在模板中触发响应式数据的更新"><span>在模板中触发响应式数据的更新？</span></a></h2><ul><li>会引起死循环，因为模板中的数据更新，会触发响应式数据的更新，响应式数据的更新，又会触发模板中的数据更新，如此循环，直到栈溢出。</li></ul>',6)]))}const h=a(t,[["render",r],["__file","warning.html.vue"]]),m=JSON.parse('{"path":"/vue/warning.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"vue 界面绑定的响应式数据，时更新时不更新问题?","slug":"vue-界面绑定的响应式数据-时更新时不更新问题","link":"#vue-界面绑定的响应式数据-时更新时不更新问题","children":[]},{"level":2,"title":"开发环境和生产环境有差异？","slug":"开发环境和生产环境有差异","link":"#开发环境和生产环境有差异","children":[]},{"level":2,"title":"在模板中触发响应式数据的更新？","slug":"在模板中触发响应式数据的更新","link":"#在模板中触发响应式数据的更新","children":[]}],"git":{"updatedTime":1718759308000,"contributors":[{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":3,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":4,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"vue/warning.md"}');export{h as comp,m as data};
