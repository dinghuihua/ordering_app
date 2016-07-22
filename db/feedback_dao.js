/* 操作 feedbacks 集合的 dao*/
var connection = require('./connection');
var mongoose = connection.mongoose;

/* 测试代码
 connection.connect();
 function cb(err, result) {
 console.log('err='+ err + " result="+ result);
 }
*/

// * Schema
var Schema = mongoose.Schema;
    //ps: Schema中如何定义规则, 要查看api或者json文件
var feedbackSchema = new Schema({
    user_id: String,
    phone: String,
    content: String,
    create_time: {
        type: Date,
        default: Date.now()  //指定默认值是
    }
});
// * Model
var FeedbackModel = mongoose.model('feedback', feedbackSchema);

// * 定义addFeedback(), 并出口
var addFeedback = function (feedback, cb) {
    var feedbackModel = new FeedbackModel(feedback);
    feedbackModel.save(cb);
};
exports.addFeedback = addFeedback;

//以下是测试:
/*
addFeedback({
    user_id:'1111111111111',
    phone:'1898888888',
    content: '小丁女神是个美女',
    create_time: '2016-6-27'
},cb);
*/
