#  1. 设置窗口的大小
#  2. 设置窗口的打开位置
#  3. 获取用户电脑的分辨率

import tkinter as tk

a1 = tk.Tk()
a1.title("界面")


#  获取用户电脑的分辨率
a2 = a1.maxsize()        #   得到的是一个元组 (浮点数)
print(a2)
k,b = a2                 #   解包变量 
#  等价于 k=a2[0],b=a2[1] 或  k=a2.width , b=a2.height


#  设置窗口的大小
#  设置窗口的打开位置
a1.geometry(f"{int(k*0.3)}x{int(b*0.3)}+{int(k*0.35)}+{int(b*0.35)}")
#  a1.geometry("窗口的宽x窗口的高+距离左屏幕多少px+距离上屏幕多少px")


a1.mainloop()