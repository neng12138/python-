
# # import json
# # my_list = [{'name':'张三','age':13},{'name':'李四','age':11},{'name':'王五','age':17}]

# # str_json = json.dumps(my_list,ensure_ascii=False)
# # print(type(str_json))
# # print(str_json)

# # my_dict = {'name':'王小怪','age':20}

# # str_json = json.dumps(my_dict,ensure_ascii=False)
# # print(type(str_json))
# # print(str_json)

# # #  -----------------------------

# # s = '[{"name": "张三", "age": 13}, {"name": "李四", "age": 11}, {"name": "王五", "age": 17}]'

# # l = json.loads(s)
# # print(type(l))
# # print(l)

# # s = '{"name":"王小怪","age":20}'

# # d = json.loads(s)
# # print(type(d))
# # print(d)


# from pyecharts.charts import Line
# line = Line()
# line.add_xaxis(["中国","美国","英国"])
# line.add_yaxis("GDP",[20,30,10])
# line.render()

# from pyecharts.charts import Map
# from pyecharts.options import VisualMapOpts
# map = Map()
# data = [
#     ("北京",99),
#     ("湖南",199),
#     ("湖北",299),
#     ("广东",399),
#     ("上海",499),
#     ("台湾",599)
# ]
# map.add("测试地图",data,"china")

# map.set_global_opts(
#     visualmap_opts=VisualMapOpts(
#         is_show=True,
#         is_piecewise=True,
#         pieces=[
#             {"min":1,"max":99,"label":"1-99","color":"#234234"},
#             {"min":100,"max":199,"label":"100-199","color":"#456456"},
#             {"min":200,"max":299,"label":"200-299","color":"#789789"},
#             {"min":300,"max":399,"label":"300-399","color":"#ABCABC"},
#             {"min":400,"max":499,"label":"400-499","color":"#DEFDEF"},
#         ]
#     )
# )

# map.render()


# from pyecharts import options as opts
# from pyecharts.charts import Geo
# from pyecharts.faker import Faker

# c = (
#     Geo()
#     .add_schema(maptype="china")
#     .add("geo", [list(z) for z in zip(Faker.provinces, Faker.values())])
#     .set_series_opts(label_opts=opts.LabelOpts(is_show=False))
#     .set_global_opts(
#         visualmap_opts=opts.VisualMapOpts(is_piecewise=True),
#         title_opts=opts.TitleOpts(title="Geo-VisualMap（分段型）"),
#     )
#     .render("geo_visualmap_piecewise.html")
# )



# def func1(*args):       # 元组不定长参数
#     print(args)

# def func2(**my_dict):       # 字典不定长参数
#     print(my_dict)

# func1()
# func1(2,3,4,5)
# func1((2,3,4,5))

# func2()
# func2(**{})
# func2(**{'name':'张三','age':11})



# from pyecharts.charts import Bar,Timeline
# from pyecharts.options import *
# from pyecharts.globals import ThemeType

# bar1 = Bar()
# bar1.add_xaxis(["中国","美国","英国"])
# bar1.add_yaxis("GDP",[20,30,10],label_opts=LabelOpts(position="right"))
# bar1.reversal_axis()         # 坐标翻转

# bar2 = Bar()
# bar2.add_xaxis(["中国","美国","英国"])
# bar2.add_yaxis("GDP",[40,35,20],label_opts=LabelOpts(position="right"))
# bar2.reversal_axis()         # 坐标翻转

# bar3 = Bar()
# bar3.add_xaxis(["中国","美国","英国"])
# bar3.add_yaxis("GDP",[70,55,40],label_opts=LabelOpts(position="right"))
# bar3.reversal_axis()         # 坐标翻转

# bar4 = Bar()
# bar4.add_xaxis(["中国","美国","英国"])
# bar4.add_yaxis("GDP",[80,70,55],label_opts=LabelOpts(position="right"))
# bar4.reversal_axis()         # 坐标翻转


# timeline = Timeline({"theme":ThemeType.LIGHT})
# timeline.add(bar1,"2020")
# timeline.add(bar2,"2021")
# timeline.add(bar3,"2022")
# timeline.add(bar4,"2023")

# timeline.add_schema(
#     play_interval=1000,         # 间隔时间
#     is_timeline_show=True,
#     is_auto_play=True,
#     is_loop_play=True
# )


# timeline.render()


# list = [['name','a',11],['age','c',31],['sex','b',21]]

# # def sort_choice(element):           # 用有名函数进行排序
# #     return element[2]

# # list.sort(key=sort_choice,reverse=True)
# # print(list)

# list.sort(key=lambda element:element[2],reverse=True)   # 用lambda表达式进行排序(等价)
# print(list)


# with open('p_测试读取文本\case04.txt','r',encoding='utf-8') as f:
#     data_line = []
#     for i in f:
#         i = i.strip()
#         data_line.append(i)


# print(data_line)

# list = [1,2,3,4,5]
# list.reverse()
# print(list)

# class Student:
#     name = None
#     gender = None
#     age = None

#     def __init__(self):     # 默认构造方法
#         pass

#     # def __init__(self,name,gender,age):     # 构造方法（构造器）
#     #     self.name = name
#     #     self.gender = gender
#     #     self.age = age


