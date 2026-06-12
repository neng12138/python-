
/*
    html(超文本标记语言)：   网页的骨架   网页的内容   网页的样式
             --- 学习各种网页标签

    html: 1. 标题标签 --  <h1></h1> ~~ <h6></h6> （1级最大，6级最小）
          2. 段落标签 --  <p></p>
          3. 换行标签 --  <br/>
          4. 水平分割线标签 -- <hr/>
          5. 超链接标签 -- <a href="跳转路径"></a>
          6. 图片标签 -- <img src="图片路径" alt="失败显示" width="宽度" height="高度" />
          7. 视频标签 -- <video controls src="视频路径" ></video>
          8. 音频标签 -- <audio controls src="音频路径" ></audio>

    html的表格标签： <table border="1px solid black" cellspacing="0">
                        <tr>    // table row  表格行
                            <td>单元格</td>  // table data  表格数据
                            <td>单元格</td>
                            <td>单元格</td>
                        </tr>
                        <tr>
                            <td>单元格</td>
                            <td>单元格</td>
                            <td>单元格</td>
                        </tr>
                    </table>

    html的表单标签：<form action="接口地址" method="get/post" ></form>
          1. 文本输入框 -- <input type="text" value="默认值" placeholder="提示信息" />
          2. 密码输入框 -- <input type="password" placeholder="提示信息" />
          3. 复选框 -- <input type="checkbox" />
          4. 单选框 -- <input type="radio" />
          5. 提交按钮 -- <input type="submit" value="提交" />
          6. 重置按钮 -- <input type="reset" value="重置" />
          7. 下拉框 -- <select name="城市" id="">
                            <option value="北京">北京</option>
                            <option value="上海">上海</option>
                      </select>
          8. 文本域 -- <textarea name="" id="" cols="30" rows="10"></textarea>

    html的容器标签:  1. <div></div>     2. <span></span>
          块级元素： 独占一行
          行内元素： 不独占一行
          行内块元素： 不独占一行，可以设置宽高
          
 */

/*

    css(层叠样式表)： 网页的样式   网页的布局
             --- 学习为标签设置样式和布局

    css的引入方式： 1. 行内式 -- <div style="属性:值;属性:值" ></div>
                  2. 内联式 -- <style>  选择器{属性:属性值;}  </style>
                  3. 外联式 -- <link href="css文件路径" />
    // 由于css外观要优先加载，因此style和link都要放在head标签中

    css的选择器： 1. 标签选择器 -- 标签名{ 属性:属性值; }
                2. 类选择器 -- .类名{ 属性:属性值; }
                3. id选择器 -- #id名{ 属性:属性值; }
                4. 通配符选择器 -- *{属性:属性值;}
                5. 后代选择器 -- 父级选择器 子级选择器{ 属性:属性值; }   // 选择父元素内的所有匹配子元素（无论嵌套多深）
                6. 子代选择器 -- 父级选择器 > 子级选择器{ 属性:属性值; }  // 仅选择父元素的直接子元素（不包含更深层嵌套的
                7. 并集选择器 -- 选择器1,选择器2{ 属性:属性值; }

    css的颜色设置： 1. 颜色英文 -- color : 颜色英文;
                  2. 16进制颜色 -- color : #rrggbb;
                  3. rgb颜色 -- color : rgb(255,0,0)
                  4. rgba颜色 -- color : rgba(255,0,0,0.5)  // 最后一个参数是透明度，0~1之间
    
    // color属性 -- 字体颜色    background-color属性 -- 背景颜色


    css的背景属性： 1. 背景颜色 -- background-color : 颜色;
                  2. 背景图片 -- background-image : url("图片路径");
                  3. 背景大小 -- background-size : 大小px | 百分比% | cover | contain;
                  4. 背景平铺 -- background-repeat : repeat | no-repeat | repeat-x | repeat-y;
                  5. 背景位置 -- background-position : 位置px | top | bottom | left | right | center;

    css的字体属性： 1. 字体颜色 -- color : 颜色;
                  2. 字体大小 -- font-size : 大小px;
                  3. 字体粗细 -- font-weight : normal | bold | 100~900;
                  4. 字体样式 -- font-style : normal | italic（斜体）;
                  5. 字体家族 -- font-family : 字体（补全）;
                
    css的装饰线属性：1. 位置 -- text-decoration-line : underline（下划线） | overline | line-through;
                   2. 样式 -- text-decoration-style : solid（实线） | double | dotted | dashed | wavy;
                   3. 颜色 -- text-decoration-color : 颜色;

    css的文本属性： 1. 文本对齐 -- text-align : left | center | right;
                  2. 行高 -- line-height : 大小px;
    //  行高等于容器高度时，文本垂直居中

   -------------------------------------------------------------------------------

    css外边距属性： margin-top | margin-bottom | margin-left | margin-right | margin
                  1. 单个值 -- margin : 大小px;
                  2. 两个值 -- margin : 上边距 下边距;
                  3. 三个值 -- margin : 上边距 左右边距 下边距;
                  4. 四个值 -- margin : 上边距 右边距 下边距 左边距;

    css内边距属性： padding-top | padding-bottom | padding-left | padding-right | padding
                  1. 单个值 -- padding : 大小px;
                  2. 两个值 -- padding : 上边距 下边距; 
                  3. 三个值 -- padding : 上边距 左右边距 下边距;
                  4. 四个值 -- padding : 上边距 右边距 下边距 左边距;

    css边框属性： border-top | border-bottom | border-left | border-right | border
                  1. 单个值 -- border : 大小px 样式 颜色;
                  2. 两个值 -- border : 上边距 下边距;
                  3. 三个值 -- border : 上边距 左右边距 下边距;
    
    css圆角属性： border-radius : 大小px;
                // border-top-left-radius : 大小px;
                // border-top-right-radius : 大小px;
                // border-bottom-left-radius : 大小px;

    css阴影属性： box-shadow : 水平偏移量 垂直偏移量 模糊距离 阴影颜色;

    hover伪类 -- 鼠标悬停时的样式    active伪类 -- 鼠标点击时的样式   focus伪类 -- 输入框获得焦点时的样式
    伪类选择器：  选择器: hover | active | focus { 属性:属性值; } 


*/

