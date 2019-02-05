"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var business_factory_1 = require("../business/business-factory");
var placeOrderDispatcher = express.Router();
placeOrderDispatcher.route("")
    .get(function (req, res) {
    var orderBO = business_factory_1.getBO(business_factory_1.BOType.ORDER);
    var promise = orderBO.findAllOrder();
    promise.then(function (orders) {
        res.status(200).json(orders);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    console.log(req.body.id);
    if (!("id" in req.body && "date" in req.body && "customerId" in req.body)) {
        res.status(400).send("invalid Request Body");
        return;
    }
    var orderBO = business_factory_1.getBO(business_factory_1.BOType.ORDER);
    var promise = orderBO.saveOrder(req.body);
    promise.then(function (status) { return res.status(201).json(status); }).
        catch(function (err) { return res.status(500).send(err); });
})
    .head(cors({ exposedHeaders: ['x-count'] }), function (req, res) {
    console.log(1);
    var orderBO = business_factory_1.getBO(business_factory_1.BOType.ORDER);
    var promise = orderBO.getOrderCount();
    promise.then(function (count) {
        console.log(2);
        res.append("x-count", count + "");
        res.sendStatus(200);
    }).catch(function (err) {
        res.sendStatus(500);
    });
});
placeOrderDispatcher.route("/:id")
    .get(function (req, res) {
    var orderBO = business_factory_1.getBO(business_factory_1.BOType.ORDER);
    var promise = orderBO.findOrder(req.params.id);
    promise.then(function (order) {
        if (order.length > 0) {
            res.status(200).send(order[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
})
    .put(function (req, res) {
    if (!("id" in req.body && "name" in req.body && "address" in req.body)) {
        res.status(400).send("invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched Customer ID");
        return;
    }
    var orderBO = business_factory_1.getBO(business_factory_1.BOType.ORDER);
    var promise = orderBO.updateOrder(req.body);
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
    var orderBO = business_factory_1.getBO(business_factory_1.BOType.ORDER);
    var promise = orderBO.deleteOrder(req.params.id);
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
exports.default = placeOrderDispatcher;
