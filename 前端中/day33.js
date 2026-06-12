
// BOM： 浏览器对象模型，是W3C组织制定的一套浏览器API，用于操作浏览器的元素，属性，方法等

// window -- 整个网页       document -- 整个网页的文档


// 定时器--延时函数： 代码在指定的时间后执行一次

// 开启定时器： let timer = setTimeout(function(){}, 时间)    // 单位：毫秒

// 清除定时器： clearTimeout(timer)    // 不执行


// 定时器--间歇函数： 代码每隔一定时间就执行一次

// 开启定时器： let timer = setInterval(function(){}, 时间)    // 单位：毫秒

// 清除定时器： clearInterval(timer)    // 不执行

// -----------------------------------------------------

// const arr = []

// if(arr){
//     console.log('数组存在');        // []
// }
// else{
//     console.log('数组不存在');      // null
// }


// location对象： 用于操作浏览器的地址栏

// location.href -- 获取或设置整个地址栏的内容 （网页跳转）

// location.search -- 获取地址栏中的？后面的部分

// location.hash -- 获取或设置地址栏中的#后面的部分

// location.reload() -- 刷新页面


// navigator对象： 用于操作浏览器的导航栏

// navigator.userAgent -- 获取浏览器的版本信息


// history对象： 用于操作浏览器的历史记录

// history.back() -- 返回上一页

// history.forward() -- 前进一页

// history.go(数字) -- 前进或后退指定的页数

// -----------------------------------------------


// 本地存储： 用于将数据存储到浏览器中，以便后续使用

// 1. localStorage -- 本地存储，永久存储，除非手动删除，否则一直存在

// localStorage.setItem('键', '值') -- 存储数据

// localStorage.getItem('键') -- 获取数据    // 如果键不存在，返回null

// localStorage.removeItem('键') -- 删除数据

// localStorage.clear() -- 清空所有数据


// 2. sessionStorage -- 会话存储，关闭浏览器就会删除

// sessionStorage.setItem('键', '值') -- 存储数据

// sessionStorage.getItem('键') -- 获取数据    // 如果键不存在，返回null

// sessionStorage.removeItem('键') -- 删除数据

// sessionStorage.clear() -- 清空所有数据


// 本地存储的注意事项： 1. 存储的数据都是以键值对的形式存储的
//                   2. 键和值都是字符串类型的，本地存储只能存储字符串类型的数据
//                   3. 本地存储可以存储的数据量比较大，但是不能存储复杂数据类型


// 本地存储的查看： 开发者工具 --> 应用程序 --> 本地存储


// 本地存储复杂数据类型： 将复杂数据类型转换为JSON字符串再存储

// 对象 --> JSON字符串 ：    JSON.stringify( 对象 )

// JSON字符串 --> 对象 ：    JSON.parse( JSON字符串 )


const arr = ['red', 'green', 'blue']
console.log(arr);    // ['red', 'green', 'blue']

const newArr = arr.map(function(ele,index){
    // console.log(ele)    // 数组中的每个元素
    // console.log(index)    // 数组中的每个元素的索引
    return ele + '颜色'
})
console.log(newArr);    // ['red颜色', 'green颜色', 'blue颜色']

// map()的用法和py中的spark的map()用法一样，都是对数组中的每个元素进行操作，返回一个新的数组

const arrStr = newArr.join('')    // 数组中的每个元素之间用指定的字符连接
console.log(arrStr);    // red颜色green颜色blue颜色

// join()方法用于把数组中的所有元素放入一个字符串。