/*

    Flex(弹性布局)： 是一种用于在容器中布局和对齐项目的布局模型。
                   它提供了一种灵活的方式来控制项目的大小、位置和对齐方式，使得布局更加灵活。

    flex容器： 采用flex布局的元素  --  display:flex;
    flex项目： flex容器内的直接子元素

    flex容器的轴： 主轴--默认 水平向右           侧轴--默认 垂直向下
    // flex容器中的项目默认沿主轴方向排列（从左向右）


    flex容器的属性： 1. 设置主轴的方向 -- flex-direction: row | row-reverse | column | column-reverse;
                   2. 设置是否换行 -- flex-wrap: nowrap | wrap | wrap-reverse;
                   3. 设置主轴上的对齐方式 -- justify-content: flex-start | flex-end | center | space-between | space-around;
                   4. 设置侧轴上的对齐方式 -- align-items: flex-start | flex-end | center | space-between | space-around;

    flex主轴方向居中： justify-content: center;
    flex侧轴方向居中： align-items: center;

*/

/*

    position(定位)： 是一种用于控制元素在网页中的位置和布局的属性。
                    它允许我们精确地指定元素相对于其正常位置的位置，从而实现复杂的布局效果。
                    
    position定位的条件 -- 定位模式 + 边偏移量


    定位模式： 1. static -- 静态定位（默认）
             2. relative -- 相对定位（相对于自身位置）
             3. absolute -- 绝对定位（相对于最近的带有定位的父元素，如果没有则相对于body）
             4. fixed -- 固定定位（相对于浏览器窗口）
             5. sticky -- 粘性定位（相对于浏览器窗口，当元素滚动到指定位置时，固定在指定位置）

    边偏移量： 1. top -- 上偏移量（向下移动）
             2. bottom -- 下偏移量（向上移动）
             3. left -- 左偏移量 （向右移动）
             4. right -- 右偏移量 （向左移动）

    position定位的使用：1. position: 定位模式 ;
                      2. 边偏移量: 偏移大小px ;   （边偏移量通常有多个）

*/

