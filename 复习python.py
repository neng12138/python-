# python的数据类型： int float bool str list tuple dict set
# python是一门弱数据类型的语言，不用定义变量的类型，变量的类型是由值的类型决定的

# python中不用写数据类型
# python中不用';'结尾，用缩进表示
# python中不用'{}'划区，用':'和缩进来表示

# print(2**3)     # 8

# python类型转换： int(值) float(值) str(值) list(值) tuple(值) dict(值) set(值)

# python中‘+’的字符串拼接： ‘+’只能拼接字符串
# my_str : str = 'hello' + str(1)

# python中字符串的格式化引用： f'   {值}   '

# python的选择语句: if 条件 :   代码块  
#                 elif 条件 :   代码块  
#                 elif 条件 :   代码块  
#                 else :    代码块

# python中的循环语句：  while   条件 :   循环体
#                     for   变量   in   序列 :   循环体

# continue 跳过本次循环，继续下次循环
# break 跳出循环，不再执行循环体

# random模块： random.random() ---  [0,1)
#             random.randint(a,b) ---  [a,b]
#             random.choice(序列) ---  从序列中随机选择一个元素
# import random
# print(random.random())
# print(random.randint(0,10))

# python中 print() 输出不换行： print(值, end='')

# \n -- 换行    \t -- 制表符

# python函数:    def   函数名( 形参 ):   函数体   
#               函数名( 实参 )  

# 局部变量： 函数内部定义的变量，只能在函数内部使用
# 全局变量： 函数外部定义的变量，在函数内部和外部都可以使用
# global 关键字： 在函数内部修改全局变量，需要使用global关键字声明
# num = 10
# def test():
#     global num
#     num += 10
#     print(num)
# print(num)
# test()
# print(num)

# 列表: list.insert(索引,值)  在指定索引处插入值
#      list.append(值)  在列表末尾添加值
#      list.pop()  删除列表末尾的值
#      list.pop(索引)  删除指定索引的值
#      list.remove(值)  删除指定值

# len(list)  获取列表的长度

# 元组： 一旦创建，不能修改
#       元组的元素不能修改，但是可以包含可变对象，比如列表

# len(tuple)  获取元组的长度

# 字符串: 字符的容器，字符的序列    (单引号，双引号，三引号都可以)

# str.replace(old,new)  替换字符串中的字符
# str.split(分隔符)  分割字符串，返回一个列表
# str.strip()  去除字符串两端的空格
# len(str)  获取字符串的长度

# python中只有 list[下标]   tuple[下标]   str[下标] 取值，下标从0开始


# range(start,stop,step)  生成一个整数序列，从start开始，到stop结束，步长为step，不包含stop

# 切片操作： list[start:stop:step]  从start开始，到stop结束，步长为step，不包含stop
#          tuple[start:stop:step]  从start开始，到stop结束，步长为step，不包含stop
#          str[start:stop:step]  从start开始，到stop结束，步长为step，不包含stop

# range 和 切片查询 都是左闭右开

# 字典：    key:value---键值对     (字典内的键是无序的，无下标索引)

# dict[key]  获取字典中key对应的值
# dict[newKey] = value  新增字典中key对应的值
# dict.pop(key)  删除字典中key对应的值
# len(dict)  获取字典的长度

# my_dict = { 'name':'张三', 'age':18, 'gender':'男' }
# print(my_dict.keys())
# print(my_dict.values())

# python函数中可以return多个值，返回的是一个元组

# python函数可以作为参数传递，也可以作为返回值返回
# def test():
#     print('test')
# def test2(func):
#     func()          # 调用传入的函数
#     print('test2')
# test2(test)        # 传入函数的引用，不调用函数，只传递函数的引用

# lambda 匿名函数：  lambda 形参 :  函数体   （匿名函数）
# def test2(func):
#     func()          # 调用传入的函数
#     print('test2')
# test2(lambda : print('test'))        # 传入函数的引用，不调用函数，只传递函数的引用

