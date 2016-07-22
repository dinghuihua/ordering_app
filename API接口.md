
1、登录接口
	地址：
	    /login
	请求体: 
	    phone=13716962779&code=123123
    返回:
        {
            "code": 0,
            "data": {
                "__v": 0,
                "phone": "13716962779",
                "_id": "576bbe0aa1d183c42c06c08e"
            }
        }

2. 意见反馈:
    地址:
        /feedback?data=%7B%22user_id%22:%22576bbe0aa1d183c42c06c08e%22,%22phone%22:%2213716962779%22,%22content%22:%22%E4%B8%8D%E9%94%99%E4%B8%8D%E9%94%99!%22%7D
    参数: data = {
                    "user_id": "576bbe0aa1d183c42c06c08e",
                    "phone": "13716962779",
                    "content": "不错不错!"
                }
    返回:
        {
            "code": 0,
            "data": {
                "__v": 0,
                "user_id": "576bbe0aa1d183c42c06c08e",
                "phone": "13716962779",
                "content": "不错不错",
                "_id": "576bd0379f36dbc017176254",
                "create_time": "2016-06-23T12:03:03.306Z"
            }
        }
        
3. 添加地址
    地址:
        /insertAddr?address=%7B%22userId%22:%22576bbe0aa1d183c42c06c08e%22,%22lat%22:39.99392711698915,%22lng%22:116.32432928208593,%22cityId%22:113,%22contactor%22:%22%E5%BC%A0%E6%99%93%E9%A3%9E%22,%22sex%22:1,%22phone%22:%2213716962779%22,%22address%22:%22%E9%BE%99%E9%9A%86%E6%98%8C%E7%A7%91%E6%8A%80%E6%A5%BC%22,%22doorplate%22:%223%E5%B1%82301%22%7D
        /insertAddr?address=%7B%22userId%22:%22576bbe0aa1d183c42c06c08e%22,%22lat%22:39.994804625178226,%22lng%22:116.32785962274014,%22cityId%22:113,%22contactor%22:%22%E9%98%AE%E6%99%93%E8%8F%B2%22,%22sex%22:2,%22phone%22:%2215010176627%22,%22address%22:%22%E4%B8%AD%E5%85%B3%E6%9D%911%E5%8F%B7%E6%A5%BC%22,%22doorplate%22:%223%E5%B1%82301%22%7D
    参数:
        address={
                    "userId": "576bbe0aa1d183c42c06c08e",
                    "lat": 39.99392711698915,
                    "lng": 116.32432928208593,
                    "cityId": 113,
                    "contactor": "张晓飞",
                    "sex": 1,
                    "phone": "13716962779",
                    "address": "龙隆昌科技楼",
                    "doorplate": "3层301"
                }
    返回:

4. 查询用户的地址列表
    地址:
        /getAddrsByUserId?userId=576bbe0aa1d183c42c06c08e
    返回:
        {
            "code": 0,
            "data": [
                {
                    "_id": "576bc242b20ba0b02ed9c5cc",
                    "userId": "576bbe0aa1d183c42c06c08e",
                    "lat": "39.99392711698915",
                    "lng": "116.32432928208593",
                    "cityId": "113",
                    "contactor": "张晓飞",
                    "sex": "1",
                    "phone": "13716962779",
                    "address": "龙隆昌科技楼",
                    "doorplate": "3层301",
                    "state": "1",
                    "__v": 0
                },
                {
                    "_id": "576bc3e9b20ba0b02ed9c5ce",
                    "userId": "576bbe0aa1d183c42c06c08e",
                    "lat": "39.994804625178226",
                    "lng": "116.32785962274014",
                    "cityId": "113",
                    "contactor": "阮晓菲",
                    "sex": "2",
                    "phone": "15010176627",
                    "address": "中关村1号楼",
                    "doorplate": "3层301",
                    "state": "1",
                    "__v": 0
                }
            ]
        }

5. 查看某个地址
    地址:
        /getAddrById?_id=576bc242b20ba0b02ed9c5cc
    返回:
        {
            "code": 0,
            "data": {
                "_id": "576bc242b20ba0b02ed9c5cc",
                "userId": "576bbe0aa1d183c42c06c08e",
                "lat": "39.99392711698915",
                "lng": "116.32432928208593",
                "cityId": "113",
                "contactor": "张晓飞",
                "sex": "1",
                "phone": "13716962779",
                "address": "龙隆昌科技楼",
                "doorplate": "3层301",
                "state": "1",
                "__v": 0
            }
        }

