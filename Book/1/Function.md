## 函数-箭头函数

> ES6 对于这一部分应该是重点更新了。当然内容也是相当有料
它的出现不仅仅是一些语法糖上的简洁，同时是要解决 var me = this; me.attr 这样的写法的尴尬。

#### 箭头函数，无参
```
var fun = () => {
  console.log("ES5")
}

// 相当于
var fun = function () {
  console.log("ES6")
}
```

#### 带一个参数
```
var fun = a => a

// 相当于

var fun = function (a) {
  return a
}
```

#### 多个参数
```
var fun = (a, b, c) => a + b + c

// 相当于

var fun = function (a, b, c) {
  return a + b + c
}
```

#### 多个参数，带处理过程
```
var fun = (a, b, c) => {
  var d = a + b + c
  return d + 1
}
```

#### 如果返回 对象 时，需要用小括号包含起来
```
var fun = () => {
  return ({
    name: 'aji'
  })
}
```

#### 参数默认值
```
var fun = (para = 'aji') => {
  //do with 'aji'
}

// 相当于：

var fun = function(para){
  para = para || 'aji'
}
```

#### 不定参数
```
var fun = (...x) => {
  //do with 'array x'
}

// 相当于：

var fun = function(){
  //do with 'array arguments'
}
```

#### 拓展参数 *重要！！*
```
var fun8 = (a, b, c) => {
  console.log(a + b + c)
}
var fun8_obj = {'hello', 'world', '!!'}

// ES6
fun8(...fun8_obj)

// ES5
fun8.apply(null, fun8_obj)
```

#### 箭头函数引起的 this 的变化，*至重要*
```
//ES5，此过程会报错，因为 this.type 指向的是 setTimeout 的 this，即 window
class Animal {
  says(say) {
    setTimeout(function () {
      console.log(this.type + ' says ' + say)
    }, 1000)
  }
}

//ES6,并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。
class Animal {
  says(say) {
    setTimeout(
      ()=> {
        console.log(this.type + ' says ' + say)
      }, 1000
    )
  }
}
```
**注意：
function 函数有自己的 this，但箭头函数 ()=> 没有自己的this，
而是与上一层共享 this apply & call 不能强行改变 箭头函数 里面的 this
function 函数可以使用 arguments，但箭头函数不行（会被当成普通变量**

