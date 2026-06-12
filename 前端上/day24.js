
// javascript的书写位置:
// 1. 内部js: 直接写在html文件中, 一般用于测试 <script> js代码 </script>
// 2. 外部js: 写在单独的js文件中, 一般用于正式开发 <script src="xxx.js"></script>

// js的输出和输入：
// 1. 输出: document.write() -- 页面
// 2. 输出: console.log() -- 控制台
// 3. 输出: alert() -- 对话框
// 4. 输入: prompt() -- 对话框, 并且可以输入内容, 输入的内容会返回给变量

// js的变量的声明和赋值: let 变量名 = 值; ( let 变量名;  变量名 = 值; )

// js的常量的声明和赋值: const 常量名 = 值; --- 常量不能修改值, 但是可以修改地址

// js的数据类型: number string boolean undefined null objecct

// js字符串的拼接: '+'都可以进行字符串与任何数据类型的拼接

// js字符串的格式化: ` xxx${变量名}xxx ` -- 模板字符串, 可以进行字符串与变量的拼接

// 类型检测 ： typeof 变量名    typeof(变量名) 
// 类型的强制转换 ：  转换的类型（变量名）

// js的分支语句： if(条件表达式){ 条件成立执行的代码 } else{ 条件不成立执行的代码 }
//              if(条件表达式1){ 条件1成立执行的代码 } 
//              else if(条件表达式2){ 条件2成立执行的代码 } 
//              else{ 条件都不成立执行的代码 }

// js的循环语句： for(初始化变量; 条件表达式; 操作表达式){ 循环体 }  
//              while(条件表达式){ 循环体 }
     
// break: 退出循环  continue: 跳过本次循环，继续进行下次循环

// js的数组: 声明 =>   let arr = []
//          使用 =>   arr[下标] = 值  (下标从0开始)
//          长度 =>   arr.length  (获取数组的长度)

// js的操作：1. 增 => arr.push(值)      (在数组的末尾添加元素)
//          2. 增 => arr.unshift(值)    (在数组的开头添加元素)
//          3. 删 => arr.pop()   (删除数组的末尾一个元素)
//          4. 删 => arr.shift()    (删除数组的开头一个元素)
//          5. 删 => arr.splice(起始索引,删除元素的个数)    (删除数组的指定元素)    
//          6. 查 => arr[下标]      (获取数组的元素)
//          7. 改 => arr[下标] = 值     (修改数组的元素)

// 数组的排序 : arr.sort() --- 默认升序
//            arr.sort(function(a,b){ return b-a }) --- 降序  (匿名函数)
//            arr.sort((a,b)=>b-a) --- 降序

// js函数 : 声明 => function 函数名(形参){ 函数体 }
//         调用 => 函数名(实参)  (形参和实参的个数要一致)

// js函数中的return只能返回一个值，如果需要返回多个值，可以使用数组或对象封装
// py函数中的return可以返回多个值，默认放在元组中返回

// 匿名函数 ： function(形参){ 函数体 }   (函数没有名字，只能在调用的时候使用)
// 函数表达式： let 函数名 = function(形参){ 函数体 }  (函数有名字，可以在调用的时候使用)
// 立即执行函数： (function(形参){ 函数体 })(实参)  
//              (function(形参){ 函数体 }(实参))  

// js的对象 : 声明 => let obj = { key:value, key:value }
//           使用 => obj.key   (获取对象的属性值)

// js的对象的操作：1. 增 => obj.newKey = value   (添加对象的属性)
//               2. 删 => delete obj.key   (删除对象的属性)
//               3. 改 => obj.key = value   (修改对象的属性值)
//  js对象也可以和py的字典一样，使用‘对象名[key]’进行使用

// js对象中的方法： 声明方法 => 方法名 ： function(形参){ 函数体 }
//                调用方法 => 对象名.方法名(实参)  (方法名和函数名一样，都是函数)

// js对象的遍历 : for(let key in obj){ 循环体 }  (遍历对象的键名)
//              循环内使用obj[key]来获取键值

// 随机数n~m : Math.floor(Math.random()*(m-n+1))+n
// Math.random() --- [0,1)  (左闭右开)


// const声明引用数据类型的变量是地址不变，但是值可以变
// 引用数据类型的变量存储的都是地址，地址再指向具体的值
// const arr = []
// const obj = {}

// 把网页标签当成对象来处理（html上叫标签，js上叫对象）

// Dom获取对象
// 1. document.querySelector(选择器)  --- 获取到的是第一个符合条件的元素对象
// 2. document.querySelectorAll(选择器) --- 获取到的是所有符合条件的元素对象的伪数组
// css选择器可以写的很复杂 
// 伪数组： 具有数组的一些属性和方法，但是不是数组，不能使用数组的方法（只能查询,不能修改）

// Dom操作元素的内容:
// 1. 获取元素的内容 => 对象.innerText  (获取元素的标签内容)
//    修改元素的内容 => 对象.innerText = 值  (修改元素的标签内容)
// 2. 获取元素的内容 => 对象.innerHTML  (获取元素的标签内容)
//    修改元素的内容 => 对象.innerHTML = 值  (修改元素的标签内容)

// innerText---> 不能解析标签   innerHTML--> 可以解析标签（innerHTML更常用）


// 操作基本元素属性：   对象.属性名 = 值  (修改元素的属性值)
// 属性如： src,href,title,alt等


//操作元素样式属性： 
// 1. 对象.style.样式属性名 = 值  (修改元素的样式属性值) ------> 小驼峰命名法
// 2. 对象.className = 类名  (修改元素的class属性值)
// 3. 对象.classList.add(类名)  (追加元素的class属性值)
//    对象.classList.remove(类名)  (删除元素的class属性值)
//    对象.classList.toggle(类名)  (切换元素的class属性值)-- 有则加，无则删

// className 和 classList 的类名都不用写点（.），直接写类名即可

// className---覆盖前面所有的类名   classList---不影响前面的类名





