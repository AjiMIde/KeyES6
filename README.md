##      ES2015/ES6
> ECMAScript6.0 ，JavaScript 语言下一代标准，2015.6 发布，目标：成为企业级的开发语言。
> ECMAScript 只是一种规范（规格），JavaScript 是它的一种具体实现。
> Node.js 是 JavaScript 的服务器运行环境，对 ES6 支持度最高。


##      相关链接
* [阮一峰 ES6 入门](http://es6.ruanyifeng.com/?search=export&x=0&y=0)
* [segmentfault.com ES6 介绍](https://segmentfault.com/a/1190000002904199)
* [infoQ ES6 介绍](http://www.infoq.com/cn/articles/es6-in-depth-an-introduction)
* [ES6 新特性](http://www.cnblogs.com/Wayou/p/es6_new_features.html)
* [汇智网 ES6 全介绍](http://www.hubwiz.com/course/5594e91ac086935f4a6fb8ef/)

vue component 支持此版本的 javascript 写法（实际上是：vue component 就是得这么写）。使用 **ES6** 写的 **vue component** 并不能直接在浏览器
上使用（还有些浏览器不支持），固一般使用插件如 **babel** 来编译成ES5（大部分浏览器都支持的语法）。想要使用 [babel](https://babeljs.io/docs/learn-es2015/)
据说使用 webpack，grunt,glup 等打包工具都可以实现。

#### 特性
```
let, const, class, extends, super, arrow functions, template string, destructuring, default, rest arguments
```
ES6 最常用的几个语法就是上面这些。一个个简单过一下。如果你想更多，请参考等下给出的链接。

**let,const**
ES6 新增的块级作用域，区分于ES5只有全局作用域和函数作用域。


