#  按钮组件  Button()
#  字符串变量文本的获取  get()

import tkinter as tk

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



def dl():
    # 字符串变量的文本获取  get()
    print(s1.get())
    print(s2.get())
    a1.destroy()           #  销毁窗口


# 按钮组件 Button()
tk.Button(a1,command=dl,text='登录',font=('宋体',25),width=10).place(x=250,y=300)
#  command => 按下按钮就跳向的函数，默认为" "(空)

a1.mainloop()
