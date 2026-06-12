
# from pyspark import SparkConf,SparkContext

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark_app')

# sc = SparkContext(conf=conf)

# print(sc.version)

# sc.stop()


# my_str = '123456'
# print(list(my_str))

# my_set = {1,2,3,4,5}
# print(list(my_set))

# my_dict = {'key1':1,'key2':2,'key3':3}
# print(list(my_dict))



# from pyspark import SparkConf,SparkContext

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# # # 容器输入
# # rdd1 = sc.parallelize([1,2,3,4,5])        # 都会转为list
# # rdd2 = sc.parallelize((1,2,3,4,5))
# # rdd3 = sc.parallelize({1,2,3,4,5})
# # rdd4 = sc.parallelize("12345")
# # rdd5 = sc.parallelize({'key1':1,'key2':2,'key3':3})

# # print(rdd1.collect())       # RDD对象输出数据
# # print(rdd2.collect())
# # print(rdd3.collect())
# # print(rdd4.collect())
# # print(rdd5.collect())

# # 文件输入
# rdd = sc.textFile('./p_测试读取文本/case04.txt')        # 读取的数据会转为list

# print(rdd.collect())     # RDD对象输出数据

# sc.stop()


# from pyspark import SparkConf,SparkContext

# # 配置pyspark的python环境
# import os
# os.environ['PYSPARK_PYTHON'] = "E:/浏览器下载/python123/python.exe"

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# rdd = sc.parallelize([1,2,3,4,5])       # 创建RDD对象

# # def func(element):
# #     return element*10
# # rdd = rdd.map(func)      # 使用RDD对象的map算子

# rdd = rdd.map(lambda x:x*10).map(lambda x:x+5)      # 使用RDD对象的map算子（链式调用）

# print(rdd.collect())        # 使用RDD对象的collect算子

# sc.stop()


# from pyspark import SparkConf,SparkContext

# import os 
# os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe' 

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# rdd = sc.parallelize(["itheima itcast 666","itcast itheima","shun jump"])

# # rdd = rdd.map(lambda x : x.split(' '))
# rdd = rdd.flatMap(lambda x : x.split(' '))      # flatMap只比map多了解除一层嵌套

# print(rdd.collect())
 
# sc.stop()

# from pyspark import SparkConf,SparkContext

# import os
# os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe'

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# rdd = sc.parallelize([('男',88),('男',77),('女',67),('女',87),('女',47)])     # KV型RDD

# rdd = rdd.reduceByKey(lambda a,b : a+b)     # reduceByKey进行分组并聚合运算

# print(rdd.collect())

# sc.stop()


# from pyspark import SparkConf,SparkContext

# import os
# os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe'

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# rdd = sc.textFile('./p_测试读取文本/case03.txt')

# rdd = rdd.flatMap(lambda x : x.split(' '))       # 字符串的分割

# rdd = rdd.map(lambda x : (x,1))         # 返回二元元组

# rdd = rdd.reduceByKey(lambda a,b : a+b)

# other_list = rdd.collect()
# for i in other_list:
#     print(f'{i[0]}出现的次数是：{i[1]}')


# sc.stop()


# from pyspark import SparkConf,SparkContext

# import os
# os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe'

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# rdd = sc.parallelize([1,2,3,4,5])

# # rdd = rdd.filter(lambda num : num % 2 == 0)     # 偶数
# rdd = rdd.filter(lambda num : num % 2 != 0)     # 奇数

# print(rdd.collect())

# sc.stop()



# from pyspark import SparkConf,SparkContext

# import os
# os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe'

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# rdd = sc.parallelize([1,1,3,3,5,5,7,8,8,9])

# rdd = rdd.distinct()        # 去重操作

# print(rdd.collect())

# sc.stop()



# from pyspark import SparkConf,SparkContext

# import os
# os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe'

# conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

# sc = SparkContext(conf=conf)

# rdd = sc.textFile('./p_测试读取文本/case03.txt')

# rdd = rdd.flatMap(lambda x : x.split(' '))       # 字符串的分割

# rdd = rdd.map(lambda x : (x,1))         # 返回二元元组

# rdd = rdd.reduceByKey(lambda a,b : a+b)

# # other_list = rdd.collect()
# # for i in other_list:
# #     print(f'{i[0]}出现的次数是：{i[1]}')

# # print(rdd.collect())

# # rdd = rdd.sortBy(lambda element:element[1],ascending=False,numPartitions=1)   # 降序
# rdd = rdd.sortBy(lambda element:element[1],ascending=True,numPartitions=1)   # 升序

# print(rdd.collect())

# sc.stop()

from pyspark import SparkConf,SparkContext

import os 
os.environ['PYSPARK_PYTHON'] = 'E:/浏览器下载/python123/python.exe'

conf = SparkConf().setMaster('local[*]').setAppName('test_spark')

sc = SparkContext(conf=conf)

rdd = sc.parallelize([1,2,3,4,5])

my_list : list = rdd.collect()      # 转换为列表返回
print(my_list)
print(type(my_list))

sum = rdd.reduce(lambda a,b : a+b)        # 传函数进行聚合运算,并返回结果
print(sum)

counts = rdd.count()        # 计算RDD数据集内有多少条数据
print(counts)

show : list = rdd.take(3)          # 显示RDD数据集前n条,转换为列表返回
print(show)

sc.stop()
