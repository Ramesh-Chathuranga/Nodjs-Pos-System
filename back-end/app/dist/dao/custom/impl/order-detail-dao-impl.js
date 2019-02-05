"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var OrderDetailDaoImpl = /** @class */ (function () {
    function OrderDetailDaoImpl(connection) {
        this.connection = connection;
    }
    OrderDetailDaoImpl.prototype.orderDetailCount = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select  count(*) from orderdetail ;", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    console.log(result[0]["count(*)"]);
                    resolve(result[0]["count(*)"]);
                }
            });
        });
    };
    OrderDetailDaoImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Delete from orderdetail Where id='" + id + "'", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    OrderDetailDaoImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Select * from orderdetail where orderId='" + id + "'", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderDetailDaoImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Select * from orderdetail", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderDetailDaoImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Insert into orderdetail values ('" + entity.orderId + "','" + entity.itemCode + "','" + entity.qty + "','" + entity.unitPrice + "')", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    OrderDetailDaoImpl.prototype.update = function (entity) {
        return new Promise(function (resolve, reject) {
        });
    };
    return OrderDetailDaoImpl;
}());
exports.OrderDetailDaoImpl = OrderDetailDaoImpl;
