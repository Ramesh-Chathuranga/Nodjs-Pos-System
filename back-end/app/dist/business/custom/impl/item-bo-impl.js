"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require("promise");
var db_pool_1 = require("../../../db/db-pool");
var dao_factory_1 = require("../../../dao/dao-factory");
var ItemBoImpl = /** @class */ (function () {
    function ItemBoImpl() {
    }
    ItemBoImpl.prototype.deleteItem = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.ITEM, connection);
                    var promise = itemDAO.delete(id);
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
    ItemBoImpl.prototype.findAllItem = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.ITEM, connection);
                    var promise = itemDAO.findAll();
                    promise.then(function (items) {
                        resolve(items);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBoImpl.prototype.findItem = function (id) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.ITEM, connection);
                    var promise = itemDAO.find(id);
                    promise.then(function (item) {
                        resolve(item);
                        db_pool_1.pool.releaseConnection(connection);
                    }).catch(function (error) {
                        reject(error);
                        db_pool_1.pool.releaseConnection(connection);
                    });
                }
            });
        });
    };
    ItemBoImpl.prototype.getItemCount = function () {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.ITEM, connection);
                    var promise = itemDAO.countOfItems();
                    promise.then(function (count) {
                        resolve(count);
                    }).catch(function (error) {
                        reject(error);
                    });
                }
            });
        });
    };
    ItemBoImpl.prototype.saveItem = function (itemDTO) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.ITEM, connection);
                    var promise = itemDAO.save(itemDTO);
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
    ItemBoImpl.prototype.updateItem = function (itemDTO) {
        return new Promise(function (resolve, reject) {
            db_pool_1.pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    var itemDAO = dao_factory_1.getDAO(dao_factory_1.DAOType.ITEM, connection);
                    var promise = itemDAO.update(itemDTO);
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
    return ItemBoImpl;
}());
exports.ItemBoImpl = ItemBoImpl;
