"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var business_factory_1 = require("../business/business-factory");
var customerDispatcher = express.Router();
customerDispatcher.route("")
    .get(function (req, res) {
    var customerBO = business_factory_1.getBO(business_factory_1.BOType.CUSTOMER);
    var promise = customerBO.findAllCustomer();
    promise.then(function (customers) {
        res.status(200).json(customers);
    }).catch(function (error) {
        res.status(500).send(error);
    });
})
    .post(function (req, res) {
    if (!("id" in req.body && "name" in req.body && "address" in req.body)) {
        res.status(400).send("invalid Request Body");
        return;
    }
    var customerBO = business_factory_1.getBO(business_factory_1.BOType.CUSTOMER);
    var promise = customerBO.saveCustomer(req.body);
    promise.then(function (status) { return res.status(201).json(status); }).
        catch(function (err) { return res.status(500).send(err); });
})
    .head(cors({
    exposedHeaders: ['x-count']
}), function (req, res) {
    var customerBO = business_factory_1.getBO(business_factory_1.BOType.CUSTOMER);
    var promise = customerBO.getCount();
    promise.then(function (count) {
        res.append("x-count", count + "");
        res.sendStatus(200);
    }).catch(function (err) {
        res.sendStatus(500);
    });
});
customerDispatcher.route("/:id")
    .get(function (req, res) {
    var customerBO = business_factory_1.getBO(business_factory_1.BOType.CUSTOMER);
    var promise = customerBO.findCustomer(req.params.id);
    promise.then(function (customer) {
        if (customer.length > 0) {
            res.status(200).send(customer[0]);
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
        res.status(400).send("Invalid Request Body");
        return;
    }
    if (req.body.id !== req.params.id) {
        res.status(400).send("Mismatched Customer ID");
        return;
    }
    var customerBO = business_factory_1.getBO(business_factory_1.BOType.CUSTOMER);
    var promise = customerBO.updateCustomer(req.body);
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
    var customerBO = business_factory_1.getBO(business_factory_1.BOType.CUSTOMER);
    var promise = customerBO.deleteCustomer(req.params.id);
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
exports.default = customerDispatcher;
