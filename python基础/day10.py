
# from pyspark import SparkConf,SparkContext

# import os
# os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe'

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# # 数据输入（1.容器输入  2. 文件输入）
# # 容器输入
# rdd = sc.parallelize([1,2,3,4,5])
# # 文件输入
# # rdd = sc.textFile('./p_测试读取文本/case03.txt')


# # # 数据计算
# # # 1. map算子
# # rdd = rdd.map(lambda element : element*10)   # 逐个取出进行处理（可以对每一个进行很复杂的处理）
# # print(rdd.collect())

# # # 2. faltmap算子
# # rdd = rdd.flatMap(lambda element : element*10)     # 可以去一层嵌套
# # print(rdd.collect())

# # # 3.reduceByKey算子
# # rdd = rdd.reduceByKey(lambda a,b : a+b)     # 分组并聚合运算（只能处理二元元组）
# # print(rdd.collect())

# # # 4.filter算子
# # rdd = rdd.filter(lambda element : element % 2 == 0)     # 逐个处理（条件过滤）
# # print(rdd.collect())

# # # 5.distinct算子
# # rdd = rdd.distinct()            # 去重
# # print(rdd.collect())

# # # 6.sortBy算子
# # rdd = rdd.sortBy(lambda element : element[0],ascending=True,numPartitions=1)    # 排序
# # print(rdd.collect())
# # # ascending:   True => 升序（默认）   Flase => 降序



# # 数据输出
# # 1. collect算子
# print(rdd.collect())        # 转换为列表输出

# # 2. take算子
# print(rdd.take(3))          # 显示前n条数据

# # 3. reduce算子
# print(rdd.reduce(lambda a,b : a+b))     # 可以将RDD对象中的数据进行聚合运算再将结果返回

# # 4.count算子
# print(rdd.count())         # 返回RDD对象中有多少条数据


# sc.stop()



# from pyspark import SparkConf,SparkContext
# import json

# import os
# os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe'

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# # rdd = sc.parallelize([1,2,3,4,5])
# # rdd = sc.parallelize([('itheima',1),('itcast',2),('shunjump',3)])
# # rdd = sc.parallelize(["itheima",'itcast'])
# rdd = sc.parallelize([{'itheima':123,'itcast':456,'shunjump':789}])

# my_list = rdd.collect()
# with open('./p_测试读取文本/case04.txt','a',encoding='utf-8') as f:
#     # for i in my_list:
#     #     f.write(str(i)+'\n')
#     json_data = json.dumps(my_list)
#     f.write(json_data+'\n')


# sc.stop()


# my_list = [1,2,3,4,5]
# with open('./p_测试读取文本/case04.txt','a',encoding='utf-8') as f:
#     for i in my_list:
#         f.write(str(i))       # write 只能接收str字符串



#   PYTHON 进阶

# def outer(logo):

#     def inner(mvg):
#         print(f'<{logo}> {mvg} <{logo}>')

#     return inner            # 闭包函数要再外层函数中返回

# func = outer('itheima')     # 定义闭包函数的函数对象
# func('哈哈哈')
# func('啦啦啦')


# def outer(num : int):

#     def inner(num2 : int) -> int:
#         nonlocal num                # nonlocal关键字才能修改闭包函数的外部变量
#         num += num2
#         print(f'num is : {num}')

#     return inner

# func = outer(10)          # 变量会持续增长（持续累加）
# func(10)
# func(10)


# def account(num=0):

#     def atm(money,deposit=True):
#         nonlocal num
#         if deposit:
#             num += money
#             print(f'存款 +{money}, 账户总共：{num}')
#         else:
#             num -= money
#             print(f'取款 -{money}, 账户总共：{num}')

#     return atm

# func = account()
# func(100)
# func(200)
# func(100,False)


# # 装饰器
# def outer(func):

#     def inner():            # 闭包函数：增加功能就在闭包函数中增加
#         print('开始睡觉')
#         func()
#         print('睡醒了')

#     return inner

# @outer                  # 装饰器的快捷写法 
# def sleep():
#     import random
#     from time import sleep
#     print('睡觉中......')
#     sleep(random.randint(1,5))


# # fun = outer(sleep)
# # fun()

# sleep()     # 将sleep函数传入outer函数中，并执行inner闭包函数


# class person:
#     pass

# class student(person):
#     pass

# class teacher(person):
#     pass

# class personfactory:
#     def choice_person(self,p_type):     
#         if p_type == 's':
#             return student()          # 返回对应的对象（易于维护）
#         elif p_type == 't':
#             return teacher()

# factory = personfactory()
# stu = factory.choice_person('s')
# tea = factory.choice_person('t')


# from threading import Thread
# from time import sleep

# def sing():
#     while True:
#         print('我在唱歌，哈哈哈')
#         sleep(1)

# def dance():
#     while True:
#         print('我在跳舞，呱呱呱')
#         sleep(1)

# # 构建线程
# thread_1 = Thread(target=sing)
# thread_2 = Thread(target=dance)
# # 启动线程
# thread_1.start()
# thread_2.start()



# from threading import Thread
# from time import sleep

# def sing(mvg):
#     while True:
#         print(mvg)
#         sleep(1)

# def dance(mvg):
#     while True:
#         print(mvg)
#         sleep(1)

# # 线程的传参（args 和 kwargs ）
# Thread(target=sing,args=('我在唱歌，啦啦啦')).start()
# Thread(target=dance,kwargs={'mvg':'我在跳舞，怒怒怒'}).start()



# # 装饰器（func为接收目标函数）
# def outer(func):

#     def inner():
#         print('开始睡觉啦')
#         func()
#         print('睡醒啦')

#     return inner

# @outer              # 设置装饰器（将此sleep作为参数传入outer中）
# def sleep():
#     import random
#     from time import sleep
#     print('睡觉中~~')
#     sleep(random.randint(1,5))


# sleep()         # 本质上是调用了闭包函数inner



from threading import Thread    # 线程类Thread
from time import sleep

def sing(mvg):
    while True:
        print(mvg)
        sleep(1)

def dance(mvg):
    while True:
        print(mvg)
        sleep(1)

# 开启线程
Thread(target=sing,args=('我在唱歌，啦啦啦',)).start()      
Thread(target=dance,kwargs={'mvg':'我在跳舞，怒怒怒'}).start()