# def test2(func):
#     func()          # 调用传入的函数
#     print('test2')
# test = lambda : print('test')
# test2(test)        # 传入函数的引用，不调用函数，只传递函数的引用

# python中的open()函数： open（pathname,mode,encoding）
#                       pathname:文件路径
#                       mode:打开模式，r:只读，w:写入，a:追加 wb:二进制写入，rb:二进制读取，ab:二进制追加
#                       encoding:编码格式，utf-8:万国码，gbk:中文编码

# 1. with open('./text/test.txt','r',encoding='utf-8') as f:
# 2. f = open('./text/test.txt','r',encoding='utf-8')

# open函数读文件： f.read()  读取文件中的所有内容
#                f.readline()  读取文件中的一行内容
#                f.readlines()  读取文件中的所有行，返回一个列表

# open函数写文件： f.write( 内容 )  写入文件中的内容  

# with open('image01.jpg','wb') as f:
#     f.write(response.content)

# python中的异常处理： try:  代码块  except:  代码块  else:  代码块  finally:  代码块
# try:
#     pass
# except Exception as e:
#     print(e)
# finally:
#     pass

# 自定义模块：  一个.py文件就是一个模块，模块名就是文件名
# 其实就是调用自己写的py文件
# 调用模块时，会自动执行模块中的所有代码

if __name__ == '__main__':
    pass
# python中__name__变量： 在当前模块中执行时，__name__变量的值为才会是__main__
# 在其他模块中执行时，__name__变量的值为模块名

# python模块： 一个.py文件就是一个模块，模块名就是文件名    (py文件)
# python包： 一个文件夹就是一个包，包名就是文件夹名    (文件夹)

# json: json是一种轻量级的数据交换格式，易于人阅读和编写，易于机器解析和生成
#           （一种流通的数据格式   一个特殊的字符串）
# json格式：  '{ "key":[], "key":[], "key":[] }'
#            '[ {"key":"value"}, {"key":"value"}, {"key":"value"} ]'
# import json
# my_dict = { 'name':'张三', 'age':18, 'gender':'男' }
# print(my_dict)  
# print(type(my_dict))    # 字典类型
# my_json = json.dumps(my_dict,ensure_ascii=False)  # 字典转json字符串
# print(my_json)
# print(type(my_json))    # json字符串类型
# my_dict2 = json.loads(my_json)  # json字符串转字典
# print(my_dict2)
# print(type(my_dict2))   # 字典类型

# json中全是双引号，不能有单引号
# python中可以有单引号，也可以有双引号

# my_list = [{'name':'张三','age':18,'gender':'男'},{'name':'李四','age':19,'gender':'女'},{'name':'王五','age':20,'gender':'男'}]
# my_list.sort(key=lambda x:x['age'],reverse=True)  # 按照age升序排序
# print(my_list) 

# 类：   class 类名:   类体   
# 实例化：  对象名 = 类名()   

# 类中的self:   self代表当前对象，self是一个关键字，不能修改
#              self必须作为第一个参数传入，self可以是任意名称，但是最好是self
#              self可以在类的任何方法中使用，self代表当前对象

# 类中的构造方法： __init__()  初始化方法，在创建对象时自动调用
#             def  __init__(self,参数1,参数2,...)  初始化方法，在创建对象时自动调用

# class test:
#     def __init__(self,name,age,gender):  # 构造方法
#         self.name = name
#         self.age = age
#         self.gender = gender

#     def what(self):
#         print(f'我的名字是{self.name},我的年龄是{self.age},我的性别是{self.gender}')

# test1 = test('张三',18,'男')
# test1.what()

# 类中的私有属性和私有方法：  __属性名   __方法名   （以__开头命名即可）
#         私有属性和私有方法只能在类的内部使用，不能在类的外部使用

# class test:
#     name = '张三'
#     age = 18
#     gender = '男'

#     def __init__(self):  # 默认无参构造方法
#         pass

#     def what(self):
#         print(f'我的名字是{self.name},我的年龄是{self.age}')

