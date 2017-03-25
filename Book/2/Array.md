## 原型

#### 概念
> 函数`function`、对象`object`、数组`Array[]`都是对象，他们都是引用类型<br>
> 值类型不是对象，区分方法：值类型使用`typeof`，引用类型使用`instanceof`<br>

#### 函数与对象
> 对象都是由函数创建的，如：<br>
```js
var obj = {name: 'js'}
// 相当于
var obj = new Object();
obj.name = 'js'

//==============

var array = [1]
// 相当于
var array = new Array();
array[0] = 1
```


#### 只有函数有 *原型* `prototype`
```js
var func = function () {
  this.name = 'function'
}
func.prototype.constructor == func   // 函数原型的构造函数是其本身
func.constructor == Function         // 函数的构造函数是父Functino全局Function对象
func.prototype.sex = 'man' == (new func()).sex  // 函数的原型的属性被用函数新建的对象完美继承
func.prototype.constructor = (new func()).constructor
```


```js
var a=function(){}
```

####
