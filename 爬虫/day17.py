
# # 折线图
# from pyecharts.charts import Line
# from pyecharts.options import *
# # 创建折线图对象
# line = Line()
# # 添加x轴数据
# line.add_xaxis(["中国","美国","英国"])
# # 添加y轴数据
# line.add_yaxis("GDP",[30,20,10])
# # # 反转x轴和y轴
# # line.reversal_axis()
# # 设置全局选项
# line.set_global_opts(
#     title_opts=TitleOpts(title="GDP展示",pos_left="center",pos_bottom="1%"),     # 标题
#     legend_opts=LegendOpts(is_show=True),       # 图例（默认也是打开的）
#     toolbox_opts=ToolboxOpts(is_show=True),     # 工具栏
#     visualmap_opts=VisualMapOpts(is_show=True)  # 视觉映射
# )
# # 绘图
# line.render()

## 多折线图
# from pyecharts.charts import Line
# from pyecharts.options import *

# line = Line()
# line.add_xaxis(["中国","美国","英国"])
# # is_smooth=True  平滑
# # label_opts=LabelOpts(is_show=False)  不显示y轴的数值
# line.add_yaxis("GDP",[30,20,10],is_smooth=True,label_opts=LabelOpts(is_show=False))

# # line.add_xaxis(["中国","美国","英国"])    # 相同的x轴数据，不需要重复添加（add）
# line.add_yaxis("GDP2",[40,30,20],is_smooth=True,label_opts=LabelOpts(is_show=False))

# line.set_global_opts(
#     title_opts=TitleOpts(title="GDP展示",pos_left="center",pos_bottom="1%"),     # 标题
#     legend_opts=LegendOpts(is_show=True),       # 图例（默认也是打开的）
#     toolbox_opts=ToolboxOpts(is_show=True),     # 工具栏
#     visualmap_opts=VisualMapOpts(is_show=True)  # 视觉映射
# )
# line.render()


# # 柱状图
# from pyecharts.charts import Bar
# from pyecharts.options import *
# from pyecharts.globals import ThemeType

# # 创建柱状图对象
# bar = Bar(
#     init_opts=InitOpts(  # 修改初始化配置
#         theme=ThemeType.VINTAGE,      # 设置主题为VINTAGE
#         width="80%",          # 设置图表宽度为页面80%
#         height="700px"        # 设置固定高度
#     )
# )

# # 添加x轴数据
# bar.add_xaxis(["中国","美国","英国"])

# # 添加y轴数据
# bar.add_yaxis("GDP",[30,20,10],label_opts=LabelOpts(position="right"))  # 标签显示在右侧

# # 反转x轴和y轴
# bar.reversal_axis()
# # 设置全局选项
# bar.set_global_opts(
#     title_opts=TitleOpts(title="GDP展示",pos_left="center",pos_bottom="1%"),     # 标题
#     legend_opts=LegendOpts(is_show=True),       # 图例（默认也是打开的）
#     toolbox_opts=ToolboxOpts(is_show=True),     # 工具栏
# )
# # 在绘图前添加JS代码调整布局
# bar.add_js_funcs(
#     """
#     document.body.style.display = 'flex';
#     document.body.style.justifyContent = 'center';
#     document.body.style.alignItems = 'center';
#     document.body.style.minHeight = '100vh';
#     """
# )
# # 绘图
# bar.render()


# # 饼图
# from pyecharts.charts import Pie
# from pyecharts.options import *
# from pyecharts.globals import ThemeType

# # 创建饼图对象
# pie = Pie(
#     init_opts=InitOpts(  # 修改初始化配置
#         theme=ThemeType.VINTAGE,      # 设置主题为VINTAGE
#         width="80%",          # 设置图表宽度为页面80%
#         height="700px"        # 设置固定高度
#     )
# )

