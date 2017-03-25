## 对象

#### 构造函数
> 如下为一个构造函数，构造函数为对象的模块，通过构造函数产生对象，你也可以称其为类。<br>
> 基中,guangDong 和 guangXi 都生成了一个属性和一个函数，并且都是独立的，这是种资源浪费 <br>

```js
function China (province) {
    'use strict'
    this.province = province;
    this.eat = function () {
        console.info('Eat rice')
    }
}
var guangDong = new China('guang dong')
var guangXi = new China('guang xi')
guangDong.eat == guangXi.eat // false
```

#### prototype 属性（原型）
>　每一个函数都有一个　prototype 属性对象，该属性对象能被所有实例该函数的对象所继承。 <br>
> prototype 对象上的属性和方法，都能被实例化后的对象所共享。<br>
> 此时，在 guangDong 上是实际没有 `eyes` 属性的，但它会去构造函数的 prototype 上找。<br>

```js
function China (province) {
    'use strict'
    this.province = province;
    this.eat = function () {
        console.info('Eat rice')
    }
}
China.prototype.eyes = 'black'

var guangDong = new China('guang dong')
var guangXi = new China('guang xi')
guangDong.eyes == guangXi.eyes // true
```

#### prototype.constructor 属性
> 函数的 prototype.constructor 默认指向函数本身
> 实例对象的 constructor 指向函数
> 函数的 construcotr 指向全局对象 Function
```js
function Animal (name) {
  this.name = name;
}
var cat = new Animal('cat')

Animal.prototype.constructor == Animal // true
cat.constructor == Animal.prototype.constructor
cat.constructor == Animal
Animal.constructor == Function
```

#### instanceof 运算
> 判断对象是否为某函数的构造实例 <br>
> 只能用于对象，不适用于原始值
```js
function Animal () {
}
var cat = new Animal()
cat instanceof Animal   // true
Animal.prototype.isPrototypeOf(cat)  // true
```


###

