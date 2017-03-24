## 模块化

#### 概念
> 模块化有助于团队协作、重复利用、分工合作等。<br>

#### 最简单的模块。*（污染全局）*
```js
func1 () {
}
func2 () {
}
```

#### 封装对象的模块化。*暴露所有成员，不安全*
```js
var module1 = {
    _count: 0,
    func1: function () {
    }
}
```

#### 封装私有变量，采用构造函数。*私有变量常驻内存，耗资源*
```js
function TheClass () {
    var _count = 0
    this.add = function () {
        _count ++
        return _count
    };
}
```

#### 封装私有变量：立即执行函数的写法。*基本为正确的封装方法*
```js
var module = (function () {
    var _count = 0
    var add = function () {
        _count ++
    }
    var minus = function () {
        _count --
    }
    return {
        add: add,
        minus: minus
    }
})()
```

#### 全局变量输入（类似于 require.js 写法）
```js
var module = (function ($) {
    // ... use $
})(jQuery)
```
