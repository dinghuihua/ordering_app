/* 操作users集合的 dao*/
var connection = require('./connection');
var mongoose = connection.mongoose;

/*测试start */
/*
connection.connect();
function cb(err, result) {
    console.log('error='+err+" result="+result);
}
*/

/*测试end */



//Schema -->用来描述文档结构
    // 1. 得到Schema类
var Schema = mongoose.Schema;
    //2. 创建Schema实例  -- >定义规则 --> 传入 文档结构对象
var userSchema = new Schema({
    phone: String
});
//得到 Model 类
var UserModel = mongoose.model('user', userSchema);

//获取某个用户
var getUser = function (phone, cb) {
    UserModel.findOne({phone:phone}, cb);

};
exports.getUser = getUser;

//添加一个用户
var addUser = function (user, cb) {
    var userModel = new UserModel(user);
    userModel.save(cb);
};
exports.addUser = addUser;

/*
    以下是测试
 */
//getUser('13100000000',cb);
//addUser({phone:'15201694178'}, cb);