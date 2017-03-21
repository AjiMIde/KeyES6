#### Variable
> 以往在 ES5 中，只有全局作用域和函数作用域，会在各种函数块之前影响变量。ES6 引入了块级作用域。实际相当于“全局变量”和“局部变量”？
```
var name = 'ES5'
while (1) {
  var name = 'ES6'
  console.log(name) // ES6
  break
}
console.log(name) // Also ES6
```

**使用了 ES6 之后 ，就可以完全避免这些情况**
```
var name = 'ES5'
while (1) {
  let name = 'ES6'
  console.log(name) // ES6
  break
}
console.log(name) // ES5
```

#### Const
> const 声明常量，一般用于第三方库声明的变量，一旦修改，就会报错。
```
const CONST_VERSION = 'ES6'
console.log(CONST_VERSION)

//CONST_VERSION = 'ES5' // Error:Attempt to assign a CONST VALUE
```

#### destructuring 解构
> destructuring ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）
```
let a = 'ES6'
let b = {a}
p(b) // Object{a: 'ES6'}

// 反过来还可以这样写：
let {c} = b;
p(c) //'ES6'，即 c = b.a

var [x, y] = [1, 2]
var [a, , c] = ['aa', 'bb', 'cc]

```

#### reset 集
> reset 是一个集？对于 ES6 来说，ES5 中的 arguments 已成过去式
```
function reset(...args){
  p(args)
  p(args)
}
reset('a','b','c') // ['a','b','c']
```

#### 字符串插入模式
> template string，解决插入大量的 html 内容到文档之中，使用 `` 与 ${}
```
// ES5 的插入模式
window.document.body.innerHTML = '<div>' + Animal.val + '</div>' +
  '<p>' + Animal.val + '</p>'

// ES6 的插入模式
window.document.body.innerHTML = `
  <div>${Animal.val}</div>
  <p>${Anima.val}</p>
  `
```
