"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var CustomerDAOImpl = /** @class */ (function () {
    function CustomerDAOImpl(connection) {
        this.connection = connection;
    }
    CustomerDAOImpl.prototype.delete = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Delete from customer Where id='" + id + "'", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.find = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select * from customer where id='" + id + "'", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Select * from customer", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.save = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("Insert into customer values ('" + entity.id + "','" + entity.name + "','" + entity.address + "')", function (err, result, field) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result.affectedRows > 0);
                }
            });
        });
    };
    CustomerDAOImpl.prototype.update = function (entity) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log("UPDATE Customer SET name = '" + entity.name + "', address ='" + entity.address + "' WHERE id='" + entity.id + "'");
            _this.connection.query("UPDATE Customer SET name = '" + entity.name + "', address ='" + entity.address + "' WHERE id='" + entity.id + "'", function (err, result) {
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
    CustomerDAOImpl.prototype.countCustomer = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("SELECT count(*) as count From customer", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result[0].count);
                }
            });
        });
    };
    return CustomerDAOImpl;
}());
exports.CustomerDAOImpl = CustomerDAOImpl;
