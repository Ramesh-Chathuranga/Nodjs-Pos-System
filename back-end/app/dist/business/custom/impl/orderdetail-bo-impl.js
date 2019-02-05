"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var db_pool_1 = require("../../../db/db-pool");
var dao_factory_1 = require("../../../dao/dao-factory");
var OrderdetailBoImpl = /** @class */ (function () {
    function OrderdetailBoImpl() {
    }
    OrderdetailBoImpl.prototype.deleteOrderDetail = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.Order_Detail, connection);
                    var promise = orderDetailDAO.delete(id);
                    promise.then(function (result) {
                        resolve(result);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderdetailBoImpl.prototype.findAllOrderDetail = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.Order_Detail, connection);
                    var promise = orderDetailDAO.findAll();
                    promise.then(function (orderDetails) {
                        resolve(orderDetails);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderdetailBoImpl.prototype.findOrderDetail = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.Order_Detail, connection);
                    var promise = orderDetailDAO.find(id);
                    promise.then(function (orderDetail) {
                        resolve(orderDetail);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderdetailBoImpl.prototype.getOrderDetailCount = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.Order_Detail, connection);
                    var promise = orderDetailDAO.orderDetailCount();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (error) {
                        reject(error);
                    });
                }
            });
        });
    };
    OrderdetailBoImpl.prototype.saveOrderDetail = function (orderDetailDTO) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.Order_Detail, connection);
                    var promise = orderDetailDAO.save(orderDetailDTO);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    OrderdetailBoImpl.prototype.updateOrderDetail = function (orderDetailDTO) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var orderDetailDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.Order_Detail, connection);
                    var promise = orderDetailDAO.update(orderDetailDTO);
                    promise.then(function (result) {
                        resolve(result);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    return OrderdetailBoImpl;
}());
exports.OrderdetailBoImpl = OrderdetailBoImpl;