/*

    javascript(脚本语言)： 是一种用于创建动态网页的编程语言。
                         它允许开发者通过编写脚本代码来实现网页的交互、逻辑控制和动态效果。

    javascript的引入方式： 1. 内联式 -- <script>  js代码  </script>
                         2. 外联式 -- <script src="js文件路径" ></script>
    // js文件的引入要放在body标签的最后，因为脚本文件通常是最后加载的

    
    js的输出语句： 1. alert("输出内容");    // 弹出一个文本提示框
                 2. console.log("输出内容");    // 打印到控制台上
                 3. document.write("输出内容");     // 直接输出到html页面上

    js的输入语句： 1. prompt("提示信息");  // 弹出一个文本输入框，用户输入内容，返回用户输入的内容
                 2. confirm("提示信息");  // 弹出一个对话框，用户点击确定返回true，点击取消返回false
    // prompt和confirm都要用变量接收输入的内容


    js的变量： 1. 声明变量 -- let 变量名;
              2. 赋值变量 -- 变量名 = 值;
              3. 声明并赋值变量 -- let 变量名 = 值;
    // let -- 声明变量，变量名不能重复声明（var有问题，基本都不再使用）


    js的常量： 声明并赋值常量 -- const 常量名 = 值;
    // 常量名不能重复声明，变量只能赋值一次 （声明时必须赋值）
    // 常量的地址不改变，常量仍可以正常运行 （引用数据类型）


    js的数据类型：1.Number -- 数字类型
                2.String -- 字符串类型（''  ""  ``）
                3.Boolean -- 布尔类型（true、false）
                4.Undefined -- 未定义类型（变量未赋值）
                5.Null -- 空类型
                6.Object -- 对象类型（数组、函数、对象）
    // js和pythond都是弱数据类型的语言，变量可以不指明数据类型
    // NAN -- 非数字类型（计算错误）

    
    js中的‘+’可以用于字符串的拼接，也可以用于字符串与数字的拼接
         // 当‘+’用于字符串与数字的拼接时，会将数字转换为字符串，然后进行拼接

    js字符串的格式化引用： 模板字符串 --    `字符串${变量名}字符串`
         // 模板字符串可以在字符串中使用${}来引用变量，并且可以进行字符串的拼接

    
    js的类型转换： 1. 隐式转换 -- 当运算符两边的数据类型不一致时，会自动转换为相同的数据类型
                 2. 显式转换 -- 要转换的数据类型( 变量 )
        // 当‘+’作为正号解析时，会将字符串转换为数字（Number）


    js的运算符： 1. 算术运算符 -- + - * / % 
               2. 赋值运算符 -- = += -= *= /= %=
               3. 比较运算符 -- > < >= <= == === != !==
               4. 逻辑运算符 -- && || !
               5. 自增自减运算符 -- i++ ++i i-- --i
    // = -- 赋值     == -- 值相等     === -- 类型和值都相等（开发中用===，更准确）


    js的数组： 1. 声明数组 -- let 数组名 = [值1,值2,值3];
              2. 访问数组 -- 数组名[索引]       // 索引从0开始
              3. 数组长度 -- 数组名.length;
    // js的数组可以存储不同类型的数据，并且长度可变

    数组的方法： 1. push(元素) -- 向数组末尾添加一个或多个元素，并返回新的长度
               2. unshift(元素) -- 向数组开头添加一个或多个元素，并返回新的长度
               3. pop() -- 删除数组的最后一个元素，并返回该元素的值
               4. shift() -- 删除数组的第一个元素，并返回该元素的值
               5. splice(起始索引，删除元素的个数) -- 删除数组中指定的元素，并返回被删除的元素

    数组排序sort: 1. 升序 -- 数组名.sort(function(a,b){return a-b;});
                 2. 降序 -- 数组名.sort(function(a,b){return b-a;});
    

    js的函数: 1. 声明函数 -- function 函数名(形参){     函数体     }
             2. 调用函数 -- 函数名(实参)
    // 函数的形参不会影响实参，只是值传递

    js函数和python函数都无重载而言，函数可以同名，但是会覆盖前面的函数（一个函数名只有一个函数起作用）

    js的匿名函数:   匿名函数 -- function(形参){     函数体     }
                =》  函数表达式 -- let 变量名 = function(形参){     函数体     }
                =》  箭头函数 -- let 变量名 = (形参) => {     函数体     }
                =》  立即执行函数 -- (function(形参){     函数体     })(实参)


    js的对象: 1. 声明对象 -- let 对象名 = {属性名:属性值,属性名:属性值};
             2. 访问对象 -- 对象名.属性名;
    // 对象是无序的集合，无索引而言

    对象的方法: 1. 修改对象的属性值 -- 对象名.属性名 = 值;
              2. 增加对象的属性 -- 对象名.新属性名 = 值;
              3. 删除对象的属性 -- delete 对象名.属性名;
    // js对象可以像python字典一样使用 `对象名[属性名]`进行上述操作
    
    对象中的方法：1. 声明方法 -- 方法名: function(形参){     函数体     }
                2. 调用方法 -- 对象名.方法名(实参);

    对象的遍历： 遍历方式 -- for( let  变量名  in  对象名 ){     函数体     }
    // for in循环遍历的是对象的属性名的字符串，而不是属性值 （ 使用`对象名[变量名]`获取属性值 ）

    
    内置的Math对象: 1. Math.max() -- 返回最大值
                  2. Math.min() -- 返回最小值
                  3. Math.abs() -- 返回绝对值
                  4. Math.round() -- 四舍五入
                  5. Math.sqrt(x) -- 开平方根（x的平方根）
                  6. Math.pow(x,n) -- 开方（x^n）
                  7. Math.random() -- 返回[0，1）的随机浮点数
                  8. Math.floor() -- 向下取整
                  9. Math.ceil() -- 向上取整
    // Math.random() -- 生成[m,n]的随机整数 -- Math.floor(Math.random()*(n-m+1))+m;


*/

