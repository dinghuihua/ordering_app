/*用户路由*/

var db = require('../db/gb');  //db是一个对象

module.exports = function (router) {
    //注册多个路由

    //登录 --> 路径要查看API接口文档
    router.post('/login', function (req, res, next) {
        //1. 从req获取数据
        var phone = req.body.phone;
        var code = req.body.code;
        console.log('/login phone='+phone + ' code='+code);
        //2. 调用db处理数据
            //根据phone进行查询
        db.getUser(phone, function (user) {  //查询返回的user
            //如果没有,添加数据, 并返回数据
            if (user == null){
                db.addUser({phone:phone}, function (newUser) {  //添加返回的newUser
                    //会把发送的对象转化成json字符串 返回给客户端
                    res.send({
                        code: 0,
                        data: newUser
                    })
                })
            }else{
                //如果有, 返回数据
                res.send({
                    code: 0,
                    data: user
                })
            }

        });
        //3.在回调函数中, 返回数据

    });

    //意见反馈
    router.get('/feedback', function (req, res, next) {
        //1. 获取请求参数
        var dataJson = req.query.data; //得到的是一个json字符串
        var feedback = JSON.parse(dataJson);  // 转换成对象
        //2. 处理数据
        db.addFeedback(feedback, function (feedback) {
            //3.返回数据--> 返回数据的格式要查看api
            res.json({code:0, data:feedback});
        });

    });
    
};