"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var business_factory_1 = require("../business/business-factory");
var orderDetailDispatcher = express.Router();
orderDetailDispatcher.route("")
    .get(function (req, res) {
    var orderDetailBO = business_factory_1.getBO(business_factory_1.BOType.ORDER_DETAIL);
    var promise = orderDetailBO.findAllOrderDetail();
    promise.then(function (orderDetails) {
        res.status(200).json(orderDetails);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("id" in req.body && "date" in req.body && "customerId" in req.body)) {
        res.status(400).send("invalid Request Body");
        return;
    }
    var orderDetailBO = business_factory_1.getBO(business_factory_1.BOType.ORDER_DETAIL);
    var promise = orderDetailBO.saveOrderDetail(req.body);
    promise.then(function (status) { return res.status(201).json(status); }).
        catch(function (err) { return res.status(500).send(err); });
})
    .head(cors({ exposedHeaders: ['x-count'] }), function (req, res) {
    var orderDetailBO = business_factory_1.getBO(business_factory_1.BOType.ORDER_DETAIL);
    var promise = orderDetailBO.getOrderDetailCount();
    promise.then(function (count) {
        res.append("x-count", count + "");
        res.sendStatus(200);
    }).catch(function (err) {
        res.sendStatus(500);
    });
});
orderDetailDispatcher.route("/:id")
    .get(function (req, res) {
    var orderDetailBO = business_factory_1.getBO(business_factory_1.BOType.ORDER_DETAIL);
    var promise = orderDetailBO.findOrderDetail(req.params.id);
    promise.then(function (order) {
        if (order.length > 0) {
            res.status(200).send(order);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
})
    .put(function (req, res) {
    if (!("id" in req.body && "date" in req.body && "customerId" in req.body)) {
        res.status(400).send("invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched Customer ID");
        return;
    }
    var orderDetailBO = business_factory_1.getBO(business_factory_1.BOType.ORDER_DETAIL);
    var promise = orderDetailBO.updateOrderDetail(req.body);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
})
    .delete(function (req, res) {
    var orderDetailBO = business_factory_1.getBO(business_factory_1.BOType.ORDER_DETAIL);
    var promise = orderDetailBO.deleteOrderDetail(req.params.id);
    promise.then(function (status) {
        if (status) {
            res.status(200).send(true);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
});
exports.default = orderDetailDispatcher;
