
# python编程入门 -- input , print , 类型 , if , for , while , def , return , json

# python办公自动化 -- pyautogui , pyperclip , cnocr

# python爬虫 -- requests , BeautifulSoup , lxml

# python数据分析 -- excel , pandas , Tableau , Power BI

# Web前端 -- html , css , javascript , ajax

# Web后端 -- 数据库 , Flask

# 测试 -- Selenium , pytest , allure

# -------------------------------------------------------------

# python数据类型: int-整数   float-浮点数   str-字符串   bool-布尔值 
#                list-列表   tuple-元组   dict-字典   set-集合

# pyhton的特征 -- 1. python是弱数据类型的编程语言，不需要写数据类型
#                2. python不用写分号（;）结尾
#                3. python用冒号（:）和缩进划分区域，不用{}

# python的数据类型转换： int()      转换为整数
#                     float()    转换为浮点数
#                     str()      转换为字符串
#                     bool()     转换为布尔值
#                     list()     转换为列表
#                     tuple()    转换为元组
#                     dict()     转换为字典

# python的字符串拼接（+）: python字符串的拼接只能拼接字符串与字符串，不能拼接其他数据类型

# python的字符串格式化：进行字符串与变量的拼接 （f 与 {}）
# my_num = 10
# my_str = f'我是数字: {my_num}'
# print(my_str)    # 我是数字: 10

# python的格式说明符： f' { 值 : 格式说明符 } '
# 格式说明符 --  [填充][排列][宽度.精度][type] 
# my_num = 10.123
# my_str = f'我是数字: {my_num:0^10.1f}'
# print(my_str)    # 我是数字: 00010.1000

# random模块 : import random 
#                 1. random.random() -- [0,1)的浮点数
#                 2. random.uniform(a,b) -- [a,b)的浮点数
#                 3. random.randint(a,b) -- [a,b]的整数

# python输出不换行： print('内容'，end='')    # 默认end='\n'


# 分支语句:      if  条件:  语句
#              elif  条件:  语句
#              else:  语句

# while循环:    while 条件：
#                         循环体

# for循环:      for 变量 in 序列：
#                              循环体


# range函数： range(start,end,step)             （左闭右开）
#             start: 起始值
#             end: 结束值
#             step: 步长
#             注意：range()函数的返回值是一个序列，序列中的元素是整数
#             注意：range()函数的参数start、end、step都可以省略，省略时start默认为0，end默认为-1，step默认为1
#             注意：range()函数的参数start、end、step都可以是负数
# for i in range(5):
#     print(f'{i} ',end='')   # 0 1 2 3 4

# 切片取值 ： 序列[start:end:step]          （左闭右开）
#            start: 起始下标值
#            end: 结束下标值
#            step: 步长
#            注意：切片的取值范围是[start,end)
#            注意：切片的步长可以省略，省略时步长默认为1
#            注意：切片的步长可以是负数，负数时表示从右往左取
#            注意：切片的起始值可以省略，省略时起始值默认为0
#            注意：切片的结束值可以省略，省略时结束值默认为序列的长度
# my_str = 'hello world'
# print(my_str[0:5])   # hello
# print(my_str[0:5:2])   # hlo
# print(my_str[::2])   # hlowrd
# print(my_str[::-1])   # dlrow olleh


# python函数:  def  函数名（ 形参 ）：
#                                函数体
#                                return 返回值

# python函数调用 -- 函数名（ 实参 ）

# python函数重载 -- 没有函数重载，最后一个函数会覆盖前面的函数 （函数名唯一）

# 全局变量 -- 函数外定义的变量，任何作用域均可以访问
# 局部变量 -- 函数内定义的变量，只有在创建的作用域中才可以访问

# global关键字 -- 声明全局变量 （函数内修改全局变量）
# nonlocal关键字 -- 声明非局部变量 （多层嵌套函数中内层函数内修改外层函数的变量）

    
# 列表list -- list.index(元素) -- 查找元素的索引
#            list.count(元素) -- 统计列表中元素的个数
#            len(list) -- 统计列表的长度

#            list.append(元素) -- 向列表末尾添加元素
#            list.insert(下标，元素) -- 向列表指定位置插入元素

#            list.remove(元素) -- 删除列表中的元素
#            list.pop(下标) -- 删除列表中的元素，并返回该元素

#            list.clear() -- 清空列表
#            list.sort() -- 对列表进行排序
#            list.reverse() -- 对列表进行逆序
#            list.copy() -- 复制列表
# my_list : list = []
# my_list.append(11)
# my_list.insert(0,22)
# print(my_list)      # [22, 11]


