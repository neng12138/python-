
# headers请求头 ： host connection user-agent accept referer cookie
# 其中的user-agent是用来伪装成浏览器的（最重要）
# referer是用来防盗链的
# cookie是用来记录用户的登录状态的

# headers 可以在网络（network）的请求标头复制即可 （开发者工具F12）

# status_code响应状态码: 200--成功  403--禁止访问  404--未找到资源

# params 参数 ： 用来指定url中的额外的参数 （添加url中参数区）
# data 参数： 用来指定post请求体中的数据 （post请求中传密码，数据等）

# requsets 模块 ： 用来发送请求的模块 （get，post）
# requsets.get(url,params={},headers={}) ： 用来发送get请求的方法 （url：请求的url，params：请求的参数，headers：请求头）
# requsets.post(url,data={},headers={}) ： 用来发送post请求的方法 （url：请求的url，data：请求的参数，headers：请求头）

# import requests
# res = requests.get()
# # res = requests.post()
# res.text  # 获取响应体的文本 （字符串）
# res.content  # 获取响应体的内容 （字节）
# res.status_code  # 获取响应状态码 （数字）
# res.headers  # 获取响应头 （字典）
# res.json()  # 获取响应体的内容 （字典）

# text--源代码  content--二进制资源  json()--获取网页json数据，再转换成字典

# content-- 二进制资源  （图片，视频，音频，文件）
# open函数中的 rb wb ab 都是为了处理二进制资源而来的

# BeautifulSoup 模块 ： 用来解析html的模块 （lxml）
# BeautifulSoup(res.text,'lxml') ： 用来解析html的方法（res.text：要解析的html   lxml：解析器）
# 返回一个BeautifulSoup对象，对象中存有网页源码的html格式文档
# （对象中就是res.text的html网页格式字符串）

# find() ： 用来查找标签的方法 （标签名，属性，文本）
# find_all() ： 用来查找所有标签的方法 （标签名，属性，文本）
# select() ： 用来查找标签的方法 （css选择器）

# 网页文档： 对象.子标签名  --  获取子标签的内容 （进入子标签）
#          对象['标签属性名']  --  获取当前标签的属性 （获取属性值）
#          对象.text  --  获取当前标签的文本 （获取文本内容）

# 开发者工具F12： 元素--DOM树  （查看网页源码）
#               控制台--简单命令行窗口  （查看网页源码）
#               源代码--静态资源  （js,css,json网页文件）
#               网络--监听器  （查看请求头）

# js逆向： 逆操作，在js文件中找到解密方法，用解密方法将网页的数据进行解密，从而得到真正的数据



