#  输入框组件  Entry()
#  字符串变量  StringVar()

import tkinter as tk

a1 = tk.Tk()
a1.title('界面')
a1.geometry('700x500+200+200')
a1.resizable(False,False)
a1.iconbitmap('logo1.ico')

# 标签组件 和 自定义布局
tk.Label(a1,text='账号: ',font=('宋体',25)).place(x=150,y=100)
tk.Label(a1,text='密码: ',font=('宋体',25)).place(x=150,y=170)


# 创建字符串变量
s1 = tk.StringVar()
s1.set('请输入账号')       #  当成提示文本

s2 = tk.StringVar()
s2.set('请输入密码')       #  当成提示文本


# 输入框组件 Entry()
tk.Entry(a1,state='readonly',textvariable=s1,width=15,font=('宋体',20)).place(x=250,y=105)
tk.Entry(a1,state='disabled',textvariable=s2,width=15,font=('宋体',20)).place(x=250,y=175)
#  default(省略) =>  可看可写
#  readonly  =>  只读
#  disabled  =>  只能看

a1.mainloop()
