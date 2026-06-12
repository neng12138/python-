
// // while循环
// // while(循环条件) { 循环体 }
// let num  = 1
// while (num <= 5 ) {
//     // 循环体
//     console.log(`我正在吃第${num}个包子`)
//     num++
// }
// // while循环 --- 通常用于循环次数不明确的场景

// let num = 1
// while (num <= 5) {
//     if (num === 3) {
//         console.log('吃到第三个了, 不能再吃了')
//         break // 跳出循环
//     } 
//     console.log(`我正在吃第${num}个包子`)
//     num++
// }

// let num = 1
// while (num <= 5) {
//     if (num === 3) {
//         num++   // 先自增, 再判断
//         continue // 跳出本次循环, 进入下一次循环
//     }
//     console.log(`我正在吃第${num}个包子`)
//     num++
// }

//  for循环
//  for (初始化变量; 条件表达式; 操作表达式) { 循环体 }
// for (let i = 1; i <= 5; i++) {
//     console.log(`我正在吃第${i}个包子`)
// }

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         console.log('吃到第三个了, 不能再吃了')
//         break // 跳出循环
//     }
//     console.log(`我正在吃第${i}个包子`)
// }

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue // 跳出本次循环, 进入下一次循环    
//     }   
//     console.log(`我正在吃第${i}个包子`)
// }

// js中的结束符是分号, 所以如果不写分号, 会自动加上分号
// 输出 : document.write() -- 页面
// 输出 : console.log() -- 控制台
// 输出 : alert() -- 对话框
// 输入 : prompt() -- 对话框, 并且可以输入内容, 输入的内容会返回给变量

// 变量 ： let 变量名 = 值; ( let 变量名;  变量名 = 值; )
// 常量 ： const 常量名 = 值; --- 常量不能修改值, 但是可以修改地址
// 数据类型 : number string boolean undefined null object

// js java 的‘+’都可以进行字符串与任何数据类型的拼接
// python 的‘+’只能进行字符串与字符串的拼接
// js 中的字符串格式化引用 ---   外面用反引号(``), 里面用${}
// py 中的字符串格式化引用 ---  外面写上f, 里面用{}

// 分支语句 : 
// if (条件表达式) { 语句1 }    else { 语句2 }
// if (条件表达式1) { 语句1 }    else if (条件表达式2) { 语句2 }    else { 语句3 }
// switch (变量) { case 值1: 语句1; break;  case 值2: 语句2; break;  default: 语句3; }
// 三元表达式 :  条件表达式 ? 语句1 : 语句2

// 循环语句 :
// while (条件表达式) { 循环体 }
// for (初始化变量; 条件表达式; 操作表达式) { 循环体 }

// break : 跳出循环         continue : 跳出本次循环, 进入下一次循环
// while 一般用于循环次数不明确的场景
// for 一般用于循环次数明确的场景 （ 遍历数组 ）

// let arr = [2, 6, 1, 7, 4]
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// let avg = sum / arr.length
// console.log(`数组的总和是${sum}`)
// console.log(`数组的平均值是${avg}`)

// let arr = [2, 6, 1, 77, 52, 25, 7]
// let max = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     // if (arr[i] > max) {
//     //     max = arr[i]
//     // }
//     max = arr[i] > max ? arr[i] : max 
// }
// console.log(`数组中的最大值是${max}`);

// let arr = [2, 6, 1, 77, 52, 25, 7]
// let min = arr[0]
// for (let i = 1; i < arr.length; i++) {
//     // if (arr[i] < min) {
//     //     min = arr[i]
//     // }
//     min = arr[i] < min? arr[i] : min
// }
// console.log(`数组中的最小值是${min}`);

// let arr = ['red' , 'green', 'blue', 'yellow']
// console.log(arr)
// for (let i = 0; i < arr.length; i++) {
//     // arr[i] = arr[i] + '老师'
//     arr[i] += '老师'    // 字符串的拼接
// }
// console.log(arr)        // ['red老师', 'green老师', 'blue老师', 'yellow老师']

// js数组的方法 : arr.push()  ---  在数组的末尾添加元素,返回新数组的长度
// let arr = ['red', 'green']
// console.log(arr);
// arr.push('blue')    // 在数组的末尾添加元素
// console.log(arr);
// arr.push('yellow','pink')    // 在数组的末尾添加多个元素
// console.log(arr);

// js数组的方法 : arr.unshift()  ---  在数组的开头添加元素,返回新数组的长度
// let arr = ['red', 'green']
// console.log(arr);
// arr.unshift('blue')    // 在数组的开头添加元素
// console.log(arr);
// arr.unshift('yellow','pink')    // 在数组的开头添加多个元素
// console.log(arr);

// js数组 : push() --- 添加在末尾    unshift() --- 添加在开头

// let arr = [2, 0, 6, 1, 77, 0, 52, 7, 0, 25, 7]
// let newArr = []     // 新数组
// console.log(newArr)
// for(let i =0; i< arr.length; i++) {
//     if(arr[i] >= 10){
//         newArr.push(arr[i])    // 把arr[i]添加到newArr的末尾
//         // newArr.unshift(arr[i])    // 把arr[i]添加到newArr的开头
//     }
// }
// console.log(newArr)

