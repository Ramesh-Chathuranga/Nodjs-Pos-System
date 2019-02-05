"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderDetailDTO = /** @class */ (function () {
    function OrderDetailDTO(orderId, itemCode, qty, unitPrice) {
        this.orderId = orderId;
        this.itemCode = itemCode;
        this.qty = qty;
        this.unitPrice = unitPrice;
    }
    return OrderDetailDTO;
}());
exports.OrderDetailDTO = OrderDetailDTO;
