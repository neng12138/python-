
# import execjs

# with open('Python_learn/case_sample.js','r',encoding='utf-8') as f:
#     js_code = f.read()

# # data = 10
# data = 30

# result = execjs.compile(js_code).call('find_big',data)      # 调用js文件中的函数

# print(result)

import json

my_dict = {'itcast':123,'castvast':456}

json_data =  json.dumps(my_dict)

print(json_data)
print(type(json_data))
