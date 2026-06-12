#  创建多选框   CheckButton()
#  创建整数变量   Intvar()

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

    #  顶层窗口聚焦
    t1.focus_set()

    tk.Label(t1,text='城市： ',font=('楷体',20)).grid(row=1,column=1)
    tk.Label(t1,text='性别： ',font=('楷体',20)).grid(row=2,column=1)
    tk.Label(t1,text='爱好:  ',font=('楷体',20)).grid(row=3,column=1)
    
    t2 = tk.StringVar()
    t3 = ['北京','上海','深圳']
    #  创建下拉列表
    t4 = Combobox(t1,textvariable=t2,state='readonly',values=t3,width=10,font=('楷体',15))
    #  设置下拉列表组件默认显示列表内哪个下标索引
    t4.current(0)
    t4.grid(row=1,column=2)

    s2 = tk.StringVar(value='男')
    #  创建单选框
    tk.Radiobutton(t1,text='男',variable=s2,value='男',font=('楷体',20)).place(x=90,y=35)
    tk.Radiobutton(t1,text='女',variable=s2,value='女',font=('楷体',20)).place(x=170,y=35)


    #  创建整数变量 
    s3 = tk.IntVar()
    s4 = tk.IntVar()

    #  创建多选框
    tk.Checkbutton(t1,text='跑步',variable=s3,onvalue=1,offvalue=0,font=('楷体',20)).place(x=90,y=68) 
    tk.Checkbutton(t1,text='游泳',variable=s4,onvalue=1,offvalue=0,font=('楷体',20)).place(x=200,y=68)


    def tj():
        print(t2.get())
        print(s2.get())
        if s3.get() == 1 and s4.get() == 1:
            print('跑步和游泳')
        elif s3.get() == 1:
            print('跑步')
        elif s4.get() == 1:
            print('游泳')
        else:
            print('暂无选择爱好')
    

    tk.Button(t1,text='提交',width=15,command=tj,font=('楷体',20)).place(x=200,y=200)



cai = tk.Menu(a1)
xia = tk.Menu(cai,tearoff=0)
xia.add_command(label='添加',command=t)
cai.add_cascade(label='员工',menu=xia)

a1.config(menu=cai)


a1.mainloop()