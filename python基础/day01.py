name = '传智播客'
stock_price = 19.99
stock_code = '003032'
stock_price_daily_growth_factor = 1.2
growth_day = 7

stock_finally_price = stock_price*stock_price_daily_growth_factor**growth_day

print(f'公司: {name},股票代码：{stock_code},当前股价: {stock_price}','\n')
print('每日的增长倍数:%.1f,经过%d天后股价为: %.2f' % (stock_price_daily_growth_factor,growth_day,stock_finally_price))


print('\n','-----------------------------','\n')


user_name = input("请输入你用户的姓名: ")
user_type = input("请输入用户的类型: ")

print(f"您好：{user_name}，您是尊贵的：{user_type}用户，欢迎您的光临!",'\n')
# print("您好：%s,您是尊贵的：%s用户,欢迎您的光临！" % (user_name,user_type))
# print("您好: "+user_name+",您是尊贵的："+user_type+"用户，欢迎您的光临！")



