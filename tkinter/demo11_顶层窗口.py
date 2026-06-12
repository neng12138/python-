#  顶层窗口  Toplevel()

import tkinter as tk
from tkinter import messagebox 

a1 = tk.Tk()
a1.title('界面')
a1.geometry('700x500+200+200')
a1.resizable(False,False)
a1.iconbitmap('logo1.ico')

# 标签组件 和 自定义布局
tk.Label(a1,text='账号: ',font=('宋体',25)).place(x=160,y=100)
tk.Label(a1,text='密码: ',font=('宋体',25)).place(x=160,y=170)

# 创建字符串变量
s1 = tk.StringVar()
s1.set('请输入账号')       #  当成提示文本

s2 = tk.StringVar()
s2.set('请输入密码')       #  当成提示文本

# 输入框组件 和 自定义布局
tk.Entry(a1,textvariable=s1,width=15,font=('宋体',20)).place(x=260,y=105)
tk.Entry(a1,textvariable=s2,width=15,font=('宋体',20)).place(x=260,y=175)


def cut():
    d = messagebox.askokcancel('窗口','是否关闭窗口')
    if d:
        a1.destroy()               #  销毁窗口
    else:
        pass

a1.protocol('WM_DELETE_WINDOW',cut)        #  关闭弹窗跳向cut函数


def dl():
    print(s1.get())
    print(s2.get())
    if s1.get() != '123' and s2.get() != '123':
        messagebox.showerror('错误','账号或密码错误')
        # messagebox.showinfo('错误','账号或密码错误')
        # messagebox.showwarning('错误','账号或密码错误')
        # message = messagebox.askokcancel('错误','账号或密码错误')  # 返回值为 True 或 False
        # if message: 
        #     print(666)
        # else:
        #     print(888)
    else:
        messagebox.showinfo('成功','成功登录')
        a1.destroy()           #  销毁窗口



def zc():
    #  顶层窗口  Toplevel()
    a2 = tk.Toplevel()
    a2.title('注册账号')
    a2.geometry('500x300+300+300')
    a2.resizable(False,False)
    a2.iconbitmap('logo1.ico')
    tk.Label(a2,text='账号: ',font=('楷体',15)).place(x=120,y=50)
    tk.Label(a2,text='密码: ',font=('楷体',15)).place(x=120,y=100)
    tk.Entry(a2,width=15,font=('楷体',15)).place(x=180,y=53)
    tk.Entry(a2,width=15,font=('楷体',15)).place(x=180,y=103)
    tk.Button(a2,text='注册',font=('楷体',15),width=15).place(x=170,y=180)


# 按钮组件 和 自定义布局
tk.Button(a1,command=dl,text='登录',font=('宋体',25),width=10).place(x=150,y=300)
tk.Button(a1,command=zc,text='注册',font=('宋体',25),width=10).place(x=350,y=300)


a1.mainloop()