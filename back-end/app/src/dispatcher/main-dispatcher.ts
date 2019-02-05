import express=require("express");
import cors=require("cors");
import customerDispatcher from "./customer-dispatcher";
import itemDispatcher from "./item-dispatcher";
import orderDetailDispatcher from "./order-detail-dispatcher";
import placeOrderDispatcher from "./place-order-dispatcher";

const mainDispatcher=express.Router();
mainDispatcher.use(cors());
mainDispatcher.use(express.json());
mainDispatcher.use("/api/v1/customers",customerDispatcher);
mainDispatcher.use("/api/v1/items",itemDispatcher);
mainDispatcher.use("/api/v1/order-details",orderDetailDispatcher);
mainDispatcher.use("/api/v1/place-orders",placeOrderDispatcher);
export default mainDispatcher;