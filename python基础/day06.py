

# from package_python import module01
# from package_python import module02

# module01.func01_info()
# module02.func02_info()

# import package_python.module01
# import package_python.module02
# package_python.module01.func01_info()
# package_python.module02.func02_info()

# from package_python import *

# module01.func01_info()







# 工具包
from my_utils import str_util as s
from my_utils import file_util as f

my_str = 'itheima itcast'
print(f'翻转前的字符串是{my_str},翻转后：{s.str_reverse(my_str)}')
print(f'切片前的字符串是{my_str},切片后：{s.substr(my_str,2,10)}')


f.print_file_info('./p_测试读取文本/case04.txt')

# f.print_file_info('./p_测试读取文本/case05.txt')

f.append_to_file('./p_测试读取文本/case04.txt','shun haoming')






