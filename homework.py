def getSum_of_one():
    str = input('请输入一个正整数：')
    total = sum(int(x) for x in str)
    print('您输入的数字的和为：',total)
    return total

def reverse_str():
    str = input('请输入一个字符串：')
    str = str[::-1]
    print('您输入的字符串的反转结果为：',str)
    return str

def find_max_value():
    str = input('请输入一个列表（用逗号隔开）：')
    list = [int(x.strip()) for x in str.split(',')]     # 列表推导式
    max_value = max(list)
    print('您输入的列表中的最大值为：',max_value)
    return max_value

def convert_to_str_list():
    str = input('请输入一个字符串（用逗号隔开）：')
    list = [x.strip() for x in str.split(',')]     # 列表推导式
    print('您输入的字符串转换为列表后的结果为：',list)
    return list

def odd_even_sort():
    str = input('请输入一个列表（用逗号隔开）：')
    list = [int(x.strip()) for x in str.split(',')]     # 列表推导式
    odd_list = [x for x in list if x % 2 != 0]
    even_list = [x for x in list if x % 2 == 0]
    print('您输入的列表中的奇数和偶数按顺序排列为：',odd_list + even_list)
    return odd_list + even_list


# 1. 不断输入要标注以某个 字符 作为结束符号
def input_until():
    list = []
    while True:
        my_value = input('输入： ')
        if my_value == '':    # 输入空字符串时，结束输入 （直接回车）
            break

        if my_value.strip().isdigit():    # 输入的是数字时，转换为整数并添加到列表中
            list.append(int(my_value.strip()))
        else:
            list.append(my_value.strip())
    print('您输入的列表为：',list)


# 2. Python 的字符串 replace() 和 split() 方法不能直接使用正则表达式规则，它们只能处理固定的字符串。
import re

# re.sub( '正则表达式' , '替换字符串' , '原字符串' )
def replace_str():
    str = input('请输入一个字符串：')
    str = re.sub(r'[\s\[\]]', '', str)
    print('您输入的字符串中所有的字母都被删除后的结果为：',str)
    return str

# re.split( '正则表达式' , '原字符串' )
def split_str():
    str = input('请输入一个字符串：')
    list = re.split(r'[,\s]', str)
    print('您输入的字符串根据逗号或空格分隔后的结果为：',list)
    return list


# 字符串 -> 列表   ：   list = str.split()
# 列表 -> 字符串   ：   str  = ''.join(list)


# 3. 将列表中的元素转换为字符串 -- map()函数
my_list = [1, 2, 3, 4, 888]
print(list(map(str,my_list)))   # ['1', '2', '3', '4', '888']

# 4. 将列表中的元素转换为整数 -- map()函数
my_list = ['1', '2', '3', '4', '888']
print(list(map(int,my_list)))   # [1, 2, 3, 4, 888]

