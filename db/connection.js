/* 数据库连接 */


//引入mongoose
var mongoose = require('mongoose');
//出口/暴露 mongoose
exports.mongoose = mongoose;

// 定义连接的方法,并暴露出口
var connect = function () {
    var connection = mongoose.connect('mongodb://127.0.0.1/atguigu_o2o');

    //以下可测试连接是否成功
        //得到连接对象
    var conn = mongoose.connection;
        //监听打开的连接
    conn.on('open', function () {
        console.log('数据库连接成功!');
    });
    //设置有错误时的监听
    conn.on('error', console.error.bind(console, '数据库连接出错:'))

};
exports.connect = connect;

//connect();

// 定义关闭连接的方法,并出口
var disconnect = function () {
    mongoose.disconnect();
};
exports.disconnect = disconnect;

//disconnect();