

// 创建对象的方法
// 1. 字面量 -- const obj = { name:'pink' ,age:18 }
// 2. new Object() -- const obj = new Object({ name:'pink',age:18 })
// 3. 构造函数

// 字面量 -- 方便,但数据多处理不了     构造函数 -- 灵活

// 构造函数
// 1. function定义的函数，用来实例化对象
// 2. 构造函数的this指向实例化的对象
// 3. 构造函数中不写 return

// 构造函数约定
// 1. 构造函数名首字母大写 
// 2. 构造函数只用new实例化


// 实例成员
// 1. 实例成员只归实例对象所有

// 静态成员
// 1. 只能由构造函数访问
// 2. 静态成员只归构造函数所有

// Object
// 1. Object.keys( 对象 ) ： 返回一个由一个给定对象的属性名组成的数组
// obj = {foo: 'bar', baz: 42}
// console.log(Object.keys(obj));  // ['foo','baz']

// 2. Object.values( 对象 ) ： 返回一个由一个给定对象的属性值组成的数组
// obj = {foo: 'bar', baz: 42}
// console.log(Object.values(obj));  // ['bar',42]

// 3. Object.assign( 对象1,对象2 ) ： 将所有可枚举属性的值从一个或多个源对象复制到目标对象
// obj = {foo: 'bar', baz: 42}
// obj_other = {name:'pink',age:18}
// Object.assign(obj_other,obj)   // 将obj_other的属性合并到obj中
// console.log(obj_other);  // {name:'pink',age:18,foo:'bar',baz:42}


// Array
// 1. Array.from( 伪数组对象 ) ： 将伪数组对象转换为真数组


// 1. forEach方法 ： 遍历数组 （forEach只能遍历数组）
// const arr = ['red','green','blue']
// arr.forEach(function(item,index){
//     console.log(item,index)   // 遍历数组arr
// })

// 2.  map方法 ： 处理数组 
// const arr = ['red','green','blue']
// const newArr = arr.map(item => item + '颜色')
// console.log(newArr);

// 3. filter方法 ： 过滤数组
// const arr = [1,2,3,4,5]
// const newArr = arr.filter(item => item > 2 && item < 5)
// console.log(newArr);   // [3,4]

// 4. reduce方法 ： 累计数组
// const arr = [1,5,8]
// // 无初始值 （第一个元素是prev）
// const total = arr.reduce((prev,cur) => prev + cur)
// console.log(total);   // 14
// // 有初始值 （初始值是prev）
// const total_other = arr.reduce((prev,cur) => prev + cur,10)
// console.log(total_other);   // 24

// 5. find方法 ： 查找数组中符合条件的第一个元素
// const arr = [1,2,3,4,5]
// const result = arr.find(item => item > 2 && item < 5)
// console.log(result);    // 3

// 6. every方法 ： 数组中所有元素都满足条件 （返回true/false）
// const arr = [10,20,30]
// const flag = arr.every(item => item > 10)   // 数组中所有元素都满足条件 （返回true）
// console.log(flag);   // false


// join方法 ： 将数组转换为字符串 
// const arr = ['red','green','blue']
// console.log(arr.join('/'))


// ----------------------------------------------


// split方法 ： 将字符串转换为数组
// const str = 'red/green/blue'
// const arr = str.split('/')
// console.log(arr);   // ['red','green','blue']
// const str = '-2025-05-26-'
// const arr = str.split('-')
// console.log(arr);   // ['','2025','05','26','']

// substring方法 ： 截取字符串 （左闭右开）
// const str = 'red/green/blue'
// console.log(str.substring(4));   // 'green/blue'
// console.log(str.substring(4,9));   // 'green'

// startsWith方法 ： 以什么开头 （返回true/false）
// const str ='red/green/blue'
// const flag = str.startsWith('red')
// // const flag = str.startsWith('green',4)
// console.log(flag);   // true

// includes方法 ： 是否包含子串 （返回true/false）
// const str ='red/green/blue'
// const flag = str.includes('green')
// // const flag = str.includes('green',5)
// console.log(flag);   // true


// ---------------------------------------------


// toFixed方法 ： 保留小数点后几位 （四舍五入）
// const num = 10.923
// console.log(num.toFixed(2)) // 10.92
// console.log(num.toFixed(1)) // 10.9
// console.log(num.toFixed(0)) // 11

// --------------------------------------------------


// 字符串的转换
// 1. String( 变量 ) ： 将变量转换为字符串
// 2. 变量.toString() ： 将变量转换为字符串


// 编程思想
// 1. 面向过程： 将解决问题的步骤一步一步的实现
// 2. 面向对象： 将解决问题的步骤封装到对象中，然后通过对象来实现


// 构造函数的问题
// 1. 构造函数中相同的方法被重复定义，浪费内存 （解决：原型）

// 原型
// 1. 原型是一个对象，所有的构造函数都有一个原型
// 2. 原型是构造函数的一个对象属性

// 原型对象 -- prototype
// 1. 原型中存放的是构造函数的公共属性和方法
// 2. 原型中的属性和方法可以被所有实例对象直接使用

// 构造函数和原型对象中的this都指向实例对象

// 构造函数 -- 封装相同的属性
// 原型对象 -- 封装相同的方法
