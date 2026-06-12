# list = [21,25,21,23,22,20]
# # 追加
# list.append(31)
# # list.insert(6,31)
# # list.extend([31])
# print(list)

# # 追加一个列表
# list.extend([29,33,30])
# print(list)

# # 取出第一个元素
# num = list.pop(0)
# print(num)
# # list.remove(21)
# print(list)

# # 取出最后一个元素
# num = list.pop(-1)
# print(num)
# # list.pop(len(list)-1)
# print(list)

# # 查找元素31
# id =  list.index(31)
# print(id)
# print(list)

# list.sort()
# print(list)
# list.sort(reverse=True)
# print(list)


# list = [1,2,3,4,5,6,7,8,9,10]
# list_new_01 = []
# list_new_02 = []

# i = 0
# while i < len(list):
#     element = list[i]
#     if element % 2 == 0:
#         list_new_01.append(element)
#     i += 1
# print(f'while循环后取出所有的偶数: {list_new_01}')

# for element in list:
#     if element % 2 == 0:
#         list_new_02.append(element)
# print(f'for循环后取出所有的偶数: {list_new_02}')




# t = ('周杰轮',11,['football','music'])
# age_index = t.index(11)
# print(f'年龄的下标位置是：{age_index}')

# name = t[0]
# print(f'他的姓名是：{name}')

# print(f'删除前：{t}')
# t[2].pop(0)
# print(f'删除后：{t}')

# print(f'添加前：{t}')
# t[2].append('coding')
# print(f'添加前：{t}')



# str = 'itheima itcast boxuegu'
# print(f'字符串的内容是：{str}')

# it_num = str.count('it')
# print(f'it在字符串中出现的次数是: {it_num}')

# new_str = str.replace(" ","|")
# print(f'修改前的字符串是：{str},修改后的字符串是：{new_str}')

# str_list = new_str.split("|")
# print(f'字符串{new_str}分割成列表后: {str_list}')


str = '万过薪月,员序程马黑来,nohtyp学'
# str_new = str[::-1]
# print(str_new)

str_reverse = str[::-1]
id = str_reverse.index('黑马程序员')

str_new = str_reverse[id:(id+5)]
print(str_new)

list_str = str.split(',')
str_new = list_str[1].replace('来','')
str_reverse = str_new[::-1]
print(str_reverse)

result1 = str[::-1][9:14]
print(f'结果1: {result1}')

result2 = str[5:10][::-1]
print(f'结果2: {result2}')

result3 = str.split(',')[1].replace('来','')[::-1]
print(f'结果3: {result3}')

result3 = str.split(',')[1][4::-1]
print(f'结果3: {result3}')

