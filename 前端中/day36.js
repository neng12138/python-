
// 作用域链
// 1. 本质上是底层的变量查找机制 （就近原则）

// 闭包
// 1. 多层函数嵌套
// 2. 内层函数访问外层函数

// 变量提升
// 1. 变量提升只会提升变量的声明，不会提升变量的赋值
// 2. 变量提升只提升var声明的变量，不会提升let和const声明的变量

// 函数提升
// 1. 把所有的函数提升到当前作用域的最前面
// 2. 函数可以先调用再声明

// 函数参数
// 1. 动态参数 ： arguments
// 2. 剩余参数 ： ...args  （剩余参数必须放在最后） 


// 箭头函数
// 1. 箭头函数是一种简洁的匿名函数的写法
// 2. 箭头函数没有自己的this，箭头函数的this是继承自外层函数的this
// 3. 箭头函数没有自己的arguments，箭头函数的arguments是继承自外层函数的arguments

// 箭头函数的语法：
//  （形参） =>  { 函数体 }

// ----------------------------------------------------


// // 数组解构
// // 数组解构是一种快速从数组中提取值的方法
// const arr = [100,60,80]
// // const [max,min,avg] = arr
// const [max,min,avg] = [100,60,80]
// console.log(max,min,avg);

// // 数组解构可以用于交换变量的值
// let a = 11
// let b = 22;
// [a,b] = [b,a]
// console.log(a,b)

// js中必须要加引号的情况：
// 1. 立即执行函数 : 多个立即执行函数之间必须用分号隔开
// (function(){})();
// (function(){})();

// 2. 数组直接用[]开头的情况 : 数组直接用[]开头的情况
// const str = 'pink';
// [100,200,300].map(function(item){
//     console.log(item);
// })

// const pc = ['海尔','联想','小米','方正']
// const [hr,lx,mi,fz] = pc
// // const [hr,lx,mi,fz] = ['海尔','联想','小米','方正']
// console.log(lx,mi);

// function getValue(){
//     return [100,60]
// }
// const [max,min] = getValue()
// console.log(max,min);

// const [a,b,c] = [1,2]
// console.log(a,b,c);     // 1 2 undefined  

// const [a,b] = [1,2,3]
// console.log(a,b);         // 1 2 

// 剩余参数
// const [a,...arr] = [1,2,3]
// console.log(a,arr);         // 1 [2,3]

// // 默认值
// const [a=0, b=0] = []
// console.log(a,b);         // 0 0

// // 忽略某个数组元素
// const [a,b,,d] = [1,2,3,4]
// console.log(a,b,d);         // 1 2 4

// // 多维数组解构
// const [a,b,[c,d]] = [1,2,[3,4]]
// console.log(a,b,c,d);         // 1 2 3 4

// // 对象解构
// const obj = {uname:'pink',age:18,gender:'男'}
// // const {uname,age} = obj
// const {age,gender,uname} = {uname:'pink',age:18,gender:'男'}
// console.log(uname,age,gender);         // pink 18

// // 对象解构: 将value赋值给变量  （变量名必须和属性名一致）
// const {uname,age,gender} = {uname:'pink',age:18,gender:'男'}
// console.log(uname,age,gender);         // pink 18 男

// const pig = {name:'佩奇',age:6}
// const {name,age} = pig
// console.log(name,age);         // 佩奇 6

// 更名
// const pig = {name:'佩奇',age:6}
// const {name : uname,age} = pig
// console.log(uname,age);         // 佩奇 6

// // 数组对象解构
// const goods = [
//     {
//         goodsName: '小米',
//         price:1999
//     }
// ]
// const [{goodsName,price}] = goods
// console.log(goodsName,price);         // 小米 1999

// 多级对象解构
// const person = {
//     uname: '张三',
//     family: {
//         father: '王武',
//         mother: '王芳'
//     },
//     age: 18
// }
// const {uname,family:{father,mother},age} = person
// console.log(uname,father,mother,age);         // 张三 王武 王芳 18

