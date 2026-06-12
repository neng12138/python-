
# pyautogui  pyperclip  conocr

# import random
# import string

# # string.ascii_letters : 所有字母
# # string.digits : 0-9
# # string.punctuation : 所有特殊字符
# letter_digit_pun = string.ascii_letters+string.digits+string.punctuation

# # 列表推导式
# password = ''.join([random.choice(letter_digit_pun) for _ in range(8)])
# print(password)



# requests  bs4

# #有反爬措施
# import requests
# url="http://www.baidu.com"
# h = {'User-Agent': 'Mozilla/5.0'}
# res=requests.get(url,headers=h)
# print(res.status_code)


# import requests

# response = requests.get('https://www.baidu.com')

# print(response)


# import requests

# # 设置请求标头 （防止被服务器直接拦截）
# # 标头在网络（network）的 请求标头（request headers）中复制
# headers = {     
#     'user-agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36 Edg/135.0.0.0'
# }

# response = requests.get('https://douban.com',headers=headers)

# print(response)
# # print(response.text)

# import requests

# headers = {                             # 设置标头
#     'user-agent':'Mozilla/5.0'
# } 

# params = {                              # 设置传入参数
#     'word':'python'
# }

# response = requests.get('https://baidu.com/s?',headers=headers,params=params)

# response.encoding = 'utf-8'     # 设置编码格式

# print(response.status_code)
# print(response.text)


import requests

headers = {                             # 设置标头（请求标头）
    'user-agent':'Mozilla/5.0'
} 

params = {                              # 设置传入参数（url地址后的参数）
    'word':'python'
}

data = {                                # 传入表单参数
    'username' : 'admin',
    'password' : '123456'
}

res = requests.post('www.baidu.com',headers=headers,params=params,data=data)

print(res.text)



