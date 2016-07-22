/* 操作 addresses集合的 dao*/
var connection = require('./connection');
var mongoose = connection.mongoose;

/*  测试代码
 connection.connect();
 function cb(err, result) {
 console.log('err='+err+' result='+result);
 }
*/


var Schema = mongoose.Schema;
var addressSchema = new Schema({
    address: String,
    contactor: String,
    lat: String,
    lng: String,
    phone: String,
    sex: Number,
    state: Number,
    userId: String,
    cityId: String,
    doorplate: String  //楼层号
});

var AddressModel = mongoose.model('address', addressSchema);

//根据用户id得到地址 (查询地址列表)
function getAddrsByUserId(userId, cb){
    AddressModel.find({userId: userId}, cb)
}
exports.getAddrsByUserId = getAddrsByUserId;

//添加一个新地址
function addAddr(address, cb){
    var addressModel = new AddressModel(address);
    addressModel.save(cb)
}
exports.addAddr = addAddr;

//更新(修改)地址  -->　返回的是一个对象 {n:1, ok:1}  n:更新的条数, ok: 1成功, 0查不到
function updateAddr(address, cb) {
    AddressModel.update({_id: address._id}, address, cb)
}
exports.updateAddr = updateAddr;

//删除地址 -->返回的是一个对象 {n:1, ok:1}
function deleteAddrById(id, cb) {
    AddressModel.remove({_id: id}, cb);
}
exports.deleteAddrById = deleteAddrById;


//根据用户id得到一个默认地址
function getDefaultAddrByUserId(userId, cb) {
    AddressModel.findOne({userId: userId}, cb);
}
exports.getDefaultAddrByUserId = getDefaultAddrByUserId;

//以下是测试代码
/*getAddrsByUserId('575f7085f8a14116283dabc7', cb);
addAddr({
    "address": "平西王府",
    "contactor": "丁惠华",
    "lat": "39.993851111808",
    "lng": "116.31838249961 ",
    "phone": "15201694178",
    "sex": "1",
    "state": "1",
    "userId": "575f7085f8a14116283dabc7",
    "cityId": "100100",
    "doorplate": "222"
}, cb);*/


/*
updateAddr({
    _id: '5771e974588514f0194a5128',
    "address": "平西王府996公交总站",
    "contactor": "小丁女神",
    "lat": "39.993851111808",
    "lng": "116.31838249961 ",
    "phone": "0754-737389398",
    "sex": "1",
    "state": "1",
    "userId": "575f7085f8a14116283dabc7",
    "cityId": "3445555",
    "doorplate": "1246"
}, cb);
*/

// deleteAddrById('5771e974588514f0194a5128', cb);