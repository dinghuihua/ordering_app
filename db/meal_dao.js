/* 操作 meals集合的 dao*/
var connection = require('./connection');

/*
connection.connect();
function cb(err, result) {
    console.log('err='+err+' result='+result)
}
*/
var mongoose = connection.mongoose;

var mealSchema = new mongoose.Schema({
    "group_id": Number,
    "groupName": String,
    "mealCode": String,
    "mealType": Number,
    "mealName": String,
    "price": Number,
    "originalPrice": Number,
    "picture": String,
    "instruction": String,
    "sales": Number,
    "state": Number
});

var MealModel = mongoose.model('meal', mealSchema);

function getMeals(cb) {
    MealModel.find(cb)
}
exports.getMeals = getMeals;
//getMeals(cb);