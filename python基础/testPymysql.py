
# __all__ = ['func1']       # 配置可调取的功能

# def func1(x,y):
#     print(x+y)

# def func2(x,y):
#     print(x-y)

# if __name__ == '__main__':      # 只有当前的会话可以为 True
#     func1(1,2)
#     func2(2,1)


# import pymysql

# try:
#     conn = pymysql.connect(
#         host='localhost',  # 连接的是本地数据库
#         port=3306,  # 默认端口
#         user='root',  # 用户名
#         password='123456',  # 密码
#         database='user_test',  # 选择的数据库名称
#         autocommit=True  # 自动提交  （ conn.commit()作用相同 ）
#     )

#     cursor = conn.cursor()  # 游标对象  （ 操作数据库，执行sql语句 ）

#     # 查询
#     sql = """ select * from test_pymysql """  # sql语句
    
#     # 插入
#     # name = '晓幸'
#     # gender = '女'
#     # age = 20
#     # # sql = f""" insert into test_pymysql values('{name}','{gender}',{age}) """  # sql语句
#     # sql = """ insert into test_pymysql values(%s,%s,%s) """  # sql语句
#     # cursor.execute(sql,(name,gender,age))  # 执行sql语句

#     # 删除
#     # name = '晓幸'  # 删除的条件
#     # sql = f""" delete from test_pymysql where name = '{name}' """  # sql语句

#     cursor.execute(sql)  # 执行sql语句
#     result = cursor.fetchall()  # 获取查询结果
#     print(f'结果是：{result}')  # 打印查询结果

#     cursor.close()  # 关闭游标

# except Exception as ex:  # 捕获异常
#     print(ex)

# finally:  # 无论如何都会被执行的代码
#     conn.close()  # 关闭连接
    


# import pymysql
# try:
#     conn = pymysql.connect(
#         host='localhost',
#         port=3306,
#         user='root',
#         password='123456',
#         database='university',
#         autocommit=True
#     )
#     cursor = conn.cursor()  # 游标对象  （ 操作数据库，执行sql语句 ）
#     sql = """ insert into student(ID,name) values(%s,%s) """
#     cursor.execute(sql,('03166','李炜能'))  # 执行sql语句
#     result = cursor.fetchall()  # 获取查询结果
#     print(f'{result}')  # 打印查询结果
#     cursor.close()  # 关闭游标
                
# except Exception as ex:  # 捕获异常
#     print(ex)
# finally:  # 无论如何都会被执行的代码
#     conn.close()  # 关闭连接


import pymysql
try:
    conn = pymysql.connect(
        host='localhost',
        port=3306,
        user='root',
        password='123456',
        database='university',
        autocommit=True
    )
    cursor = conn.cursor()
    sql = """ select ID,name from student where ID = %s """
    cursor.execute(sql,('03166'))  # 执行sql语句
    result = cursor.fetchall()  # 获取查询结果
    print(f'ID: {result[0][0]} , name: {result[0][1]}')  # 打印查询结果
    cursor.close()  # 关闭游标
except Exception as ex:  # 捕获异常
    print(ex)
finally:  # 无论如何都会被执行的代码
    conn.close()  # 关闭连接



