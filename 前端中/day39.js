

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

// -----------------------------------------------

// const arr = [1,2,3,4,5]
// console.log(arr.reverse())    // [5,4,3,2,1]  （数组反转）
// // 扩充数组的方法 （原型）
// Array.prototype.sum = function(){ 
//     return this.reduce((prev,cur) => prev + cur,0)  // reduce -- 累计数组
// }
// // Array.prototype.sum = () => this.reduce((prev,cur) => prev + cur,0)
// console.log(arr.sum())   // 15  （数组求和）
// Array.prototype.max = function(){
//     // 数组不能直接求最大最小值，要先用展开运算符展开数组
//     return Math.max(...this)  // Math.max() -- 求最大值
// }
// // 箭头函数中的this指向的是上一层的this
// console.log(arr.max());


// function Star(){
// }
// // 原型对象prototype中的constructor属性指向的是构造函数
// console.log(Star.prototype.constructor === Star)
// Star.prototype = {
//     constructor: Star,  // 构造函数
//     sing: function(){  // 方法
//         console.log('我会唱歌')
//     }
// }
// const ldh = new Star()  // 实例对象
// ldh.sing()  // 我会唱歌