6. 修改地址:
    地址:
        /updateAddr?address=%7B%22_id%22:%22576bc242b20ba0b02ed9c5cc%22,%22userId%22:%22576bbe0aa1d183c42c06c08e%22,%22lat%22:39.99565448448077,%22lng%22:116.32219131497217,%22cityId%22:113,%22contactor%22:%22%E5%BC%A0%E6%99%93%E9%A3%9E22%22,%22sex%22:%221%22,%22phone%22:%2213716962779%22,%22address%22:%22%E5%93%81%E7%89%8C%E5%88%9B%E6%96%B0%E7%A0%94%E7%A9%B6%E6%89%80%22,%22doorplate%22:%223%E5%B1%82301%22,%22state%22:%221%22,%22__v%22:0%7D
    参数:
        address={
                    "_id": "576bc242b20ba0b02ed9c5cc",
                    "userId": "576bbe0aa1d183c42c06c08e",
                    "lat": 39.99565448448077,
                    "lng": 116.32219131497217,
                    "cityId": 113,
                    "contactor": "张晓飞22",
                    "sex": "1",
                    "phone": "13716962779",
                    "address": "品牌创新研究所",
                    "doorplate": "3层301",
                    "state": "1",
                    "__v": 0
                }
    返回:
        {"code":0,"data":{"ok":1,"nModified":0,"n":1}}
7. 删除某个地址
    地址:
        /deleteAddr?_id=576bc242b20ba0b02ed9c5cc
    返回:
        {
            "code": 0,
            "data": {
                "_id": "576bc242b20ba0b02ed9c5cc",
                "userId": "576bbe0aa1d183c42c06c08e",
                "lat": "39.99565448448077",
                "lng": "116.32219131497217",
                "cityId": "113",
                "contactor": "张晓飞22",
                "sex": "1",
                "phone": "13716962779",
                "address": "品牌创新研究所",
                "doorplate": "3层301",
                "state": "1",
                "__v": 0
            }
        }
        
8. 获取首页数据
	地址：/index/data
	返回值 ：
        {
            "code": 0,
            "data": {
                "meals": [
                    {
                        "_id": "575f7085f8a14116283dab9e",
                        "group_id": "0",
                        "groupName": "",
                        "mealCode": "",
                        "mealType": "1",
                        "mealName": "熏鸡肉沙拉",
                        "price": "23",
                        "originalPrice": "28",
                        "picture": "/assets/images/img/1.png",
                        "instruction": null,
                        "sales": "256",
                        "state": null
                    },
                    {
                        "_id": "575f7085f8a14116283dab9f",
                        "group_id": "1",
                        "groupName": null,
                        "mealCode": null,
                        "mealType": "1",
                        "mealName": "吞拿鱼沙拉",
                        "price": "21",
                        "originalPrice": "25",
                        "picture": "/assets/images/img/2.png",
                        "instruction": null,
                        "sales": "236",
                        "state": null
                    },
                    {
                        "_id": "575f7085f8a14116283daba0",
                        "group_id": "2",
                        "groupName": "",
                        "mealCode": null,
                        "mealType": "1",
                        "mealName": "藜麦牛油果沙拉",
                        "price": "23",
                        "originalPrice": "25",
                        "picture": "/assets/images/img/3.png",
                        "instruction": null,
                        "sales": "366",
                        "state": null
                    },
                    {
                        "_id": "575f7085f8a14116283daba1",
                        "group_id": "1",
                        "groupName": null,
                        "mealCode": null,
                        "mealType": "1",
                        "mealName": "三文鱼沙拉",
                        "price": "30",
                        "originalPrice": "33",
                        "picture": "/assets/images/img/4.png",
                        "instruction": null,
                        "sales": "566",
                        "state": null
                    },
                    {
                        "_id": "575f7085f8a14116283daba2",
                        "group_id": "1",
                        "groupName": null,
                        "mealCode": null,
                        "mealType": "1",
                        "mealName": "牛油果三文鱼沙拉",
                        "price": "33",
                        "originalPrice": "36",
                        "picture": "/assets/images/img/5.png",
                        "instruction": null,
                        "sales": "266",
                        "state": null
                    },
                    {
                        "_id": "575f7085f8a14116283daba3",
                        "group_id": "1",
                        "groupName": null,
                        "mealCode": null,
                        "mealType": "1",
                        "mealName": "黑椒牛肉沙拉",
                        "price": "38",
                        "originalPrice": "40",
                        "picture": "/assets/images/img/6.png",
                        "instruction": null,
                        "sales": "452",
                        "state": null
                    }
                ],
                "isMatched": "yes",
                "restaurant": {
                    _id : 'xxxx',
                    "address": "北京市海淀区颐和园路2号硅谷电脑城地下二层美食城",
                    "cityId": 0,
                    "coverArea": "[{\"x\":116.306893,\"y\":40.002966},{\"x\":116.312642,\"y\":40.003519},{\"x\":116.314618,\"y\":40.004127},{\"x\":116.315696,\"y\":40.005108},{\"x\":116.319397,\"y\":40.005398},{\"x\":116.321409,\"y\":40.005509},{\"x\":116.324428,\"y\":39.981892},{\"x\":116.310468,\"y\":39.981574},{\"x\":116.307899,\"y\":39.980814},{\"x\":116.307108,\"y\":39.991939},{\"x\":116.306569,\"y\":39.994703},{\"x\":116.30603,\"y\":39.997495},{\"x\":116.305995,\"y\":39.998821}]",
                    "distance": 0.5079205021418997,
                    "id": 1772,
                    "lat": 39.993403,
                    "lng": 116.311644,
                    "minMoney": 0,
                    "phone": "13718213944",
                    "pinpaiId": 0,
                    "rstName": "硅谷店",
                    "songcanfei": 0,
                    "state": 1,
                    "workTime": "08:00-19:00"
                },
                "address": {
                    "name": "温都水城",
                    "lat": 39.993403,
                    "lng": 116.311644,
                    "cityId": 113
                }
            }
        }
