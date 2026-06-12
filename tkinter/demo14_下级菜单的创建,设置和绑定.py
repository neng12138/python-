#  创建下级菜单    Menu()
#  设置下级菜单    add_command()
#  绑定到主菜单    

import tkinter as tk

a1 = tk.Tk()
a1.title('界面')
a1.geometry('700x500+200+200')
a1.resizable(False,False)
a1.iconbitmap('logo1.ico')

cai = tk.Menu(a1)


# 创建下级菜单
xia = tk.Menu(cai,tearoff=0)

# 设置下级菜单
xia.add_command(label='添加',command='')

# 绑定到主菜单
cai.add_cascade(label='员工',menu=xia)


a1.config(menu=cai)

a1.mainloop()
