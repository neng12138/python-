
// html（超文本标记语言）： 1. 标题 -- <h1></h1> ~ <h6></h6>
//                       2. 段落 -- <p></p>
//                       3. 超链接 -- <a href='跳转路径'></a>
//                       4. 图片 -- <img src='图片路径' />
//                       5. 视频 -- <video controls src='视频路径'></video>
//                       6. 音频 -- <audio controls src='音频路径'></audio>
//                       7. 换行 -- <br />
//                       8. 平行线 -- <hr />

// html表单 ： <form action='接口提交地址’ methods='提交方法'></form>

// html的input标签 ： <input type='text/password/checkbox/radio/reset/submit/file' />

// html容器标签 :  1.  <div></div>     2.  <span></span>

// -----------------------------------------------------------

// css（层叠样式表）：  选择器 { 样式属性 ： 属性值 ；}

// css引入 ： 1. 行内 -- <div style='样式属性：属性值' ></div>
//           2. 内联 -- <style></style>
//           3. 外联 -- <link href='css文件路径' />

// css选择器 ： 1. 标签选择器 -- 标签名{ 样式属性 ： 属性值 ；}
//             2. 类选择器 -- .类名{ 样式属性 ： 属性值 ；}
//             3. id选择器 -- #id值{ 样式属性 ： 属性值 ；}
//             4. 后代选择器 -- 选择器1 选择器2{ 样式属性 ： 属性值 ；}
//             5. 子选择器 -- 选择器1 > 选择器2{ 样式属性 ： 属性值 ；}

// css颜色 ： 1. 颜色英文
//           2. rgb函数 或 rgba函数
//           3. #rrggbb

// css背景 ： 1. background-color : 颜色英文 | rgb函数 | rgba函数 | #rrggbb
//           2. background-image : url('图片路径')
//           3. background-size : px | % | cover | contain
//           4. background-repeat : no-repeat
//           5. background-position : px | top,bottom,left,right,center

// css字体 ： 1. font-size : px
//           2. font-weight : normal（400） | bold（700） | 100~900
//           3. font-style : italic
//           4. font-family : 字体名

// css文本装饰 ： 1. text-decoration-line : underline | overline | line-through
//              2. text-decoration-color : 颜色英文 | rgb函数 | rgba函数 | #rrggbb
//              3. text-decoration-style : solid | double | dotted | dashed | wavy


// css的flex ： display : flex  （flex项目默认沿flex容器主轴方向排列）

// flex布局 ： 1. flex-direction : row | row-reverse | column | column-reverse
//            2. flex-wrap : nowrap | wrap | wrap-reverse
//            4. justify-content : flex-start | flex-end | center | space-between | space-around
//            5. justify-items : flex-start | flex-end | center
//            6. align-content : flex-start | flex-end | center | space-between | space-around 
//            7. align-items : flex-start | flex-end | center


// css的position ：  1. position : 定位模式
//                  2. 偏移量 : 大小px

// position的定位模式 ： 1. relative -- 相对定位
//                     2. absolute -- 绝对定位
//                     3. fixed -- 固定定位
//                     4. sticky -- 粘性定位

// position的偏移量 ： 1. top（向下移动）  2. bottom（向上移动）  3. left（向右移动）  4. right（向左移动）


// css水平居中 ： 1. text-align : center
//              2. margin : 0 auto
//              3. justify-item : center

// css垂直居中 ： 1. line-height : 容器高度px
//              2. align-item : center

// css外边距 ：  margin-top|left|right|bottom : 大小px

// css内边距 ：  padding-top|left|right|bottom : 大小px

// css边框 ：  border : 大小px  边框样式（solid）  边框颜色


// css隐藏 ： 1. display : none  （不占位置）
//           2. opacity : 0  （占位置）

// css显示 ： 1. display : block
//           2. opacity : 1


// css伪类选择器 ： 1. 选择器 : first-child  （第一个子元素）
//                2. 选择器 : last-child  （最后一个子元素）
//                3. 选择器 : nth-child(n)  （第n个子元素）
//                4. 选择器 : not(:first-child)  （非第一个子元素）

