"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var ItemDaoImpl = /** @class */ (function () {
    function ItemDaoImpl(connection) {
        this.connection = connection;
    }
    ItemDaoImpl.prototype.countOfItems = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT count(*)  From item", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result[0]['count(*)']);
                }
            });
        });
    };
    ItemDaoImpl.prototype.delete = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Delete from item Where code='" + code + "'", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    ItemDaoImpl.prototype.find = function (code) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select * from item where code='" + code + "'", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    ItemDaoImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Select * from item", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    ItemDaoImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Insert into item values ('" + entity.code + "','" + entity.description + "','" + entity.unitPrice + "','" + entity.qtyOnHand + "')", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    ItemDaoImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("UPDATE item SET description = '" + entity.description + "', unitPrice ='" + entity.unitPrice + "', qtyOnHand ='" + entity.qtyOnHand + "' WHERE code='" + entity.code + "'", function (err, result) {
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
    return ItemDaoImpl;
}());
exports.ItemDaoImpl = ItemDaoImpl;
