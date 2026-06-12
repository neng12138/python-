
// 事件监听： 触发相应的事件时，执行对应的函数  （事件一直触发，函数一直执行）
//      （只要事件触发，函数就会执行一次）

// 监听器语法： 对象 . addEventListener('事件类型'， function(){})

// 鼠标事件类型： click--鼠标点击  mouseenter--鼠标移入  mouseleave--鼠标移出
// 焦点事件类型： focus--获得焦点  blur--失去焦点
// 键盘事件类型： keydown--键盘按下  keyup--键盘抬起
// 表单事件类型： change--表单内容改变  submit--表单提交  input--表单输入


// 1. 评论区遇到的问题：
// innerHTML覆盖问题 ：每次点击按钮时，您使用 += 操作符添加新内容，但这种方式会重新解析整个HTML结构，
//                   可能导致事件监听器失效
//     （innerHTML+= 要定义一个独立的div标签专门存放要叠加的数据） 


// 2. 从下述的css选择器可以看出，css选择器可以写得十分灵活和复杂
// document.querySelectorAll('ul li:not(:first-child) input:checked').length === checkboxs.length
// 1. document.querySelectorAll('ul li:not(:first-child) input:checked') -- 获取所有被勾选上的小复选框
// 2. document.querySelectorAll('ul li:not(:first-child) input:checked').length -- 获取伪数组的长度
// 3. checkboxs.length -- 获取所有的小复选框的个数
// 4. 即如果勾选的小复选框的个数等于全部小复选框的个数，就是true，否则是flase

// 事件对象： 也是个对象，这个对象里有事件触发时得相关信息

// 对象 . addEventListener('事件类型'，function( e ){})     // e -- 事件对象  
// e只是一个事件对象的对象名，只是通常都用e或event

// 事件对象的属性： 1. e.type   -- 获取当前触发的事件的事件类型
//               2. e.clientX e.clientY   -- 获取当前触发事件时鼠标相对于浏览器的位置
//               3. e.offsetX e.offsetY   -- 获取当前触发事件时鼠标相对于当前的DOM对象的位置
//               4. e.key   -- 获取触发键盘事件时按下或松开的按键

//在事件类型为 keydown 和 keyup 时e.key经常会使用


// 环境对象this：this代表当前执行函数的环境对象，在函数中this代表的是当前函数的调用者
//      （在函数中this代表的是当前函数的调用者）
//  this -- 谁调用this ， this 就是谁
function func(){
    console.log(this);  // 只要时函数，this都会有
}
func()  // 可以看出确实this是个对象

// 回调函数： 当一个函数被当成参数传给其他函数时，此函数可以被称为回调函数
function func1(){
    console.log('我就是回调函数啦');
}
function func2(func){
    func()  // 直接调用传入的函数 -- 因此如果传入不是函数会直接报错
}
func2(func1)
// 上述的示例代码中func1就是回调函数