// let arr = [2, 0, 6, 1, 77, 0, 52]
// let newArr = []     // 新数组
// console.log(newArr)
// for(let i =0; i< arr.length; i++) {
//     if(arr[i] !== 0){
//         newArr.push(arr[i])    // 把arr[i]添加到newArr的末尾
//         // newArr.unshift(arr[i])    // 把arr[i]添加到newArr的开头
//     }
// }
// console.log(newArr)


// let arr = []
// arr.push(1,2,3,4,5)   // 把1,2,3,4,5,6,7,8,9,10添加到arr的末尾
// console.log(arr)
// arr.pop()    // 删除arr的最后一个元素
// console.log(arr)
// arr.shift()  // 删除arr的第一个元素
// console.log(arr)
// arr.splice(0,2)    // 删除arr的第1个元素, 删除2个元素
// console.log(arr)

// js数组的方法 : arr.pop()  ---  删除数组的最后一个元素,返回删除的元素
// js数组的方法 : arr.shift()  ---  删除数组的第一个元素,返回删除的元素
// js数组的方法 : arr.splice(开始下标, 删除个数)  ---  删除数组的指定元素,返回删除的元素


// // 冒泡排序 
// // 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
// // 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
// // 针对所有的元素重复以上的步骤，除了最后一个。
// // let arr = [5, 4, 3, 2, 1]
// let arr = [7, 1, 2, 4, 3, 5]
// for(let i = arr.length-1; i > 0; i--) {
//     let flag = true     // 优化 : 如果一轮循环中, 没有发生交换, 说明数组已经有序, 可以直接跳出循环
//     for(let j = 0; j < i ; j++) {
//         if(arr[j] > arr[j + 1]) {
//             let temp = arr[j]
//             arr[j] = arr[j + 1]
//             arr[j + 1] = temp
//             flag = false
//         }
//     }
//     if(flag) {
//         break
//     }
//     console.log(arr);     // 每一轮的结果
// }


// let arr = [7, 1, 2, 4, 3, 5]
// // arr.sort()     // 默认升序 
// arr.sort(function(a, b) {
//     // return a - b     // 升序
//     return b - a     // 降序
// })
// console.log(arr)

// function add(num1 , num2) {
//     return num1 + num2
// }
// // let result = add(10, 20)
// let result = add(100, 200)
// console.log(result)

// function add_100(){
//     let sum = 0
//     for(let i = 1; i <= 100; i++) {
//         sum += i
//     }
//     return sum
// }
// let result = add_100()
// console.log(result)

// function add(num1, num2) {
//     num1 += num2
//     console.log(num1);
//     return num1
// }  
// let num1 = 10
// let num2 = 20
// let result = add(num1, num2)    // 形参不能影响实参
// console.log(result)     // 30
// console.log(num1);   // 10

// function getSum(num1, num2) {    // 形参 : 函数定义时的参数, 叫做形参
//     return num1 + num2
// }
// console.log(getSum(10, 20));   // 30    // 实参 : 函数调用时的参数, 叫做实参
// console.log(getSum(100, 200)); // 300
// console.log(getSum(1000, 2000)); // 3000
// console.log(getSum(10000, 20000)); // 30000

// function getSum(num1 = 0, num2 = 0) {    // 形参 : 函数定义时的参数, 叫做形参
//     console.log(num1 + num2);
// }
// getSum(10, 20)   // 30    // 实参 : 函数调用时的参数, 叫做实参
// getSum()     // 0

// function getSum(arr = []) {    // 形参 : 函数定义时的参数, 叫做形参
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum);
//     return sum
// }
// let what = getSum([1, 2, 3, 4, 5])   // 15    // 实参 : 函数调用时的参数, 叫做实参
// getSum([10, 20, 30, 40, 50])   // 150 
// getSum([100, 200, 300, 400, 500])   // 1500
// getSum()     // 0


// function mon(){
//     let num1 = 10
//     let num2 = 20
//     return [num1,num2]      // 返回一个数组, 数组中的元素是num1和num2
// }
// console.log(mon());   // [10, 20]
// // js 中的函数返回值只能返回一个值, 如果要返回多个值, 可以返回一个数组, 数组中的元素是多个值
// // python 中的函数返回值可以返回多个值, 可以返回一个元组, 元组中的元素是多个值

// function mon(num1,num2){
//     let sum = num1 + num2
//     return sum
// }
// function mon(num1,num2,num3){       // 覆盖
//     let sum = num1 + num2 + num3
//     return sum
// }
// let result = mon(10,20)    // NaN (js和python的函数重载没什么用, 会报错)
// console.log(result);
// result = mon(10,20,30)    // 60
// console.log(result);
// // js 和 python 一个函数名起作用的只有一个函数

// let num = 10    
// function mon(){
//     // console.log(num);
//     // let num = 20    
//     console.log(num);     // 局部内可以访问全局变量
// }
// mon()

(function(){console.log(1)}());   // 立即执行函数  (函数表达式)
(function(){console.log(1)})();  // 立即执行函数  (函数表达式)
// 函数表达式 : 函数没有名字, 只能在函数内部使用, 不能在函数外部使用




