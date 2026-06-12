
// 事件监听： 对象 . addEventListener('事件类型'，function(){})

// 事件类型： 1. 鼠标事件： click--点击  mouseenter--移入 mouseleave--移出 mouseover--移入 mouseout--移出
//          2. 键盘事件： keydown--按下  keyup--抬起
//          3. 聚焦事件： focus--获得焦点  blur--失去焦点
//          4. 文本事件： input--输入
//          5. 加载事件: load--加载  DOMContentLoaded--文档加载完毕
//          6. 滚动事件： scroll--滚动
//          7. 其他事件： resize--窗口大小改变  dblclick--双击  mousemove--移动

// 事件对象e : 对象. addEventListener('事件类型'，function(e){})
//      （事件对象中包含触发此事件的对象的相关信息）

// 事件对象e的属性： 1. e.target--触发事件的对象
//                2. e.type--事件类型
//                3. e.key--按键

// 环境对象this： 谁调用this，this就指向谁

// 回调函数： 函数作为参数传递给另一个函数，这个函数就叫做回调函数

// ----------------------------------------------------------

// 事件流： 事件完整执行过程中的流动路径，分为捕获阶段和冒泡阶段

// 事件捕获： 从外到内，从父元素到子元素，直到触发事件的元素 （要手动开启）

// 事件冒泡： 从内到外，从触发事件的元素到父元素，直到document （默认开启冒泡）

// 阻止事件冒泡： e.stopPropagation()  （给子元素）

// 阻止默认行为： e.preventDefault()  （截断元素的默认行为，如截断a的跳转行为）

// 解绑监听器： 对象.removeEventListener('事件类型'，函数名)
//      （ 匿名函数时不能解绑的 ）

// 事件委托： 给父元素绑定事件，通过事件对象e.target来判断触发事件的对象，从而实现事件的绑定
//       （ 事件委托给父元素，子元素通过冒泡触发父元素的监听器 ）

// -----------------------------------------------------------

// window对象： 整个网页    （window）
// document对象： 整个网页的文档    （document）
// html对象： 网页的html部分    （document.documentElement）
// head对象： 网页的头部部分    （document.head）
// body对象： 网页的主体部分    （document.body）

// window -> document -> html -> head 和 body

// 页面加载： window.addEventListener('load',function(){})

// DOM加载： document.addEventListener('DOMContentLoaded',function(){})

// 页面滚动：window.addEventListener('scroll',function(){})

// 页面窗口改变：window.addEventListener('resize',function(){})

// 滚动属性：
// 对象.scrollTop--滚动条距离顶部的距离 （document.documentElement.scrollTop）
// 对象.scrollLeft--滚动条距离左边的距离 （document.documentElement.scrollLeft）

// 尺寸属性：
// 对象.clientWidth--元素的宽度 
// 对象.clientHeight--元素的高度 
// 对象.offsetWidth--元素的宽度  （包含边框）
// 对象.offsetHeight--元素的高度   （包含边框）

// 位置属性：
// 对象.offsetTop--元素距离有定位的父元素顶部的距离
// 对象.offsetLeft--元素距离有定位的父元素左边的距离

// ------------------------------------------------------

// const date = new Date() //获取当前时间
// console.log(date);

// const date1 = new Date('2024-05-15 12:00:00')    //获取指定时间
// console.log(date1);

// console.log(date.getFullYear() );  //获取年份
// console.log(typeof date.getFullYear() );  // Number

// console.log(date.getMonth() + 1 );  //获取月份  （0-11）

// console.log(date.getDate() );  //获取日期  （1-31）

// console.log(date.getDay() );  //获取星期  （0-6）

// console.log(date.getHours() );  //获取小时  （0-23）

// console.log(date.getMinutes() );  //获取分钟  （0-59）

// console.log(date.getSeconds() );  //获取秒数  （0-59）

// // 拼接
// function lpad(date){
//     const str = date >= 10 ? date : '0' + date
//     return str 
// }
// const date = new Date()         //获取当前时间
// const year = date.getFullYear()
// const month = lpad(date.getMonth() + 1)
// const day = lpad(date.getDate())
// const hour = lpad(date.getHours())
// const minute = lpad(date.getMinutes())

// console.log(`${year}-${month}-${day} ${hour}:${minute}`);

// const date = new Date() //获取当前时间
// console.log(date.toLocaleString());  //     2024/5/15 12:00:00
// console.log(date.toLocaleDateString());  //     2024/5/15
// console.log(date.toLocaleTimeString());  //     12:00:00

// // 时间戳 : 时间戳是从1970年1月1日00:00:00开始到现在的毫秒数
// // 1. getTime() : 获取时间戳 （毫秒数）
// const date = new Date() //获取当前时间
// console.log(date.getTime());  //获取时间戳 （毫秒数）

// // 2. +new Date() : 获取时间戳 （毫秒数）
// console.log(+new Date());  //获取时间戳 （毫秒数）

// const start_date = +new Date() //获取当前时间
// console.log(start_date);

// const end_date = +new Date('2025-05-16 10:13:00')    //获取指定时间
// console.log(end_date);

// const time = end_date - start_date //获取时间差 （毫秒数）
// console.log(time);

// const arr = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
// // date.getDay() : 获取星期  （0-6） 
// console.log(arr[new Date().getDay()]);

// ------------------------------------------------

// 滚动业务： 1. 页面滚动，通过html.scrollTop来判断滚动条距离顶部的距离，从而操作其他元素的样式
//          2. 特定元素的行为，修改html.scrollTop来实现页面的跳动

// 滚动基本基本都是上述的业务的其中一种


// 日期对象： const 对象名 = new Date()         // 获取当前时间 
//          const 对象名 = new Date('指定时间')     // 获取指定时间

// 日期对象的方法： 对象名 . getFullYear()    // 获取年份
//               对象名 . getMonth() + 1      // 获取月份  （0-11）
//               对象名 . getDate()       // 获取日期  （1-31）
//               对象名 . getDay()        // 获取星期  （0-6）
//               对象名 . getHours()      // 获取小时  （0-23）
//               对象名 . getMinutes()    // 获取分钟  （0-59）
//               对象名 . getSeconds()    // 获取秒数  （0-59）

// 上述的日期对象的方法得到的都是数字类型（Number），可以直接运算


// 时间戳： 时间戳是从1970年1月1日00:00:00开始到现在的毫秒数    （毫秒数）
//           （ 时间戳是一种特殊的计时方式 ）

// 时间戳的使用场景： 计算倒计时效果
//     （之前的方法都不适合进行时间的相减）

// 时间戳的计算： 1. 未来的时间戳 - 现在的时间戳 = 剩余时间的毫秒数
//             2. 通过剩余时间的毫秒数得到剩余时间的天数，小时，分钟，秒数

// 时间戳的获取方法： 1. 对象名. getTime()    // 获取时间戳 （毫秒数）
//                 2. +new Date()    // 获取时间戳 （毫秒数）