# # 添加数据 
# # 第一个参数为空字符串，因为饼图没有x轴。
# # 第二个参数是一个列表，每个元素是一个元组，包含标签和对应的值。
# pie.add(
#     "",
#     [("A",10),("B",20),("C",30),("D",40)],
#     # radius=["30%", "75%"],  # 设置内外半径
#     label_opts=LabelOpts(
#         formatter="{d}%",  # 显示名称和百分比
#         position="inside",  # 将标签显示在扇形内部
#         color="#fff"  # 设置标签文字颜色为白色
#         # font_size=14  # 设置标签文字大小
#         # font_weight="bold"  # 设置标签文字加粗
#     )
# )


# # 设置全局选项
# pie.set_global_opts(
#     title_opts=TitleOpts(title="饼图示例",pos_left="center",pos_bottom="1%"),     # 标题
#     legend_opts=LegendOpts(is_show=True),       # 图例（默认也是打开的）
#     toolbox_opts=ToolboxOpts(is_show=True),     # 工具栏  
# )
# # 绘图
# pie.render()



# # pySpark ： 大数据分析（对海量的数据进行分布式计算）
# from cgitb import text
# from pyspark import SparkConf, SparkContext

# import os
# os.environ['PYSPARK_PYTHON'] = "E:/浏览器下载/python123/python.exe"   # 配置python环境

# # 创建SparkConf对象，设置Spark运行环境为本地模式，设置应用名称为test_spark
# conf = SparkConf().setMaster("local[*]").setAppName("test_spark")  

# sc = SparkContext(conf=conf)   # 创建SparkContext对象，传入SparkConf对象

# # 输入数据
# rdd = sc.parallelize([1,2,3,4,5])
# # rdd = textFile("路径")   # 读取文件，返回RDD对象

# # 数据计算
# # rdd = rdd.map(lambda x: x * 2)   # 对RDD中的每个元素进行映射，将每个元素乘以2
# # rdd = rdd.flatMap(lambda x: [x, x])   # 对RDD中的每个元素进行映射，将每个元素转换为一个列表，然后将这些列表展开成一个新的RDD
# # rdd = rdd.filter(lambda x: x > 3)   # 对RDD中的每个元素进行过滤，只保留大于3的元素
# # rdd = rdd.reduceByKey(lambda a, b: a + b)   # 对RDD中的每个元素进行分组，将相同的键的值进行合并，使用指定的函数进行合并
# rdd = rdd.distinct()   # 对RDD中的每个元素进行去重，只保留不同的元素
# rdd = rdd.sortBy(lambda x: x,ascending=False,numPartitions=1)   # 对RDD中的每个元素进行排序，按照指定的函数进行排序

# # 输出结果
# print(rdd.collect())   # 将RDD中的所有元素收集到本地，返回一个列表
# print(rdd.take(2))   # 返回RDD中的前两个元素，返回一个列表
# print(rdd.count())   # 返回RDD中的元素个数
# print(rdd.reduce(lambda a, b: a + b))   # 对RDD中的元素进行归约，使用指定的函数进行归约,返回一个值

# sc.stop()   # 停止SparkContext对象，释放资源


# # 在 BeautifulSoup 中， find_all() 和 findAll() 是完全相同的方法，没有任何区别。它们只是同一个方法的两种不同写法。
# from bs4 import BeautifulSoup
# bs = BeautifulSoup(open("test.html","r",encoding="utf-8"),"lxml")
# bs.findAll("div",class_="item")    # 查找所有class="item"的div标签
# bs.find_all("div",class_="item")    # 查找所有class="item"的div标签
# # findAll()方法返回的是一个列表，列表中的每个元素都是一个Tag对象，Tag对象表示一个HTML标签。
# # find_all()方法返回的也是一个列表，列表中的每个元素也是一个Tag对象，Tag对象表示一个HTML标签。


s = "<em>Python</em>"
print(s.replace("<em>","").replace("</em>","") )



# # 爬虫
# import requests
# from bs4 import BeautifulSoup
# from lxml import etree

# # headers 在网络的标头上复制即可
# requests.get(url=url,headers=headers,params=params)
# requests.post(url=url,headers=headers,params=params,data=data)

# BeautifulSoup(res.text,'lxml')
# BeautifulSoup(res.text,'html.parser')
# etree.HTML(res.text)

# find find_all select
# xpath

# res.text  res.content  res.json()

# data.img  data['href'] data.text

 


