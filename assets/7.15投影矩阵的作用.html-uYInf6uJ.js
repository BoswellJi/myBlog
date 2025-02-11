import{_ as l,c as i,e as o,o as a}from"./app-XEG1kVcG.js";const t={};function c(m,e){return a(),i("div",null,e[0]||(e[0]=[o('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li><p>矩阵为什么可以用来定义可视空间？</p></li><li><p>运用透视投影后，场景中的三角形有两个变换：</p><ul><li>三角形看上去变小了；（ <code>根据三角形与视点的距离，按比例对三角形进行了缩小变换</code> ）</li><li>三角形被不同程度的平移来贴近中心线（即视线；（ <code>对三角形进行平移变换，使其贴近视线</code> ）</li></ul></li></ul><h2 id="可视空间规范" tabindex="-1"><a class="header-anchor" href="#可视空间规范"><span>可视空间规范</span></a></h2><ul><li><code>透视投影可视空间</code> 来说， <code>就是近，远裁剪面，垂直视角，宽高比</code> , 用一系列基本变换 <code>缩放，平移</code> 定义；</li><li><code>透视投影矩阵</code> 实际上将 <code>金字塔</code> 的 <code>可视空间变</code> 换为 <code>盒状的可视空间</code> ，这个 <code>盒状可视空间</code> 叫 <code>规范立方体</code> ；</li></ul><h2 id="矩阵类型" tabindex="-1"><a class="header-anchor" href="#矩阵类型"><span>矩阵类型</span></a></h2><ul><li>投影矩阵</li><li>视图矩阵（）</li><li>模型矩阵（平移，旋转，缩放）</li><li>有了以上 <code>矩阵</code> ，我们就能处理 <code>顶点</code> 需要经过的所有的 <code>几何变换</code> （平移，缩放，旋转），最终达到 <code>具有深度感</code> 的视觉效果</li></ul><h2 id="根据以上矩阵推断出" tabindex="-1"><a class="header-anchor" href="#根据以上矩阵推断出"><span>根据以上矩阵推断出</span></a></h2><ul><li>&lt;投影矩阵&gt; * &lt;视图矩阵&gt; * &lt;模型矩阵&gt; * &lt;顶点向量&gt; = &lt;最终顶点坐标&gt;</li></ul>',8)]))}const s=l(t,[["render",c],["__file","7.15投影矩阵的作用.html.vue"]]),d=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/7%E8%BF%9B%E5%85%A5%E4%B8%89%E7%BB%B4%E4%B8%96%E7%95%8C/7.15%E6%8A%95%E5%BD%B1%E7%9F%A9%E9%98%B5%E7%9A%84%E4%BD%9C%E7%94%A8.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"可视空间规范","slug":"可视空间规范","link":"#可视空间规范","children":[]},{"level":2,"title":"矩阵类型","slug":"矩阵类型","link":"#矩阵类型","children":[]},{"level":2,"title":"根据以上矩阵推断出","slug":"根据以上矩阵推断出","link":"#根据以上矩阵推断出","children":[]}],"git":{"updatedTime":1735558340000,"contributors":[{"name":"j哥哥","username":"j哥哥","email":"aiyoudqrjmz@163.com","commits":1,"url":"https://github.com/j哥哥"},{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":13,"url":"https://github.com/jmz"},{"name":"jmz","username":"jmz","email":"aiyoudqrjmz@163.com","commits":3,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl编程指南/7进入三维世界/7.15投影矩阵的作用.md"}');export{s as comp,d as data};
