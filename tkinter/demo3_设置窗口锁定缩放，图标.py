#  设置窗口锁定缩放
#  设置窗口图标

import tkinter as tk

a1 = tk.Tk()
a1.title("界面")
a1.geometry("700x500+200+200")


# 设置窗口锁定缩放
a1.resizable(False,False)     # 默认都是 True


# 设置窗口图标
a1.iconbitmap("logo1.ico")    # 图片格式只能是ico后缀（ 直接重命名修改不可取 ）

#  图片格式转ico的在线工具 ： https://www.toolhelper.cn/Image/ImageToIco


a1.mainloop()
