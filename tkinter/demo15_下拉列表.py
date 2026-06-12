#  创建下拉列表  Combobox()

#  导包 ： from tkinter.ttk import Combobox

import tkinter as  tk
from tkinter.ttk import Combobox

a1 = tk.Tk()
a1.title('界面')
a1.geometry('700x500+200+200')
a1.resizable(False,False)
a1.iconbitmap('logo1.ico')


def t():
    t1 = tk.Toplevel()
    t1.geometry('500x300+300+300')
    t1.resizable(False,False)
    t1.iconbitmap('logo1.ico')
    t1.attributes('-topmost',True)
    tk.Label(t1,text='城市: ',font=('楷体',20)).grid(row=1,column=1)
    
    t2 = tk.StringVar()
    t3 = ['北京','上海','深圳']
    #  创建下拉列表
    t4 = Combobox(t1,textvariable=t2,state='readonly',values=t3,width=10,font=('楷体',15))
    t4.grid(row=1,column=2)


cai = tk.Menu(a1)
xia = tk.Menu(cai,tearoff=0)
xia.add_command(label='添加',command=t)
cai.add_cascade(label='员工',menu=xia)

a1.config(menu=cai)


a1.mainloop()
