import{_ as i,c as e,e as a,o as n}from"./app-XEG1kVcG.js";const t={};function s(r,l){return n(),e("div",null,l[0]||(l[0]=[a('<h2 id="内存泄漏" tabindex="-1"><a class="header-anchor" href="#内存泄漏"><span>内存泄漏</span></a></h2><ul><li>指的是计算机中的内存逐渐减少</li></ul><h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收"><span>垃圾回收</span></a></h2><p>todo...</p><h2 id="需要知道的问题" tabindex="-1"><a class="header-anchor" href="#需要知道的问题"><span>需要知道的问题</span></a></h2><ol><li>页面是否占用了过多的内存?</li></ol><ul><li>是否使用了过多内存；</li></ul><ol start="2"><li>页面有没有内存泄漏？</li></ol><ul><li>是否有没有被垃圾回收清理掉的对象；</li></ul><ol start="3"><li>页面垃圾强制回收有多频繁？</li></ol><ul><li>内存使用分配太频繁；</li></ul><h2 id="内存分析" tabindex="-1"><a class="header-anchor" href="#内存分析"><span>内存分析</span></a></h2><ul><li><p>工具：</p><ul><li>堆分析器 Heap profiler</li></ul></li><li><p>对象大小：（Object sizes） <code>数据使用字节表示的</code></p><ul><li><p>直接占用内存（Shallow Size）: 不包含引用的对像所占用的内存</p><ul><li>渲染器内存：页面在渲染的过程中所用到的所有内存 <ul><li>页面本身的内存；</li><li>页面中的js堆用到的内存；</li><li>页面触发的相关工作进程中js堆用到的内存；</li></ul></li></ul></li><li><p>占用总内存（Retained Size）：包括引用的对象所占用的内存</p><ul><li>一个对象被删除后（ <code>let a={};a=null;删除对象</code> ），它引用的依赖对象就不能被GC根引用到，内存就被释放；</li><li>一个对象占用的内存，包括依赖对象占用的内存；</li></ul></li></ul></li><li><p>对象的占用总内存树：</p></li><li><p>支配对象（Dominators）</p></li><li><p>v8</p><ul><li><p>数字的存储方式：</p><ul><li>31位整数直接值，小整数（small integers） ；</li><li>堆对象，存储双精度，当一个值需要被打包；</li></ul></li><li><p>字符类型：</p><ul><li>vm堆；</li><li>外部渲染器内存；</li></ul></li><li><p>本地对象：</p><ul><li>不再js堆中的对象；</li></ul></li></ul></li><li><p>堆分析器</p><ul><li>Constructor: 所有通过该构造函数生成的对象；</li><li>Distance: 显示的是对对象到达GC根的最短距离；</li><li>Shallow Size：由构造函数生成的对象的直接占用内存；</li><li>Retained Size: 对应对象所占用的最大内存；</li></ul></li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><ul><li>不要靠猜，使用工具测量它；</li></ul>',15)]))}const o=i(t,[["render",s],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/performance/memory/","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"内存泄漏","slug":"内存泄漏","link":"#内存泄漏","children":[]},{"level":2,"title":"垃圾回收","slug":"垃圾回收","link":"#垃圾回收","children":[]},{"level":2,"title":"需要知道的问题","slug":"需要知道的问题","link":"#需要知道的问题","children":[]},{"level":2,"title":"内存分析","slug":"内存分析","link":"#内存分析","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1718759308000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":3,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":3,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"performance/memory/readme.md"}');export{o as comp,m as data};
