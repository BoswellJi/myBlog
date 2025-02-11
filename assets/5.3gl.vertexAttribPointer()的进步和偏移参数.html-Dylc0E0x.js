import{_ as i,c as l,e as t,o as n}from"./app-XEG1kVcG.js";const s={};function a(r,e){return n(),l("div",null,e[0]||(e[0]=[t(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li>使用多个缓冲区对象，适合数据量不大的时候；</li><li>顶点太多时，维护所有顶点数据有困难；</li><li>将数据写到同一个缓冲区内，使用某种机制访问缓冲区对象中不同种类的数据；交错组织数据的形式；</li></ul><div class="language-逐个顶点的数据 line-numbers-mode" data-highlighter="prismjs" data-ext="逐个顶点的数据" data-title="逐个顶点的数据"><pre><code><span class="line">new Float32Array([</span>
<span class="line">  0,0, 5  </span>
<span class="line">]);</span>
<span class="line"></span>
<span class="line">前两个为顶点坐标，后面一个为顶点尺寸，gl.vertexAttributPointer()方法就是获取这种组织数据的方法；</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>gl.vertexAttributPointer(location,size,type,normalized,stride,offset)</code>:</p></li><li><p>参数：</p><ul><li>location: attribute变量的存储位置；</li><li>size: 缓冲区中每个顶点的分量个数；</li><li>type: 指定数据格式，（gl.FLOAT）</li><li>normalized: 表名是否将浮点型的数据归一化到[0,1]或[-1,1]；</li><li>stride: 相邻两个顶点间的字节数；</li><li>offset: attribute变量从缓冲区中的何处开始存储；</li></ul></li><li><p>webgl系统会根据stride和offset参数，从缓冲区中正确的抽取数据；</p></li><li><p><code>buffer.BYTES_PER_ELEMENT</code>: 每个元素大小（字节数）</p></li></ul>`,4)]))}const m=i(s,[["render",a],["__file","5.3gl.vertexAttribPointer()的进步和偏移参数.html.vue"]]),c=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/5%E9%A2%9C%E8%89%B2%E4%B8%8E%E7%BA%B9%E7%90%86/5.3gl.vertexAttribPointer()%E7%9A%84%E8%BF%9B%E6%AD%A5%E5%92%8C%E5%81%8F%E7%A7%BB%E5%8F%82%E6%95%B0.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"updatedTime":1735558340000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":4,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl编程指南/5颜色与纹理/5.3gl.vertexAttribPointer()的进步和偏移参数.md"}');export{m as comp,c as data};
