# import datetime
# time = datetime.datetime.now()
# print(f'时间是：{time}')
# print(f"时间是：{time.strftime('%Y-%m-%d %H:%M:%S')}")


# my_list = ['黑马程序员','传智播客','黑马程序员','传智播客','itheima','itcast','itheima','itcast','best']

# my_set = set()

# for i in my_list:
#     my_set.add(i)


# print(f'列表是：{my_list}')
# print(f'集合是：{my_set}')
# for i in my_set:
#     print(f"{i}  ",end='')


my_dict = {'name':['王力鸿','周杰轮','林俊节','张学油','刘德华'],
           'department':['科技部','市场部','市场部','科技部','市场部'],
           'salary':[3000,5000,7000,4000,6000],
           'level':[1,2,3,1,2]
           }

print(f'修改前的公司：{my_dict}')

for i in range(len(my_dict['level'])):
    if my_dict['level'][i] == 1:
        my_dict['level'][i] += 1
        my_dict['salary'][i] += 1000

print(f'修改后的公司：{my_dict}')





