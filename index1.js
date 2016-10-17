//
// template string，解决插入大量的 html 内容到文档之中，使用 `` 与 ${}
//
// ES5 的插入模式
window.document.body.innerHTML = '<div>' + Animal.val + '</div>' +
  '<p>' + Animal.val + '</p>'

// ES6 的插入模式
window.document.body.innerHTML = `
  <div>${Animal.val}</div>
  <p>${Anima.val}</p>
`

//
// destructuring ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
//
let a = 'ES6'
let b = {a}
p(b) // Object{a: 'ES6'}

// 反过来还可以这样写：
let {c} = b;
p(c) //'ES6'，即 c = b.a


//
// reset 是一个集？对于 ES6 来说，ES5 中的 arguments 已成过去式
//
function reset(...args){
  p(args)
  p(args)
}
reset('a','b','c') // ['a','b','c']












