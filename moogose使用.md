## Mongoose
* Mongoose是什么?
	Mongoose是MongoDB nodejs驱动，可以在异步的环境下执行
* 安装Mongoose
	npm install mongoose
* 使用Mongoose
	//引入mongoose
	var mongoose = require('mongoose');
	//连接数据库
	mongoose.connect('mongodb://localhost/atguigu_o2o');
	//创建Schema的实例对象
	var Schema = mongoose.Schema;
	var userSchema = new Schema({ //指定所有字段
		phone : String
	});
	//根据userSchema生成模型
	var UserModel = mongoose.model('user', userSchema);

	//查询得到所有数据
	UserModel.find(function(err, users){
		
	});

	//查询得到一个文档(记录)
	UserModel.findOne({_id: 'xxx'}, function(err, user)) {
		
	}

	//保存一个文档(记录)
	var userModel = new UserModel({phone : '13712341234'});
	userModel.save(function(err, user){

	});

	//更新一个文档(记录)
	UserModel.update({_id:user._id}, user, function(err, result){
		            //(查找条件,数据对象,回调函数)
	});

	//删除一个文档(记录)
	UserModel.remove({_id:'xxxxx'}, function(err, result){
		
	});


	//得到连接对象
	var conn = mongoose.connection;
	
	//监听打开连接
	db.once('open', function() {
	    console.log('we are connected!');
	});

	//设置连接错误的监听
    db.on('error', console.error.bind(console, 'connection error:'));