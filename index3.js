//
// ES6 箭头函数使用
// arrow function 箭头函数？？，它的出现不仅仅是一些语法糖上的简洁，同时是要解决 var me = this; me.attr 这样的写法的尴尬。
//

// 一条过（带参）
var fun1 = a => a

// 相当于：
var fun1 = function (a) {
  return a
}

// 一条过（无参）
var fun2 = () => {
  console.log("ES6")
}

// 相当于：
var fun2 = function () {
  console.log("ES6")
}

// 多个参数
var fun3 = (a, b, c) => a + b + c

// 相当于
var fun3 = function (a, b, c) {
  return a + b + c
}

// 多个参数，多个语句
var fun4 = (a, b, c) => {
  var d = a + b + c
  return d + 1
}

// 相当于：
var fun4 = function (a, b, c) {
  var d = a + b + c
  return d + 1
}

// 如果返回 对象 时，需要用小括号包含起来
var fun5 = () => {
  return ({
    name: 'aji'
  })
}

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

//
// 注意：
// function 函数有自己的 this，但箭头函数 ()=> 没有自己的this，而是与上一层共享 this
// apply & call 不能强行改变 箭头函数 里面的 this
// function 函数可以使用 arguments，但箭头函数不行（会被当成普通变量）
