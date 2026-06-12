// // 常量     --- const
// const PI = 3.1415926;    // 常量（初始化必须要赋值）
// console.log(PI);
// PI = 3.14;  // 报错，常量不能修改

// js和py都是弱数据类型的语言,都不用写数据类型
// 数据类型 : number string boolean undefined null object
// 1. number  数字类型
// 2. string  字符串类型  -- 单引号('') 双引号("") 反引号(``)
// 3. boolean 布尔类型  -- true false
// 4. undefined 未定义类型  -- 变量声明了，但没有赋值
// 5. null 空类型  -- 空值
// 6. object 对象类型  -- 数组、对象、函数、正则表达式、日期、数学

// java和js '+'都可以进行字符串与任何数据类型的拼接(隐式转换)
// py '+'只能进行字符串与字符串的拼接

// // js 的字符串格式化引用 --- 外面用反引号(``),里面用${}
// // py 字符串格式化引用 --- 外面加上f,里面用{}
// let my_name = '张三';
// alert(`你好,${my_name}`);    // 你好,张三

// // 数据类型的检测 : typeof 值  或者  typeof(值)
// let num = 10;
// console.log(typeof num);   // number
// console.log(typeof(num));  // number

// // form prompt 输入的数据默认都是字符串类型的,必要时需要强制转换为数字类型
// // 类型转换 : 1. 隐式转换 2. 显式转换
// // 1. 隐式转换 : 自动转换,不需要我们手动转换
// // +号作为正号解析符,可以将字符串转换为数字 (+字符串 ->  number)
// console.log(typeof (+'123'));  // number
// let num = +prompt('请输入一个数字');  // 123
// console.log(typeof num);  // number

// // 2. 显式转换 : 手动转换,需要我们手动转换 
// // Number() String() Boolean()  转换为数字、字符串、布尔值
// // parseInt() parseFloat()  转换为整数、浮点数
// console.log(typeof '123');  // string
// console.log(typeof Number('123'));  // number

// 赋值运算符 : = += -= *= /= %=
// 自增自减运算符 : ++ --
// 比较运算符 : > < >= <= (==) === (!=) !==
// 逻辑运算符 : && || !

// 分支语句
// let num = 10;
// if (num > 5) {  // 条件成立时执行
//     console.log('num大于5');
// }
// else{
//     console.log('num小于等于5');
// }

// let num = 2;
// if (num > 5) {  // 条件成立时执行
//     console.log('num大于5');
// }
// else if(num === 5){
//     console.log('num等于5'); 
// }
// else{
//     console.log('num小于等于5');
// }

// 三元运算符 : 条件 ? 条件成立时执行 : 条件不成立时执行
// 三元运算符可以简化if else语句 (但通常不做复杂的判断)
// let num = 3 < 5 ? 3 : 5
// console.log(num);  // 3

// let num1 = 3
// let num2 = 5
// let max = num1 > num2 ? num1 : num2
// console.log(max);  // 5


// // switch语句 : 多分支语句
// let num = 4;
// switch (num) {  // 条件
//     case 1:  // 条件1
//         console.log('num等于1');
//         break;  // 跳出switch语句
//     case 2:  // 条件2
//         console.log('num等于2');
//         break;  // 跳出switch语句
//     case 3:  // 条件3
//         console.log('num等于3');
//         break;  // 跳出switch语句
//     default:  // 条件不成立时执行
//         console.log('num不等于1、2、3');
//         break;  // 跳出switch语句
// }

// // while循环语句 : 条件成立时执行,条件不成立时跳出循环
// // while循环通常用于不知道循环次数的情况
// let num = 1
// while (num <= 10) {
//     console.log('月薪过万');
//     num++;
// } 

// let num = 1
// while (num <= 100){
//     console.log(num);
//     num++
// }

// let num = 1
// let sum = 0
// while (num <= 100){
//     sum += num
//     num++
// }
// console.log(sum);  // 5050


// let num = 1
// let sum = 0
// while (num <= 100){
//     if (num % 2 === 0){
//         sum += num
//     }
//     num++      // 自增自减运算符放在循环体的最后
// }
// console.log(sum);   // 2550

// let num = 1
// while( num <= 5 ){
//     if (num === 3){
//         break;  // 跳出循环
//     }
//     console.log(`第${num}次吃包子`);
//     num++
// }

// let num = 1
// while( num <= 5 ){
//     if (num === 3){
//         num++;  // 跳过本次循环
//         continue;  // 跳过本次循环
//     }
//     console.log(`第${num}次吃包子`);
//     num++
// }

// let num = 0
// while( num <= 20){
//     console.log(num)
//     num ++
// }

// let sum = 0
// let num = 1
// while (num <= 1000){
//     sum += num
//     num ++
// }
// console.log(sum);

// let num = 100
// while(num <= 200){
//     if(num % 6 === 0){
//         console.log(num);
//     }
//     num++
// }

// // for循环语句 : 条件成立时执行,条件不成立时跳出循环
// for(let i = 0; i< 10; i++){  
//     console.log('月薪过万');
// }

// for ( let i = 1; i<=100 ; i++){
//     console.log(`${i}岁`);
// }

// let sum = 0
// for(let i = 1; i<= 100 ; i++){
//     if(i % 2 === 0){
//         sum += i
//     }
// }
// console.log(sum);


// // js中的数组 : 数组是一个有序的集合,可以存储任意类型的数据 ---- []
// // js中的数组的长度  ----  arr.length
// // js中的数组的索引  ----  arr[index]   从0开始
// let arr = ['马超','赵云','黄忠','关羽','张飞']
// console.log(arr)        // ['马超','赵云','黄忠','关羽','张飞']
// for(let i = 0; i < arr.length ; i++){
//     console.log(arr[i])    // 马超 赵云 黄忠 关羽 张飞
// }

// let arr = []    // 定义一个空数组
// console.log(arr)        // []
// console.log(arr[0])     // undefined
// console.log(arr[1])     // undefined


// for(let i = 1; i <= 5; i++){
//     if (i === 3){
//         continue;  // 跳过本次循环（continue直接跳向i++）
//     }
//     console.log(i);
// }

// for(let i = 1; i <= 5; i++){    // 条件表达式一定会在最后执行
//     if (i === 3){
//         break;  // 跳出循环（break退出循环）
//     }
//     console.log(i);
// }

// 循环嵌套
for(let i = 1; i < 4; i++){    // 外层循环  
    console.log(`第${i}天`);
    for(let j = 1; j < 6; j++){     // 内层循环
        console.log(`第${j}次吃包子`);
    }
}
// continue 跳出当前层的本次循环，进行下次循环    break 跳出当前层的整个循环