/*

    DOM(文档对象模型)： 是一种用于表示和操作HTML和XML文档的标准编程接口。
                      它提供了一种层次结构的方式来访问和操作文档中的元素、属性和内容。
    // 通过DOM，我们可以通过JavaScript来动态地修改网页的结构、样式和内容

    DOM对象： 所有的标签属性都可以在document对象（最大的对象）上找到
             修改DOM对象的属性会自动映射到HTML页面上
    // html的标签在js上叫DOM对象


    获取DOM对象： 1. document.querySelector('css选择器') -- 获取第一个匹配的元素
                2. document.querySelectorAll('css选择器') -- 获取所有匹配的元素,返回一个伪数组

    
    操作DOM对象的文本内容： 1. 获取文本内容 -- 对象名.innerHTML
                         2. 设置文本内容 -- 对象名.innerHTML = '新的文本内容'


    操作DOM对象的属性： 1. 获取属性值 -- 对象名.属性名
                      2. 设置属性值 -- 对象名.属性名 = '属性值'

    操作DOM对象的样式属性： 1. 设置样式 -- 对象名.style.样式属性名 = '属性值'  （小驼峰命名法）
                         2. 设置类名 -- 对象名.className = '类名'  （覆盖）
                         3. 追加类名 -- 对象名.classList.add('类名')  （追加）
                         4. 删除类名 -- 对象名.classList.remove('类名')  （删除）
                         5. 切换类名 -- 对象名.classList.toggle('类名')  （有则删除，无则加上）
    // className和classList写类名都不用加上`.`

    -----------------------------------------------------------------------

    操作表单DOM对象的属性： 1. 获取表单元素的值 -- 对象名.value
                         2. 设置表单元素的值 -- 对象名.value = '新的值'
                         3. 设置表单类型 -- 对象名.type = '新的类型'
    // 复选框对象.checked = true  -- 设置选中属性
    // 按钮对象.disabled = true  -- 设置禁用属性


    自定义属性： 1. 用户为标签定义的属性
               2. 自定义属性一律以 `data-` 开头 （约定）
               3. 自定义属性可以通过 `对象名.dataset.属性名` 获取

    // 自定义属性 -- data-属性名 = '属性值'  


    定时器-间歇函数： 1. 开启定时器 -- setInterval(函数,间隔时间)   （ 每隔一段时间执行一次函数 ）
                   2. 关闭定时器 -- clearInterval(定时器编号)   （ 清除定时器 ）

    // 定时器 -- 每隔一段时间执行一次函数，返回一个定时器编号，用于清除定时器
    // 时间 -- 毫秒为单位，1秒=1000毫秒


*/