// :hover -- 鼠标悬停   :active -- 鼠标点击   :focus -- 获得焦点


// ---------------------------------------------------------------

// javascript ： 一门前端的脚本编程语言 （ECMAScript , DOM , BOM）

// js引入 ： 1. 行内 -- <div onclick='js代码'></div>
//          2. 内联 -- <script></script>
//          3. 外联 -- <script src='js文件路径' ></script>

// js的特征 ： 1. js是弱数据类型的脚本编程语言，不需要写数据类型
//           2. js结尾可以用分号（;）
//           3. js划分区域使用{}


// js输出 ： 1. document.write()  （将内容输出到html页面）
//          2. console.log()  （将内容输出到控制台）
//          3. alert() （弹出提示框）
// document.write('Hello World');
// console.log('Hello World Hello World');
// alert('我是弹出框')

// js输入 ： 1. prompt()  （弹出文本输入框，获取用户输入）
// let num = +prompt('请输入数字：')
// console.log(num);


// 声明变量 ： 1. 变量 -- let 变量名 = 值
//           2. 常量 -- const 变量名 = 值  （常量不能改变，只能赋值一次）

// 简单数据类型 ： 1. 数字类型 （Number）
//              2. 字符串类型 （String）
//              3. 布尔类型 （Boolean）
//              4. 未定义类型 （Undefined）
//              5. 空类型 （Null）
//              6. 非数字 （NaN）

// 引用数据类型 ： 1. 数组类型 （Array）
//               2. 对象类型 （Object）

// 简单数据类型 -- 存储数据
// 引用数据类型 -- 存储地址

// 隐式转换 ： 1. +号两边只要有一个字符串，都会将另一个转为字符串 （ number + string -> string + string ）
//           2. -*/号会将数据转换为数字类型
//           3. +号作为正号解析可以转换为数字类型 （ +string -> number ）

// 显式转换 ： 1. 数字类型 -- Number()
//           2. 字符串类型 -- String()
//           3. 布尔类型 -- Boolean()
//           4. 数组类型 -- Array()
//           5. 对象类型 -- Object()


// js字符串的拼接（+） ： 字符串可以与任意数据类型的数据进行拼接
// let my_str = 'hello' + 'world' + 555
// console.log(my_str)      // helloworld555
// console.log(typeof my_str)      // string

// js字符串的格式化 ：  模板字符串 --  ` 字符串 ${变量名} 字符串 `
// let num = 555
// let my_str = `helloworld${num}`
// console.log(my_str)      // helloworld555
// console.log(typeof my_str)      // string

// 比较运算符 ： 1. = -> 赋值  2. == -> 值相等  3. === -> 值与类型都相等


// 分支语句 ：     if （条件） {  语句  }
//               else if （条件） {  语句  }
//               else  {  语句  }

// 三元运算符 ：    条件表达式 ？ 表达式（true） : 表达式（false）
// let max = 10 > 2 ? 10 : 2
// let min = 10 < 2 ? 10 : 2
// console.log(max , min)      // 10 2

// while循环 ：    while （条件） {   循环体   }

// for循环 ：    for （初始表达式; 条件表达式; 修改表达式） {   循环体   }


// 数组arr ： 1. arr.length  （数组的长度）
//           2. arr[索引]  （获取元素）
//           3. arr[索引] = 值  （赋值）

//           4. arr.push( 元素 )  （向数组的末尾添加元素）
//           5. arr.unshift( 元素 )  （向数组的开头添加元素）

//           6. arr.pop()  （删除数组的最后一个元素）
//           7. arr.shift()  （删除数组的第一个元素）
//           8. arr.splice( 起始索引 , 删除元素的个数 )  （删除数组的指定元素）
// const arr = []
// arr.push('last')
// arr.unshift('first')
// console.log(arr)      // ['first', 'last']
// arr.splice(0 , 1)
// console.log(arr)      // ['last']


// 对象obj ： 1. obj.key  （获取value）
//           2. obj.key = 值  （赋值）

//           3. obj.newKey = 值  （添加键值对）

