## Js 面向对象与继承

#### 类的定义与继承
```js
function china() {
    this.name = 'chinese'
    this.nation = 'china'
}
// 定义 China 的原型
china.prototype.eat = function () {
    console.info('chinese eat rice')
}
// 定义 guangD 继承于 China
function guangD (city) {
    china.call(this)
    this.province = 'Guang Dong'
    this.city = city
}
// guangD 的原型继承于 china （注意使用prototype）
// 注意要把 guangD 的原型的构造函数拉回来
guangD.prototype = Object.create(china.prototype)
guangD.prototype.constructor = guangD
guangD.prototype.eatMorning = function () {
    console.info('GuangD eat Moring tea')
}
// 生成 guangZ 对象，该对象包含 china 的属性和方法，也包含 guangD
var guangZ = new guangD('guang zhou')
```

#### 单个函数继承
```js
function china() {
    this.nation = 'china'
}
// 定义 China 的原型
china.prototype.eat = function () {
    console.info('chinese eat rice')
}
function guangX (city) {
    this.city = city
}
// 单个方法继承
guangX.prototype.eat = function () {
    china.prototype.eat.call(this)
    console.log('eat from china')
}

var guiLin = new guangX('gui lin')
guiLin.eat()  // 'chinese eat rice eat from china'

```

#### 多继承
```js
function guangZhou () {
    china.call(this)
    guangD.call(this)
}
```
