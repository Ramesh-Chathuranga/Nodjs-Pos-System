"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var customer_dispatcher_1 = __importDefault(require("./customer-dispatcher"));
var item_dispatcher_1 = __importDefault(require("./item-dispatcher"));
var order_detail_dispatcher_1 = __importDefault(require("./order-detail-dispatcher"));
var place_order_dispatcher_1 = __importDefault(require("./place-order-dispatcher"));
var mainDispatcher = express.Router();
mainDispatcher.use(cors());
mainDispatcher.use(express.json());
mainDispatcher.use("/api/v1/customers", customer_dispatcher_1.default);
mainDispatcher.use("/api/v1/items", item_dispatcher_1.default);
mainDispatcher.use("/api/v1/order-details", order_detail_dispatcher_1.default);
mainDispatcher.use("/api/v1/place-orders", place_order_dispatcher_1.default);
exports.default = mainDispatcher;
