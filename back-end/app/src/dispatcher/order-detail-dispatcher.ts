import express=require("express");
import cors = require("cors");
import {BOType, getBO} from "../business/business-factory";
import {OrderDetailBO} from "../business/custom/order-detail-bo";


const orderDetailDispatcher=express.Router();
orderDetailDispatcher.route("")
    .get((req,res)=>{
        const orderDetailBO=<OrderDetailBO>getBO(BOType.ORDER_DETAIL);
        const promise=orderDetailBO.findAllOrderDetail();
        promise.then(orderDetails=>{
            res.status(200).json(orderDetails);
        }).catch(error=>{
            res.status(500).send(error);
        })
     })

    .post((req,res)=>{
        if(!("id" in req.body &&"date" in req.body && "customerId" in req.body)){
            res.status(400).send("invalid Request Body");
            return;
        }

        const orderDetailBO=<OrderDetailBO>getBO(BOType.ORDER_DETAIL);
        const promise=orderDetailBO.saveOrderDetail(req.body);
        promise.then(status=>res.status(201).json(status)).
        catch(err=>res.status(500).send(err))
    })
    .head(cors({exposedHeaders:['x-count']}),(req,res)=>{
        const orderDetailBO=<OrderDetailBO>getBO(BOType.ORDER_DETAIL);
        const promise=orderDetailBO.getOrderDetailCount();
        promise.then(count=>{
            res.append("x-count",count+"");
            res.sendStatus(200)
        }).catch(err=>{
            res.sendStatus(500);
        })
    })


orderDetailDispatcher.route("/:id")

    .get((req,res)=>{
        const orderDetailBO=<OrderDetailBO>getBO(BOType.ORDER_DETAIL);
        const promise=orderDetailBO.findOrderDetail(req.params.id);
        promise.then(order=>{
            if(order.length>0){
                res.status(200).send(order);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            res.status(500).send(err);
        })
    })

    .put((req,res)=>{
        if(!("id" in req.body &&"date" in req.body && "customerId" in req.body)){
            res.status(400).send("invalid Request Body");
            return;
        }

        if(req.body.id!==req.params.id){
            res.status(400).send("Mismatched Customer ID");
            return;
        }

        const orderDetailBO=<OrderDetailBO>getBO(BOType.ORDER_DETAIL);
        const promise=orderDetailBO.updateOrderDetail(req.body);
        promise.then(status=>{

            if(status){

                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            res.status(500).send(err);
        })
    })

    .delete((req,res)=>{
        const orderDetailBO=<OrderDetailBO>getBO(BOType.ORDER_DETAIL);
        const promise=orderDetailBO.deleteOrderDetail(req.params.id);
        promise.then(status=>{

            if(status){

                res.status(200).send(true);
            }else{
                res.sendStatus(404);
            }
        }).catch(err=>{
            res.status(500).send(err);
        })
    })
export default orderDetailDispatcher ;