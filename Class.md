## Class

#### class
> 终于可以使用 class 来定义类了（而非 function)
```
class Animal {
  says(say) {
    p(this.type + ' says ' + say)
  }
}
```

#### constructor
```
class Animal {
  constructor() {
    this.type = 'animal'
  }
}
```

#### extends 继承
```
class Cat extends Animal {
  constructor() {
    super() // 调用父类的构造函数？此方法必须存在，因为子类没有 this 对象，需要通过此方法来继承父类的 this 对象
    this.type = 'cat'
  }
}
```

#### 增强的对象使用：`__proto__` to assign the inherited object
```
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
```


