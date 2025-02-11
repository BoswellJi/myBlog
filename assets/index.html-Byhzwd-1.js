import{_ as i,c as e,e as a,o as n}from"./app-XEG1kVcG.js";const s={};function u(t,l){return n(),e("div",null,l[0]||(l[0]=[a('<h2 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h2><ul><li>定义：模式是在某种情境下，针对某问题的某种解决方案；</li></ul><h2 id="面向对象" tabindex="-1"><a class="header-anchor" href="#面向对象"><span>面向对象</span></a></h2><ul><li>依赖注入</li><li>非循环依赖原则</li><li>组合复用原则</li><li>编译期不绑定对象的类型，运行期执行依赖；这个就是多态的意义（延迟绑定；</li><li>虚函数表和函数指针才是实现多态的关键；</li><li>组合大于继承： <ul><li>类通过<code>组合</code>而<code>不是继承</code>获取多态行为和代码复用的原则；这个原则的一个实现就是从创建代表系统展示的行为的各种接口开始；</li><li>继承导致父子类耦合；</li><li>组合就是，将依赖的对象注射到当前对象中进行使用；</li></ul></li></ul><h2 id="solid" tabindex="-1"><a class="header-anchor" href="#solid"><span>SOLID</span></a></h2><ul><li>职责单一：<code>一个类应该只有一个修改理由</code>；</li><li>开闭：<code>对扩展开放对修改关闭，一个类被编译到库中，不能修改，但是新类可以继承父类，添加新特性，不需要改变源文件或者干扰客户端</code>；</li><li>里氏替换：<code>父类的类型参数，子类可以任意替换</code>；</li><li>接口分离：<code>客户端不应该被强迫依赖他不使用的方法；将巨大的接口分离到更小的和更特定的接口，这样客户端就只会了解它们感兴趣的方法</code>；</li><li>依赖反转：<code>底层</code>;</li></ul><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><ul><li>抽象</li><li>封装</li><li>继承 <ul><li>缺点： <ul><li>是在编译时静态决定的，所有子类都有继承到相同的行为；</li></ul></li></ul></li><li>多态</li><li>接口 <ul><li>要点： <ul><li>实现一个接口，泛指实现一个超类型，可以是接口，也可以是类；</li></ul></li></ul></li></ul><h2 id="面向对象设计的基本原则" tabindex="-1"><a class="header-anchor" href="#面向对象设计的基本原则"><span>面向对象设计的基本原则</span></a></h2><ul><li>注意类之间的关系；IS-A(是一个) HAS-A(有一个/实现)</li><li>找出应用中可能需要变化之处，把他们独立出来，不要和不需要变化的代码混在一起；</li><li>针对接口编程，而不是针对实现编程；</li><li>多用组合，少用继承；</li><li>为了交互对象之间的松耦合设计而努力；（将对象之间的依赖降到最低）；</li><li>类应该对扩展开放，对修改关闭；</li><li>要依赖抽象，不要依赖具体类；（依赖倒置原则）</li><li>只和朋友交谈；</li><li>别找我，我会找你；</li><li>类应该只有一个改变的理由；</li></ul><h2 id="模式应用领域" tabindex="-1"><a class="header-anchor" href="#模式应用领域"><span>模式应用领域</span></a></h2><ul><li>架构模式</li><li>应用模式</li><li>领域特定模式</li><li>业务流程模式</li><li>组织模式</li><li>用户界面设计模式</li></ul><h2 id="模式的分类方式-1" tabindex="-1"><a class="header-anchor" href="#模式的分类方式-1"><span>模式的分类方式 1：</span></a></h2><ul><li><p>创建型</p><p>定义： <code>创建型模式涉及到将对象实例化，这类模式都提供一个方法，将客户从所需要实例化的对象中解耦</code></p><ul><li>单例模式</li><li>工厂方法模式</li><li>构建者模式</li><li>原型模式</li><li>抽象工厂模式</li></ul></li><li><p>行为型</p><p>定义： <code>只要是行为模式，都涉及到类和对象如何交互以及分配职责</code></p><ul><li>观察者模式</li><li>模板方法模式</li><li>命令模式</li><li>迭代器模式</li><li>职责链模式</li><li>状态模式</li><li>策略模式</li><li>访问者模式</li><li>中介者模式</li><li>解释器模式</li><li>备忘录模式</li></ul></li><li><p>结构型</p><p>定义： <code>结构型模式可以让你把类或者对象组合到更大的结构中</code></p><ul><li>装饰者模式</li><li>组合模式</li><li>享元模式</li><li>桥接模式</li><li>适配器模式</li><li>外观模式</li><li>代理模式</li></ul></li></ul><h2 id="模式的分类方式-2" tabindex="-1"><a class="header-anchor" href="#模式的分类方式-2"><span>模式的分类方式 2</span></a></h2><ul><li><p>模式所处理的是类和对象</p></li><li><p>类模式描述之间的关系如何通过继承定义，类模式的关系是在编译时建立的；</p></li><li><p>观察者模式</p><ul><li>定义： <code>定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖都会收到通知并自动更新；</code></li><li>目标： 让对象能够在状态改变时被通知；</li><li>要点： <ul><li>主题是真正拥有数据的地方，观察者是主题的依赖着；</li><li>让主题和观察者之间松耦合；</li><li>主题唯一依赖的是观察者的对象列表；</li><li>可以从观察者处推（push）, 拉（pull）数据（推的方式被认为是更正确的）；</li><li>多个观察者不可以依赖特定的通知次序；</li><li>每种语言中都会实现观察者模式（多种）；</li><li>主题也可以叫做 “可观察者”；</li><li>通过添加观察者，我们可以在任何时候扩展主题；</li></ul></li></ul></li><li><p>装饰者模式</p><ul><li>定义： <code>动态的将责任附加到对象上，若要扩展功能，装饰者提供了比继承更有弹性的替换方案</code></li><li>目标：包装一个对象，以提供新的行为；</li><li>要点： <ul><li>对类进行扩展，关闭对类的修改；</li><li>“运行时扩展”远比“编译时期”的继承威力更大；</li><li>熟悉装饰器技巧，你将能够在不改变底层任何代码的情况下，给你的对象赋予新的职责；</li><li>装饰器，在比修改类的情况下，进行对类的扩展；</li><li>装饰者类与被装饰组件有相同的接口/继承的实现；</li></ul></li><li>缺点： <ul><li>一开始接触使用了装饰者的库，会无法轻易理解；</li><li>有些代码依赖特定的类型，插入装饰者会导致类型问题；</li></ul></li></ul></li><li><p>工厂模式</p><ul><li>定义： <code>定义了一个创建对象的接口，但由子类决定要实例化的类是哪一个，工厂方法让类把实例化推迟到子类</code></li><li>目标：由子类决定要创建的具体类是哪个；</li><li>要点： <ul><li>实例化这个活动不应该总是公开的进行；</li><li>工厂模式，从复杂的依赖中进行解脱；</li><li>使用多态让代码变的更有弹性；</li><li>这样就需要等到运行时才知道抽象类的实例是哪个；</li><li>变化=&gt;影响 new 实例，导致不能类型匹配；（所以，不要针对具体编程；</li><li>代码中 变化 与 不变 的部分进行分离；</li><li>定义一个抽象的创建者类，让子类实现这些方法；</li><li>创建者类=&gt;创建产品(抽象产品，利用多态), 产品类=&gt;创建具体的商品类型</li><li>变量不可以持有具体类型的引用；</li><li>不要让类派生自具体类；</li><li>不要覆盖基类中已经实现的方法；</li></ul></li><li>缺点：</li></ul></li><li><p>单件模式</p><ul><li>定义： <code>确保一个类只有一个实例，并提供一个全局访问点</code></li><li>目标：确保有且只有一个对象被创建；</li><li>要点： <ul><li>管理自己的实例，提供全局访问以及在应用程序中担当角色这两个责任；</li></ul></li></ul></li><li><p>命令模式</p><ul><li>定义：将<strong>请求</strong>，*（就是命令）*封装成对象，以便使用<strong>不同的请求</strong>，<strong>队列</strong>或者<strong>日志</strong>来参数化其他对象，命令模式也支持可撤销的操作；</li><li>目标：封装请求成为对象；</li><li>要点： <ul><li>将<strong>发出请求的对象</strong>和<strong>执行请求的对象</strong>解耦；</li><li>角色： 客户-&gt;命令(执行调用者的 setCommand)-&gt;调用者(执行命令对象的 excute)-&gt;命令(执行接收者的 action)-&gt;接收者</li><li>客户创建一个命令对象</li><li>客户利用 setCommand 方法将命令对象存储再<strong>调用者</strong>中</li><li>客户要求<strong>调用者</strong>执行命令</li></ul></li></ul></li><li><p>适配器模式</p><ul><li>目标：封装对象，并提供不同的接口；</li></ul></li><li><p>外观模式</p><ul><li>目标：简化一群类的接口；</li></ul></li><li><p>模板方法模式</p><ul><li>目标：由子类决定如何实现一个算法中的步骤；</li></ul></li><li><p>迭代器模式</p><ul><li>目标：在对象的集合之中游走，而不暴露集合的实现（使提供对外的对象（数据）集合，不暴露实现）</li></ul></li><li><p>组合模式</p><ul><li>目标：客户用一致的方式处理对象集合和单个对象；</li></ul></li><li><p>状态模式</p><ul><li>目标：封装了基于状态的行为，并使用委托在行为之间切换；</li></ul></li><li><p>代理模式</p><ul><li>目标：包装对象，以控制对此对象的访问；</li></ul></li><li><p>桥接模式</p><ul><li>要点： <ul><li>使用这个模式来弱化它与使用它的类和对象之间的耦合；</li><li>不要将环境可变的量，与具体逻辑实现进行耦合； 例如：事件监听， 可以将处理之后的事件对象传到一个函数中；（利于单元测试</li></ul></li></ul></li><li><p>生成器模式</p></li><li><p>职责链模式</p></li><li><p>享元模式</p></li><li><p>解释器模式</p></li><li><p>中介者模式</p></li><li><p>备忘录模式</p></li><li><p>原型模式</p></li><li><p>策略模式</p><ul><li>定义： <code>定义了算法簇，分别封装起来，让他们之间可以互相替换，让算法的变化独立于使用算法的客户；</code></li><li>目标：封装可以互相替换的行为，并使用委托来决定要使用哪一个；</li></ul></li><li><p>访问者模式</p></li><li><p>抽象工厂模式（制造工厂的工厂）</p><ul><li>定义： <code>提供一个接口，用于创建相关或依赖对象的家族，而不需要明确指定具体类</code></li><li>目标： 允许客户创建对象的家族，而无需指定他们的具体类；</li></ul></li></ul><h2 id="设计模式的组合-复合模式-架构模式" tabindex="-1"><a class="header-anchor" href="#设计模式的组合-复合模式-架构模式"><span>设计模式的组合(复合模式（架构模式</span></a></h2><ul><li>模式通常被一起使用，并被组合在同一个设计解决方案中；</li><li>符合模式在一个解决方案中结合两个或者多个模式，以解决一般或重复发生的问题；</li></ul><h2 id="设计的目的" tabindex="-1"><a class="header-anchor" href="#设计的目的"><span>设计的目的</span></a></h2><ul><li>设计的目的在于，让程序更加灵活，可维护，可扩展；（建立弹性的设计，可复用，可以维护，可以应付改变）；</li><li>良好的 OO 设计必须具备：可复用，可扩展，可维护三个特性；程序还有健壮性；</li><li>设计模式被认为是历经验证的 OO 设计经验；</li><li>模式不是代码, 而是针对设计问题的通用解决方案；</li><li>开发人员之间共享词汇；</li><li>代码应该对扩展开放，对修改关闭；</li></ul><h2 id="设计的注意点" tabindex="-1"><a class="header-anchor" href="#设计的注意点"><span>设计的注意点</span></a></h2><ul><li>直接实例化对象时，就是在依赖它的具体类；</li><li>一个类一个任务原则；</li></ul><h2 id="怎么样设计一个模式" tabindex="-1"><a class="header-anchor" href="#怎么样设计一个模式"><span>怎么样设计一个模式</span></a></h2><ul><li>一个问题，一个情境，一个解决方案；</li><li>不同领域有不同的模式系统；</li><li>模式在塑造并控制解决方案；</li><li>力（模式）有两个方向，目标和约束；</li></ul><h2 id="javascript-设计模式" tabindex="-1"><a class="header-anchor" href="#javascript-设计模式"><span>javascript 设计模式</span></a></h2><ul><li>构造器模式</li><li>模块模式</li><li>揭示模块模式</li><li>单例模式</li><li>观察者模式</li><li>中介者介模式</li><li>原型模式</li><li>命令模式</li><li>外观模式</li><li>工厂模式</li><li>混合模式</li><li>装饰者模式</li><li>享元模式</li></ul>',26)]))}const c=i(s,[["render",u],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/design-pattern/","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"设计模式","slug":"设计模式","link":"#设计模式","children":[]},{"level":2,"title":"面向对象","slug":"面向对象","link":"#面向对象","children":[]},{"level":2,"title":"SOLID","slug":"solid","link":"#solid","children":[]},{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"面向对象设计的基本原则","slug":"面向对象设计的基本原则","link":"#面向对象设计的基本原则","children":[]},{"level":2,"title":"模式应用领域","slug":"模式应用领域","link":"#模式应用领域","children":[]},{"level":2,"title":"模式的分类方式 1：","slug":"模式的分类方式-1","link":"#模式的分类方式-1","children":[]},{"level":2,"title":"模式的分类方式 2","slug":"模式的分类方式-2","link":"#模式的分类方式-2","children":[]},{"level":2,"title":"设计模式的组合(复合模式（架构模式","slug":"设计模式的组合-复合模式-架构模式","link":"#设计模式的组合-复合模式-架构模式","children":[]},{"level":2,"title":"设计的目的","slug":"设计的目的","link":"#设计的目的","children":[]},{"level":2,"title":"设计的注意点","slug":"设计的注意点","link":"#设计的注意点","children":[]},{"level":2,"title":"怎么样设计一个模式","slug":"怎么样设计一个模式","link":"#怎么样设计一个模式","children":[]},{"level":2,"title":"javascript 设计模式","slug":"javascript-设计模式","link":"#javascript-设计模式","children":[]}],"git":{"updatedTime":1718759308000,"contributors":[{"name":"jmz","username":"jmz","email":"mingzhuang.ji@ly.com","commits":13,"url":"https://github.com/jmz"},{"name":"Boswell","username":"Boswell","email":"mingzhuang.ji@ly.com","commits":3,"url":"https://github.com/Boswell"},{"name":"Boswell","username":"Boswell","email":"aiyoudqrjmz@163.com","commits":5,"url":"https://github.com/Boswell"},{"name":"mingzhuang.ji","username":"mingzhuang.ji","email":"mingzhuang.ji@ly.com","commits":2,"url":"https://github.com/mingzhuang.ji"}]},"filePathRelative":"design-pattern/readme.md"}');export{c as comp,d as data};
