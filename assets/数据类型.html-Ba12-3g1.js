import{_ as i,c as e,e as s,o as n}from"./app-XEG1kVcG.js";const a={};function c(t,l){return n(),e("div",null,l[0]||(l[0]=[s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span>基本数据类型</span></a></h2><ul><li>float</li><li>int</li><li>bool</li></ul><h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换"><span>类型转换</span></a></h2><ul><li>float() int() bool();</li></ul><h2 id="集合类型-复杂数据类型" tabindex="-1"><a class="header-anchor" href="#集合类型-复杂数据类型"><span>集合类型/复杂数据类型</span></a></h2><ul><li><p>类型：</p><ul><li>矢量</li><li>矩阵</li><li>结构体</li><li>数组</li><li>取样器</li></ul></li><li><p>矢量和矩阵类型的变量包含多个元素，每个元素都是一个数值（整型，浮点型，布尔型）；</p></li><li><p>矢量</p><ul><li>将元素排成一列，用来存储顶点坐标，颜色，纹理坐标；</li></ul></li><li><p>矩阵</p><ul><li>将元素划分为行和列，用来存储变换矩阵；</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">矢量</span>
<span class="line">vec2，  vec3，   vec4    浮点型集合， </span>
<span class="line">ivec2， ivec3，  ivec4， 整型集合</span>
<span class="line">bvec2， bvec3，  bvec4， 布尔型集合</span>
<span class="line"></span>
<span class="line">矩阵</span>
<span class="line">mat2 mat3 mat4</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>矢量构造函数</p><ul><li>vec3 v3 = vec3(1.0, 1.1, 0.1);</li><li>vec2 v2 = vec2(1.0, 1.1, 0.1); 只留两个；</li><li>vec4 v4 = vec4(1.0); 四个分量都为1.0；</li></ul></li><li><p>矩阵构造函数：顺序必须是列主序</p><ul><li>mat4 m4 = mat4(1.0, 1.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 )</li></ul></li><li><p>访问/赋值元素</p></li></ul><div class="language-矢量分量 line-numbers-mode" data-highlighter="prismjs" data-ext="矢量分量" data-title="矢量分量"><pre><code><span class="line">x, y, z, w 用来获取顶点坐标分量</span>
<span class="line">r, g, b, a 用来获取颜色分量</span>
<span class="line">s, t, p, q 获取纹理坐标分量</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>矢量变量中访问分量名： vertex.x: <code>(x)</code> ，还可以 vertex.xy: <code>(x,y)</code> , 这个叫做 <code>混合</code> ；</p></li><li><p>矩阵获取元素</p><ul><li>m[0] 获取的是第一列</li><li>m[0][0] 第一列，第一个元素</li><li>m[0].x 第一列，第一个元素</li></ul></li><li><p>矢量的运算</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">v3c = v3a + v3b; </span>
<span class="line">=&gt;</span>
<span class="line">v3a.x + v3b.x</span>
<span class="line">v3a.y + v3b.y</span>
<span class="line">v3a.z + v3b.z</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>矩阵和浮点数的运算</p></li><li><p>矩阵右乘矢量</p></li><li><p>举证左乘矢量</p></li><li><p>矩阵乘矩阵</p></li></ul><ul><li>结构体</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">struct light{</span>
<span class="line">  vec4 color; </span>
<span class="line">  vec3 position; </span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">light li = light(vec4(1.0), vec3(1.0)); </span>
<span class="line"></span>
<span class="line">li.color; </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>数组</p><ul><li>floatArray；</li><li>vec4Array；</li></ul></li><li><p>取样器/sampler</p><ul><li>sampler2D；</li><li>samplerCube；</li></ul></li></ul>`,16)]))}const p=i(a,[["render",c],["__file","数据类型.html.vue"]]),r=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/6glsles%E7%9D%80%E8%89%B2%E5%99%A8%E8%AF%AD%E8%A8%80/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"基本数据类型","slug":"基本数据类型","link":"#基本数据类型","children":[]},{"level":2,"title":"类型转换","slug":"类型转换","link":"#类型转换","children":[]},{"level":2,"title":"集合类型/复杂数据类型","slug":"集合类型-复杂数据类型","link":"#集合类型-复杂数据类型","children":[]}],"git":{"updatedTime":1735558340000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":4,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl编程指南/6glsles着色器语言/数据类型.md"}');export{p as comp,r as data};
