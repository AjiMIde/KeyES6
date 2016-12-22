/**
 * Variable . Overall Variable and Part Variable
 *
 */
// 以往在 ES5 中，只有全局作用域和函数作用域，会在各种函数块之前影响变量。ES6 引入了块级作用域。实际相当于“全局变量”和“局部变量”？
var name = 'ES5'
while (1) {
  var name = 'ES6'
  console.log(name) // ES6
  break
}
console.log(name) // Also ES6

//使用了 ES6 之后 ，就可以完全避免这些情况
var name = 'ES5'
while (1) {
  let name = 'ES6'
  console.log(name) // ES6
  break
}
console.log(name) // ES5

/**
 * Const.
 * const 声明常量，一般用于第三方库声明的变量，一旦修改，就会报错。
 */
const CONST_VERSION = 'ES6'
console.log(CONST_VERSION)

//CONST_VERSION = 'ES5' // Error:Attempt to assign a CONST VALUE

