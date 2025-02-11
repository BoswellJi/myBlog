import{_ as s,c as a,e as p,o as e}from"./app-XEG1kVcG.js";const t={};function l(c,n){return e(),a("div",null,n[0]||(n[0]=[p(`<p>Gof称原型模式为基于通过克隆现有对象模板来创建对象。</p><p>我们可以认为原型模式是基于原型链继承，我们在其中创建对象，对象的行为和其他对象的原型一样。原型对象本身有效的用于构造器创建的每个对象的蓝本。如果使用的构造器函数原型包含一个属性，例如name（像下面的代码示例），之后，由相同构造器创建的每个对象也会有这个相同的属性。</p><p>用现存的（非js）术语重新审查这个定义，我们可能会再一次找出类的参考。事实是原型链继承避免了使用整个类。理论上，没有定义对象，也没有核心对象。我们简单的创建现存功能对象的拷贝。</p><p>使用原型模式的好处之一是，我们使用js提供的原生的原型能力而不不是模仿其他语言的特性。对于其他设计模式，情况并非总是如此。</p><p>模式不仅市一个容易实现继承的方法，而且它还能带来性能的提升：当在一个对象中定义一个函数时，它们都是通过引用创建，而不是创建它们自己的单独拷贝。（所以所有的子对象指向相同的函数）</p><p>对于那些感兴趣的，真实的原型继承，正如es5规范中定义的那样，需要使用Object.create（之前，我们在这章的前面已经看到过了）。为了提醒我们自己，Object.create创建一个有特定原型的对象，包含可选地特定属性。例如（Object.create(prototype,optionalDescriptiorObjects)）</p><p>我们能在下面案例中看到原型模式的演示：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> myCar <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"> </span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;Ford Escort&quot;</span><span class="token punctuation">,</span></span>
<span class="line"> </span>
<span class="line">  <span class="token function-variable function">drive</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;Weeee. I&#39;m driving!&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"> </span>
<span class="line">  <span class="token function-variable function">panic</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;Wait. How do you stop this thing?&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Use Object.create to instantiate a new car</span></span>
<span class="line"><span class="token keyword">var</span> yourCar <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span> myCar <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token comment">// Now we can see that one is a prototype of the other</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> yourCar<span class="token punctuation">.</span>name <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Object.create还允许我们轻易的实现高级概念，比如：不同的继承，其中对象能够直接从其他对象中继承。我们之前看到过，Object.create允许我们初始化对象属性，使用提供的第二个参数。例如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> vehicle <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">getModel</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;The model of this vehicle is..&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">var</span> car <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>vehicle<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line"> </span>
<span class="line">  <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token constant">MY_GLOBAL</span><span class="token punctuation">.</span><span class="token function">nextId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// writable:false, configurable:false by default</span></span>
<span class="line">    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"> </span>
<span class="line">  <span class="token string-property property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&quot;Ford&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里属性能用Object.create的第二个参数使用与我们之前看到的Object.defineProperties和Object.defineProperty方法相似的对象字面量来初始化。</p><p>值得注意的是当枚举对象的属性并包裹循环的内容在hasOwnProperty方法中检查时，原型链会导致问题。</p><p>如果我想要实现原型模式而不直接使用Object.create()方法，我们能模拟这个模式像下面的案例一样：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> vehiclePrototype <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line"> </span>
<span class="line">  <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span> <span class="token parameter">carModel</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> carModel<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"> </span>
<span class="line">  <span class="token function-variable function">getModel</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token string">&quot;The model of this vehicle is..&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>model<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"> </span>
<span class="line"><span class="token keyword">function</span> <span class="token function">vehicle</span><span class="token punctuation">(</span> <span class="token parameter">model</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> vehiclePrototype<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">  <span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line">  f<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span> model <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">return</span> f<span class="token punctuation">;</span></span>
<span class="line"> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line"><span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token function">vehicle</span><span class="token punctuation">(</span> <span class="token string">&quot;Ford Escort&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">car<span class="token punctuation">.</span><span class="token function">getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：这个替代品不允许用户定义只读属性用相同的方式（因为vehiclePrototype可能被不小心修改）</p><p>原型模式的最终替代品实现像下面：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">var</span> beget <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"> </span>
<span class="line">    <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"> </span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span> <span class="token parameter">proto</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> proto<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考vehicle函数中的这个方法。注意，虽然，这里的vehicle模拟一个构造器，因为原型模式除了将对象链接到原型之外，不包含任何初始化的概念。</p>`,18)]))}const i=s(t,[["render",l],["__file","6原型模式.html.vue"]]),u=JSON.parse('{"path":"/books/javascript/javascript%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/8js%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/6%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F.html","title":"","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1735558340000,"contributors":[{"name":"j哥哥","username":"j哥哥","email":"aiyoudqrjmz@163.com","commits":1,"url":"https://github.com/j哥哥"},{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":11,"url":"https://github.com/jmz"},{"name":"jmz","username":"jmz","email":"aiyoudqrjmz@163.com","commits":3,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":3,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":2,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"books/javascript/javascript设计模式/8js设计模式/6原型模式.md"}');export{i as comp,u as data};
