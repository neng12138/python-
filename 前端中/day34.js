
// DOM

// 获取DOM对象（DOM元素）
// 1. const 对象 = docuemnt.querySelector(' css选择器 ')
// 2. const 对象 = docuemnt.querySelectorAll(' css选择器 ')   -- 伪数组

// 操作DOM对象的文本内容
// 1. 对象.innerText -- 获取或设置对象的文本内容
// 2. 对象.innerHTML -- 获取或设置对象的HTML内容（解析标签）

// 操作DOM对象的属性
// 1. 对象.属性名 -- 获取或设置对象的属性值

// 操作DOM对象的样式属性
// 1. 对象.style.样式属性名 -- 获取或设置对象的样式属性值（小驼峰命名法）
// 2. 对象.className -- 获取或设置对象的类名（覆盖）
// 3. 对象.classList.add('类名') -- 追加类名
// 4. 对象.classList.remove('类名') -- 删除类名
// 5. 对象.classList.toggle('类名') -- 切换类名 （有则删除，无则追加）

// 自定义属性
// 1. data-属性名 -- 自定义属性（data-开头）
// 2. 对象.dataset.属性名 -- 获取或设置对象的自定义属性值（小驼峰命名法）

// -------------------------------------------------------------------


// 事件监听（监听器）
// 1. 对象.addEventListener('事件类型', function(){}) -- 事件监听（监听器）

// 监听器的事件类型
// 1. 鼠标事件 -- click点击 mouseenter移入 mouseleave移出 mouseover移入 mouseout移出
// 2. 焦点事件 -- focus获取焦点 blur失去焦点
// 3. 键盘事件 -- keydown按下 keyup抬起


// 事件对象
// 1. 对象.addEventListener('事件类型', function(e){}) -- e就是事件对象
// 2. 事件对象中存有事件触发的相关信息

// 事件对象的属性
// 1. e.target -- 事件触发的真实对象
// 2. e.target.tagName -- 事件触发的真实对象的标签名（大写）
// 3. e.type -- 事件类型
// 4. e.key -- 按键值（键盘事件）


// 环境对象this
// 谁掉用this，this就指向谁

// 回调函数
// 1. 函数作为参数传递给另一个函数时，被传递的函数就是回调函数
// 2. 回调函数的作用是在特定的时机执行


// ---------------------------------------------------------


// 事件流
// 1. 事件流是指事件完整执行过程中的流动路径
// 2. 捕获阶段 -- 事件从window对象开始，依次向下传递到目标对象 （从父到子）
// 3. 冒泡阶段 -- 事件从目标对象开始，依次向上传递到window对象 （从子到父）

// 事件冒泡
// 1. 当一个元素触发事件后，会依次向上触发所有父元素的同事件类型的事件
// 2. 默认事件冒泡存在

// 阻止冒泡
// 1. e.stopPropagation() -- 阻止冒泡（e是事件对象）

// 阻止默认行为
// 1. e.preventDefault() -- 阻止默认行为（e是事件对象）

// 事件解绑（删除监听器）
// 1. 对象.removeEventListener('事件类型', 函数名) -- 删除监听器
// 2. 匿名函数无法删除

// 事件委托
// 1. 事件委托是指将事件监听添加到父元素上，由父元素来处理子元素的事件
// 2. 事件委托给父元素，子元素通过冒泡就可以使用到父元素的监听器

// ----------------------------------------------------------


// 页面加载事件
// 1. window.addEventListener('load', function(){}) -- load事件类型
// 2. document.addEventListener('DOMContentLoaded', function(){}) -- DOMContentLoaded事件类型

// 页面滚动事件
// 1. window.addEventListener('scroll', function(){}) -- scroll事件类型
// 2. document.documentElement.scrollTop -- 获取或设置被卷去的头部距离
// 3. document.documentElement.scrollLeft -- 获取或设置被卷去的左侧距离

// 滚动业务
// 1. 页面滚动，获取html.scrollTop设置特定元素的行为
// 2. 特定元素的行为 为html.scrollTop赋值

// 页面尺寸事件
// 1. window.addEventListener('resize', function(){}) -- resize事件类型

// 元素的尺寸与位置
// 1. 对象.clientWidth -- 宽    对象.clientHeight -- 高
// 2. 对象.offsetWidth -- 宽     对象.offsetHeight -- 高
// 3. 对象.offsetTop -- 上偏移      对象.offsetLeft -- 左偏移

// -------------------------------------------------------------


// 日期对象
// 1. const 日期对象 = new Date() -- 创建日期对象
// 2. const 日期对象 = new Date( 指定时间 ) -- 创建指定日期对象

// 日期对象的方法
// 1. 日期对象.getFullYear() -- 获取年份
// 2. 日期对象.getMonth() -- 获取月份（0-11）
// 3. 日期对象.getDate() -- 获取日期
// 4. 日期对象.getDay() -- 获取星期几（0-6）

// 时间戳
// 1. 时间戳是指从1970年1月1日00:00:00开始到现在的毫秒数

// 获取时间戳
// 1. 日期对象.getTime() -- 获取时间戳
// 2. +new Date() -- 获取时间戳


// DOM节点
// 1. 节点是指DOM树中的每一个元素

// 查找节点
// 1. 父节点查找 -- 对象.parentNode
// 2. 子节点查找 -- 对象.children  （伪数组）
// 3. 兄弟节点查找 -- 对象.nextElementSibling / 对象.previousElementSibling

// 创建节点
// 1. const 节点 = document.createElement('标签名') -- 创建节点

// 追加节点
// 1. 父节点.appendChild( 节点 ) -- 追加节点
// 2. 父节点.insertBefore( 节点, 参照节点 ) -- 插入节点

