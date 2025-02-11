import{_ as e,c as i,e as t,o}from"./app-XEG1kVcG.js";const a={};function m(n,l){return o(),i("div",null,l[0]||(l[0]=[t('<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><ul><li>我们通常创建一个 <code>缓冲对象</code> ， <code>在其存储顶点坐标数据</code> ，然后 <code>将这个缓冲区对象传入顶点着色器</code> ；</li><li>三维图形不仅仅只有顶点坐标信息，还有其他信息： <ul><li>顶点尺寸；</li><li>顶点颜色；</li></ul></li><li>将顶点坐标传入着色器： <ul><li><p>创建缓冲区对象</p><ul><li><code>const buffer = gl.createBuffer()</code></li></ul></li><li><p>将缓冲区对像绑定到target上</p><ul><li><code>gl.bindBuffer(gl.ARRAY_BUFFER,buffer)</code></li></ul></li><li><p>将顶点坐标写入缓冲区对象</p><ul><li><code>gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1,1,1]), gl.STATIC_DRAW)</code></li></ul></li><li><p>将缓冲区对像分配给对应的attribute变量：</p><ul><li><code>gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, fsize * 7, 0)</code></li></ul></li><li><p>开启attribute变量</p><ul><li><code>gl.enableVertexAttribArray(aPosition)</code></li></ul></li></ul></li></ul>',2)]))}const u=e(a,[["render",m],["__file","5.1将非坐标数据传入顶点着色器.html.vue"]]),c=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/5%E9%A2%9C%E8%89%B2%E4%B8%8E%E7%BA%B9%E7%90%86/5.1%E5%B0%86%E9%9D%9E%E5%9D%90%E6%A0%87%E6%95%B0%E6%8D%AE%E4%BC%A0%E5%85%A5%E9%A1%B6%E7%82%B9%E7%9D%80%E8%89%B2%E5%99%A8.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]}],"git":{"updatedTime":1735558340000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":4,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl编程指南/5颜色与纹理/5.1将非坐标数据传入顶点着色器.md"}');export{u as comp,c as data};
