/* 订单路由 */

var db = require('../db/gb');  //db是一个对象
var moment = require('moment');


module.exports = function (router) {
    //注册多个路由

    //1. 得到用户的默认地址
    router.get('/order/getNewestAddress', function (req, res, next) {
        var userId = req.query.userId;
        db.getDefaultAddrByUserId(userId, function (address) {
            if (address == null){
                res.json({
                    code: 1  //用来标记  --> 当一个地址都没有的时候, 让用户去添加地址
                })
            }else{
                res.json({
                    code: 0,
                    data: address
                })
            }

        });
    });

    //2. 下单
    router.post('/order/createOrder', function (req, res, next) {
        var order = req.body.order;
        order.state = 3; //为订单添加状态属性, 3表示订单完成
        db.addOrder(order, function (order) {
            res.json({
                code: 0,
                data: order
            })
        });
    });
    //3. 显示订单详情
/*地址:
     /order/detail/576bc5adb20ba0b02ed9c5d0
     返回:
     订单详情页面(orderDetail.ejs)
*/
    router.get('/order/detail:id', function (req, res, next) {
        var id = req.params.id;  //得到参数传过来的订单id
        db.getOrderById(id, function (order) {
            //添加订单状态文本
            var stateText = null;
            switch(order.state) {
                case 0:
                    stateText = '待支付';
                    break;
                case 1:
                    stateText = '已付款';
                    break;
                case 2:
                    stateText = '';
                    break;
                case 3:
                    stateText = '已完成';
                    break;
                case 4:
                    stateText = '店铺拒单';
                    break;
                case 5:
                    stateText = '商家已接单';
                    break;
                case 6:
                    stateText = '已退单';
                    break;
                case 7:
                    stateText = '未支付的取消订单';
                    break;
                case 8:
                    stateText = '订单异常';
                    break;
                case 9:
                    stateText = '退单中';
                    break;
                case 10:
                    stateText = '商家拒绝退单';
                    break;
            }

            // 如果添加一个原本不存在的属性, 只能直接添加
            order.stateText = stateText;
            
            // 到达时间 --> 如果是修改已有的属性, 必须通过_doc操作
            order._doc.arrive_time = moment(order.arrive_time).format('HH:mm');
            
           //对象化detail
            order._doc.detail = JSON.parse(order.detail);

            //使用ejs
            res.render('orderDetail', {code:0, data:order});
        });
    });

    //4. 显示用户订单列表
    router.get('/order/orderList', function (req, res, next) {
        var userId = req.query.userId;
        db.getOrdersByUserId(userId, function (orderArr) {

            for (var i=0; i<orderArr.length; i++){
                var order = orderArr[i];

                order._doc.detail = JSON.parse(order.detail);
                order._doc.arrive_time = moment(order.arrive_time).format('MM-DD HH:mm');
                order._doc.order_time = moment(order.order_time).format('MM-DD HH:mm');

            }
            res.render('orderList', {code: 0, data: orderArr});
        });
    });
    
    
};