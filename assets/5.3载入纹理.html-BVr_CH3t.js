import{_ as e,c as i,e as a,o as n}from"./app-XEG1kVcG.js";const s={};function t(r,l){return n(),i("div",null,l[0]||(l[0]=[a(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><h2 id="创建webgltexture对象" tabindex="-1"><a class="header-anchor" href="#创建webgltexture对象"><span>创建WebGLTexture对象</span></a></h2><ul><li><p>gl.createTexture();</p></li><li><p>删除纹理对象：gl.deleteTexture(texture);</p></li><li><p>并不需要手动调用删除纹理对象，js的垃圾回收机制，会自动在销毁WebGLTexture对象时会自动删除相应的纹理对象；</p></li></ul><h2 id="绑定纹理" tabindex="-1"><a class="header-anchor" href="#绑定纹理"><span>绑定纹理</span></a></h2><ul><li><p>gl.bindTexture(gl. TEXTURE_2D, texture);</p></li><li><p>将纹理对象绑定为当前纹理</p></li></ul><h2 id="翻转纹理图像" tabindex="-1"><a class="header-anchor" href="#翻转纹理图像"><span>翻转纹理图像</span></a></h2><ul><li><p>gl.pixelStorei(gl. UNPACK_FILP_Y_WEBGL, true);</p></li><li><p>纹理数据载入纹理对象之前，将图象会绕水平轴翻转；让坐标系与纹理对象坐标系一致；</p></li><li><p>纹理数据：图片数据，在读取纹理数据时，读取其翻转后的纹理数据；</p></li></ul><h2 id="载入图像数据" tabindex="-1"><a class="header-anchor" href="#载入图像数据"><span>载入图像数据</span></a></h2><ul><li>加载图像资源</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">const image = new Image();</span>
<span class="line"></span>
<span class="line">image.onload = function(res){</span>
<span class="line"></span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">image.src=&#39;./mn.png&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>纹理大小必须是2的n次方，开发人员选择宽度和高度都是2的n次方的图像（1，2，4，8）；</li><li>另一种表示法是：纹理图像必须是 <code>2的m次方 * 2的n次方</code> ；</li></ul><h2 id="将纹理上传gpu" tabindex="-1"><a class="header-anchor" href="#将纹理上传gpu"><span>将纹理上传GPU</span></a></h2><ul><li><p>gl.texImage2D(gl. TEXTURE_2D, 0, gl. RGBA, gl. RGBA, gl. UNSIGNED_BYTE, image);</p></li><li><p>参数：</p><ul><li>参数1： 目标为2d纹理；</li><li>参数2： Mip映射级别；</li><li>参数3： 内部格式；</li><li>参数4： 使用的格式；</li><li>参数5： 每个纹素数据类型； gl. UNSIGNED_BYTE：表示用每个字节保存单个通道信息；</li><li>参数6： 纹理数据的类型；</li></ul></li><li><p>webgl中：参数3和参数4必须相同，表示每个纹理的纹素都有红，绿，蓝和alpha通道4个分量；</p></li></ul><h2 id="定义纹理参数" tabindex="-1"><a class="header-anchor" href="#定义纹理参数"><span>定义纹理参数</span></a></h2><ul><li><p>当前纹理的纹素与屏幕上的像素没有一对一映射关系时，纹理的映射方式；</p></li><li><p>texParameteri(target, pname, param);</p></li><li><p>参数：</p><ul><li><p>pname:</p><ul><li>gl.TEXTURE_MAG_FILTER：纹理放大时或伸展时的纹理映射方式；</li><li>gl.TEXTURE_MIN_FILTER: 纹理缩小时或收缩时的纹理映射方式；</li></ul></li></ul></li></ul>`,15)]))}const u=e(s,[["render",t],["__file","5.3载入纹理.html.vue"]]),c=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B/5%E7%BA%B9%E7%90%86%E8%B4%B4%E5%9B%BE/5.3%E8%BD%BD%E5%85%A5%E7%BA%B9%E7%90%86.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"创建WebGLTexture对象","slug":"创建webgltexture对象","link":"#创建webgltexture对象","children":[]},{"level":2,"title":"绑定纹理","slug":"绑定纹理","link":"#绑定纹理","children":[]},{"level":2,"title":"翻转纹理图像","slug":"翻转纹理图像","link":"#翻转纹理图像","children":[]},{"level":2,"title":"载入图像数据","slug":"载入图像数据","link":"#载入图像数据","children":[]},{"level":2,"title":"将纹理上传GPU","slug":"将纹理上传gpu","link":"#将纹理上传gpu","children":[]},{"level":2,"title":"定义纹理参数","slug":"定义纹理参数","link":"#定义纹理参数","children":[]}],"git":{"updatedTime":1735558340000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":8,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl高级编程/5纹理贴图/5.3载入纹理.md"}');export{u as comp,c as data};