// 克隆节点
// 1. const 新节点 = 节点.cloneNode(true) -- 克隆节点

// 删除节点
// 1. 父节点.removeChild( 节点 ) -- 删除节点

// ----------------------------------------------------------------


// BOM

// window -- 整个网页      document -- 整个网页的html文档

// 定时器--间歇函数
// 1. let timer = setInterval(function(){}, 时间) -- 每隔一段时间执行一次
// 2. clearInterval( timer ) -- 清除定时器

// 定时器--延时函数
// 1. let timer = setTimeout(function(){}, 时间) -- 延迟一段时间执行一次（只执行一次）
// 2. clearTimeout( timer ) -- 清除定时器


// location对象
// 1. location.href -- 获取或设置当前页面的url地址
// 2. location.reload() -- 刷新当前页面

// navigator对象
// 1. navigator.userAgent -- 获取浏览器的用户代理字符串

// history对象
// 1. history.back() -- 返回上一页
// 2. history.forward() -- 返回下一页
// 3. history.go( 数字 ) -- 返回指定页面 （正数前进，负数后退）


// 本地存储
// localStorage -- 永久存储
// sessionStorage -- 关闭网页就删除

// localStorage的方法
// 1. localStorage.setItem('键', '值') -- 存储数据
// 2. localStorage.getItem('键') -- 获取数据
// 3. localStorage.removeItem('键') -- 删除数据

// 本地存储的注意事项
// 1. 本地存储只能存储字符串类型（string）
// 2. 本地存储的存储形式是键值对（key,value）

// 查看本地存储的数据
// 1. 开发者工具 -- Application -- Local Stroage

// 本地存储复杂数据类型
// 1. JSON.stringify( 对象 ) -- 将对象转换为JSON字符串
// 2. JSON.parse( JSON字符串 ) -- 将JSON字符串转换为对象

// -----------------------------------------------------


// let str = '刘备关羽张飞赵云黄忠马超黄忠'
// // 定义规则
// const reg = /赵云/
// // 匹配
// console.log(reg.test(str))      // true

// console.log(/哈/.test('哈'))    // true
// console.log(/哈/.test('哈哈'))  // true
// console.log(/哈/.test('二哈'))  // true
// console.log('----------------------------');

// console.log(/^哈/.test('哈'))    // true
// console.log(/^哈/.test('哈哈'))  // true
// console.log(/^哈/.test('二哈'))  // false
// console.log('----------------------------');

// console.log(/^哈$/.test('哈'))    // true
// console.log(/^哈$/.test('哈哈'))  // false
// console.log(/^哈$/.test('二哈'))  // false
// console.log('----------------------------');

// // * -- 0或无数次
// console.log(/^哈*$/.test(''))    // true
// console.log(/^哈*$/.test('哈哈'))  // true
// console.log(/^哈*$/.test('哈二哈'))  // false
// console.log('----------------------------');

// // + -- 1或无数次
// console.log(/^哈+$/.test(''))    // false
// console.log(/^哈+$/.test('哈哈'))  // true
// console.log(/^哈+$/.test('哈二哈'))  // false
// console.log('----------------------------');

// // ？ -- 0或1次
// console.log(/^哈?$/.test(''))    // true
// console.log(/^哈?$/.test('哈哈'))  // false
// console.log(/^哈?$/.test('哈二哈'))  // false
// console.log('----------------------------');

// // {n} -- n次
// console.log(/^哈{3}$/.test('哈哈'));
// console.log(/^哈{3}$/.test('哈哈哈'));    // true
// console.log(/^哈{3}$/.test('哈哈哈哈'));
// console.log(/^哈{3}$/.test('哈哈哈哈哈'));
// console.log(/^哈{3}$/.test('哈哈哈哈哈哈'));
// console.log('----------------------------');

// // {n,} -- 至少n次
// console.log(/^哈{3,}$/.test('哈哈'));
// console.log(/^哈{3,}$/.test('哈哈哈'));     // true
// console.log(/^哈{3,}$/.test('哈哈哈哈'));     // true
// console.log(/^哈{3,}$/.test('哈哈哈哈哈'));    // true
// console.log(/^哈{3,}$/.test('哈哈哈哈哈哈'));   // true
// console.log('----------------------------');    

// // {n，m} -- 至少n次,至多m次
// console.log(/^哈{3,5}$/.test('哈哈'));
// console.log(/^哈{3,5}$/.test('哈哈哈'));    // true
// console.log(/^哈{3,5}$/.test('哈哈哈哈'));      // true
// console.log(/^哈{3,5}$/.test('哈哈哈哈哈'));        // true
// console.log(/^哈{3,5}$/.test('哈哈哈哈哈哈'));
// console.log('----------------------------');


// --------------------------------------------------


// 正则表达式
// 1. 正则表达式是一种用于匹配字符串的规则

// js正则语法
// 1. 定义规则 -- /规则/  （js中正则表达式的规则用//包起来）
// 2. 匹配 -- /规则/ . test( '要匹配的字符串' )   （test()方法返回true或false）

// 元字符
// 1. 边界符 --  ^ -> 开头   $ -> 结尾
// 2. 量词符 --  * -> 0或无数次   + -> 1或无数次   ? -> 0或1次   
//              {n} -> n次   {n,} -> 至少n次   {n,m} -> 至少n次,至多m次
// 3. 字符类 --  \d -> 数字   \D -> 非数字   
//              \w -> 字母数字下划线   \W -> 非字母数字下划线   
//              \s -> 空格   \S -> 非空格   . -> 任意字符

// 修饰符
// 1. i -> 忽略大小写   （ /规则/i ）
// 2. g -> 全局匹配     （ /规则/g ）



// 字符串的替换
// 1. 字符串.replace( /规则/g , 替换的内容 )    --  返回一个字符串