# 元组tuple : tuple.index(元素) -- 查找元素的索引
#            tuple.count(元素) -- 统计元组中元素的个数
#            len(tuple) -- 统计元组的长度
# my_tuple : tuple = (11,)
# print(my_tuple)     # (11,)
# print(type(my_tuple))   # <class 'tuple'>


# 字符串str : str.index(子字符串) -- 查找子字符串的索引
#            str.count(子字符串) -- 统计子字符串的个数
#            len(str) -- 统计字符串的长度

#            str.replace(旧字符串，新字符串) -- 替换字符串
#            str.split(分隔符) -- 分割字符串
#            str.strip() -- 去除字符串的空格


# 字典dict :  dict[ key ] -- 取值
#            dict[ key ] = value -- 赋值

#            dict[ new_key ] = value -- 增加键值对

#            dict.pop(key) -- 删除字典中指定key的key-value对

#            dict.clear() -- 清空字典
#            dict.copy() -- 复制字典
#            dict.keys() -- 获取字典中所有的key （key1 , key2 , key3）
#            dict.values() -- 获取字典中所有的value （value1 , value2 , value3）
#            dict.items() -- 获取字典中所有的key-value对 （(key1,value1) , (key2,value2) , (key3,value3)）
# my_dict : dict = {}
# my_dict['name'] = '佩佩'
# my_dict['age'] = 18
# my_dict['sex'] = '女'
# print(my_dict)      # {'name': '佩佩', 'age': 18, 'sex': '女'}
# print(my_dict.keys())      # dict_keys(['name', 'age', 'sex'])
# print(my_dict.values())      # dict_values(['佩佩', 18, '女'])

# # 字典的遍历
# for key in my_dict:
#     print(key,my_dict[key])
# for value in my_dict.values():
#     print(value)
# for key,value in my_dict.items():
#     print(key,value)


# # 函数的不定长参数 -- *args （元组不定长）
# 函数的不定长参数 （用户可以传入0或无数个实参） -- 不定长参数必须放结尾
# def getSum(*args : int) -> int :
#     sum = 0
#     for i in args:
#         sum += i
#     return sum
# print(getSum(1,2,3))        # 6
# print(getSum(1,2,3,4,5,6))      # 21


# lambda匿名函数 -- lambda 形参 ： 表达式
# 注意：lambda匿名函数即函数无函数名和def关键字
# 注意：lambda匿名函数只能有一个表达式，不能有多个语句 （单行）
# 注意：lambda匿名函数的形参可以有多个，多个形参之间用逗号隔开
# 注意：lambda匿名函数的返回值是表达式的结果，不是return的结果 （不用写return）


# open函数 -- open('文件路径' , 'mode' , encoding='utf-8')
# 注意：open函数的mode参数有：r、w、a、rb、wb、ab
# 读 -- 1. 文件对象.read()    2. 文件对象.readlines()   3. for i in 文件对象:
# 写 -- 1. 文件对象.write( 数据 )


# 异常 --     try:
                    # 代码块
#            except Exception as e:
                    # 代码块
#            finally:
                    # 代码块


# 当前会话执行则执行，其他会话导入则不执行 
# if __name__ == '__main__' : 
                             # 代码块


# json -- import json
#            json字符串 = json.dumps( python对象 ) -- 将python对象转换为json字符串
#            json.dump() -- 将python对象转换为json字符串并写入文件

#            python对象 = json.loads( json字符串 ) -- 将json字符串转换为python对象
#            json.load() -- 从文件中读取json字符串并转换为python对象
# import json
# my_dict : dict = {'name':'佩佩','age':18,'sex':'女'}
# print(my_dict)          # {'name': '佩佩', 'age': 18, 'sex': '女'}

# json_str = json.dumps(my_dict,ensure_ascii=False)
# print(json_str)         # {"name": "佩佩", "age": 18, "sex": "女"}
# print(type(json_str))       # <class 'str'>

# print(json.loads(json_str))         # {'name': '佩佩', 'age': 18, 'sex': '女'}
# print(type(json.loads(json_str)))        # <class 'dict'>

#   json转换 -- json.dumps() 与 json.loads()  
#   json文件操作 -- json.dump() 与 json.load()

# dumps,loads 与 dump,load 不能混用，会报错


