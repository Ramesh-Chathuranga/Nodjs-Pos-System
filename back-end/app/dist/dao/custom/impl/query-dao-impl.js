"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var Class = /** @class */ (function () {
    function Class(connection) {
        this.connection = connection;
    }
    Class.prototype.nextOrderNumber = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.connection.query("select  id from customer  ORDER BY id DESC LIMIT 1;", function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    console.log(result);
                    resolve(result);
                }
            });
        });
    };
    return Class;
}());
exports.Class = Class;
