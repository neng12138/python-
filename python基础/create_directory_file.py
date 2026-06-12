# 创建文件夹
try:
    import os
    path = './algorithm'
    os.makedirs(path)
    print(f"{path}下的文件夹已经创建完成")
except:
    print("ERROR!!!")



# 批量创建文件
try:
    for i in range(1,82):
        path = 'algorithm/test' + str(i) + '.py'
        with open(path,'w',encoding='utf-8') as file:
            file.write(f"# {i}")
        print(f"文件{i}成功在{path}中创建")
except:
    print("ERROR!!!")




