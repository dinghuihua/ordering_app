/* 操作 orders集合的 dao*/
var connection = require('./connection');
/*
connection.connect();
function fn(err, result) {
    console.log('err='+ err + ' result='+ result);
}
*/
var mongoose = connection.mongoose;


var orderSchema = new mongoose.Schema({
    "contactor": String,
    "address": String,
    "phone": String,
    "rstName": String,  //餐馆名称
    "remark": String,  //备注
    "doorplate": String,  //门牌号
    "total_money": Number,
    "peisongfei": Number,  //配送费
    "state": Number,
    "order_time": {
        type: Date,
        default: Date.now()
    },
    "arrive_time": Date,   //rstId : 商家id, money:总价+配送费
    "detail": String,
        //"{data: {\"rstId\":1,\"money\":65,\"meals\":[{\"mealId\":0,\"num\":1,\"price\":\"23\"},{\"mealId\":1,\"num\":2,\"price\":\"21\"}]} }",
    "user_id": String,
    "coupon_id": String
});

var OrderModel = mongoose.model('order', orderSchema);

//添加订单
function addOrder(order, fn) {
    var orderModel = new OrderModel(order);
    orderModel.save(fn);
}
exports.addOrder = addOrder;

//根据Id查询订单

function getOrderById(id, fn) {
    OrderModel.findOne({_id: id}, fn);
}
exports.getOrderById = getOrderById;

//根据userId 得到对应的订单列表
function getOrdersByUserId(userId, fn) {
    OrderModel.find({user_id: userId}, fn);
}
exports.getOrdersByUserId = getOrdersByUserId;

/*测试代码
*
* */

/*
addOrder({
    "contactor": "1",
    "address": "北京昌平区",
    "phone": "1310000000",
    "rstName": '阿拉丁餐厅',
    "remark": '加一份米饭',  //备注
    "doorplate": '意合公寓',
    "total_money": 78,
    "peisongfei": 0,
    "state": 3,
    "arrive_time": '2016-7-1 10:28',  //送达时间
    "detail": "{data:[{\"rstId\":1,\"money\":78,\"meals\":[{\"mealId\":0,\"num\":1,\"price\":\"23\"},{\"mealId\":1,\"num\":2,\"price\":\"21\"}]}]}",
    "user_id": "575f7085f8a14116283dabc4",
    "coupon_id": "575f7085f8a14116d4548888"
}, fn);
*/
//getOrderById('5775c8965b2f6df00e083ba1', fn);
//getOrdersByUserId('576cf469debccad423bfbbee', fn);