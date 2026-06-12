
# import re

# s = 'python itheima itcast python java itcast flask'

# re_m = re.match('python',s)     # match ： 重头开始匹配（只匹配一个）
# print(re_m)
# print(re_m.span())
# print(re_m.group())

# print('------------------')

# re_r = re.search('itcast',s)    # search :  全局匹配（只匹配一个）
# print(re_r)
# print(re_r.span())
# print(re_r.group())

# print('------------------')

# re_f = re.findall('python',s)   # findall : 全局匹配（匹配所有匹配到的字符串）
# print(re_f)     # type : list



# import re

# # 正则表达式

# r = r'[0-9a-zA-Z]{6,10}'
# s = '1234567 a1234567 123ab456 12345'
# print( re.findall(r,s) )

# r = r'^[0-9a-zA-Z]{6,10}$'
# s = '123456789aaaaaa'
# print( re.findall(r,s) )

# print('----------------------------')

# r = r'[1-9]\d{5,10}'    # r'[1-9][0-9]{5,10}'
# s = '123123 123123123 123a456'
# print( re.findall(r,s) )

# r = r'^[1-9]\d{5,10}$'    # r'[1-9][0-9]{5,10}'
# s = '0123123'
# print( re.findall(r,s) )

# r = r'^[1-9]\d{5,10}$'    # r'[1-9][0-9]{5,10}'
# s = '123123123123'
# print( re.findall(r,s) )

# print('---------------------------')

# r = r'([\w-]+(\.[\w-]+)*@(qq|163)(\.[\w-]+)+)'
# s = '2978705432@qq.com'
# # s = '2978705432@qqq.com'
# # print( re.findall(r,s) )
# print( re.match(r,s).group() )




# import re

# s = 'itcast python ithema python itcast'

# print( re.match('python',s) )       # None : match是从头开始匹配的
# print( re.match('itcast',s) )
# print( re.match('itcast',s).group() )

# print('-----------------------------------')

# print( re.search('python',s) )      # search是全局匹配
# print( re.search('itcast',s) )
# print( re.search('itcast',s).group() )

# # match 和 search 都是只匹配一个匹配值
# # match => 从头开始         search => 全局匹配

# print('-----------------------------------')

# print( re.findall('python',s) )     # findall是全局匹配
# print( re.findall('itcast',s) )

# # findall 是匹配所有符合的匹配值，返回一个列表
# # 但findall不能像match和search一样返回匹配值对应的下标



import re

# 元字符 : . \d \D \w \W \s \S 
s1 = '123abc'
print( re.findall(r'.',s1) )    # . =>  任意字符

s2 = '123abc'
print( re.findall(r'\d',s2) )   # \d => 数字（0-9）

s2 = '123abc'
print( re.findall(r'\D',s2) )   # \D => 非数字

s3 = '123abc$'
print( re.findall(r'\w',s3))    # \w => 单词字符（0-9 a-z A-Z _）

s3 = '123abc$'
print( re.findall(r'\W',s3))    # \W => 非单词字符

s4 = '123 abc'
print( re.findall(r'\s',s4))    # \s => 空格、tab键

s4 = '123 abc'
print( re.findall(r'\S',s4))    # \S => 非空格


print('--------------------------------------')


# 数量匹配 ：? * + {m} {m,} {m,n}

s5 = '123456'
print( re.findall(r'\d?',s5))   # ? => 0 或 1 个

s5 = '123456'
print( re.findall(r'\d*',s5) )  # * => 0 或 无数 个

s5 = '123456'
print( re.findall(r'\d+',s5) )  # + => 1 或 无数 个

s6 = '123abc456'
print( re.findall(r'\d{3}',s6) )    # {m} => 正好出现m个

s6 = '123abc456'
print( re.findall(r'\d{2,}',s6) )    # {m,} => 至少出现m个

s6 = '123abc456'
print( re.findall(r'\d{2,3}',s6) )    # {m,n} => 至少出现m个 且 最多出现n个


print('-----------------------------')


# 边界匹配 ： ^ $

# ^ => 匹配字符串的开头（整个字符串）     
# $ => 匹配字符串的结尾（整个字符串）

s7 = '123abc 456def'
# print( re.findall(r'\w+',s7) )
print( re.findall(r'\d{3}[a-zA-Z]{3}',s7) )    # 全局匹配（截取子字符串）

s7 = '123abc 456def'
# print( re.findall(r'^\w+$',s7) )
print( re.findall(r'^\d{3}[a-zA-Z]{3}$',s7) )   # 整体字符串匹配（匹配整个字符串）