//           4. delete obj.key  （删除键值对）
// const my_obj = {}
// my_obj.name = '佩佩'
// my_obj.age = 18
// delete my_obj.age
// console.log(my_obj)      // {name: '佩佩'}
// my_obj.sing = function(){
//     console.log('我会唱歌')
// }
// my_obj.sing()    // 我会唱歌

// 对象中的方法 ： const 对象名 = {  方法名 : function(形参){函数体}  }  ->  对象名.方法名(实参)

// 对象的遍历 ： for （let key in 对象名）{
//                                         console.log(key)             //  key
//                                         console.log(对象名[key])         //  value
//                                     }
// const obj = {name:'佩佩',age:18,gender:'女'}
// for(let key in obj){
//     console.log(key)       // name age gender （key）
//     console.log(obj[key])       // 佩佩 18 女  （value）
// }


// js函数 ：   function  函数名（ 形参 ）{
//                                       函数体
//                                       return 返回值
//                                     }

// js函数的调用 ：  函数名（ 实参 ）

// js函数的重载 ： 没有函数重载 , 最后的函数会覆盖前面的函数 （函数名唯一）

// 匿名函数 ： function （ 形参 ） {  函数体  }
//               1. 函数表达式 -- const 函数名 = function （ 形参 ） {  函数体  } 
//               2. 立即执行函数 -- (function （ 形参 ） {  函数体  })（ 实参 ）
// (function(num1,num2){
//     console.log(num1 + num2);
// })(1,2)     // 3
// !function(num1,num2){
//     console.log(num1 + num2);
// }(1,2)      // 3

// 全局变量 -- 函数外部定义的变量 ， 任何作用域都可以访问
// 局部变量 -- 函数内部定义的变量 ， 只能在函数内部访问  （就近原则）

// Math对象 ： 1. Math.max()  （求最大值）
//            2. Math.min()  （求最小值）
//            3. Math.abs()  （求绝对值）
//            4. Math.round()  （四舍五入）

//            5. Math.sqrt(x)  （求x的平方根）
//            6. Math.pow(x,n)  （求x的n次幂）

//            7. Math.floor()  （向下取整）
//            8. Math.random()  （ [0,1)浮点数 ）
// let random_num1 = Math.floor(Math.random() * 11)     // [0,10]整数
// console.log(random_num1);
// let random_num2 = Math.floor(Math.random() * (m-n+1))+n     // [n,m]整数
// console.log(random_num2);

// ---------------------------------------------------------------


// DOM（文档对象模型）： 1. 所有的标签都可以在document对象上找到  （document对象）
//                    2. 把网页标签当作DOM对象处理  （在html上叫标签，在js上叫DOM对象）

// 获取DOM对象： 1. document.querySelector( 'css选择器' ) -- 获取第一个找到的DOM对象
//             2. document.querySelectorAll( 'css选择器' ) -- 获取所有找到的DOM对象（返回一个伪数组）


// DOM对象的文本内容 ： 1. 对象 . innerText -- 获取文本内容
//                   2. 对象 . innerText = '内容' -- 设置文本内容（不解析html标签）
//                   3. 对象 . innerHTML -- 获取文本内容
//                   4. 对象 . innerHTML = '内容' -- 设置文本内容（解析html标签）

// DOM对象的属性 ： 1. 对象 . 属性 = '属性值'  -- 设置属性
//                2. 对象 . 属性  -- 获取属性

// DOM对象的样式 ： 1. 对象 . style . 样式属性 = '属性值'  （小驼峰命名法）
//                2. 对象 . className = '类名'
//                3. 对象 . classList . add('类名')
//                4. 对象 . classList . remove('类名')
//                5. 对象 . classList . toggle('类名')  （有则删，无则加）


// 操作表单元素属性 ： 1. 表单对象 . value -- 获取表单内容
//                  2. 表单对象 . type -- 获取表单类型
//                  3. 复选框对象 . checked = true  -- 设置勾选
//                  4. 按钮对象 . disabled = true  -- 设置禁用

// 自定义属性 ： 1. 在标签上以 data- 开头
//             2. 在DOM对象上使用 dataset属性 获取
// <div class='box' data-id='1' data-spm='mon'>hello world</div>
// const box = document.querySelector('.box')
// console.log(box.dataset.id)     // 1
// console.log(box.dataset.spm)      // mon


