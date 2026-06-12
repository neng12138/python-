
// 1. 轮播图遇到的问题：    1.  li的active样式设置时的css选择器要用ul li，用.list li会报错，因为li是动态生成的
//                       2.  用ikun_index记录索引值 （0 ~ ikun.length-1）
//                       3.  保证定时器一直都只有一个在执行 （声明一个定时器编号的全局变量）

// position定位很好用： 父标签--position:relative  子标签--position:absolute
//      （ 子标签可以十分轻松的在父标签中定位 ）

// 选择DOM对象：  1. 对象 =  document.querySelector('css选择器')    --  选择第一个符合的
//              2. 对象 =  document.querySelectorAll('css选择器')   --  伪数组

// DOM对象的属性:  对象 . 属性名 = '属性值' 

// 定时器： 每隔一段时间会自动执行一次函数 （自动不断执行函数）

// let timeid = setInterval(function(){},1000)
// clearInterval(timeid)  // 清除定时器

// 添加事件监听：   对象名 . addEventListener('事件类型'，function(){})

// 鼠标事件类型： click--点击  mouseenter--鼠标移入  mouseleave--鼠标移出
// 焦点事件类型： focus--聚焦  blur--失焦
// 键盘事件类型： Keydown--按下键盘  Keyup--松开键盘
// 文本事件类型： input--输入文本

// 对象名 . 事件类型（）  -- 调用事件的处理函数

// 事件监听： 只要相应的事件被触发，就会执行相应的函数 （事件可以不断触发，函数可以不断执行）


