
# import pymysql  # 导入pymysql模块，用于连接mysql数据库。

# # 连接数据库，创建连接对象。
# # host: 主机名， port: 端口号， user: 用户名， password: 密码。
# conn = pymysql.connect( # connect 和 Connection 是同一个类，都是连接数据库的类。
#     host = 'localhost',
#     port = 3306,
#     user = 'root',
#     password = '123456',
#     autocommit=True  # 自动提交事务，不需要手动提交事务。
# ) 

# conn.select_db('user_test')    # 选择数据库,如果数据库不存在，会报错。

# yb = conn.cursor()        # 创建游标对象，用于执行sql语句，获取结果。

# yb.execute('select * from employee') # 执行sql语句（sql语句也可以很复杂）

# # 获取的结果集，是一个元组，元组中包含多个元组，每个元组表示一行数据（一行记录）。
# result = yb.fetchall() # 获取所有数据 （元组嵌套元组）

# print(type(result)) # 打印数据类型，返回的是元组。
# # print(result) # 打印数据。
# for item in result:
#     print(item) 

# yb.close() # 关闭游标，释放资源，避免占用过多资源，导致系统崩溃或者其他问题。
# conn.close() # 关闭数据库连接，释放资源，避免占用过多资源，导致系统崩溃或者其他问题。

# from threading import Thread

# def dance():
#     for _ in range(5):
#         print('正在跳舞')

# def sing():
#     for _ in range(5):
#         print('正在唱歌')

# # 参数 ： target , args , kwargs
# # target: 要执行的函数，args: 函数的参数，kwargs: 函数的关键字参数。
# # 注意：args和kwargs是元组和字典，元组和字典中的元素是函数的参数。
# Thread(target=dance).start() # 创建线程，执行dance函数，启动线程。
# Thread(target=sing).start() # 创建线程，执行sing函数，启动线程。

# # 生成器
# def generator(): # 生成器函数，生成器函数的返回值是一个生成器对象。
#     for i in range(5): # 循环5次，每次循环生成一个值。
#         yield i # 生成一个值，暂停函数的执行，等待下一次调用。
#         print('生成器函数执行中...') # 打印提示信息。

# gen = generator() # 创建生成器对象，生成器对象是一个迭代器。
# print(type(gen)) # 打印生成器对象的类型，返回的是生成器对象。
# print(next(gen)) # 打印生成器对象的第一个值，返回的是生成器对象的第一个值。
# print(next(gen)) # 打印生成器对象的第二个值，返回的是生成器对象的第二个值。


# # 装饰器
# # 装饰器是一个函数，它可以接受一个函数作为参数，然后返回一个新的函数。

# def decorator(func): # 装饰器函数，接受一个函数作为参数。
#     def wrapper(*args, **kwargs): # 包装函数，接受任意数量的位置参数和关键字参数。
#         print('装饰器函数执行中...') # 打印提示信息。
#         return func(*args, **kwargs) # 调用原始函数，返回原始函数的返回值。
#     return wrapper # 返回包装函数。

# @decorator # 装饰器，相当于执行了 decorator(hello)，返回的是包装函数。
# def hello(): # 原始函数，没有参数。
#     print('hello world') # 打印提示信息。

# hello() # 调用原始函数，相当于调用包装函数。
# # 相当于执行了 decorator(hello)()，返回的是包装函数的返回值。


list : list = [11, 2, 33, 24, 15] # 列表，元素是数字。

list.sort() # 排序，默认升序。
print(list) # 打印排序后的列表。
list.sort(reverse=True) # 排序，降序。
print(list) # 打印排序后的列表。

print('------------------') # 打印分隔符。

list = sorted(list) # 排序，默认升序。
print(list) # 打印排序后的列表。
list = sorted(list, reverse=True) # 排序，降序。
print(list) # 打印排序后的列表。

print('------------------') # 打印分隔符。

# sorted() 函数和 sort() 方法的区别：
# 1. sorted() 函数返回一个新的列表，原列表不变。
# 2. sort() 方法是原地排序，原列表改变。
# 3. sorted() 函数可以接受任意可迭代对象，sort() 方法只能接受列表。


dict : dict = {2: 10, 1: 20, 3: 30, 5: 40, 4: 50} # 字典，键是数字，值是数字。

my_dict = sorted(dict) # 排序，默认按照键排序,升序。
print(type(my_dict))
print(my_dict) # 打印排序后的字典，返回的是一个列表。
my_dict = sorted(dict, reverse=True) # 排序，降序。
print(type(my_dict))
print(my_dict) # 打印排序后的字典，返回的是一个列表。

print('------------------') # 打印分隔符。


# print(type(dict.values()) ) 
# print(dict.values()) 
# print(type(dict.keys()) )
# print(dict.keys())



