"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_dao_impl_1 = require("./custom/impl/customer-dao.impl");
var place_order_dao_impl_1 = require("./custom/impl/place-order-dao-impl");
var item_dao_impl_1 = require("./custom/impl/item-dao-impl");
var order_detail_dao_impl_1 = require("./custom/impl/order-detail-dao-impl");
var DAOType;
(function (DAOType) {
    DAOType[DAOType["CUSTOMER"] = 0] = "CUSTOMER";
    DAOType[DAOType["ITEM"] = 1] = "ITEM";
    DAOType[DAOType["ORDER"] = 2] = "ORDER";
    DAOType[DAOType["Order_Detail"] = 3] = "Order_Detail";
})(DAOType = exports.DAOType || (exports.DAOType = {}));
function getDAO(daoType, connection) {
    switch (daoType) {
        case DAOType.CUSTOMER:
            return new customer_dao_impl_1.CustomerDAOImpl(connection);
        case DAOType.ITEM:
            return new item_dao_impl_1.ItemDaoImpl(connection);
        case DAOType.ORDER:
            return new place_order_dao_impl_1.OrderDAOImpl(connection);
        case DAOType.Order_Detail:
            return new order_detail_dao_impl_1.OrderDetailDaoImpl(connection);
    }
}
exports.getDAO = getDAO;
