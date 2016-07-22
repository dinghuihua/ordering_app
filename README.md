# ordering_app
To achieve the basic functions of ordering dishes include WeChat, preview, user login, address management, order confirmation page(实现在微信订餐的基本功能,包括菜品预览,用户登录,地址管理,订单确认等页面)



创建mongoDB数据库, 并启动其服务
在命令窗口中进入db/mongoDB_data_file下, 执行"导入数据库的命令.txt"中的命令, 向数据库中导入数据
运行: node bin/www
访问: http://localhost:3000

项目模块:
1. 首页
    轮播图
    菜品列表
    购物车
2. 用户
    登陆
    用户反馈
3. 地址
    为用户添加地址
    为用户查询地址列表
    为用户查询默认地址
    为用户修改地址
    为用户删除地址
    
4. 订单
    生成订单
    查看订单详情
    查询订单列表
-------------------------------------13个接口

mongo : 连接
show dbs :　显示所有的数据库
use atguigu_o2o : 使用某个库
db.dropDatabase() : 删除指定的库
show collections : 显示库中的所有集合(表)
db.users.find() : 查询集合中所有的文档(记录)

-----------------------------------------------------------