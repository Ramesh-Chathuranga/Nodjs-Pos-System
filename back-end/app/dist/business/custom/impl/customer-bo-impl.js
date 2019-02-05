"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_pool_1 = require("../../../db/db-pool");
var dao_factory_1 = require("../../../dao/dao-factory");
var Promise = require("promise");
var CustomerBoImpl = /** @class */ (function () {
    function CustomerBoImpl() {
    }
    CustomerBoImpl.prototype.deleteCustomer = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.CUSTOMER, connection);
                    var promise = customerDAO.delete(id);
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
    CustomerBoImpl.prototype.findAllCustomer = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.CUSTOMER, connection);
                    var promise = customerDAO.findAll();
                    promise.then(function (customers) {
                        resolve(customers);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBoImpl.prototype.findCustomer = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.CUSTOMER, connection);
                    var promise = customerDAO.find(id);
                    promise.then(function (customer) {
                        resolve(customer);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    CustomerBoImpl.prototype.getCount = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.CUSTOMER, connection);
                    var promise = customerDAO.countCustomer();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (error) {
                        reject(error);
                    });
                }
            });
        });
    };
    CustomerBoImpl.prototype.saveCustomer = function (customerDTO) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.CUSTOMER, connection);
                    var promise = customerDAO.save(customerDTO);
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
    CustomerBoImpl.prototype.updateCustomer = function (customerDTO) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var customerDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.CUSTOMER, connection);
                    var promise = customerDAO.update(customerDTO);
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
    return CustomerBoImpl;
}());
exports.CustomerBoImpl = CustomerBoImpl;
