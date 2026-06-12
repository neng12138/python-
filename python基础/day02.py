# print("欢迎光临黑马游乐园，儿童免费，成人收费")
# age = int( input("请输入你的年龄：") )
# # name = int(name)
# if age >= 18:
#     print("您已成年，请补票后再游玩")
# else:
#     print("您未成年，欢迎游玩")
# print("祝您游玩愉快")


# print("欢迎来到黑马动物园")
# height = int(input("请输入你的身高(cm): "))
# if height>120 :
#     print("您的身高超过120cm,请买票后再游玩")
# else:
#     print("您的身高未超过120cm,欢迎游玩")
# print("祝您游玩愉快")


# print("欢迎来到黑马动物园")
# if int(input("请输入你的身高(cm): ")) > 120:
#     print("您的身高不超过120cm,欢迎游玩")
# elif int(input("请输入你的VIP等级(1-5): ")) > 3:
#     print("您的VIP等级超过3,欢迎游玩")
# else:
#     print("上述条件您都不满足，请买票再游玩")
# print("祝您游玩愉快")



# # ----  猜数字游戏01
# import random
# random_num = random.randint(0,9)
# if int(input("请猜一个的数字：")) == random_num:
#     print("第一次就猜对了,真厉害！")
# elif int(input("请再猜一次：")) == random_num:
#     print("第二次猜到也不错呢！")
# elif int(input("最后猜一次：")) == random_num:
#     print("终于猜到了！")
# else:
#     print(f"Sorry! 全部猜错了，我想的数字是：{random_num}")


# # ----  猜数字游戏02
# import random
# random_num = random.randint(0,9)
# num = int(input("请猜一个的数字："))
# if num != random_num:
#     if num > random_num:
#         print("猜的太大了！")
#     else:
#         print("猜的太小了！")
#     num = int(input("请再猜一次："))
#     if num != random_num:
#         if num > random_num:
#             print("猜的太大了！")
#         else:
#             print("猜的太小了！")
#         num = int(input("最后猜一次："))
#         if num != random_num:
#             print(f"Sorry! 全部猜错了，我想的数字是：{random_num}")
#         else:
#             print("终于猜到了！")

#     else:
#         print("第二次猜到也不错呢！")

# else:
#     print("第一次就猜对了,真厉害！")


# # ----  猜数字游戏03
# import random
# random_num = random.randint(0,9)
# num = None
# falg = True
# list_input = ["请猜一个的数字：","请再猜一次：","最后猜一次："]
# list_finish = ["第一次就猜对了,真厉害！","第二次猜到也不错呢！","终于猜到了！"]
# for i in range(3):
#     num = int(input(list_input[i]))
#     if num == random_num:
#         print(list_finish[i])
#         flag = False
#         break
#     else:
#         if i != 2:
#             if num > random_num:
#                 print("猜的太大了！")
#             else:
#                 print("猜的太小了！")

# if falg:
#     print(f"Sorry! 全部猜错了，我想的数字是：{random_num}")



# sum = 0
# i = 1
# while i <= 100 :
#     sum += i
#     i += 1
# print(f"The sum is : {sum}")



# # ----  猜数字游戏04
# import random
# random_num = random.randint(1,100)
# guess_count = 0
# num = None
# falg = True
# while falg:
#     num = int(input("请猜一个数字："))
#     guess_count += 1
#     if num == random_num:
#         print("哈哈哈！！ 你终于猜中啦！！")
#         print(f"你总共猜了{guess_count}次~~")
#         falg = False
#     else:
#         if num > random_num:
#             print("猜的太大了吧！")
#         else:
#             print("猜的太小了吧！")
    



# # ----  九九成分表01
# i = 1
# while i <= 9:
#     j = 1
#     while j <= i:
#         print(f"{j}*{i}={j*i}\t",end="")
#         j += 1
#     i += 1
#     print()
    
# # ----  九九成分表02
# i = 9
# while i >= 1:
#     j = 1
#     while j <= i:
#         print(f"{j}*{i}={j*i}\t",end="")
#         j += 1
#     i -= 1
#     print()
    


# print("Hello")          # 默认自动换行（默认：end = "\n"）
# print("World")
# print("Hello",end='')       # 去除换行
# print("World")

# print("------------------------")

# print("Hello World")        # 原样输出
# print("zhemeci dema")
# print("Hello\tWorld")       # 自动对齐（左对齐）
# print("zhemeci\tdema")



# str_code = "itheima is a brand of itcast"
# count = 0
# for i in str_code :
#     if i == "a":
#         count += 1
# print(f"{str_code}中共含有：{count}个字母a")