// 定时器-间歇函数 ： 每隔一段时间执行一次 （不断执行）
//                   1. 开启 -- setInterval(函数 ， 时间间隔)
//                   2. 关闭 -- let timer = setInterval(函数 ， 时间间隔)
//                              clearInterval(timer)

// 定时器-延时函数 ： 隔一段时间执行一次 （只执行一次）
//                   1. 开启 -- setTimeout(函数 ， 时间间隔)
//                   2. 关闭 -- let timer = setTimeout(函数 ， 时间间隔)
//                              clearTimeout(timer)


// 事件监听 ： 对象 . addEventListener（'事件类型' ， 函数）

// 事件解绑 ： 对象 . removeEventListener（'事件类型'， 函数名）

// 事件监听三要素 ： 1. 事件源 -- DOM对象
//                2. 事件类型 -- 触发方式
//                3. 函数 -- 事件处理

// 事件类型 ： 1. 鼠标事件 （click ， mouseenter ， mouseleave ， mouseover ， mouseout ， mousemove ， dblclick ）
//           2. 键盘事件 （keydown ， keyup ， keypress ）
//           3. 表单事件 （submit ， reset ， change ， input ）
//           4. 焦点事件 （focus ， blur ）
//           5. 文档事件 （load ， unload ， resize ， scroll ）


// 事件对象 ： 对象.addEventListener('事件类型'，function(e){函数体})  （第一个参数e就是事件对象）

// 事件对象的属性 ： 1. e.type -- 获取触发的事件类型
//                2. e.target -- 获取触发事件的对象（事件源）
//                3. e.key -- 获取按键的名称
//                4. e.preventDefault() -- 阻止默认事件

// 环境对象this ： 1. 普通函数|匿名函数 -- 谁调用函数，this就是谁
//               2. 箭头函数 -- 无this，this指向上一层的this


// 回调函数 -- 将函数作为参数，传给另一个函数

// 事件冒泡 ： 当一个元素触发事件后，会依次向上触发所有父元素的同事件类型的事件 （从里到外）

// 阻止冒泡 ： 事件对象e . stopPropagation()  （在子元素中阻止）

// 事件委托 ： 利用事件冒泡的机制，将事件绑定在父元素上，当子元素触发事件时，会冒泡到父元素上，从而触发事件处理函数
//          （事件委托给父级，子级通过冒泡就可以使用到父级的监听器）


// BOM（浏览器对象模型）： 操作整个浏览器窗口 （window）

// window -- 整个网页    document -- 整个网页的html文档

// location对象 ： 1. location.href  -- 获取当前页面的url地址
//                2. location.search  -- 获取url地址中的参数（？号后面的内容）
//                3. location.hash  -- 获取url地址中的锚点（#号后面的内容）
//                4. location.reload()  -- 刷新页面
//                5. location.href = 'url地址'  -- 跳转页面

// navigator对象 ： 1. navigator.userAgent -- 获取浏览器的信息

// history对象 ： 1. history.back() -- 回退网页
//               2. history.forward() -- 前进网页


// 页面加载事件 ： 1. window.addEventListener('load' , 函数)  -- 等待页面资源加载完毕触发
//              2. document.addEventListener('DOMContentLoaded' , 函数) -- 等待DOM树加载完毕触发


// 页面滚动事件 ： window . addEventListener('scroll' , 函数)

// DOM对象的滚动属性 ： 1. 对象 . scrollTop -- 卷去的头部距离
//                   2. 对象 . scrollLeft -- 卷去的左侧距离
//                   3. document.documentElement.scrollTop  -- 页面卷去的头部距离
//                   4. document.documentElement.scrollTop = 值  -- 设置页面的滚动条位置
// document.querySelector('html') === document.documentElement  // true


// 页面尺寸事件 ： window . addEventListener('resize' , 函数)

// DOM对象的尺寸属性 ： 1. 对象 . offsetWidth -- 元素的宽度
//                   2. 对象 . offsetHeight -- 元素的高度
//                   3. 对象 . offsetTop -- 元素的距离顶部的距离
//                   4. 对象 . offsetLeft -- 元素的距离左侧的距离


