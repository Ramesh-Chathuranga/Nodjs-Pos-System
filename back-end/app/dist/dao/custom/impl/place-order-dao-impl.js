"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var OrderDAOImpl = /** @class */ (function () {
    function OrderDAOImpl(connection) {
        this.connection = connection;
    }
    OrderDAOImpl.prototype.countOfOrders = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT count(*)  From orders ", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    console.log(result[0]['count(*)']);
                    resolve(result[0]['count(*)']);
                }
            });
        });
    };
    OrderDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Delete from orders Where id='" + id + "'", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    OrderDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select * from orders where id='" + id + "'", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Select * from orders", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    OrderDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Insert into orders values ('" + entity.orderId + "','" + entity.date + "','" + entity.customerId + "')", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    OrderDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE orders SET customerId = '" + entity.customerId + "', date ='" + entity.date + "' WHERE id='" + entity.orderId + "'", function (err, result) {
                if (err) {
                    console.log(3);
                    reject(err);
                }
                else {
                    console.log(4, result.affectedRows > 0);
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    return OrderDAOImpl;
}());
exports.OrderDAOImpl = OrderDAOImpl;
