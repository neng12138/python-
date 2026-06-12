#  注册页面的完善

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

s3 = tk.StringVar()
s3.set('')       #  当成提示文本

s4 = tk.StringVar()
s4.set('')       #  当成提示文本


# 输入框组件 和 自定义布局
tk.Entry(a1,textvariable=s1,width=15,font=('宋体',20)).place(x=260,y=105)
tk.Entry(a1,textvariable=s2,width=15,font=('宋体',20)).place(x=260,y=175)


def cut():
    d = messagebox.askokcancel('窗口','是否关闭窗口')
    if d:
        a1.destroy()               #  销毁窗口
    else:
        pass

a1.protocol('WM_DELETE_WINDOW',cut)   


def dl():
    if s1.get() in hao:
        if s2.get() == hao[s1.get()]:
            messagebox.showinfo('成功','成功登录')
            a1.destroy()           #  销毁窗口
        else:
            messagebox.showerror('错误','密码错误')
    else:
        messagebox.showerror('错误','账号错误')
        

hao = {}                     #  记录账号和密码数据
a2 = None                    #  提前先定义a2     

def zc2():
    if s3.get() not in hao:
       hao[s3.get()] = s4.get()
       messagebox.showinfo('注册','成功注册')
       a2.destroy()
       print(hao)
    else:
        messagebox.showerror('注册','此账号已被注册')


def zc():
    global a2                   #  全局变量 
    #  顶层窗口  Toplevel()
    a2 = tk.Toplevel()
    a2.title('注册账号')
    a2.geometry('500x300+300+300')
    a2.resizable(False,False)
    a2.iconbitmap('logo1.ico')
    a2.attributes('-topmost',True)

    #  顶层窗口聚焦
    a2.focus_set()
    
    tk.Label(a2,text='账号: ',font=('楷体',15)).place(x=120,y=50)
    tk.Label(a2,text='密码: ',font=('楷体',15)).place(x=120,y=100)
    tk.Entry(a2,textvariable=s3,width=15,font=('楷体',15)).place(x=180,y=53)
    tk.Entry(a2,textvariable=s4,width=15,font=('楷体',15)).place(x=180,y=103)
    tk.Button(a2,command=zc2,text='注册',font=('楷体',15),width=15).place(x=170,y=180)


# 按钮组件 和 自定义布局
tk.Button(a1,command=dl,text='登录',font=('宋体',25),width=10).place(x=150,y=300)
tk.Button(a1,command=zc,text='注册',font=('宋体',25),width=10).place(x=350,y=300)


a1.mainloop()