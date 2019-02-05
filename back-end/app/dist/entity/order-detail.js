"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetail = /** @class */ (function () {
    function OrderDetail(orderId, itemCode, qty, unitPrice) {
        this.orderId = orderId;
        this.itemCode = itemCode;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    return OrderDetail;
}());
exports.OrderDetail = OrderDetail;