# num = 50
# count = 0
# for i in range(1,num+1):        # 左闭右开
#     if i % 2 == 0:
#         count += 1
# print(f"在{num}中一共有{count}个偶数")

# list = list(range(0,10))
# print(len(list))
# print(list)



# # ----  九九成分表03
# for i in range(1,10):
#     for j in range(1,i+1):
#         print(f"{j}*{i}={j*i}\t",end='')
#     print()

# # ----  九九成分表04
# for i in range(9,0,-1):
#     for j in range(1,i+1):
#         print(f"{j}*{i}={j*i}\t",end='')
#     print()

# name = "123456789"
# print(name[5:0:-1])
# print(name[5::-1])


# # 输出0~9
# i = 0
# while i<=9:
#     print(f"{i}\t",end='')
#     i += 1

# print("\n-------------------------")

# for i in range(10):
#     print(f"{i}\t",end="")

# print("\n-------------------------")

# for i in range(0,10):
#     print(f"{i}\t",end="")

# # 输出9~0
# i = 9
# while i>=0:
#     print(f"{i}\t",end="")
#     i -= 1

# print("\n-------------------------")

# for i in range(9,-2,-1):
#     print(f"{i}\t",end="")


# import random
# sum_money = 10000
# employee_score = None
# for i in range(1,21):
#     if sum_money <= 0:
#         print("工资发完了，下个月再说吧")
#         break
    
#     employee_score = random.randint(1,10)
#     if employee_score >= 5:
#         sum_money -= 1000
#         print(f"向员工{i}发放工资1000元,账户余额为{sum_money}元")
#     else:
#         print(f"员工{i},绩效分{employee_score},低于5,不发工资,下一位")
    

# import random
# sum_money = 10000
# employee_score = None
# for i in range(1,21):
#     employee_score = random.randint(1,10)

#     if employee_score < 5 :
#         print(f"员工{i},绩效分{employee_score},低于5,不发工资,下一位")
#         continue

#     if sum_money > 0:
#         sum_money -= 1000
#         print(f"向员工{i}发放工资1000元,账户余额为{sum_money}元")
#         if sum_money <= 0:
#             print("工资发完了，下个月再说吧")
#             break



# def healthy(x):
#     """
#         检测身体的健康水平
#     """
#     print("欢迎来到黑马程序员！",end='')
#     print("请出示您的健康码以及72小时核酸证明,并配合进行体温检测")
#     if x > 37.5 :
#         print(f"体温检测中，您的体温是：{x}度,需要隔离~")
#     else:
#         print(f"体温检测中，您的体温是：{x}度,体温正常请进！")
    

# healthy(37.9)





# 黑马ATM
from os import system
from time import sleep
username = None
balance = 5000000
flag = True


def menu():
    """
        主菜单
    """
    print("-----------------主菜单-----------------")
    print(f"{username},您好,欢迎来到黑马银行ATM。请选择你的操作: ")
    print("查询余额\t[ 输入1 ]")
    print("存款\t\t[ 输入2 ]")
    print("取款\t\t[ 输入3 ]")
    print("退出\t\t[ 输入4 ]")
    step = int(input("请输入你的选择："))
    
    if step == 1:
        check()
    elif step == 2:
        money = int(input("请输入您要存款的金额："))
        save(money)
    elif step == 3:
        money = int(input("请输入您要取款的金额："))
        if money > balance:
            print("取不了一点，没这么多钱！")
            sleep(1)
            system("cls")
        else:
            fetch(money)
        
    else:
        exit()
        
        if step != 4:
            print("ERROR!!! ERROR!!! --------你的输入有误")
        else:
            print("成功退出，欢迎您再次光临！")


def exit():
    """
        退出程序
    """
    global flag
    flag = False


def check():
    """
        查询余额
    """
    system("cls")
    print("-----------------查询余额-----------------")
    print(f"{username}，您好，您的余额为：{balance}")
    sleep(3)
    system("cls")


def save(money):
    """
        存款
        :param money: 存多少钱
    """
    system("cls")
    print("-----------------存款-----------------")
    global balance
    balance += money
    print(f"{username},您好,您存款{money}元成功")
    print(f"{username},您好,您的余额剩余：{balance}元")
    sleep(2)
    system("cls")


def fetch(money):
    """
        取款
        :param money: 取多少钱
    """
    system("cls")
    print("-----------------取款-----------------")
    global balance
    balance -= money
    print(f"{username},您好,您取款{money}元成功")
    print(f"{username},您好,您的余额剩余：{balance}元")
    sleep(2)
    system("cls")


def start_ATM():
    """
        开启ATM程序
    """
    global username
    username = input("请输入您的姓名：")
    while flag:
        menu()


start_ATM()


