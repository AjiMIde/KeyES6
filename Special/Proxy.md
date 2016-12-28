## Proxy
>监听与代理能使得对象身上的事件能得到跟踪，这非常有用，类似于 vue/ng 等这样的框架的数据绑定

```
var obj = {value: 100}
var interceptor = {
  set: function (receiver, property, value) {
    console.log(property, 'is changed to', value)
    receiver[property] = value
  }
}
obj = Proxy(obj, interceptor)
obj.value = 200     // console.log(value is change to 200)
```
