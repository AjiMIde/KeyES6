## 对象的原型与属性

#### 原型链上的属性
> 对象的属性，分自身属性及继承的属性<br>
> 继承的属性，都由内置全局对象　**Object**


##### 获取自身属性 ` Object.getOwnPropertyNames() ` `Object.keys()`
> 获取对象所有属性的键名（包括可枚举或不可枚举的），不包含继承`Object.getOwnPropertyNames()`
```js
var china = {
    person: 'chinese',
    square: '960w',
    GDP: '1000WW'
}
Object.getOwnPropertyNames(china) // ["person", "square", "GDP"]
```
> 如果只获取可枚举的，可使用 `Object.keys()`
```js
Object.keys(china)  // ["person", "square", "GDP"]
```


##### 判断自身是否拥有某属性 `Object.hasOwnProperty()` ` ... in Object`
> `Object.hasOwnProperty()` 只判断当前对象本身的属性
```js
china.hasOwnProperty('person')
```
> `... in Object` 可判断属性（不管是自身属性还是继承而来）
```js
for (item in china) {
    console.log(item)
}
```

##### 对象的拷贝
> 拷贝对象的原型 prototype 原型 <br>
> 拷贝对象的所有属性
```js
/**
 * orig  object  欲拷贝的原对象
 */
function copyObject(orig) {
  // 拷贝原对象的 prototype
  var copy = Object.create(Object.getPrototypeOf(orig));
  // 获取原对象的所有属性
  var propertyNames = Object.getOwnPropertyNames(orig);
  // 遍历所有的属性的值并赋于 copy 值
  propertyNames.forEach(function(propKey) {
    var desc = Object.getOwnPropertyDescriptor(orig, propKey);
    Object.defineProperty(copy, propKey, desc);
  });

  return copy;
}
```