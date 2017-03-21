## 数组

#### 初使化

> 区别在于，_Array\(\)_ can be set a number length.And it is javascript 内置对象的构造函数定义\(defined from inner object construct function\)

```
//1. Array()
var ary = new Array()
var ary = new Array(8)
var ary = new Array('a', 'b', 'c')

//2. []
var ary = []
```

#### 数组方法

```
ary.toString()

ary.toLocaleString()

ary.join()                  // make the ary to a string：ary.join('-') => "a-b-c"

ary.shift()                 // move the first element of ary

ary.unshift('d')            // insert the data before the ary: => d,a,b,c

ary.pop()                   // move the last element of ary

ary.push('e')               // insert the data after the ary: => a,b,c,e

ary.concat(ary)             // concat two ary: a,b,c,a,b,c

ary.slice(0, 2)             // return a,b

ary.reverse()               // 数组反向排序

ary.sort()

ary.splice()                // insert/delete/replace.....
```

#### 数组循环

```
// for in
for (var index in ary) {
  var val = ary[index]
}

// forEach
ary.forEach(function (val) {
  //...do with val
})

//
// ES6--避开以上两者的缺陷，可正确响应 break,continue,return 等
for (val of ary){
  var val = val
}
```

#### 读取数组 keys/values/entries

```
["a", "b", "c"].entries() // iterator [0, "a"], [1,"b"], [2,"c"]
["a", "b", "c"].keys() // iterator 0, 1, 2
["a", "b", "c"].values() // iterator "a", "b", "c"
```



