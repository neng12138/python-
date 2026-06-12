# # 生成器函数
# def count_down(n):
#     while n > 0:
#         yield n
#         n -= 1

# # 使用生成器
# gen = count_down(5)             # 这不会立即执行函数，而是返回一个生成器对象
# # print(gen)          # 输出: <generator object count_down at 0x7f9e7f9e7f9e>
# # print(next(gen))  # 输出: 5
# # print(next(gen))  # 输出: 4

# # # 或者用 for 循环
# # for num in gen:
# #     print(f'{num} ',end='')  # 输出: 5 ,4 ,3 , 2, 1     
# # print()
# # # 可以多次使用生成器
# # for num in count_down(3):
# #     print(num)  # 输出: 3, 2, 1

# # 生成器表达式
# gen_expr = (x**2 for x in range(5))     # 这是一个生成器表达式，不会立即计算结果
# print(list(gen_expr))  # 输出: [0, 1, 4, 9, 16]

# # 列表推导式
# list_comp = [x**2 for x in range(5)]    # 这是一个列表推导式，会立即计算结果
# print(list_comp)  # 输出: [0, 1, 4, 9, 16]


# print('---------------------------------')


# # 这是一个装饰器函数，它接受一个函数作为参数，并返回一个新的函数（闭包）
# def my_decorator(func):

#     # *args 和 **kwargs 是用来接收任意数量的位置参数和关键字参数的
#     # 这意味着装饰器可以处理任意数量的参数
#     def wrapper(*args, **kwargs):
#         # 这个新函数会在原函数执行前后添加一些额外的功能
#         print(f"收到的参数: args={args}, kwargs={kwargs}")  # 打印
#         print("函数开始执行")
#         func(*args, **kwargs)
#         print("函数执行结束")

#     return wrapper

# # 使用装饰器
# @my_decorator            # 这是一个语法糖，相当于 say_hello = my_decorator(say_hello)
# def say_hello(name):
#     print(f"Hello, {name}!")

# # 调用被装饰的函数
# # say_hello("Mike")      # 这个参数会先传递给 wrapper(*args, **kwargs)
# say_hello('Alice') 
# # 输出:     函数开始执行
# #          Hello, Alice!
# #          函数执行结束


# print('---------------------------------')

# def repeat(times):
#     """
#     这是一个带参数的装饰器工厂函数，它接受一个参数 times, 返回一个装饰器函数。
#     """
#     def decorator(func):
#         """
#         这是一个装饰器函数，它接受一个函数作为参数，并返回一个新的函数（闭包。
#         """
#         def wrapper(*args, **kwargs):
#             for _ in range(times):
#                 # _ 是一个临时变量，它的值在每次循环中都会被覆盖，但是它的名字不重要，所以我们用 _ 来表示它。
#                 func(*args, **kwargs)

#         return wrapper
#     return decorator

# # 使用带参数的装饰器
# @repeat(times=2)
# def greet(name):
#     print(f"Hi, {name}!")

# greet("Bob")
# # 输出: Hi, Bob!
# #      Hi, Bob!


# print('---------------------------------')


# def log_generator(gen_func):
#     """
#     这是一个装饰器函数，它接受一个生成器函数作为参数，并返回一个新的生成器函数。
#     这个新的生成器函数会在原生成器函数执行前后添加一些额外的功能。
#     """
#     def wrapper(*args, **kwargs):
#         print("生成器开始执行")
#         gen = gen_func(*args, **kwargs)
#         for value in gen:
#             print(f"生成值: {value}")
#             yield value
#         print("生成器执行结束")

#     return wrapper

# # 使用装饰器装饰生成器函数
# @log_generator
# def my_generator(n):
#     for i in range(n):
#         yield i

# # 调用被装饰的生成器
# gen = my_generator(3)
# for val in gen:
#     pass  # 可以对 val 进行操作
# # 输出:
# # 生成器开始执行
# # 生成值: 0
# # 生成值: 1
# # 生成值: 2
# # 生成器执行结束


# 1. 对齐与填充
# 左对齐，宽度10，用-填充
print(f"{-10:<10}")  # 输出: "-10       "

# 右对齐，宽度10，用*填充
print(f"{10:*>10}")  # 输出: "********10"

# 居中对齐，宽度10，用=填充
print(f"{10:=^10}")  # 输出: "====10===="


# 2.  数字格式化
# 整数，最小宽度5，不足补0
print(f"{7:05d}")    # 输出: "00007"

# 浮点数，保留2位小数
print(f"{3.1415926:.2f}")  # 输出: "3.14"

# 科学计数法，保留3位小数
print(f"{12345.6789:.3e}")  # 输出: "1.235e+04"

# 百分比，保留1位小数
print(f"{0.12345:.1%}")     # 输出: "12.3%"


# 3.字符串截断
# 截取前5个字符
print(f"{'hello world':.5}")  # 输出: "hello"

# 最小宽度10，右对齐，截取前5字符
print(f"{'hello':>10.5}")    # 输出: "     hello"


# 4. 千位分隔符
print(f"{123456789:,}")      # 输出: "123,456,789"
print(f"{123456789.12345:,.2f}")  # 输出: "123,456,789.12"



# 5. 进制转换
# 二进制
print(f"{10:b}")      # 输出: "1010"

# 八进制
print(f"{10:o}")      # 输出: "12"

# 十六进制(小写)
print(f"{10:x}")      # 输出: "a"

# 十六进制(大写)
print(f"{10:X}")      # 输出: "A"

# 带前缀的十六进制
print(f"{10:#x}")     # 输出: "0xa"



# 6. 符号显示
print(f"{10:+}")      # 输出: "+10"
print(f"{-10:+}")     # 输出: "-10"
print(f"{10:-}")      # 输出: "10" (默认)
print(f"{-10:-}")     # 输出: "-10"
print(f"{10: }")      # 正数前加空格


# 7.组合使用示例
# 带符号，千位分隔，保留2位小数
print(f"{-1234567.8912:+,.2f}")  # 输出: "-1,234,567.89"

# 十六进制，宽度10，前导0，带前缀
print(f"{255:#010X}")  # 输出: "0X000000FF"

