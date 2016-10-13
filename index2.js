/**
 * Created by Administrator on 2016/10/10.
 */

//
// ES6 原生的模块化支持（重要）
//

// 普通的输出，输出一个变量
export var name = 'Aji'

// 输出多个变量
var name = 'Aji'
var age = 24
export { name, age }

// 通过 default 输出
export default {
  name: 'aji'
}

// 通过 import 引用
import {name, age} from './test.js'

// 有多个模块时需要使用 * 引入
import * as test from './test.js'

