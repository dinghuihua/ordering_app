"use strict";
/* 数据库操作总接口 */
var user_dao = require('./user_dao');
var feedback_dao =  require('./feedback_dao');
var address_dao = require('./address_dao');
var banner_dao = require('./banner_dao');
var meal_dao = require('./meal_dao');
var order_dao = require('./order_dao');

var data = {
    //用户路由的方法
    getUser: function (phone, cb) {
        user_dao.getUser(phone, function (err, user) {  //result 其实是一个user对象
            if(err){
                throw err;
            }
            cb(user); //把得到的user对象通过回调函数传回去
        });
    },
    addUser: function (user, cb) {
        user_dao.addUser(user, function (err, newUser) {
            if (err){
                throw err;
            }
            cb(newUser);
        })
    },
    addFeedback: function (feedback, cb) {
        feedback_dao.addFeedback(feedback, function (err, newFeedback) {
            if (err){
                throw err;
            }
            cb(newFeedback);
        })
    },
    
    //地址路由的方法
    getAddrsByUserId: function (userId, cb) {
        address_dao.getAddrsByUserId(userId, function (err, address) {
            if (err){
                throw err;
            }
            cb(address);
        });
    },
    addAddr: function (address, cb) {
        address_dao.addAddr(address, function (err, newAddress) {
            if (err){
                throw err;
            }
            cb(newAddress);
        })
    },
    updateAddr: function (address, cb) {
        // address_dao.updateAddr({_id: address._id}, address, function (err, result) {
        address_dao.updateAddr( address, function (err, result) {
            if (err){
                throw err;
            }
            cb(result);
        })
    },
    deleteAddrById: function (id, cb) {
        address_dao.deleteAddrById({_id: id}, function (err, result) {
            if (err){
                throw err;
            }
            cb(result);
        })
    },
    //首页路由的方法
    getBanners: function (cb) {
        banner_dao.getBanners(function (err, bannerArr) {
            if (err){
                throw err;
            }
            cb(bannerArr);
        })
    },
    getMeals: function (cb) {
        meal_dao.getMeals(function (err, mealArr) {
            if (err){
                throw err;
            }
            cb(mealArr);
        })
    },
    //订单路由的方法
    addOrder: function (order, cb) {
        order_dao.addOrder(order, function (err, newOrder) {
            if (err){
                throw err;
            }
            cb(newOrder);
        })
    },
    getOrderById: function (id, cb) {
        order_dao.getOrderById(id, function (err, order) {
            if (err){
                throw err;
            }
            cb(order);
        })
    },
    getOrdersByUserId: function (userId, cb) {
        order_dao.getOrdersByUserId(userId, function (err, orderArr) {
            if (err){
                throw err;
            }
            cb(orderArr);
        })
    },
    //得到一个默认地址
    getDefaultAddrByUserId: function (userId, cb) {
        address_dao.getDefaultAddrByUserId(userId, function (err, order) {
            if (err){
                throw err;
            }
            cb(order);
        })
    }
    
};

module.exports = data;