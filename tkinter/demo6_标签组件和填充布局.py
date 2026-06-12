#  标签组件  Label()
#  填充布局  pack()

import tkinter as tk

a1 = tk.Tk()
a1.title("界面")
a1.geometry("700x500+200+200")
a1.resizable(False,False)
a1.iconbitmap("logo1.ico")


#  标签组件 
a2 = tk.Label(a1,text="内容",font=('宋体',36),fg="red",bg="#CAE1FF")
#  填充布局
a2.pack()


a1.mainloop()