# 类型注释 ： 1. 变量注释 --    变量名 ： 数据类型
#           2. 函数形参注释 --    def 函数名（ 形参 ： 数据类型 ） :
#           3. 函数返回值注释 --    def 函数名（ 形参 ） -> 数据类型 :

# 闭包 -- 1. 多层嵌套函数  2. 外层函数返回内层函数

# 装饰器 -- 不改变目标函数的内容，为其增加新的功能 （ 语法糖@ ）

# python技术栈 -- 数据库pymysql , 大数据pyspark , 多线程threading , 正则表达式re , 可视化pyecharts

# 多线程threading -- from threading import Thread
#              Thread( target = 函数 ， args=(实参)) . start()

# 正则re -- import re
#          1. re.match()  ->  从头匹配 ， 匹配第一个
#          2. re.search()  ->  全局匹配 ， 匹配第一个 （常用）
#          3. re.findall()  ->  全局匹配 ， 匹配所有


# -------------------------------------------------------------


# Flask ： 一个python编写的Web应用框架

# Http请求方法 ： 1. GET -- 获取资源
#               2. POST -- 传输实体主体
#               3. PUT -- 传输文件
#               4. DELETE -- 删除文件

# Http响应状态码 ： 1. 200 -- 成功
#                2. 403 -- 请求被禁止
#                3. 404 -- 资源找不到
#                4. 405 -- 方法不允许

# 创建flask应用 ： 1. static包 -- 存放静态资源 （直接获取）
#                2. templates包 -- 存放跳转文件
#                3. app.py模块 -- 存放应用代码 （flask应用的入口）
# from flask import Flask   # 导库

# app = Flask(__name__)    # 创建应用实例

# @app.route('/',methods=['GET'])     # 编写路由与请求方法
# def index():             # 视图函数
#     return '我是首页'

# if __name__ == '__main__':          # 启动web应用
#     app.run(port=8000,debug=True)   


# 关闭web服务 ： 关闭app.py文件运行即可

# 调试模式 ： app.run( debug = True )

# 端口设置 ： app.run( port = 8000 )   （默认端口号:5000）


# 路由与视图函数 ： 1. 路由与函数名都不能重复
#                2. 视图函数必须有返回值，否则报错
#                3. 根据路由找到视图函数，执行相应的视图函数，并返回响应
#                4. 路由与视图函数配合使用，实现不同路由访问不同的视图函数

# 路由请求方法 ： @app.route( '/路由地址' , methods=['GET'|'POST'|'PUT'|'DELETE'] )


# 跳转模板文件 ： 1. from flask import render_template
#              2. render_template( '跳转文件的路径' )    （默认在templates包中寻找路径）
# from flask import Flask
# from flask import render_template

# app = Flask(__name__)

# @app.route('/tiao',methods=['GET'])
# def tiao():
#     render_template('data/1110_index.html')      # 跳转
#     return 'OK'

# if __name__ == '__main__' :
#     app.run(port=8000,debug=True)


#   （导库 --  from flask import request ）
# 请求与响应 ： 1. GET请求  --  变量 = request.args.get('属性名')
#             2. POST请求  --  变量 = request.form.get('属性名')
#             3. DELETE请求  --  变量 = request.args.get('属性名')
#             4. 文件请求  --  变量 = request.files.get('属性名')

#  args -> params（明文参数）         form -> form-data （密文参数）


# 跨域问题 ： 1. from flask_cors import CORS
#           2. CORS(app , resources=r'/*')
# from flask import Flask
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app,resources=r'/*')       # 解决跨域问题

# @app.route('/',methods=['GET'])
# def index():
#     return '我是首页'

# if __name__ == '__main__':
#     app.run(port=8000,debug=True)


# -------------------------------------------------


# Flask :  作为服务端开启web服务，并接收HTTP请求，发送HTTP响应 （后端）

# 客户端 : 通过路由访问服务端，发送HTTP请求 ，接收HTTP响应 （如：浏览器 ， postman , ajax）


# Flask与数据库 ： 调用python的API ， 直接与数据库进行交互


# Flask与前端 ： 1. Flask的 render_template模块 可以用于跳转前端的网页
#              2. 前端ajax 发送HTTP请求，后端接收HTTP请求并发送HTTP响应，前端接收HTTP响应


# 前后端交互 ： 1. 前端 -- 页面的开发 ， 页面的跳转 ， 页面的业务逻辑 （页面逻辑）
#             2. 后端 -- 数据库操作 ， 接口的开发 （让前端调用，获取数据）


