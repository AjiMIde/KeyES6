## 对象

#### 概念
> 对象封装了 `属性 property` 和 `方法 method` <br>
> JavaScript 中的对象基于构造函数`constructor`与原型链`prototype` <br>

* New 命令执行了构造函数，并返回实例对象
* 构造函数中的 `this` 代表了实例对象，并在最后返回
* 缺少 `this` 且缺少一个 return {} 则默认返回一个空的对象
* 缺少 new ，则函数中的 this 则代表全局，所有属性或方法都变为全局对象
* 为避免上面的情况，代码块中需要使用严格模式`use strict`，则此时，this 对象不能表示为
* 全局对象，默认为 `undefined`，如无使用 new 关键字，将报错
*
*
```js
function China (province) {
    'use strict'
    this.person = 'chinese';
    this.provice = provice;
    this.eat = function () {
        console.info('Eat rice')
    }
}
var chinese = new China('GuangDong')   // return a obj
```

#### 返回一个新对象
> 当出现 return {} 关键字时，构造函数将返回一个新对象，而非默认的 this 对象
```js
function China () {
    'use strict';
    this.person = 'chinese';
    this.eat = function () {
        console.info('Eat rice')
    }
    return {
        person: 'japan' // Object {person: "japan"}
    }
    return 1000         // Object this

}

```

####
