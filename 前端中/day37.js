

// 作用域
// 1. 规定变量能够被访问的范围，离开范围后不能被访问

// 作用域链
// 1. 作用域链是一种底层的变量查找机制 （就近原则）

// 闭包
// 1. 闭包 -- 多层嵌套函数 + 内层函数访问外层函数
// 2. 闭包的作用 -- 封闭函数，延长变量的生命周期

// 外层函数对外而言是局部作用域，对内而言是全局作用域
// function outer(){
//     let num = 10
//     function inner(){
//         console.log(num)
//     }
//     return inner
// }
// const fn = outer()
// fn() // 10


// 变量提升 （基本不用var）
// 1. 变量提升只会提升变量的声明，不会提升变量的赋值
// 2. 变量提升只提升var声明的变量，不会提升let和const声明的变量

// 函数提升
// 1. 把所有的函数提升到当前作用域的最前面
// 2. 函数可以先调用再声明

// 函数参数
// 1. 动态参数 ： arguments -- 内置对象，伪数组，存储了所有的实参
// 2. 剩余参数 ： ...args -- 剩余参数必须放在形参最后，真数组  

// function getSum(){
//     for(let i = 0; i < arguments.length; i++){
//         console.log(arguments[i])   // 动态参数arguments
//     }
// }
// getSum(1,2,3,4,5)

// // 剩余参数更灵活，用的更多
// function getSum (...args){
//     for(let i = 0; i < args.length; i++){
//         console.log(args[i])   // 剩余参数args
//     }
// }
// getSum(1,2,3,4,5)


// 箭头函数
// 1. 箭头函数是一种简洁的匿名函数的写法
// 2. 箭头函数没有自己的this，箭头函数的this是继承自外层函数的this
// 3. 箭头函数没有自己的arguments，箭头函数的arguments是继承自外层函数的arguments

// 箭头函数的语法： （没有function和函数名）
//  （形参） =>  { 函数体 }

// // 箭头函数写法更简单，更专业，用的也很多
// const getSum = (...args) => {
//     for(let i = 0; i < args.length; i++){
//         console.log(args[i])   // 剩余参数args
//     }
// }
// getSum(1,2,3,4,5)


// 数组的forEach方法 ： 遍历数组 （forEach只能遍历数组）
// 1. 数组名. forEach(function(item,index){ 函数体 })

// // forEach方法没有return
// const arr = ['red','green','blue']
// arr.forEach(function(item,index){
//     console.log(item,index)   // 遍历数组arr
// })


// 数组的filter方法 ： 过滤数组  （可以return）
// 1. return 过滤条件 -- true : 保留当前元素  false : 过滤当前元素
// 2. 数组名. filter(function(item,index){ 函数体 })
// 3. 数组名. filter(item => 函数体)

// const arr = [1,2,3,4,5]
// const newArr = arr.filter(item => item > 2 && item < 5)
// console.log(newArr)   // [3,4]


// -------------------------------------------------

// 数组解构
// 1. 数组解构是一种快速从数组中提取值的方法
// 2. 数组解构将数组元素批量赋值给一系列变量的语法

// 数组解构语法： const [ 变量1,变量2,... ] = 数组
// 1. 变量的顺序必须对应数组元素的顺序进行一一赋值

// const [max,min,avg] = [30,10,20]
// console.log(max,min,avg);    // 30 10 20

// const [max,min,[avg]] = [30,10,[20,40]]
// console.log(max,min,avg);    // 30 10 20


// 对象解构
// 1. 对象解构是一种快速从对象中提取值的方法
// 2. 对象解构将对象属性值和方法（value）批量赋值给一系列变量的语法

// 对象解构语法： const { 变量1,变量2,... } = 对象
// 1. 变量名必须和属性名一致 （名字必须一模一样）
// 2. 变量的顺序可以和属性的顺序不一致 （对象是无序的）

// const {name : uname,age} = {name:'pink',age:18}
// console.log(uname,age);

// const {name : uname,age:{gender}} = {name:'pink',age:{gender : '男'}}
// console.log(uname,gender);