9. 获取首页轮播图列表数据
    地址: /index/banners
    返回:
        {
            "code": 0,
            "data": [
                {
                    "_id": "575f7085f8a14116283dab9c",
                    "img_src": "/assets/images/img/bar1.jpg",
                    "link": null,
                    "sort": true
                },
                {
                    "_id": "575f7085f8a14116283dab9d",
                    "img_src": "/assets/images/img/bar2.png",
                    "link": null,
                    "sort": false
                }
            ]
        }
10. 下单
    地址:
        /order/createOrder
    参数:
        order = {
            "user_id": "576bbe0aa1d183c42c06c08e",
            "contactor": "张晓飞",
            "address": "龙隆昌科技楼",
            "phone": "13716962779",
            "total_money": 56,
            "doorplate": "3层301",
            "remark": "加一份米饭",
            "arrive_time": "2016-6-23 20:14",
            "detail": "{\"data\":{\"rstId\":1772,\"money\":56,\"meals\":[{\"mealName\":\"藜麦牛油果沙拉\",\"pictures\":\"%2Fsource%2Fassets%2Fimages%2Fimg%2F3.png\",\"num\":1,\"price\":\"23\"},{\"mealName\":\"牛油果三文鱼沙拉\",\"pictures\":\"%2Fsource%2Fassets%2Fimages%2Fimg%2F5.png\",\"num\":1,\"price\":\"33\"}]} }"
        }
    返回:
        {
            "code": 0,
            "data": {
                "__v": 0,
                "user_id": "576bbe0aa1d183c42c06c08e",
                "contactor": "张晓飞",
                "address": "龙隆昌科技楼",
                "phone": "13716962779",
                "total_money": "56",
                "doorplate": "3层301",
                "remark": "加一份米饭",
                "arrive_time": "Thu Jun 23 2016 22:04:48 GMT+0800 (中国标准时间)",
                "detail": "{\"data\":[{\"rstId\":1772,\"money\":56,\"meals\":[{\"mealName\":\"藜麦牛油果沙拉\",\"pictures\":\"%2Fsource%2Fassets%2Fimages%2Fimg%2F3.png\",\"num\":1,\"price\":\"23\"},{\"mealName\":\"牛油果三文鱼沙拉\",\"pictures\":\"%2Fsource%2Fassets%2Fimages%2Fimg%2F5.png\",\"num\":1,\"price\":\"33\"}]}]}",
                "state": "3",
                "_id": "576bde706ba53de421b89ae1",
                "order_time": "2016-06-23T12:05:59.621Z"
            }
        }
11. 显示订单详情:
    地址:
        /order/detail/576bc5adb20ba0b02ed9c5d0
    返回:
        订单详情页面(orderDetail.ejs)

12. 显示订单列表:
    地址:
        /order/orderList?userId=576bbe0aa1d183c42c06c08e
    返回:
        订单列表页面(orderList.ejs)

13. 查询得到默认地址
    地址:
        /order/getNewestAddress?userId=576bbe0aa1d183c42c06c08e
    返回:
        {
            "code": 0,
            "data": {
                "_id": "576bd1366ba53de421b89ae0",
                "userId": "576bbe0aa1d183c42c06c08e",
                "lat": "40.00040797245814",
                "lng": "116.3373996272561",
                "cityId": "113",
                "contactor": "张晓飞",
                "sex": "1",
                "phone": "13716962779",
                "address": "清华科技园",
                "doorplate": "2层201",
                "state": "1",
                "__v": 0
            }
        }

