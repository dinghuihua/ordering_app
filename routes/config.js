/* 总路由:
  不负责具体的注册路由
  调用所有分支路由去注册路由

 */

var express = require('express');
var router = express.Router();

var user = require('./user');
var address = require('./address');
var index = require('./index');
var order = require('./order');

//直接调用各个路由模块 暴露的函数, 把router传过去, 供给各个路由模块 去注册多个路由
//调用所有分支路由函数, 注册所有路由
user(router);
address(router);
index(router);
order(router);


module.exports = router;
