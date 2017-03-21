## Number

```
Number.EPSILON          // 生成？
Number.isInteger(1)     // 是否为整数
Number.isNaN('NaN')     // 是否为数字
```

## Math
```
// 谨慎使用，可能会微调
Math.acosh(3)          // 反正曲余弦
Math.hypot(3, 4)       // 直三角斜边长
Match.pow(2, 3)        // pow(x, y) 方法可返回 x 的 y 次幂的值。
Math.imul(4, 3)        // 32位整数乘，4*3 = 12
```

## String
```
'abcde'.contains('cd')    // return boolean
'abc'.repeat(3)           // return abcabcabc
```



**通过 default 输出 对象**
```
export default {
  name: 'aji'
}
```

**通过 import 引用**
```
import {name, age} from './test.js'
```

**有多个模块时需要使用 * 引入**
```
import * as test from './test.js'
```