# stu_1 = Student()
# stu_1.name = "张三"
# stu_1.gender = "男"
# stu_1.age = 15
# print(stu_1)
# print(stu_1.name)
# print(stu_1.gender)
# print(stu_1.age)

# # stu_2 = Student("李敏","女",17)
# # print(stu_2)
# # print(stu_2.name)
# # print(stu_2.gender)
# # print(stu_2.age)


# class Student:
#     name = None

#     def func_hi(self):
#         print(f'hi,你们好,我是{self.name},很高兴见到你们！')
    
#     def func_hello(self,msg):
#         print(f'hi,你们好,我是{self.name},{msg}')

# stu_1 = Student()
# stu_1.name = "周杰轮"
# stu_1.func_hi()
# stu_1.func_hello('不错哟~')

# print('-------------------------------')

# stu_2 = Student()
# stu_2.name = "林俊节"
# stu_2.func_hi()
# stu_2.func_hello('小伙子我看好你！')



# class Student:
#     # name = None
#     # age = None
#     # address = None

#     def __init__(self,name,age,address):
#         self.name = name
#         self.age = age
#         self.address = address
#         print("Student类的类对象创建成功 ~ ~")
    
#     def show(self):
#         print(f'信息为：【学生的姓名：{self.name},年龄：{self.age}，地址：{self.address}】')

# for i in range(3):
#     name = input('请输入学生的姓名：')
#     age = input('请输入学生的年龄：')
#     address = input('请输入学生的地址：')
#     stu = Student(name,age,address)
#     print(f'学生{i+1}的信息已录入完毕',end='')
#     stu.show()
#     print(f'当前录入{i+1}为学生的信息, 总共需要录入3位学生的信息')


# class Student:
#     name = None
#     gender = None
#     age = None

#     def __init__(self,name):     # 默认构造方法
#         self.name = name

#     # def __init__(self,name,gender,age):     # 构造方法（构造器）
#     #     self.name = name
#     #     self.gender = gender
#     #     self.age = age

#     def __str__(self):      # 类对象
#         return f'Student类的信息是: {self.name}'

#     def __eq__(self, value):        # 类对象的比较（相等）
#         return self.age == value.age

# stu_1 = Student('张三')
# print(stu_1)

# stu_2 = Student('王五')
# print(stu_2)

# stu_1.age = 11
# stu_2.age = 22
# print(stu_1 == stu_2)

# stu_1.age = 11
# stu_2.age = 11
# print(stu_1 == stu_2)

# class Student:
#     def __init__(self,name):
#         self.name = name

#     def func_add(self,a,b):
#         print(f'{a+b}')

# stu = Student("李敏")
# stu.func_add(1,2)



# class Phone:
#     __is_5g_enable = False           # 私有变量（__变量名）

#     def __init__(self,__is_5g_enable):
#         self.__is_5g_enable = __is_5g_enable

#     def __check_5g(self):           # 私有方法（__方法名）
#         if self.__is_5g_enable:
#             print('5g开启')
#         else:
#             print('5g关闭,使用4g网络')

#     def call_by_5g(self):
#         self.__check_5g()
#         print('正在通话中~~~')


            
# phone = Phone(True)
# # print(phone.__is_5g_enable)
# # phone.__check_5g()
# phone.call_by_5g()


# class MISC:
#     mi_type = '10001'

#     def read_MI(self):
#         print('read-----')

#     def write_MI(self):
#         print('write-----')

# class Phone:
#     producter = 'ITCAST'
#     ph_type = '11001'

#     def call_5g(self):
#         print('5g通信中-----')


# class Laser:
#     producter = 'HM'
#     la_type = '10101'

#     def move_laser(self):
#         print('发送镭射信号中------')


# class Person(MISC,Phone,Laser):     # 继承优先级：MISC > Phone > Laser
#     # pass          # 空语句
#     producter = 'NEW ITCAST AND HM'     # 复写变量

#     def call_5g(self):               # 复写方法
#         print('5g手机新功能------')
#         # Phone.call_5g(self)
#         # print(f'父类的 producter: {Phone.producter}')
#         super().call_5g()
#         print(f'父类的 producter: {super().producter}')




# person = Person()

# # person.read_MI()
# # person.write_MI()

# person.call_5g()

# # person.move_laser()

# print(person.producter)     # 重名是用继承优先级高的父类


value_1 : int = 1
value_2 : str = 'itcast'
value_3 : float = 11.11
value_4 : bool = True

my_list : list[int] = [1,2,3]
my_tuple : tuple[int,str,bool] = (1,'itcast',True)        # tuple写好每个
my_dict : dict[str,int] = {'itcast':123}      # key , value
my_set : set[int] = {1,2,3}

class Student:
    pass
stu : Student = Student()

def func():
    return 10
func_mvc : int = func()

import random
msc : int = random.randint(1,10)

import json
mvc : dict = json.loads('{"name":"itheima"}')


my_list = [1,2,3]        # type : list[int]
my_tuple = (1,'itcast',True)      # type : tuple[int,str,bool]
my_dict = {'itcast':123}        # type : dict[str,int]
my_set = {1,2,3}        # type : set[int]

class Student:
    pass
stu  = Student()        # type : Student



def func(data:list) -> list:
    return data

mvc = func([1,2,3])
print(mvc)