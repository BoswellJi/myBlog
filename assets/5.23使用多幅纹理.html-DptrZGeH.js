import{_ as e,c as i,e as o,o as t}from"./app-XEG1kVcG.js";const m={};function a(s,l){return t(),i("div",null,l[0]||(l[0]=[o('<p>片元着色器怎样进行逐片元操作？</p><ol><li>谁来确定三角形的三个顶点？</li><li>为了填充内部，谁来确定哪些像素需要被着色？</li><li>谁来调用片元着色器？</li><li>片元着色器怎么处理每个片元（像素）？</li></ol><p>纹理映射：将一张图像，映射到一个几何图形的表面上去（就像一张贴纸） 作用：根据纹理图像，为之前光栅化后的每个片元图上合适的颜色； <code>组成纹理图像的像素被称为纹素</code> ；</p><p>webgl中使用纹理映射的步骤：</p><ol><li>准备好映射到几何图形上的纹理图像；</li><li>为几何图形配置纹理映射方式；( <code>确定几何图形的某个片元的颜色如何取决于纹理图像中的那个像素</code> )</li></ol><ul><li>利用图形的顶点坐标确定屏幕上哪部分被纹理图像覆盖，使用纹理坐标来确定纹理图像的那部分将覆盖到几何图形上；</li></ul><ol start="3"><li>加载纹理图像，对其进行一些配置，以在webgl中使用它；</li><li>在片元着色器中将相应的纹素从纹理中抽取出来，并将纹素的颜色赋给片元；</li></ol><p>纹理坐标：纹理图像上的坐标（二维的，为了区分广泛使用的x, y坐标，webgl使用，s, t命名纹理坐标 <code>s,t坐标系统</code></p><ul><li><p>纹理坐标四个角： （0，0） （1，0） （1，1） （0，1）</p></li><li><p>左下角为坐标原点；</p></li><li><p>纹理单元就是为了这个目的设计的，处理多幅纹理；</p></li></ul>',9)]))}const c=e(m,[["render",a],["__file","5.23使用多幅纹理.html.vue"]]),u=JSON.parse('{"path":"/books/%E5%9B%BE%E5%BD%A2%E5%AD%A6/webgl/webgl%E7%BC%96%E7%A8%8B%E6%8C%87%E5%8D%97/5%E9%A2%9C%E8%89%B2%E4%B8%8E%E7%BA%B9%E7%90%86/5.23%E4%BD%BF%E7%94%A8%E5%A4%9A%E5%B9%85%E7%BA%B9%E7%90%86.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1735558340000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":4,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/图形学/webgl/webgl编程指南/5颜色与纹理/5.23使用多幅纹理.md"}');export{c as comp,u as data};
