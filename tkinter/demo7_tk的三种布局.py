#  填充布局     pack()
#  自定义布局    place()
#  网格布局     grid()

import tkinter as  tk

a1 = tk.Tk()
a1.title('界面')
a1.geometry('700x500+200+200')
a1.resizable(False,False)
a1.iconbitmap('logo1.ico')


a2 = tk.Label(a1,text="内容",font=('宋体',36),fg="red",bg="#CAE1FF")

#  填充布局  pack()  默认布局
# a2.pack()

#  自定义布局  place() 
# a2.place(x=300,y=200)           #  注意 不要超出窗口大小范围

#  网格布局  grid()
a2.grid(row=2,column=1)
a2 = tk.Label(a1,text="内容",font=('宋体',36),fg="red",bg="#CAE1FF")
a2.grid(row=3,column=2)


a1.mainloop()