// // 多级数组对象解构
// const person = [
//     {
//         uname: '张三',
//         family: {
//             father: '王武',
//             mother: '王芳'
//         },
//         age: 18
//     }
// ]
// const [{uname,family:{father,mother},age}] = person
// console.log(uname,father,mother,age);         // 张三 王武 王芳 18


// // 数组的map方法
// const arr = ['red','green','blue']
// const arrNew = arr.map(function(item,index){
//     // item : 当前遍历的元素
//     // index : 当前遍历的索引
//     console.log(item,index);
//     return item + '老师'
// })
// console.log(arrNew);

// // 数组的forEach方法
// const arr = ['red','green','blue']
// arr.forEach(function(item,index){
//     // item : 当前遍历的元素
//     // index : 当前遍历的索引
//     console.log(item,index);
// })
    
// map方法 -- 遍历数组，处理数组  （可以return）
// forEach方法 -- 遍历数组 （forEach只能遍历数组）

// 数组的filter方法 ： 过滤数组
const arr = [10,20,30]
// const arrNew = arr.filter(function(item,index){
//     // item : 当前遍历的元素
//     // index : 当前遍历的索引
//     // console.log(item,index);
//     return item >= 20     // true : 保留当前元素  false : 过滤当前元素
// })
// console.log(arrNew);     // [20,30]

// // 用箭头函数简化filter方法
// const arrNew = arr.filter(item => item >= 20)
// console.log(arrNew);     // [20,30]

// filter方法 -- 过滤数组  （可以return）
// 1. return 过滤条件 -- true : 保留当前元素  false : 过滤当前元素

// filter
// 1. 数组名 . filter(function(item,index){ 函数体 })
// 2. 数组名 . filter(item => 函数体)

// -------------------------------------------------


// 作用域
// 1. 规定变量能够被访问的范围，离开范围后不能被访问

// 作用域链
// 1. 作用域链是一种底层的变量查找机制 （就近原则）

// 闭包
// 1. 闭包 -- 多层嵌套函数 + 内层函数访问外层函数
// 2. 闭包的作用 -- 封闭函数，延长变量的生命周期

// 变量提升
// 1. 变量提升只会提升变量的声明，不会提升变量的赋值
// 2. 变量提升只提升var声明的变量，不会提升let和const声明的变量

// 函数提升
// 1. 把所有的函数提升到当前作用域的最前面
// 2. 函数可以先调用再声明

// 函数参数
// 1. 动态参数 ： arguments -- 内置对象，伪数组，存储了所有的实参
// 2. 剩余参数 ： ...args -- 剩余参数必须放在形参最后，真数组  

// 箭头函数
// 1. 箭头函数是一种简洁的匿名函数的写法
// 2. 箭头函数没有自己的this，箭头函数的this是继承自外层函数的this
// 3. 箭头函数没有自己的arguments，箭头函数的arguments是继承自外层函数的arguments

// 箭头函数的语法：
//  （形参） =>  { 函数体 }

// 数组的forEach方法 ： 遍历数组 （forEach只能遍历数组）
// 1. 数组名. forEach(function(item,index){ 函数体 })

// 数组的filter方法 ： 过滤数组  （可以return）
// 1. return 过滤条件 -- true : 保留当前元素  false : 过滤当前元素
// 2. 数组名. filter(function(item,index){ 函数体 })
// 3. 数组名. filter(item => 函数体)

// 数组解构
// 1. 数组解构是一种快速从数组中提取值的方法
// 2. 数组解构将数组元素批量赋值给一系列变量的语法

// 数组解构语法： const [ 变量1,变量2,... ] = 数组
// 1. 变量的顺序必须对应数组元素的顺序进行一一赋值

// 对象解构
// 1. 对象解构是一种快速从对象中提取值的方法
// 2. 对象解构将对象属性值和方法（value）批量赋值给一系列变量的语法

// 对象解构语法： const { 变量1,变量2,... } = 对象
// 1. 变量名必须和属性名一致 （名字必须一模一样）
// 2. 变量的顺序可以和属性的顺序不一致 （对象是无序的）

