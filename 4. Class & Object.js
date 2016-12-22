/**
 * 类：class，构造函数：constructor，继承：extends
 *
 * 1. You can define a function without keyword：`function`
 */

class Animal {
  constructor() {
    this.type = 'animal'
  }

  says(say) {
    p(this.type + ' says ' + say)
  }
}
class Cat extends Animal {
  constructor() {
    super() // 调用父类的构造函数？此方法必须存在，因为子类没有 this 对象，需要通过此方法来继承父类的 this 对象
    this.type = 'cat'
  }
}

/**
 * 增强的对象使用：
 *
 * 1. You can use keyword:`__proto__` to assign the inherited object
 */
var animal = {
  say() {
    alert('animal say')
  }
}

var dog = {
  __proto__:animal, // 指定此对象原型为 animal，相当于继承
  bark() {
    alert('dog bark')
  }
  //say()--> 已经继承
}



