
// const声明引用数据类型的变量是地址不变，但是值可以变
// 引用数据类型的变量存储的都是地址，地址再指向具体的值
// const arr = []   -- push,pop等方法可以使用
// const obj = {}   

// 把网页标签当成对象来处理（html上叫标签，js上叫对象）

// document对象： 整个网页的文档对象，代表整个网页（最大的对象）

// Dom获取对象
// 1. document.querySelector(选择器)  --- 获取到的是第一个符合条件的元素对象
// 2. document.querySelectorAll(选择器) --- 获取到的是所有符合条件的元素对象的伪数组
// css选择器可以写的很复杂 
// 伪数组： 具有数组的一些属性和方法，但是不是数组，不能使用数组的方法（只能查询,不能修改）

// Dom操作元素的内容:（text）
// 1. 获取元素的内容 => 对象.innerText  (获取元素的标签内容)
//    修改元素的内容 => 对象.innerText = 值  (修改元素的标签内容)
// 2. 获取元素的内容 => 对象.innerHTML  (获取元素的标签内容)
//    修改元素的内容 => 对象.innerHTML = 值  (修改元素的标签内容)

// innerText---> 不能解析标签   innerHTML--> 可以解析标签（innerHTML更常用）
// innerHTML会更常用

// 操作基本元素属性：   对象.属性名 = 值  (修改元素的属性值)
// 属性如： src,href,title,alt等


//操作元素样式属性： （style）
// 1. 对象.style.样式属性名 = 值  (修改元素的样式属性值) ------> 小驼峰命名法
// 2. 对象.className = 类名  (修改元素的class属性值)
// 3. 对象.classList.add(类名)  (追加元素的class属性值)
//    对象.classList.remove(类名)  (删除元素的class属性值)
//    对象.classList.toggle(类名)  (切换元素的class属性值)-- 有则加，无则删

// className 和 classList 的类名都不用写点（.），直接写类名即可（只能写类名）

// className---覆盖前面所有的类名   classList---不影响前面的类名

// 定时器-间歇函数 ： 每过一段时间就执行一次函数
// 1. setInterval(函数,时间)  --- 开启定时器（时间是毫秒）
// 2. clearInterval(定时器id)  --- 清除定时器
let num = 0
let interval_id = setInterval(function () {   // 开启定时器
    num++
    console.log(num)
    if (num === 10) {
        clearInterval(interval_id)  // 清除定时器
    }
},1000)


