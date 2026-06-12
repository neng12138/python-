
# import requests
# from lxml import etree

# url = 'https://tieba.baidu.com/p/9630217144?frwh=index'

# res = requests.get(url=url).text     # 可以直接找到

# data = etree.HTML(res)      # 解析为html文档

# image_url_all = data.xpath('//img[@class="BDE_Image"]/@src')    # xpath寻找元素

# # print(image_url)

# for index,image_url in enumerate(image_url_all):
#     if index == 10 :        # 只取10张图片
#         break
    
#     image_content = requests.get(image_url).content             # 获取图片

#     image_name = './爬虫_image/image_'+str(index)+'.jpg'       # 设置图片存储位置
#     with open(image_name,'wb') as f:
#         f.write(image_content)


# import requests
# from bs4 import BeautifulSoup

# url = 'https://tieba.baidu.com/p/9630217144?frwh=index'

# res = requests.get(url=url).text

# bs = BeautifulSoup(res,'lxml')

# # python中class关键字已存在,因此要用'class_'代表html文档中的class属性
# data_list = bs.findAll('img',class_='BDE_Image')    
# # data_list = bs.select('.BDE_Image')               # select用css选择器

# print(data_list)

# for index,data in enumerate(data_list):
#     image_url = data['src']         # 所有标签内的img的url地址
#     image_content = requests.get(image_url).content

#     image_name = './爬虫_image/image_'+str(index)+'.jpg'    # 设置图片存储位置

#     with open(image_name,'wb') as f:
#         f.write(image_content)



# 请求头信息： host user-agent accept referer cookie
 
# status_code :  200-成功  403-服务器不给予执行  404-资源出错，找不到

# requsets网络请求库:   get-请求资源    post-发送数据，请求资源
import requests

# get请求
res = requests.get(url='',headers={},params={})

# post请求
res = requests.post(url='',headers={},params={},data={})  # data-(form_data) : 表单参数

# headers =>  在网络(network)的标头(headers)上复制
headers = {
    'user-agent':'Mozilla/5.0'        # 通常都是user-agent对不上
}
# header,params,data 都是字典类型的(键值对)


# 获取资源： text-文本，源代码  content-二进制流  json()-json类型
print(res.text)
print(res.content)
print(res.json())
# ecoding-编码方式（可以直接赋值修改）   
res.encoding = 'utf-8'

# content ->  open()中mode的'rb'和'wb'对应二进制流的读写
#（二进制流 =>  视频，音乐，图片，文档）


# BeautifulSoup解析
from bs4 import BeautifulSoup

# BeautifulSoup（ 网页源代码 ，'解析器' ）  =>  获取html格式文档对象
# 解析器：html.parser   lxml
bs = BeautifulSoup(res.text,'html.parser')
bs = BeautifulSoup(res.text,'lxml')

# 查询html文档： find  findall  select
# find（'标签名'，属性 = '属性值' ）
data = bs.find('div',class_='DBE_image')       # class_ => html的class 

# findall（'标签名'，属性 = '属性值' ）
data = bs.findAll('div',class_='DBE_image')     # 返回列表

# select （ 'css选择器' ）      
data = bs.select('.DEB_image')      #  标签名->标签名  id-> #id值   class-> .class值

# 通过find,findall,select 可以定位到html文档中的元素，精准获取资源


# html文档内容的摘取 ： 
# 进入子标签
data_img = data.img      # 进入data中的img标签内

# 获取当前标签的属性值
data_src = data['src']      # 获取data标签的src属性的值

# 获取当前标签的内容
data_content = data.text    # 获取data标签内的内容




# lxml解析    ------    lxml解析与BeautifulSoup解析原理一样
# 导入lxml模块
from lxml import etree

# etree.HTML（ 网页源代码 ）     =>   获取html格式文档对象
html = etree.HTML(res.text)


# xpath : 用来确定html文档中元素位置的语言（XML的一种路径语言）

# xpath（ '指定元素xpath路径' ）    ----------     返回列表（list）

# xpath（）方法中的特殊方法 => text()-获取内容  contains()-包含
data = html.xpath('//img[@class="BDE_image"]/@src')
# data = html.xpath('//li/a/text()')
# data = html.xpath('//li/@class')
# data = html.xpath('//li/a[text()="first item"]')      # []通常是判断（筛选）
# data = html.xpath('//li/a[contains(text(),"item")]')


# html文档内容的摘取 ： 
# 进入子标签
data_img = data.img      # 进入data中的img标签内    ---- xpath中等价于 /img

# 获取当前标签的属性值
data_src = data['src']      # 获取data标签的src属性的值     ---- xpath中等价于 /@src

# 获取当前标签的内容
data_content = data.text    # 获取data标签内的内容      ---- xpath中等价于 /text()


# BeautifulSoup解析 : find,findall,select后,对数据继续处理

# lxml解析 : xpath后，对数据处理

# xpath 比 find,findall,select 更灵活，查询得更精准



