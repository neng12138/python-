#  设置窗口置顶
#  设置窗口关闭时执行的函数  WM_DELETE_WINDOW
#  销毁窗口/组件

import tkinter as tk

a1 = tk.Tk()
a1.title("界面")
a1.geometry("700x500+200+200")
a1.resizable(False,False)
a1.iconbitmap("logo1.ico")


def guan():
    print("text")
    #  销毁窗口
    a1.destroy()                  


#  设置窗口置顶
a1.attributes('-topmost',True)         #  默认为False


#  设置窗口关闭时执行的函数
a1.protocol('WM_DELETE_WINDOW',guan)


a1.mainloop()