// ----------------------------------------------------

// // 构造函数 ： 大写开头的函数
// function Pig(uname,age){
//     this.uname = uname
//     this.age = age
// }
// // console.log(new Pig('佩奇',8));
// // console.log(new Pig('乔治',5));
// const pepa = new Pig('佩奇',8)    // 对象
// const george = new Pig('乔治',5)    // 对象
// console.log(pepa);
// console.log(george);

// // 构造函数
// function Goods(name,price,count){
//     this.name = name    // 商品名称
//     this.price = price  // 商品价格
//     this.count = count  // 商品数量
// }
// const mi = new Goods('小米',1999,30)   // 对象
// console.log(mi);
// const hw = new Goods('华为',2999,20)   // 对象
// console.log(hw);
// const vi = new Goods('vivo',3999,10)   // 对象
// console.log(vi);

// function Pig(uname,age){
//     this.uname = uname
//     this.age = age
// }
// // 实例属性
// Pig.eyes = 2
// // 实例方法
// Pig.walk = function(){
//     console.log('猪猪会走');
// }
// Pig.getEyes = function(){
//     // 静态成员只能通过构造函数访问 （this指向构造函数）
//     console.log(this.eyes);
// }
// console.log(Pig.eyes);  // 2
// Pig.walk()  // 猪猪会走
// Pig.getEyes()  // 2

// const obj = {name:'pink',age:18}
// console.log(Object.keys(obj));  // ['name','age']
// console.log(Object.values(obj));  // ['pink',18]

// const obj_other = {gender:'男'}
// console.log(obj_other);

// Object.assign(obj_other,obj)   // 将obj_other的属性合并到obj中
// console.log(obj_other);  // {gender:'男',name:'pink',age:18}


// // 数组的reduce方法 ： 累计数组
// const arr = [1,5,8]

// // 无初始值 （第一个元素是prev）
// const total = arr.reduce((prev,cur) => prev + cur)
// console.log(total);   // 14

// // 有初始值 （初始值是prev）
// const total_other = arr.reduce((prev,cur) => prev + cur,10)
// console.log(total_other);   // 24

// const arr = [
//     {name:'张三',salary:10000},
//     {name:'李四',salary:20000},
//     {name:'王五',salary:30000}
// ]
// // // 方法一 ： 数组对象解构
// // const [{salary:salary_1},{salary:salary_2},{salary:salary_3}] = arr
// // const total = salary_1 + salary_2 + salary_3
// // console.log(total);   // 60000

// // 方法二 ： 数组的reduce方法
// // cur : 当前元素
// const total = arr.reduce((prev,cur) => prev + cur.salary,0)
// console.log(total)   // 60000

// // arr.map(item => item.salary *= 1.3)
// // console.log(arr);

// const all = arr.reduce((prev,cur) => prev + cur.salary * 1.3,0)
// console.log(all);   // 78000


// const arr = [
//     {name:'张三',salary:10000},
//     {name:'李四',salary:20000},
//     {name:'王五',salary:30000}
// ]
// // filter方法 ： 过滤数组
// // const result = arr.filter(item => item.name === '李四')
// // console.log(result);    // [{name:'李四',salary:20000}]

// // find方法 ： 查找数组中符合条件的第一个元素
// const result = arr.find(item => item.name === '李四')
// console.log(result);    // {name:'李四',salary:20000}

// const arr = [10,20,30]
// const flag = arr.every(item => item > 5)   // 数组中所有元素都满足条件 （返回true）
// console.log(flag);   // true

// const arr = [10,20,30]
// const flag = arr.some(item => item > 5)    // 数组中至少有一个元素满足条件 （返回true）
// console.log(flag);   // true

// const seq = {size:'40cm*40cm',color:'黑色'}
// const result = Object.values(seq).join('/')   // '40cm*40cm/黑色'
// console.log(result);

// Array.from() ： 将伪数组对象转换为真数组

// ----------------------------------------------------


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

// substring方法 ： 截取字符串  (左闭右开)
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



