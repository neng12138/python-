#  设置窗口背景颜色
#  设置窗口透明度

import tkinter as tk

a1 = tk.Tk()
a1.title("界面")
a1.geometry("700x500+200+200")
a1.resizable(False,False)
a1.iconbitmap("logo1.ico")


#  设置窗口背景颜色          #  可以写 颜色英文 和  颜色编码
a1.configure(bg="#CAE1FF")

# 颜色编码表  ：  https://tools.jb51.net/static/colorpicker/


#  设置窗口透明度            # 第一个位置传字符串"-alpha" , 第二个位置传数字 0-1
a1.attributes("-alpha",0.9)      


a1.mainloop()
