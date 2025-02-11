import{_ as e,c as i,e as a,o}from"./app-XEG1kVcG.js";const n={};function c(d,l){return o(),i("div",null,l[0]||(l[0]=[a('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ol><li>高等数学的一部分，研究对象是向量和矩阵；</li></ol><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的"><span>目的</span></a></h2><ol><li>为了更好的理解3D图形，webgl；</li></ol><h2 id="坐标系" tabindex="-1"><a class="header-anchor" href="#坐标系"><span>坐标系</span></a></h2><ol><li>为了 <code>确定在哪个位置</code> 绘制webgl对象，需要定义一个坐标系, 也叫做 <code>空间</code> ;</li><li>webgl使用三维，正交（任何一个都与其他两轴垂直），右手坐标系, <code>x,y,z轴</code> ；</li><li>每个轴都被 <code>归一化</code> 为 <code>单位长度</code> (是单位长度，不是长度单位)，其实也就是 <code>1</code> ；</li></ol><h2 id="点与顶点" tabindex="-1"><a class="header-anchor" href="#点与顶点"><span>点与顶点</span></a></h2><ol><li>数学中，点是最基本的构造单元，通过它可以生成其他图形；</li><li>当 <code>点</code> 用来定义 <code>3D图形</code> 中其他几何图形，通常被称为 <code>顶点</code> ；</li><li>点的位置是相对于原点的；</li></ol><h2 id="矢量" tabindex="-1"><a class="header-anchor" href="#矢量"><span>矢量</span></a></h2><ol><li>许多物理量（温度，质量等）与空间中的任何方向无关，完全由数值大小来定义，这些量称为 <code>标量</code> ；</li><li>其他物理量（速度，加速度或者力）需要用一个数值和一个方向才能得到完全的定义，这些量为 <code>矢量</code> ；</li><li>矢量是 <code>两点坐标之差</code> ，没有位置，但有长度和方向;</li><li>这个矢量（x,y,x）与 以原点为起点，（x,y,z）坐标为终点的矢量具有相同的方向和相同的长度；</li><li>从 <code>终点-起点 = 这个矢量</code> ;</li><li>3D中，用矢量指定 <code>光线的方向</code> 和 <code>视线的方向</code> 以及 <code>表面的法线/法矢量</code> ；</li><li>速度的大小就是 <code>矢量的长度</code> ，方向就是 <code>矢量的方向</code> ；</li></ol><h2 id="矢量的点积或者标积" tabindex="-1"><a class="header-anchor" href="#矢量的点积或者标积"><span>矢量的点积或者标积</span></a></h2><h2 id="叉积" tabindex="-1"><a class="header-anchor" href="#叉积"><span>叉积</span></a></h2><h2 id="齐次坐标" tabindex="-1"><a class="header-anchor" href="#齐次坐标"><span>齐次坐标</span></a></h2><h2 id="矩阵" tabindex="-1"><a class="header-anchor" href="#矩阵"><span>矩阵</span></a></h2><ul><li>只有一行的矩阵，行矢量；只有一列的矩阵，列矢量；</li><li>矩阵相加相减：</li><li>矩阵相乘： <ul><li>矩阵A的列数必须等与矩阵B的行数；</li></ul></li><li>单位矩阵和逆矩阵</li><li>转置矩阵</li></ul><h2 id="仿射变换" tabindex="-1"><a class="header-anchor" href="#仿射变换"><span>仿射变换</span></a></h2><ul><li>平移</li><li>缩放</li><li>旋转</li><li>剪切变换</li></ul>',17)]))}const h=e(n,[["render",c],["__file","1.7线性代数.html.vue"]]),t=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B/1webgl%E7%AE%80%E4%BB%8B/1.7%E7%BA%BF%E6%80%A7%E4%BB%A3%E6%95%B0.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"目的","slug":"目的","link":"#目的","children":[]},{"level":2,"title":"坐标系","slug":"坐标系","link":"#坐标系","children":[]},{"level":2,"title":"点与顶点","slug":"点与顶点","link":"#点与顶点","children":[]},{"level":2,"title":"矢量","slug":"矢量","link":"#矢量","children":[]},{"level":2,"title":"矢量的点积或者标积","slug":"矢量的点积或者标积","link":"#矢量的点积或者标积","children":[]},{"level":2,"title":"叉积","slug":"叉积","link":"#叉积","children":[]},{"level":2,"title":"齐次坐标","slug":"齐次坐标","link":"#齐次坐标","children":[]},{"level":2,"title":"矩阵","slug":"矩阵","link":"#矩阵","children":[]},{"level":2,"title":"仿射变换","slug":"仿射变换","link":"#仿射变换","children":[]}],"git":{"updatedTime":1735558340000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":6,"url":"https://github.com/jmz"},{"name":"jmz","username":"jmz","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl高级编程/1webgl简介/1.7线性代数.md"}');export{h as comp,t as data};
