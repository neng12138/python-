
# from typing import Union

# my_list : list[int] = [1,2,3]
# my_list : list[Union[int,str]]  = [1,'itcast',2,'itheima']

# my_dict : dict[str,int] = {'itcast':123}
# my_dict : dict[str,Union[int,str]] = {'itcast':123,'itheima':456}

# def func(data : int) -> int :
#     pass
# def func(data : Union[int,str]) -> Union[int,str] :
#     pass


# func(1)


# class Animal:           # 抽象类
#     def speak(self):
#         pass

# class Cat(Animal):
#     def speak(self):
#         print('喵喵喵~~~')

# class Dog(Animal):
#     def speak(self):
#         print('汪汪汪~~~')


# def noise_speak(animal : Animal):
#     animal.speak()


# cat = Cat()
# noise_speak(cat)
# dog = Dog()
# noise_speak(dog)



# class Ac:                   # 抽象类
#     def cold_wind(self):
#         pass
    
#     def hot_wind(seld):
#         pass

#     def battery(self):
#         pass


# class Midea_AC(Ac):
#     def cold_wind(self):
#         print('美的空调冷风')

#     def hot_wind(seld):
#         print('美的空调热风')

#     def battery(self):
#         print('美的空调电池')


# class Geli_AC(Ac):
#     def cold_wind(self):
#         print('格力空调冷风')

#     def hot_wind(seld):
#         print('格力空调热风')

#     def battery(self):
#         print('格力空调电池')


# def choice_wind(ac : Ac):      # 类型注释，多态
#     ac.cold_wind()
#     ac.hot_wind()

# def choice_battery(ac : Ac):        # 类型注释，多态
#     ac.battery()


# midea_ac = Midea_AC()
# choice_wind(midea_ac)
# choice_battery(midea_ac)

# print('--------------------------')

# geli_ac = Geli_AC()
# choice_wind(geli_ac)
# choice_battery(geli_ac)



# list_1  = [1,2,3]
# list_2  = [4,5,6]

# list_3  = list_1 + list_2
# print(list_3)


# my_dict = {'itheima':123,'itcast':456}
# print(list(my_dict.keys())) 

# for i in my_dict.keys():        # dict.keys() =>  默认放在元组中的
#     print(i)


# print(list(my_dict.values())) 

# for i in my_dict.values():        # dict.values() =>  默认放在元组中的
#     print(i)



# import pymysql
# conn = pymysql.Connection(
#     host='localhost',       # 主机（IP地址）
#     port=3306,              # 端口号
#     user='root',            # 用户名
#     password='123456'       # 密码
# )
# # print(conn.get_server_info)

# cursor = conn.cursor()

# conn.select_db("user_test")

# cursor.execute(""" select * from test_pymysql; """)

# my_tuple : tuple = cursor.fetchall()
# print(my_tuple)
# for i in my_tuple:
#     print(i)

# cursor.close()
# conn.close()        


# from pymysql import Connection

# conn = Connection(
#     host='localhost',
#     port=3306,
#     user='root',
#     password='123456',
#     autocommit=True         # 自动提交
# )

# cursor = conn.cursor()      # 设立游标

# conn.select_db("user_test")         # 使用库

# cursor.execute(" insert into employee values(9,'旺季','男','124356629104426756'); ")

# # my_tuple:tuple = cursor.fetchall()        # 获取返回的数据（元组套元组）
# # for i in my_tuple:
# #     print(i)

# # conn.commit()       # 提交修改库的数据

# cursor.close()
# conn.close()


# from pymysql import Connection

# conn = Connection(
#     host='localhost',
#     port=3306,
#     user='root',
#     password='123456',
#     autocommit=True
# )

# cursor = conn.cursor()

# conn.select_db('user_test')

# cursor.execute(" create table if not exists  test_pymysql( name varchar(10),gender char(1),age int );")

# for i in range(3):
#     name = input('请输入姓名：')
#     gender = input('请输入性别：')
#     age = int(input('请输入年龄：'))

    
#     sql = f""" insert into test_pymysql values('{name}','{gender}',{age}); """

#     cursor.execute(sql)
#     print('插入成功 ~ ~ ~')

# cursor.close()
# conn.close()



# from pyspark import SparkConf,SparkContext

# conf = SparkConf().setMaster("local[*]").setAppName("test_spark_app")

# sc = SparkContext(conf=conf)

# print(sc.version)

# sc.stop()

# # 字符串转换为列表
# my_str = 'abc123def527'
# # my_list = list(my_str)      # 1.list() -- 直接将字符串转换为列表
# # print(my_list)

# my_list = my_str.split('2')     # 2. split()  -- 分割字符串为列表
# print(my_list)

# 列表转换为字符串
my_list = ['1','2','3','a','b','c''d','e','f']
# print(my_list)
my_str = ''.join(my_list)   # ''.join()或"".join() --- 将列表拼接为字符串
# 列表中只能有字符串，因为py中字符串+拼接无隐式转换，只能是字符串拼接字符串
print(my_str)



# my_dict = {
#     'name':'zs',
#     'age':18,
#     'gender':'男'
# }
# print(my_dict)  
# print(len(my_dict))        # 输出的是字典的长度(键值对的个数)  
# print(my_dict.keys())          # 输出的是dict_keys(['name', 'age', 'gender'])
# for i in my_dict.keys():        # 遍历的是字典的key值
#     print(i)        
# print(my_dict.values())        # 输出的是dict_values(['zs', 18, '男'])
# for i in my_dict.values():      # 遍历的是字典的value值
#     print(i)


# PI = 3.14159
# print(PI)
# print(f'{PI : <.2f}')
# print(round(PI,4))          # py中round的方法与mysql一样 round(变量,保留的小数个数)

# num1 = input('请输入第一个数字：')   # 输入的是字符串（input输入的全是str）
# num2 = input('请输入第二个数字：')
# num3 = input('请输入第三个数字：')
# print(f'三个数字的和为：{num1+num2+num3}')   # 字符串的拼接
# print(f'三个数字的和为：{int(num1)+int(num2)+int(num3)}')   # 类型转换

# print(1 + 1)   # 2
# print('1' + '1')   # 11
# print(str(1) +'1')   # 11  （字符串的拼接是有其中的一方为字符串）

# if 2<num<3:      # 2<num<3  =>  num>2 and num<3  =>  2<num and num<3  =>  2<num<3
#     print('num在2和3之间')

