/* 首页路由 */

var db = require('../db/gb');  //db是一个对象

module.exports = function (router) {
    //注册多个路由

    //首页: 菜品列表/地址/商家信息
    router.get('/index/data', function (req, res, next) {
        db.getMeals(function (meals) {
            res.json({
                code: 0,
                data: {
                    meals: meals,
                    isMatched: 'yes',
                    restaurant:{
                        "_id": "575f7085f8a1411628adbbbb",
                        "address": "北京市海淀区颐和园路2号硅谷电脑城地下二层美食城",
                        "cityId": 0,
                        "coverArea": "[{\"x\":116.306893,\"y\":40.002966},{\"x\":116.312642,\"y\":40.003519},{\"x\":116.314618,\"y\":40.004127},{\"x\":116.315696,\"y\":40.005108},{\"x\":116.319397,\"y\":40.005398},{\"x\":116.321409,\"y\":40.005509},{\"x\":116.324428,\"y\":39.981892},{\"x\":116.310468,\"y\":39.981574},{\"x\":116.307899,\"y\":39.980814},{\"x\":116.307108,\"y\":39.991939},{\"x\":116.306569,\"y\":39.994703},{\"x\":116.30603,\"y\":39.997495},{\"x\":116.305995,\"y\":39.998821}]",
                        "distance": 0.5079205021418997,
                        "id": 1772,
                        "lat": 39.993403,
                        "lng": 116.311644,
                        "minMoney": 0,
                        "phone": "13718213944",  //商家电话
                        "pinpaiId": 0,
                        "rstName": "硅谷店",
                        "songcanfei": 0,
                        "state": 1,
                        "workTime": "08:00-19:00"
                    },
                    address: {
                        "name": "温都水城",
                        "lat": 39.993403,
                        "lng": 116.311644,
                        "cityId": 113
                    }
                }

            })
        })
    });

    //轮播图列表
    router.get('/index/banners', function (req, res, next) {
        db.getBanners(function (banners) {
            res.send({
                code: 0,
                data: banners
            })
        })
    });
    

    
};