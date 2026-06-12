# def avs():
#     return 1,2
    
# print(avs()[0])
# print(avs()[1])

# print(type(avs()))

# x,y = avs()
# print(x)
# print(y)


# def func(compute):
#     result = compute(1,2)
#     print(f'result is : {result}')

# func(lambda x,y: x+y)

# func(lambda x,y: x*y)

# # func(lambda x,y: print(x,y))

# count = 0
# with open('./p_测试读取文本/case.txt','r',encoding='utf-8') as f:
#     for i in f:             # for循环每次读取一行数据
#         i = i.strip()
#         # i = i.replace('\n','')
#         my_list = i.split(' ')
#         for j in my_list:
#             if j == 'itheima':
#                 count += 1
        

# print(f'itheida 出现的次数是: {count}')


# with open('./p_测试读取文本/case.txt','r',encoding='utf-8') as f:
#     element = f.read()
#     count = element.count('itheima')
#     print(f'itheida 出现的次数是: {count}')


# with open('p_测试读取文本/case.txt','r',encoding='utf-8') as f:
#     for i in f:
#         i = i.strip()
#         if 'itcast' not in i:
#             with open('p_测试读取文本/case02.txt','a',encoding='utf-8') as file:
#                 file.write(i+'\n')

# f = open('p_测试读取文本\case.txt','r',encoding='utf-8')
# file = open('p_测试读取文本\case03.txt','a',encoding='utf-8')
# for i in f:
#     i = i.strip()
#     if 'itcast' in i:
#         file.write(i+'\n')
# file.close()
# f.close()

# def func1():
#     print("func1开始了")
#     1 / 0                   # 异 常
#     print("func1结束了")

# def func2():
#     print("func2开始了")
#     func1()
#     print("func2结束了")

# def main():
#     try:
#         func2()
#     except Exception as e:          # 捕获异常
#         print(f'出现异常，异常的内容是：{e}')

# main()



# # import case01                   # 调用模块时会自动执行模块内的所有的执行代码
# # from case01 import func1
# from case01 import *


# func1(1,2)
# # func2(2,1)


# # if __name__ == '__main__':



# lambda x,y: x+y


with open('p_测试读取文本\case.txt','r',encoding='utf-8') as f:
    for i in f:
        i = i.strip()
        print(f'{i}')
    # element = f.read()
    # print(f'{element}')




