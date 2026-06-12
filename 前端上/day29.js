
// 事件流的阶段： 1. 捕获阶段： 从外到内  2. 冒泡阶段： 从内到外

// 事件捕获： 从DOM树的根节点开始，依次向下传递事件 （从外到内）

// 事件冒泡： 从DOM树的最内层开始，依次向上传递事件 （从内到外）    --   默认开启
//    （当一个元素触发事件时，会依次向上触发所有父元素的同事件类型的事件）

// 阻止冒泡： 把事件限制在当前元素内，不向上传递事件 

// 阻止冒泡的方法： 1. e.stopPropagation() -- 阻止冒泡  （给子元素）


// 事件解绑： 把事件从元素上解绑，不再触发事件

// 事件解绑的方法：  对象名. removeEventListener('事件类型', 函数名)
// 匿名函数不能解绑，因为匿名函数的函数名是随机的，所以不能解绑

// addEventListener()方法 -- 追加事件 （可以多次添加同一个事件类型的事件）


// 事件委托： 把事件绑定给父元素，子元素通过冒泡使用父元素的事件
//          （把事件绑定给父元素，由子元素来触发父元素的事件）

// 下述的e是事件对象，是一个对象，包含了事件的相关信息
// 对象 . addEventListener('事件类型', function(e){ 函数体 })
// e.target -- 获取当前触发事件的元素
// e.target.tagName -- 获取当前触发事件的元素的标签名 （大写）


// 鼠标事件类型： click--点击   =》  冒泡                
//              mouseenter--移入  mouseleave--移出   =》  不冒泡
//              mouseover--移入  mouseout--移出   =》  冒泡

// 使用冒泡时用mouseover和mouseout，其余基本都用mouseenter和mouseleave


// ---------------------------------------------

// 事件对象e . preventDefault() -- 阻止默认事件 （阻止a标签的跳转）
// 事件对象e. stopPropagation() -- 阻止冒泡 （给子元素）


// 页面加载事件： 当页面加载完成后，会触发一个事件

// 事件类型： load--页面加载完成后触发的事件 （window对象）
//           DOMContentLoaded--DOM加载完成后触发的事件 （document对象）

// load -- window.addEventListener('load', function(){ 函数体 })

// DOMContentLoaded -- document.addEventListener('DOMContentLoaded', function(){ 函数体 })


// ---------------------------------------------


// 页面滚动事件： 当页面滚动时，会触发一个事件 （ 一滚动就触发 ）

// 事件类型： scroll--页面滚动时触发的事件 （window对象）

// 整个页面滚动：
// scroll -- window.addEventListener('scroll', function(){ 函数体 })

// 页面滚动的距离属性：
//          scrollTop -- 页面滚动顶部距离  （被卷去的头部距离）
//          scrollLeft -- 页面滚动左侧距离  （被卷去的左侧距离）

// 对象 . scrollTop -- 获取元素滚动顶部距离  （被卷去的头部距离）
// 对象 . scrollTop = 值 -- 设置元素滚动顶部距离 
// 对象 . scrollLeft -- 获取元素滚动左侧距离  （被卷去的左侧距离）
// 对象. scrollLeft = 值 -- 设置元素滚动左侧距离 

// window对象： 整个网页
// document对象： 整个网页的文档
// body标签对象： 整个网页的文档的body标签
// html标签对象： 整个网页的文档的html标签

// 网页的对象： document
// body标签的对象： document.body
// html标签的对象： document.docuemtElement （不用再document.querySelector()去获取）

// 整个网页滚动：
//       document.documentElement.scrollTop -- 获取页面滚动顶部距离  （被卷去的头部距离）
//       document.documentElement.scrollTop = 值 -- 设置页面滚动顶部距离
//       document.documentElement.scrollLeft -- 获取页面滚动左侧距离  （被卷去的左侧距离）
//       document.documentElement.scrollLeft = 值 -- 设置页面滚动左侧距离


// ---------------------------------------------


// 页面尺寸事件： 当页面尺寸发生变化时，会触发一个事件

// 事件类型： resize--页面尺寸发生变化时触发的事件 （window对象）

// 整个页面尺寸变化：
// resize -- window.addEventListener('resize', function(){ 函数体 })

// 普通的对象就可以直接使用这些尺寸与位置属性
// 页面尺寸与位置属性：
//      对象. clientWidth -- 获取元素的宽度 （不包含边框）
//      对象. clientHeight -- 获取元素的高度 （不包含边框）
//      对象. offsetWidth -- 获取元素的宽度 （包含边框）
//      对象. offsetHeight -- 获取元素的高度 （包含边框）
//      对象. offsetLeft -- 获取元素相对于有定位的父元素的左侧距离 （无则body）
//      对象. offsetTop -- 获取元素相对于有定位的父元素的顶部距离 （无则body）


// offsetLeft和offsetTop是相对于有定位的父元素的，所以要一直往上找，直到找到body标签
//               （ body标签的滚动距离也算在内 ）

