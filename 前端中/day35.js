
// 事件类型change
// 1. 元素的文本内容发生改变时触发事件 （失焦）
// 2. change可以防止每次失焦就触发的问题，节省资源 （改变才触发）

// 事件类型mousemove
// 1. 鼠标移动时触发事件 （移动才触发）

// 鼠标事件： click  mouseenter  mouseleave  mousemove  mouseover  mouseout

// // 逻辑与
// // & -- 全部执行   && -- 短路
// false && console.log("不会执行") // 不会输出
// false & console.log("会执行") // 会输出

// // 逻辑或
// // | -- 全部执行   || -- 短路
// true || console.log("不会执行") // 不会输出
// true | console.log("会执行") // 会输出

// <!-- 普通链接会跳转 -->
// <a href="page.html">跳转链接</a>

// <!-- 使用javascript:;的链接不会跳转 -->
// <a href="javascript:;">不会跳转的链接</a>

// js的网页跳转
// 1. location.href = "跳转的网页地址"  -- 会刷新页面

// --------------------------------------------------------------

// 闭包
// 1. 闭包 === 多层函数嵌套 + 内层函数访问外层函数

// // 1. 闭包 ： 直接调用
// function outer(){
//     let a = 10
//     function inner(){
//         console.log(a);
//     }
//     inner() // 调用inner函数
// }
// outer() // 调用outer函数

// // 2. 闭包 : 返回内层函数
// function outer(){
//     let a = 10
//     function inner(){
//         console.log(a);
//     }
//     return inner // 返回inner函数
// }
// // outer() === inner === function inner(){ consloe.log(a) }
// const fun = outer() // 调用outer函数
// fun() // 调用inner函数

// // fun代表inner函数,因此inner函数不会被js回收
// // 因为inner函数访问外层函数，因此outer函数也不会被js回收
// function outer(){
//     let count = 0       // 局部变量，不会被修改
//     function inner(){
//         count++
//         console.log(`函数被调用了${count}次`);
//     }
//     return inner // 返回inner函数
// }
// const fun = outer() // 调用outer函数
// fun() // 函数被调用了1次
// fun() // 函数被调用了2次
// fun() // 函数被调用了3次
// // 只要fun不被回收，那么inner函数就不会被回收，因此count不会被js回收


// // 变量提升 （必须var）
// // 变量提升只提升变量的声明，不提升变量的赋值
// console.log(num);   // undefined
// var num = 10; // 变量提升，会将var num 放在前面
// console.log(num);   // 10

// // 函数提升
// // 函数的提升会把所有函数提升至当前的作用域的最前面 （能先调用后声明）
// fun()    // 函数被调用了
// function fun(){
//     console.log("函数被调用了");
// }

// func()   // 报错 ： func函数未定义
// // 函数表达式 ：不能先调用后声明 （因为函数表达式本质上是匿名函数的赋值）
// const func = function(){
//     console.log("函数被调用了");
// }

// // 动态参数 -- arguments
// // 1. arguments是一个类数组对象 （伪数组）
// // 2. arguments只存在于函数中
// // 3. arguments可以获取到函数的所有实参 （传入参数）
// function getSum(){
//     let sum = 0
//     // console.log(arguments)   // 类数组对象 （伪数组）
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i]
//     }
//     console.log(sum)
// }
// getSum(1,2,3,4,5)  // 15
// getSum(1,2,3,4,5,6,7,8,9,10)  // 55


// // 剩余参数 -- ...
// // 1. 剩余参数只能在函数的最后一个形参
// // 2. 剩余参数是一个数组 （真数组）
// // 3. 剩余参数可以获取到函数的剩余实参 （传入参数）
// function getSum(a,b,...args){
//     // 剩余参数可以写在形参列表中，会更灵活 （但只能写最后一个）
//     console.log(a,b);
//     console.log(args);      // 数组 （真数组）
// }
// getSum(1,2)  // 1 2  []
// getSum(1,2,3,4,5)  // 1 2  [3,4,5]

// // 展开运算符 --...
// // 1. 展开运算符用于数组中，将数组展开为多个元素
// let arr = [1,2,3,4,5]
// // console.log(...arr)
// console.log(Math.max(...arr));   // 5
// console.log(Math.min(...arr));   // 1

// let arr1 = [6,7,8]
// let arr2 = [...arr, ...arr1]   // 数组的合并
// console.log(arr2);   // [1,2,3,4,5,6,7,8]

// const func = function(x){
//     console.log(x);
// }
// func(1)  // 1

// 箭头函数
// 1. 箭头函数是函数表达式的一种简写方式 （匿名函数）

// 正常形式 -- （形参） => { 函数体 }
// const func = (x) => {
//     console.log(x)
// }
// func(1)  // 1

// // 形参只有一个时，箭头函数可以省略小括号   --  x => { 函数体 }
// const func = x => {
//     console.log(x)
// }
// func(1)  // 1

// // 函数体只有一行时，箭头函数可以省略大括号   --  x => 函数体
// const func = x => console.log(x);
// func(1)  // 1

// // 函数体只有一行时，箭头函数可以省略大括号和return   --  x => 返回值
// const func = x => {
//     return x+1
// }
// console.log(func(1))  // 2
// const func = x => x+1
// console.log(func(1))  // 2

// // 箭头函数直接返回一个对象时，需要用小括号括起来   --  x => ({uname : x})
// const func = uname => {
//     return {uname : uname}
// }
// console.log(func("张三"));  // {uname : "张三"}
// const func = uname => ({uname : uname})
// console.log(func("张三"))  // {uname : "张三"}


// 箭头函数只有剩余参数...arr ，没有动态参数argutments
// const getSum = (...arr) => {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// const result = getSum(2,3,4)
// console.log(result);


// 普通函数的this指向
// 1. 普通函数的this指向是调用函数的对象 （普通函数有自己的this）

// 箭头函数的this指向 
// 1. 箭头函数的this指向是外层函数的this （箭头函数没有自己的this）

// const obj = {
//     uname : "张三",
//     age : 18,
//     func : function(){
//         console.log(this)  
//     }
// }
// obj.func()  // {uname : "张三", age : 18, func : function(){}}
// const obj = {
//     uname : "张三",
//     age : 18,
//     func : () => {
//         console.log(this)  
//     }
// }
// obj.func()  // Window对象


// 使用箭头函数时尽量不要使用this,因为业务复杂时，this指向很容易会出现问题
// 想用this时，还是使用匿名函数等普通函数
const obj = {
    uname : "张三",
    age : 18,
    func : function() {
        // 普通函数的this指向是调用函数的对象 （普通函数有自己的this）
        console.log(this)   // {uname : "张三", age : 18, func : function(){}}
        const fn = () => {
            // 箭头函数的this指向是外层函数的this （箭头函数没有自己的this）
            console.log(this);
        } 
        fn()
    }
}
obj.func()





