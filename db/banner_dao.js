/* 操作 index_banners 集合的 dao*/
var connection = require('./connection');

/*
connection.connect();
function cb(err, result) {
    console.log('err='+err + " result="+ result);
}
*/

var mongoose = connection.mongoose;

var bannerSchema = new mongoose.Schema({
    img_src: String,
    link: String,
    sort: Boolean
});

var BannerModel = mongoose.model('index_banner', bannerSchema);

function getBanners(cb) {
    BannerModel.find(cb)
}
exports.getBanners = getBanners;
//getBanners(cb);