# class test2(test):
#     def __init__(self,name,age,gender):  # 构造方法
#         # super().__init__(name,age,gender)  # 调用父类的构造方法
#         self.name = name
#         self.age = age
#         self.gender = gender

#     def what(self):
#         print(f'我的名字是{self.name},我的年龄是{self.age},我的性别是{self.gender}')

#     def super_what(self):
#         super().what()  # 调用父类的方法
# test = test2('李四',19,'女')
# test.what()
# test.super_what()


# 类型注解：  函数的参数和返回值的类型注解
#           def 函数名(参数:类型,参数:类型,...) :   函数体
#           def 函数名(参数,参数,...) -> 类型:   函数体

# my_list : list[int] = [1,2,3,4,5]
# my_list2 : list[str] = ['a','b','c','d','e']
# my_list3 : list[dict[str,int]] = [{'name':'张三','age':18},{'name':'李四','age':19},{'name':'王五','age':20}]

# 多态：  一个对象可以有多种形态，一个对象可以有多种类型，一个对象可以有多种表现形式
#               （以父类做方法声明，以子类做实际工作，同一方法不同结果）

# class animal:
#     def eat(self):  # 抽象方法
#         pass

# class dog(animal):
#     def eat(self):
#         print('狗吃骨头')

# class cat(animal):
#     def eat(self):
#         print('猫吃鱼')

# def eat(animal):  # 多态
#     animal.eat()

# eat(dog())  # 狗吃骨头
# eat(cat())  # 猫吃鱼

# 闭包：  函数嵌套函数，内部函数使用外部函数的变量，外部函数返回内部函数的引用
# def test(num):
#     print(num)  
#     def test2():
#         nonlocal num  # 声明num为外部函数的变量，非局部变量
#         num += 10
#         print(num)
#     return test2

# mon = test(10)      # 10
# mon()  # 20  闭包函数可以访问外部函数的变量，但是外部函数不能访问内部函数的变量

# 装饰器：  装饰器是一个函数，用来装饰其他函数，在其他函数执行前后添加一些功能

# def test(func):  # 装饰器
#     def test2():
#         print('我在吃饭')
#         func()  # 调用传入的函数
#         print('我在娱乐')
#     return test2

# @test  # 装饰器，相当于eat = test(eat)  （eat = test(eat)  是一个闭包函数）
# def sleep():
#     print('我在睡觉')

# sleep()  # 我在吃饭  我在睡觉  我在娱乐
# 实际上调用的是闭包函数test2，而不是sleep函数，所以在sleep函数执行前后添加了一些功能

# 多线程
# from threading import Thread
# from time import sleep

# def test(num):
#     for _ in range(5):
#         print(num)
#         sleep(1)

# Thread(target=test,args=(5,),name='线程1').start()  # 启动线程，执行test函数，传入参数5，线程名为线程1
# Thread(target=test,args=(10,),name='线程2').start()  # 启动线程，执行test函数，传入参数5，线程名为线程1

# 正则表达式：  用来匹配字符串的    (字符串的匹配)


# python生成器：  生成器是一个函数，函数中包含yield关键字
# yield关键字的作用是返回一个值，并且暂停函数的执行，下次调用函数时，从上次暂停的位置继续执行

# def test():  # 生成器函数
#     for i in range(5):
#         yield i  # 返回一个值，并且暂停函数的执行，下次调用函数时，从上次暂停的位置继续执行

# for i in test():  # 生成器函数的返回值是一个生成器对象，生成器对象可以使用for循环遍历
#     print(i)


# python中的格式说明符： [fill][align][width][.precision][type]
#           fill: 填充字符，默认为空格
#           align: 对齐方式，   < -- 左对齐， > -- 右对齐， ^ -- 居中对齐
#           width: 宽度
#           .precision: 精度
#           type: 类型， d:整数， f:浮点数， s:字符串  %:百分比

# 要以 ： 开始
# print(f'{100:>10.2f}')
# print(f'{100:>10.2%}')

# pyecharts:  一个基于python的图表库，用来绘制图表

