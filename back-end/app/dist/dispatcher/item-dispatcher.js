"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var business_factory_1 = require("../business/business-factory");
var cors = require("cors");
var itemDispatcher = express.Router();
itemDispatcher.route("")
    .get(function (req, res) {
    var itemBO = business_factory_1.getBO(business_factory_1.BOType.ITEM);
    var promise = itemBO.findAllItem();
    promise.then(function (items) {
        res.status(200).json(items);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("code" in req.body && "description" in req.body && "unitPrice" in req.body && "qtyOnHand" in req.body)) {
        res.status(400).send("invalid Request Body");
        return;
    }
    var itemBO = business_factory_1.getBO(business_factory_1.BOType.ITEM);
    var promise = itemBO.saveItem(req.body);
    promise.then(function (status) { return res.status(201).json(status); }).
        catch(function (err) { return res.status(500).send(err); });
})
    .head(cors({ exposedHeaders: ['x-count'] }), function (req, res) {
    var itemBO = business_factory_1.getBO(business_factory_1.BOType.ITEM);
    var promise = itemBO.getItemCount();
    promise.then(function (count) {
        res.append("x-count", count + "");
        res.sendStatus(200);
    }).catch(function (err) {
        res.sendStatus(500);
    });
});
itemDispatcher.route("/:id")
    .get(function (req, res) {
    var itemBO = business_factory_1.getBO(business_factory_1.BOType.ITEM);
    var promise = itemBO.findItem(req.params.id);
    promise.then(function (item) {
        if (item.length > 0) {
            res.status(200).send(item[0]);
        }
        else {
            res.sendStatus(404);
        }
    }).catch(function (err) {
        res.status(500).send(err);
    });
})
    .put(function (req, res) {
    if (!("code" in req.body && "description" in req.body && "unitPrice" in req.body && "qtyOnHand" in req.body)) {
        res.status(400).send("invalid Request Body");
        console.log(req.body.code, req.params.id);
        return;
    }
    if (req.body.code !== req.params.id) {
        console.log();
        res.status(400).send("Mismatched Customer ID");
        return;
    }
    var itemBO = business_factory_1.getBO(business_factory_1.BOType.ITEM);
    var promise = itemBO.updateItem(req.body);
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
    var itemBO = business_factory_1.getBO(business_factory_1.BOType.ITEM);
    var promise = itemBO.deleteItem(req.params.id);
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
exports.default = itemDispatcher;
