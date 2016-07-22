/*地址路由*/

var db = require('../db/gb');  //db是一个对象

module.exports = function (router) {
    //注册多个路由

    //查询用户的地址列表
    router.get('/getAddrsByUserId', function (req, res, next) {
        var userId = req.query.userId;
        db.getAddrsByUserId(userId, function (addressArr) {
            res.json({
                code: 0,
                data: addressArr
            })
        })
    });

    //添加地址
    router.get('/insertAddr', function (req, res, next) {
        var address = JSON.parse(req.query.address);
        db.addAddr(address, function (address) {
            res.json({
                code: 0,
                data :address
            });
        })
    });
    
    //修改地址
    router.get('/updateAddr', function (req, res, next) {
        var address = JSON.parse(req.query.address);
        db.updateAddr(address, function (result) {  //result {n:1,ok:1}
            res.json({
                code: 0,
                data: result
            });
        })
    });
    
    //删除地址
    router.get('/deleteAddr', function (req, res, next) {
        var _id = req.query._id;
        db.deleteAddrById(_id, function (result) {
            res.json({
                code:0,
                data: result
            });
        })
    })

    
};