#  创建主菜单     Menu()
#  设置菜单名     add_cascade()
#  开启菜单栏     configu()

import tkinter as tk

a1 = tk.Tk()
a1.title('界面')
a1.geometry('700x500+200+200')
a1.resizable(False,False)
a1.iconbitmap('logo1.ico')


#  创建菜单栏
cai = tk.Menu(a1)   

#  设置菜单名
cai.add_cascade(label='员工1')
cai.add_cascade(label='员工2')

#  开启菜单栏
a1.config(menu=cai)


a1.mainloop()