// 日期对象 ： 1. const  对象名  =  new Date()  -- 获得当前的时间
//           2. const  对象名  =  new Date(指定时间)  -- 获得指定的时间
// const date = new Date()
// console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

// 日期对象的方法 ： 1. 对象 . getFullYear() -- 获取年
//                2. 对象 . getMonth() -- 获取月（0-11）
//                3. 对象 . getDate() -- 获取日
//                4. 对象 . getHours() -- 获取时
//                5. 对象 . getMinutes() -- 获取分
//                6. 对象 . getSeconds() -- 获取秒

// 时间戳 ： 1. 对象 . getTime() -- 获取时间戳（毫秒）
//          2. +new Date() -- 获取时间戳（毫秒）


// DOM节点 ： DOM树中每一个元素都是一个DOM节点 （整个html可以看作一颗DOM树）

// 查找DOM节点 ： 1. 对象 . parentNode -- 获取父节点
//              2. 对象 . children -- 获取所有直接子元素节点 （伪数组）
//              3. 对象 . previousElementSibling -- 获取上一个兄弟元素节点
//              4. 对象 . nextElementSibling -- 获取下一个兄弟元素节点

// 创建DOM节点 ： const 对象名 = document.createElement( '标签名' )

// 追加DOM节点 ： 1. 父元素对象 . appendChild( 节点对象 )  -- 追加到最后
//              2. 父元素对象 . insertBefore(节点对象，子元素对象)  -- 插入子元素对象前

// 删除DOM节点 ： 父元素对象 . removeChild( 子元素对象 )

// 克隆DOM节点 ： 节点对象 . cloneNode( true|false )


// 本地存储 -- 数据存储在浏览器，页面刷新、关闭不丢失数据
//                1. localStorage . setItem('key' , 'value')  -- 修改
//                2. localStorage . setItem('newKey' , 'value')  -- 存储
//                3. localStorage . getItem('key')  -- 获取
//                4. localStorage . removeItem('key')  -- 删除

// JSON ：  1. json字符串  =  JSON . stringfy（ js对象 ）
//         2. js对象  =  JSON . parse（ json字符串 ）


// 正则表达式 ： 1. 定义规则 -- const 变量名 =  /规则/flag
//             2. 匹配 -- 规则 . test( 字符串 )  -- 匹配成功返回true，匹配失败返回false
//             3. 提取 -- 规则 . exec( 字符串 )  -- 提取成功返回数组，提取失败返回null

// 正则表达式的修饰符flag ：  1. i  -- 忽略大小写 （ /规则/i ）
//                        2. g  -- 全局匹配 （ /规则/g ）


// 作用域 -- 规定变量能够被访问的范围

// 闭包 -- 1. 多层嵌套函数  2. 内层函数访问外层函数  3. 外层函数返回内层函数

// 函数提升 -- 把所有函数都提升到当前作用域的最前面

// 函数的参数 ： 1. 动态参数（arguments）-- 可以直接使用，形参不用写 （伪数组）
//             2. 剩余参数（...arr）-- 写在形参最后 （真数组）
// function sum(...arr){
//     let sum = 0
//     for(let i = 0 ; i< arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sum(1,2,3))     // 6
// console.log(sum(1,2,3,4,5,6))    // 21


// 箭头函数 ：  （形参） => { 函数体 }    （箭头函数是简洁的匿名函数写法）
//                  1. 一个形参时可以省略小括号  （ 形参 => { 函数体 } ）
//                  2. 没有参数时必须写空括号  （ () => { 函数体 } ）
//                  3. 函数体只有一条语句时可以省略大括号和return  （ (形参) => 语句 ）
//                  4. 返回对象用小括号  （ (形参) => ({key:value}) ）

// 箭头函数的参数 ： 1. 箭头函数无动态参数（arguments）
//                2. 箭头函数有剩余参数（...arr）

// 箭头函数的this ： 1. 箭头函数没有this，this会指向上一层的this
//                2. 箭头函数的this是静态的，不能改变this的指向


