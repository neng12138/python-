
// DOM节点： DOM节点是指HTML页面中的所有元素，包括标签，属性，文本，注释等

// 查找节点： 1. 父节点查找 -- 子元素对象.parentNode
//          2. 子节点查找 -- 父元素对象.children
//          3. 上一个兄弟节点查找 -- 兄弟元素对象.previousElementSibling
//          3. 下一个兄弟节点查找 -- 兄弟元素对象.nextElementSibling


// 创建节点： const 节点对象名 = document.createElement('标签名')    // 创建节点

// 追加节点： 1. 追加到父元素的末尾 -- 父元素对象.appendChild(节点对象名)
//          2. 插入到父元素某个子元素前 -- 父元素对象.insertBefore(节点对象名, 兄弟元素对象名)


// 克隆节点：const 节点对象名 = 要克隆的节点对象.cloneNode( true/false )    // 克隆节点

// true -- 完全克隆（常用）    false -- 只克隆标签，不克隆内容


// 删除节点： 父元素对象.removeChild(节点对象名)    // 删除节点


// ----------------------------------------------------------

// 两秒后执行延时函数 （只执行一次）
let timer = setTimeout(function(){
    console.log('时间到了哦');
},2000)

clearTimeout(timer)    // 清除定时器，不执行

// 每隔两秒执行间歇函数 （一直执行）
let timer2 = setInterval(function(){
    console.log('时间到了哦');
},2000)

clearInterval(timer2)    // 清除定时器，不执行

// const div = document.querySelector('')

// div.parentNode -- 父元素对象

// div.children -- 所有直接子元素对象（伪数组）

// div.previousElementSibling -- 上一个兄弟元素对象

// div.nextElementSibling -- 下一个兄弟元素对象

// const div2 = document.createElement('div') -- 创建一个div节点

// div.appendChild(div2) -- 将div2追加到div的末尾

// div.insertBefore(div2, div3) -- 将div2插入到div3的前面

// div.removeChild(div2) -- 删除div2


// ---------------------------------------------------


// BOM： 浏览器对象模型，是W3C组织制定的一套浏览器API，用于操作浏览器的元素，属性，方法等

// window -- 整个网页       document -- 整个网页的文档


// 定时器--延时函数： 代码在指定的时间后执行一次

// 开启定时器： let timer = setTimeout(function(){}, 时间)    // 单位：毫秒

// 清除定时器： clearTimeout(timer)    // 不执行


// 定时器--间歇函数： 代码每隔一定时间就执行一次

// 开启定时器： let timer = setInterval(function(){}, 时间)    // 单位：毫秒

// 清除定时器： clearInterval(timer)    // 不执行

