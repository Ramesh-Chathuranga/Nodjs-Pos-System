"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customer_bo_impl_1 = require("./custom/impl/customer-bo-impl");
var item_bo_impl_1 = require("./custom/impl/item-bo-impl");
var order_bo_impl_1 = require("./custom/impl/order-bo-impl");
var orderdetail_bo_impl_1 = require("./custom/impl/orderdetail-bo-impl");
var BOType;
(function (BOType) {
    BOType[BOType["CUSTOMER"] = 0] = "CUSTOMER";
    BOType[BOType["ITEM"] = 1] = "ITEM";
    BOType[BOType["ORDER"] = 2] = "ORDER";
    BOType[BOType["ORDER_DETAIL"] = 3] = "ORDER_DETAIL";
})(BOType = exports.BOType || (exports.BOType = {}));
function getBO(botype) {
    switch (botype) {
        case BOType.CUSTOMER:
            return new customer_bo_impl_1.CustomerBoImpl();
        case BOType.ITEM:
            return new item_bo_impl_1.ItemBoImpl();
        case BOType.ORDER:
            return new order_bo_impl_1.OrderBoImpl();
        case BOType.ORDER_DETAIL:
            return new orderdetail_bo_impl_1.OrderdetailBoImpl();
    }
}
exports.getBO = getBO;