// 数组解构 ： 将数组元素批量赋值给一系列变量 
//               1. 变量的顺序对应数组元素的顺序进行一一赋值

// 数组解构技巧 ： 1. 数组解构可以设置默认值 （ [a=0,b=0] = [] ）
//               2. 数组解构可以跳过元素 （ [a,,c] = [1,2,3] ）
//               3. 数组解构可以解构剩余元素 （ [a,...b] = [1,2,3] ）
// const arr = [100,[80,60]]
// let [max,[avg,min]] = arr
// console.log(max,avg,min)     // 100 80 60


// 对象解构 ： 将对象的value值批量赋值给一系列变量
//               1. 变量的顺序与对象中属性的顺序无关
//               2. 变量名必须与对象的属性名一致 （用属性名取属性值）

// 对象解构技巧 ： 1. 对象解构可以设置默认值 （ {a=0,b=0} = {a:1,b:2} ）
//               2. 对象解构可以只解构部分属性 （ {a,b} = {a:1,b:2,c:3} ）
//               3. 对象解构更名 （ {a:newA,b} = {a:1,b:2} ）
// const obj = {name:'佩佩',age:18,num:{first:1,last:10}}
// let {name:uname,age,num:{first,last}} = obj
// console.log(uname,age)
// console.log(first,last)


// 对象的创建 : 1. 对象字面量 -- const  对象名  =  { key : value }
//            2. 构造函数 -- const  对象名  =  new  构造函数()
//            3. Object -- const  对象名  =  new Object(  { key : value } )

// 构造函数 : 1. 命名以大写字母开头     2. 只能以new来实例化对象      3. 无return
// function Pig(name,age){
//     this.name = name
//     this.age = age
// }
// const pig = new Pig('佩佩',18)
// console.log(pig)   // Pig {name: '佩佩', age: 18}
// console.log(pig.name,pig.age)   // 佩佩 18

// 实例成员 : 1. 实例对象中的属性和方法的统称
//          2. 创建的实例成员只归它的实例对象所有  ( 独占 )

// 静态成员 : 1. 构造函数中的静态属性和静态方法的统称
//          2. 只有构造函数可以创建和访问  ( 构造函数独占 )
// function Pig(name,age){
//     this.name = name
//     this.age = age
// }
// Pig.walk = '我会走路'       // 静态属性
// Pig.eat = function(){        // 静态方法
//     console.log('猪猪会吃饭');
// }
// const pig = new Pig('佩佩',18)
// console.log(pig.name,pig.age)   // 佩佩 18
// console.log(Pig.walk)   // 我会走路
// Pig.eat()


// Object
//  1. Object.keys( 对象 ) : 获取对象的所有属性名，返回数组
// const obj = {name:'佩佩',age:18}
// console.log(Object.keys(obj))   // ['name', 'age']

//  2. Object.values( 对象 ) : 获取对象的所有属性值，返回数组
// const obj = {name:'佩佩',age:18}
// console.log(Object.values(obj))   // ['佩佩', 18]

//  3. Object.assign( 目标对象,源对象1,源对象2,... ) : 合并对象
// const obj1 = {name:'佩佩',age:18}
// const obj2 = {sex:'女',hobby:['运动','游戏']}
// const goal = {}
// Object.assign(goal,obj1,obj2)
// console.log(goal)   // {name: '佩佩', age: 18, sex: '女', hobby: ['运动', '游戏']}


// Array
// 1. Array.from( 伪数组 ) : 将伪数组转换为真数组
// const arr = document.querySelectorAll('div')
// console.log(arr)   // NodeList(3) [div, div, div]
// console.log(Array.from(arr))   // [div, div, div]

// arr.forEach() : 遍历数组
// const arr = ['red','green','blue']
// arr.forEach(function(item,index){
//     console.log(item,index)
// })

// arr.map() : 处理数组 , 返回新数组
// let arr = ['red','green','blue']
// arr = arr.map( item => item + '颜色')
// console.log(arr)    // ['red颜色', 'green颜色', 'blue颜色']

