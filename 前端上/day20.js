// script书写位置
// 1. 行内  
// 2. 内部  <script> js代码 </script>           
// 3. 外部  <script src="js文件路径"></script>        推荐使用
// script标签可以写在body标签的任意位置，但是一般写在body标签的底部

// js输出
// document.write('输出内容/变量/表达式/标签')    会覆盖页面所有内容
// alert('输出内容')    // 弹出框
// console.log('输出内容');   // 控制台输出

// js输入
// let 变量名 = prompt('提示内容');    // 弹出框输入内容，赋值给变量名

// 声明变量
// let 变量名 = 值;    // 声明变量并赋值
// 变量名 = 值;    // 重新赋值
// 变量的声明直接用let，因为var本身就有很多问题，所以不建议使用var

// js数组
// let 数组名 = [值1, 值2, 值3, ...];    // 声明数组并赋值
// 数组名[索引] = 值;    // 重新赋值
// 数组名.length;    // 获取数组长度
// 数组名.push(值);    // 向数组末尾添加元素
// 数组名.pop();    // 删除数组末尾元素

// const num = 10;    // 常量，值不能改变（初始化必须要赋值）
// // num = 20;    // 报错，常量不能重新赋值
// console.log(num);

// 数据类型 : number string boolean undefined null object(数组/对象/函数)

// js和java用+号可以拼接所有类型的数据，py用+号只能拼接字符串
// let str1 = 'hello'    // 字符串 （单引号）
// let str2 = "hello"    // 字符串 （双引号）
// let str3 = `hello`    // 字符串 （反引号）
// let num = 10;    // 数字
// my_str = str1 + str2 + str3;    // 字符串拼接（js可以拼接所有，py只可以拼接字符串）
// // console.log(my_str);    // 输出拼接后的字符串
// console.log(str1 + str2 + str3);    // 输出拼接后的字符串
// console.log(my_str + num);    // 输出拼接后的字符串和数字（没报错）

// console.log('pink' + 1);    // 输出pink1（js可以拼接所有，py只可以拼接字符串）
// console.log(undefined + 1);    // 输出NaN（Not a Number）
// console.log(null + 1);    // 输出1

// let num = 10    // 数字 number
// let str = 'hello'    // 字符串 string
// let bool = true    // 布尔值 boolean
// let undef          // undefined
// let nul = null    // null
// console.log(num,typeof num)    // 输出变量的值和类型
// console.log(str,typeof str)    // 输出变量的值和类型
// console.log(bool,typeof bool)    // 输出变量的值和类型
// console.log(undef,typeof undef)    // 输出变量的值和类型
// console.log(nul,typeof nul)    // 输出变量的值和类型

// console.log(11 + 11);    // 输出22
// console.log('11' + 11);    // 输出1111
// console.log(11 - 11);    // 输出0
// console.log('11' - 11);    // 输出0
// console.log(11 * 11);    // 输出121
// console.log('11' * 11);    // 输出121
// console.log(typeof '11');    // 输出string
// console.log(typeof +'11');    // 输出number  （+号可以表示整正数，隐式转换为数字类型）
// console.log(+'11' + 11);    // 输出22    （+号可以表示整正数，隐式转换为数字类型）

// // 任何数据和字符串拼接，都会变成字符串
// console.log('11' + 11 + 11);    // 输出111111
// console.log('11' + (11 + 11));    // 输出1122
// console.log(11 + 11 + '11');    // 输出2211

// 强制类型转换
// let num = Number(prompt('The num is : '))
// console.log(num,typeof num);    // 输出变量的值和类型
// let num = prompt('The num is : ')
// console.log(Number(num),typeof Number(num));    // 输出变量的值和类型
// let num = +prompt('The num is : ')    // 隐式类型转换
// console.log(num,typeof num);    // 输出变量的值和类型

// 强制类型转换中的parseInt和parseFloat
// parseInt()    // 转换为整数（不会四舍五入）      -- 截取整数
// parseFloat()    // 转换为浮点数 （不会四舍五入）     -- 截取浮点数
// console.log(parseInt('11px'));    // 输出11 （parseInt取整数）
// console.log(parseInt('11.11px'));    // 输出11
// console.log(parseInt('abc11.11px'));    // 输出NaN
// console.log('--------------------------------');
// console.log(parseFloat('11px'));    // 输出11  （parseFloat取浮点数）
// console.log(parseFloat('11.55px'));    // 输出11.55
// console.log(parseFloat('abc11.55px'));    // 输出NaN

// let i = 1;    // 声明变量i并赋值为1
// console.log(++i + 1)    // 输出3  （先自增，再运算）
// console.log(i)

// let j = 1;    // 声明变量j并赋值为1
// console.log(j++ + 1)    // 输出2  （先运算，再自增）
// console.log(j)

// if(i != j){    // 不等于
//     console.log('i不等于j');    // 输出i不等于j
// }
// else{    // 否则
//     console.log('i等于j');    // 输出i等于j
// }

//  js中 ++ -- += -+ *= /= %=
// let num = 10;    // 声明变量num并赋值为10
// // num = num + 1
// // num += 1    // 等价于num = num + 1
// num++
// console.log(num);

// console.log(2 == 2);    // 输出true（==比较的是值）
// console.log(2 == '2');  // 输出true
// console.log(2 === '2'); // 输出false（===比较的是值和类型）
// 在开发中，尽量使用===和!==，因为==和!=会有很多问题

let num = 4
switch(num){
    case 1:
        console.log('num等于1');    // 输出num等于1
        break;    // 跳出switch语句
    case 2:
        console.log('num等于2');    // 输出num等于2
        break;    // 跳出switch语句
    case 3:
        console.log('num等于3');    // 输出num等于3
        break;    // 跳出switch语句
    default:    // 否则
        console.log('num都不符合');    // 输出num不等于1和2
}