// arr.filter() : 过滤数组 , 返回新数组
// let arr = [1,2,3,4,5,6]
// arr = arr.filter( item => item % 2 === 0 )  // 偶数
// console.log(arr)    // [2, 4, 6]

// arr.reduce() : 归并数组 , 返回累计值
// let arr = [1,2,3,4,5,6]
// const sum = arr.reduce( (prev,cur) => prev + cur )
// console.log(sum)    // 21

// arr.find() : 查找数组中第一个符合条件的元素,返回此元素
// let arr = [1,2,3,4,5,6]
// const item = arr.find( item => item > 3 && item <= 5 )
// console.log(item)    // 4

// arr.every() : 检查数组中是否所有元素都符合条件,返回true或false
// let arr = [1,2,3,4,5,6]
// const flag = arr.every( item => item > 0 )
// console.log(flag)    // true

// arr.join() : 拼接数组 , 返回字符串
// let arr = ['red','green','blue']
// let str = arr.join('')
// console.log(str)    // redgreenblue


// String
// str.split() : 分割字符串 , 返回数组
// let str = '1,2,3,4,5,6'
// let arr = str.split(',')
// console.log(arr)    // ['1', '2', '3', '4', '5', '6']

// str.substring() : 截取字符串 , 返回此字符串  ( 左闭右开 )
// let str = 'red|green|blue|pink'
// let newStr = str.substring(4,9)
// console.log(newStr)    // green

// str.startsWith() : 检查字符串是否以指定字符串开头,返回true或false
// let str = 'red|green|blue'
// let flag = str.startsWith('red')
// console.log(flag)    // true

// str.includes() : 检查字符串是否包含指定字符串,返回true或false
// let str = 'red|green|blue'
// let flag = str.includes('green')
// console.log(flag)    // true


// Number
// num.toFixed() : 保留指定小数位,返回字符串
// let num = 123.456
// console.log(num.toFixed(2))   // 123.46


// ----------------------------------------------------


// 浅拷贝 ： 只拷贝一层数据 （内层嵌套无法拷贝）
//            1. 数组浅拷贝 -- [...arr]
//            2. 对象浅拷贝 -- {...obj}
// let arr = ['red','green','blue']
// let newArr = [...arr]   // 数组浅拷贝
// console.log(newArr)    // ['red', 'green', 'blue']
// let obj = {name:'佩佩',age:18}
// let newObj = {...obj}   // 对象浅拷贝
// console.log(newObj)    // {name: '佩佩', age: 18}

// 深拷贝 ： 拷贝数据 （拷贝副本）
//            1. 数组深拷贝 -- JSON.parse(JSON.stringify(arr))
//            2. 对象深拷贝 -- JSON.parse(JSON.stringify(obj))
// let arr = ['red','green',['blue']]
// let newArr = JSON.parse(JSON.stringify(arr))   // 数组深拷贝
// console.log(newArr)    // ['red', 'green', ['blue']]
// let obj = {name:'佩佩',age:18,hobby:['运动','游戏']}
// let newObj = JSON.parse(JSON.stringify(obj))   // 对象深拷贝
// console.log(newObj)    // {name: '佩佩', age: 18, hobby: ['运动', '游戏']}


// 抛出异常 ： throw new Error('异常信息')

// 异常处理 ： try{ 正常代码 }  catch(e){ 捕获处理 }  finally{ 无论是否异常，都会执行 }
// try{
//     throw new Error('异常信息')
// }catch(e){
//     console.log(e)
// }finally{
//     console.log('无论是否异常，都会执行')
// }


// 改变this指向 ： 1. 函数 . call(指向 ， 实参)
//               2. 函数 . apply(指向 ， [实参])
//               3. 函数 . bind(指向)


// 防抖 -- 单位时间内，频繁触发事件，只执行最后一次 （相同事件只执行最后一次）
//          setTimeout实现 ： 1. 每次开启一个定时器
//                           2. 判断是否已开启定时器，有则删除，再开启

// 节流 -- 单位时间内，频繁触发事件，只执行第一次 （相同事件等待第一次执行完）
//          setTimeout实现 ： 1. 每次判断是否已开启定时器
//                           2. 无则开启定时器


